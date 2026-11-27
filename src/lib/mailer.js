import nodemailer from 'nodemailer';

export const AURALINK_CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || 'hello@auralinkdigitalagency.indevs.in';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildLeadEmailHtml(lead) {
  const rows = [
    ['Lead / Ticket ID', lead.id],
    ['Source Page', lead.utmSource || 'website'],
    ['Name', lead.name],
    ['Phone / WhatsApp', lead.phone || 'Not provided'],
    ['Client Email', lead.email || 'Not provided'],
    ['Company / Business', lead.company || lead.businessType || 'Not provided'],
    ['Project / Service', lead.projectType || lead.goal || 'Website / Digital Inquiry'],
    ['Budget', lead.budget || 'Not specified'],
    ['Area / Location', lead.area || 'Hyderabad / Global'],
    ['Message / Details', lead.message || '—'],
    ['Submitted At', lead.createdAt],
    ['IP Address', lead.ip || '127.0.0.1'],
  ];

  const tableRows = rows
    .map(
      ([label, val]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#334155;width:180px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;white-space:pre-wrap;">${escapeHtml(val)}</td>
        </tr>`
    )
    .join('');

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;background:#ffffff;">
      <div style="background:linear-gradient(135deg,#0f172a,#4c1d95);padding:20px 24px;color:#ffffff;">
        <div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#c4b5fd;font-weight:700;">AuraLink Digital Agency</div>
        <h2 style="margin:6px 0 0;font-size:20px;">New Website Enquiry (${escapeHtml(lead.id)})</h2>
      </div>
      <div style="padding:20px 24px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${tableRows}
        </table>
      </div>
    </div>
  `;
}

function buildLeadEmailText(lead) {
  return [
    `New AuraLink Digital Agency Enquiry (${lead.id})`,
    `Source: ${lead.utmSource || 'website'}`,
    `Name: ${lead.name}`,
    `Phone / WhatsApp: ${lead.phone || 'Not provided'}`,
    `Email: ${lead.email || 'Not provided'}`,
    `Company / Business: ${lead.company || lead.businessType || 'Not provided'}`,
    `Project / Goal: ${lead.projectType || lead.goal || 'Website / Digital Inquiry'}`,
    `Budget: ${lead.budget || 'Not specified'}`,
    `Area: ${lead.area || 'Hyderabad / Global'}`,
    `Message: ${lead.message || '—'}`,
    `Submitted At: ${lead.createdAt}`,
  ].join('\n');
}

/**
 * Send a captured lead/contact enquiry to hello@auralinkdigitalagency.indevs.in.
 * Supports RESEND_API_KEY or SMTP_* (Nodemailer) environment variables.
 */
export async function sendAuraLinkLeadEmail(lead) {
  const recipient = AURALINK_CONTACT_EMAIL;
  const subject = `New AuraLink Enquiry: ${lead.name}${lead.projectType || lead.businessType ? ` (${lead.projectType || lead.businessType})` : ''}`;
  const html = buildLeadEmailHtml(lead);
  const text = buildLeadEmailText(lead);
  const replyTo = lead.email && /^\S+@\S+\.\S+$/.test(lead.email) ? lead.email : undefined;

  if (process.env.RESEND_API_KEY) {
    try {
      const fromAddress =
        process.env.MAIL_FROM || `AuraLink Leads <onboarding@resend.dev>`;
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [recipient],
          reply_to: replyTo,
          subject,
          html,
          text,
        }),
      });
      if (res.ok) {
        return { sent: true, provider: 'resend', recipient };
      }
      const errBody = await res.text();
      console.error('[AuraLink Mailer] Resend error:', res.status, errBody);
      return { sent: false, provider: 'resend', recipient, error: errBody };
    } catch (err) {
      console.error('[AuraLink Mailer] Resend exception:', err);
      return { sent: false, provider: 'resend', recipient, error: err.message };
    }
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const smtpPort = Number(process.env.SMTP_PORT || 465);
      const secure =
        process.env.SMTP_SECURE !== undefined
          ? process.env.SMTP_SECURE === 'true'
          : smtpPort === 465;

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: process.env.MAIL_FROM || `"AuraLink Digital Agency" <${smtpUser}>`,
        to: recipient,
        replyTo,
        subject,
        text,
        html,
      });

      return { sent: true, provider: 'smtp', recipient };
    } catch (err) {
      console.error('[AuraLink Mailer] SMTP error:', err);
      return { sent: false, provider: 'smtp', recipient, error: err.message };
    }
  }

  return {
    sent: false,
    provider: 'none',
    recipient,
    error: 'Missing SMTP_* or RESEND_API_KEY environment variables.',
  };
}
