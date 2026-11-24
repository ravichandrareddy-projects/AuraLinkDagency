import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

    const { name, phone, email, businessType, goal, budget, utmSource, utmCampaign } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and Phone/WhatsApp number are required.' }, { status: 400 });
    }

    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : (realIp || '127.0.0.1');

    const leadRecord = {
      id: 'lead_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6),
      name: name.trim(),
      phone: phone.trim(),
      email: (email || '').trim(),
      businessType: businessType || 'General Business',
      goal: goal || 'Grow Online Revenue & Automation',
      budget: budget || 'Standard Package',
      utmSource: utmSource || 'meta_instagram_ads',
      utmCampaign: utmCampaign || 'q1_growth',
      createdAt: new Date().toISOString(),
      ip: clientIp,
    };

    saveLead(leadRecord);

    // Pre-build WhatsApp quick connect link
    const waText = encodeURIComponent(
      `Hi AuraLink! I submitted my details on your Instagram ad page:\n• Name: ${leadRecord.name}\n• Business: ${leadRecord.businessType}\n• Goal: ${leadRecord.goal}\n• Phone: ${leadRecord.phone}\nI would like to schedule my free 15-min growth audit.`
    );
    const whatsappUrl = `https://wa.me/919440336396?text=${waText}`;

    return NextResponse.json({
      success: true,
      message: 'Lead received successfully. Our team will connect shortly.',
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
