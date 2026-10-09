import { NextResponse } from 'next/server';
import { saveSessionEvent } from '@/lib/analytics-store';

export async function POST(request) {
  try {
    const body = await request.json();

    // Determine client IP address
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    let clientIp = forwarded ? forwarded.split(',')[0].trim() : (realIp || '127.0.0.1');

    // Geo resolution
    let geo = {
      country: request.headers.get('x-vercel-ip-country') || 'Unknown',
      region: request.headers.get('x-vercel-ip-country-region') || 'Unknown',
      city: request.headers.get('x-vercel-ip-city') || 'Unknown',
    };

    // If running outside Vercel Edge or missing headers, lookup via free geo IP service for public IPs
    const isLocal = clientIp === '127.0.0.1' || clientIp === '::1' || clientIp.startsWith('192.168.') || clientIp.startsWith('10.');

    if (body.type === 'pageview' && (geo.city === 'Unknown' || !geo.city)) {
      if (!isLocal) {
        try {
          const geoRes = await fetch(
            `http://ip-api.com/json/${clientIp}?fields=status,country,regionName,city,zip,lat,lon,query`,
            { signal: AbortSignal.timeout(2000) }
          );
          if (geoRes.ok) {
            const geoData = await geoRes.json();
            if (geoData.status === 'success') {
              geo = {
                country: geoData.country || 'Unknown',
                region: geoData.regionName || 'Unknown',
                city: geoData.city || 'Unknown',
                lat: geoData.lat,
                lon: geoData.lon,
              };
            }
          }
        } catch {
          // Fallback gracefully on timeout
        }
      } else {
        // Friendly label for local development previews
        geo = {
          country: 'Local Development',
          region: 'Localhost',
          city: 'Development Machine',
        };
      }
    }

    const saved = saveSessionEvent({
      sessionId: body.sessionId,
      type: body.type,
      path: body.path,
      title: body.title,
      label: body.label,
      tag: body.tag,
      durationSeconds: body.durationSeconds,
      pageDuration: body.pageDuration,
      referrer: body.referrer,
      device: body.device,
      ip: clientIp,
      geo,
    });

    return NextResponse.json({ success: true, session: saved });
  } catch (err) {
    console.error('Error tracking event:', err);
    return NextResponse.json({ error: 'Failed to record event' }, { status: 500 });
  }
}
