import { NextResponse } from 'next/server';
import { countryToCurrency, defaultCurrency } from '@/lib/pricing-data';

export const dynamic = 'force-dynamic';

function isPrivateIp(ip) {
  if (!ip) return true;
  const clean = ip.replace(/^::ffff:/, '').trim();
  return (
    clean === '127.0.0.1' ||
    clean === '::1' ||
    clean === 'localhost' ||
    clean.startsWith('10.') ||
    clean.startsWith('192.168.') ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(clean)
  );
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const forcedCountry = (searchParams.get('country') || '').trim().toUpperCase();

    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : (realIp || '127.0.0.1');

    // Check CDN / reverse proxy country headers first
    let country =
      forcedCountry ||
      (
        request.headers.get('x-vercel-ip-country') ||
        request.headers.get('cf-ipcountry') ||
        request.headers.get('cloudfront-viewer-country') ||
        request.headers.get('x-country-code') ||
        request.headers.get('x-country') ||
        request.headers.get('fly-client-country') ||
        ''
      )
        .trim()
        .toUpperCase();

    if (country === 'XX' || country === 'T1') {
      country = '';
    }

    // Fallback: public IP lookup when proxy headers are unavailable
    if (!country && !isPrivateIp(clientIp)) {
      try {
        const geoRes = await fetch(`https://ipwho.is/${encodeURIComponent(clientIp)}`, {
          signal: AbortSignal.timeout(2500),
          cache: 'no-store',
        });
        if (geoRes.ok) {
          const data = await geoRes.json();
          if (data?.success && data.country_code) {
            country = String(data.country_code).trim().toUpperCase();
          }
        }
      } catch {
        // Fallback below
      }
    }

    const currency = country ? countryToCurrency(country) : defaultCurrency;

    return NextResponse.json(
      {
        success: true,
        country: country || 'Unknown',
        currency,
        clientIp,
      },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch {
    return NextResponse.json(
      { success: false, country: 'Unknown', currency: defaultCurrency },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }
}
