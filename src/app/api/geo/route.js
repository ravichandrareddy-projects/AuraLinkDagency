import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const EUROPEAN_COUNTRIES = new Set([
  'GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'IE', 'PT', 'GR', 'FI',
  'SE', 'NO', 'DK', 'PL', 'CZ', 'RO', 'HU', 'CH', 'LU', 'EE', 'LV', 'LT'
]);

export async function GET(request) {
  try {
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : (realIp || '127.0.0.1');

    // Check Cloudflare or Vercel Geo headers first
    let country = (
      request.headers.get('x-vercel-ip-country') ||
      request.headers.get('cf-ipcountry') ||
      ''
    ).toUpperCase();

    // If local or header not present, try ip-api on public IP
    const isLocal = clientIp === '127.0.0.1' || clientIp === '::1' || clientIp.startsWith('192.168.') || clientIp.startsWith('10.');
    if (!country && !isLocal) {
      try {
        const geoRes = await fetch(
          `http://ip-api.com/json/${clientIp}?fields=status,countryCode`,
          { signal: AbortSignal.timeout(2000) }
        );
        if (geoRes.ok) {
          const data = await geoRes.json();
          if (data.status === 'success' && data.countryCode) {
            country = data.countryCode.toUpperCase();
          }
        }
      } catch {
        // Fallback gracefully
      }
    }

    let currency = 'USD';
    if (country === 'IN') {
      currency = 'INR';
    } else if (EUROPEAN_COUNTRIES.has(country)) {
      currency = 'EUR';
    } else if (country) {
      currency = 'USD';
    }

    return NextResponse.json({
      success: true,
      country: country || 'Unknown',
      currency,
      clientIp,
    });
  } catch (err) {
    return NextResponse.json({ success: false, currency: 'USD' });
  }
}
