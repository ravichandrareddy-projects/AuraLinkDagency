import { NextResponse } from 'next/server';
import { getAllSessions, clearAllSessions } from '@/lib/analytics-store';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    const adminKey = process.env.ADMIN_ACCESS_KEY || 'auralink-admin-2026';

    if (key !== adminKey) {
      return NextResponse.json({ error: 'Unauthorized. Invalid admin key.' }, { status: 401 });
    }

    const sessions = getAllSessions();

    // Summary calculations
    const now = Date.now();
    // Active if seen in the last 2 minutes
    const activeVisitors = sessions.filter(
      (s) => now - new Date(s.lastSeen).getTime() < 2 * 60 * 1000
    ).length;

    const totalVisitors = sessions.length;

    let totalDurationAll = 0;
    const pageCounts = {};
    const countryCounts = {};
    const cityCounts = {};
    const deviceCounts = { desktop: 0, mobile: 0, tablet: 0 };

    sessions.forEach((s) => {
      totalDurationAll += s.totalDurationSeconds || 0;

      const country = s.geo?.country || 'Unknown';
      countryCounts[country] = (countryCounts[country] || 0) + 1;

      const city = s.geo?.city || 'Unknown';
      if (city !== 'Unknown') {
        const fullCity = `${city}, ${s.geo?.region || ''}`;
        cityCounts[fullCity] = (cityCounts[fullCity] || 0) + 1;
      }

      const devType = s.device?.type || 'desktop';
      deviceCounts[devType] = (deviceCounts[devType] || 0) + 1;

      (s.pageViews || []).forEach((pv) => {
        const p = pv.path || '/';
        pageCounts[p] = (pageCounts[p] || 0) + 1;
      });
    });

    const avgDuration = totalVisitors > 0 ? Math.round(totalDurationAll / totalVisitors) : 0;

    return NextResponse.json({
      success: true,
      stats: {
        totalVisitors,
        activeVisitors,
        avgDurationSeconds: avgDuration,
        topPages: Object.entries(pageCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 8),
        topCountries: Object.entries(countryCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 8),
        topCities: Object.entries(cityCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 8),
        deviceCounts,
      },
      sessions: sessions.slice(0, 100), // Return recent 100 sessions
    });
  } catch (err) {
    console.error('Error fetching analytics stats:', err);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    const adminKey = process.env.ADMIN_ACCESS_KEY || 'auralink-admin-2026';

    if (key !== adminKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    clearAllSessions();
    return NextResponse.json({ success: true, message: 'Analytics history reset.' });
  } catch (err) {
    console.error('Error resetting analytics:', err);
    return NextResponse.json({ error: 'Failed to reset' }, { status: 500 });
  }
}
