import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { sendAuraLinkLeadEmail, AURALINK_CONTACT_EMAIL } from '@/lib/mailer';

export const dynamic = 'force-dynamic';

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

function ensureLeadsFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(LEADS_FILE)) {
      fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('[Leads Storage] Error ensuring leads file:', err);
  }
}

function getLeads() {
  try {
    ensureLeadsFile();
    if (!fs.existsSync(LEADS_FILE)) return [];
    const content = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(content || '[]');
  } catch {
    return [];
  }
}

function saveLead(newLead) {
  try {
    ensureLeadsFile();
    const leads = getLeads();
    leads.unshift(newLead);
    // Keep up to 1000 leads
    if (leads.length > 1000) leads.length = 1000;
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('[Leads Storage] Error saving lead:', err);
    return false;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      company,
      businessType,
      area,
      goal,
      budget,
      projectType,
      message,
      utmSource,
      utmCampaign,
    } = body;

    const cleanName = (name || '').trim();
    const cleanPhone = (phone || '').trim();
    const cleanEmail = (email || '').trim();

    if (!cleanName || (!cleanPhone && !cleanEmail)) {
      return NextResponse.json(
        { error: 'Name and either Phone/WhatsApp number or Email are required.' },
        { status: 400 }
      );
    }

    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : (realIp || '127.0.0.1');

    const leadRecord = {
      id: 'lead_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6),
      name: cleanName,
      phone: cleanPhone,
      email: cleanEmail,
      company: (company || '').trim(),
      businessType: businessType || (company || '').trim() || 'General Business',
      area: (area || 'India / Global').trim(),
      goal: goal || 'Free Website Sample Request',
      projectType: (projectType || '').trim(),
      budget: budget || 'Standard Package',
      message: (message || '').trim(),
      utmSource: utmSource || 'offer_ads_subdomain',
      utmCampaign: utmCampaign || 'year_end_winter_sale',
      createdAt: new Date().toISOString(),
      ip: clientIp,
    };

    saveLead(leadRecord);

    const mailResult = await sendAuraLinkLeadEmail(leadRecord);

    // Pre-build WhatsApp quick connect link
    const waText = encodeURIComponent(
      `Hi AuraLink! I submitted an enquiry:\n• Name: ${leadRecord.name}\n• Business: ${leadRecord.businessType}\n• Area: ${leadRecord.area}\n• Phone: ${leadRecord.phone || leadRecord.email}\nPlease share my free sample / connect with me.`
    );
    const whatsappUrl = `https://wa.me/918309264018?text=${waText}`;

    return NextResponse.json({
      success: true,
      mailSent: mailResult.sent,
      recipientEmail: AURALINK_CONTACT_EMAIL,
      message: mailResult.sent
        ? `Lead received and sent to ${AURALINK_CONTACT_EMAIL}.`
        : 'Lead received and saved successfully. Our team will connect shortly.',
      leadId: leadRecord.id,
      whatsappUrl,
    });
  } catch (err) {
    console.error('[Lead API Error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    const adminKey = process.env.ADMIN_ACCESS_KEY || 'auralink-admin-2026';

    if (key !== adminKey) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const leads = getLeads();
    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch {
    return NextResponse.json({ error: 'Failed to retrieve leads' }, { status: 500 });
  }
}
