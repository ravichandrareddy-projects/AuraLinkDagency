'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

function getSessionId() {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem('al_analytics_session');
  if (!id) {
    id = 'sess_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36);
    localStorage.setItem('al_analytics_session', id);
  }
  return id;
}

function getDeviceInfo() {
  if (typeof window === 'undefined') return {};
  const ua = navigator.userAgent || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(ua);

  return {
    type: isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop',
    screen: `${window.screen?.width || 0}x${window.screen?.height || 0}`,
    language: navigator.language || 'en',
    platform: navigator.platform || 'Unknown',
  };
}

export default function VisitorTracker() {
  const pathname = usePathname();
  const sessionStartTime = useRef(Date.now());
  const pageStartTime = useRef(Date.now());

  // Record Pageview when path changes
  useEffect(() => {
    // Ignore admin dashboard views from polluting stats
    if (pathname.startsWith('/admin')) return;

    pageStartTime.current = Date.now();
    const sessionId = getSessionId();
    if (!sessionId) return;

    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        type: 'pageview',
        path: pathname,
        title: typeof document !== 'undefined' ? document.title : '',
        referrer: typeof document !== 'undefined' ? document.referrer : '',
        device: getDeviceInfo(),
      }),
    }).catch(() => {});
  }, [pathname]);

  // Keep heartbeat tracking duration
  useEffect(() => {
    if (pathname.startsWith('/admin')) return;

    const interval = setInterval(() => {
      const sessionId = getSessionId();
      if (!sessionId) return;

      const totalDurationSeconds = Math.round((Date.now() - sessionStartTime.current) / 1000);
      const pageDuration = Math.round((Date.now() - pageStartTime.current) / 1000);

      fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          type: 'heartbeat',
          path: pathname,
          durationSeconds: totalDurationSeconds,
          pageDuration,
        }),
      }).catch(() => {});
    }, 15000); // Heartbeat every 15 seconds

    return () => clearInterval(interval);
  }, [pathname]);

  // Listen to meaningful user interaction taps / clicks
  useEffect(() => {
    if (pathname.startsWith('/admin')) return;

    const handleDocumentClick = (e) => {
      const target = e.target.closest('button, a, input[type="submit"], [role="button"]');
      if (!target) return;

      const sessionId = getSessionId();
      if (!sessionId) return;

      const label =
        target.innerText?.trim()?.slice(0, 50) ||
        target.getAttribute('aria-label') ||
        target.getAttribute('title') ||
        target.getAttribute('href') ||
        'Interactive Button';

      fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          type: 'click',
          path: pathname,
          label: label.replace(/\s+/g, ' ').substring(0, 60),
          tag: target.tagName.toLowerCase(),
        }),
      }).catch(() => {});
    };

    document.addEventListener('click', handleDocumentClick, { passive: true });
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [pathname]);

  return null;
}
