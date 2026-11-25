'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Sparkles,
  Zap,
  Rocket,
  Crown,
  CheckCircle2,
  Tag,
  Award,
  ShoppingBag,
} from 'lucide-react';

const GROWTH_POP_MESSAGES = [
  { headline: 'WOW!', keyword: 'AuraLink is the Best', badge: 'Top Agency', icon: Award },
  { headline: 'CHEAP PRICES!', keyword: 'Best Value Guaranteed', badge: 'Year-End Sale', icon: Tag },
  { headline: 'THE BEST!', keyword: 'Unmatched Agency Quality', badge: '4.9★ Rated', icon: Crown },
  { headline: 'LIVE IN 2 DAYS!', keyword: '48-Hour Superfast Launch', badge: 'Express Build', icon: Zap },
  { headline: 'WOW!', keyword: 'Sales Increased', badge: '+140% Reach', icon: TrendingUp },
  { headline: 'WINTER SALE!', keyword: 'Huge Year-End Savings', badge: 'Save ₹12,000', icon: Tag },
  { headline: 'COOL!', keyword: 'Business Growth', badge: '24/7 Live', icon: Sparkles },
  { headline: 'SMART ADMIN!', keyword: 'Control Stock & Products', badge: 'E-Commerce', icon: ShoppingBag },
  { headline: 'MAXIMIZED!', keyword: 'Direct WhatsApp Leads', badge: 'Instant Chat', icon: Zap },
  { headline: 'PROFIT UP!', keyword: 'High-Converting Design', badge: 'Zero Fees', icon: TrendingUp },
  { headline: 'BOOM!', keyword: '#1 Google Visibility', badge: 'Technical SEO', icon: Crown },
  { headline: 'UPGRADED!', keyword: '3x More Enquiries', badge: 'High Trust', icon: Rocket },
  { headline: 'DOMINATE!', keyword: 'Zero Middlemen Fees', badge: '100% Yours', icon: CheckCircle2 },
  { headline: 'REVENUE UP!', keyword: 'More Orders Daily', badge: 'Mobile-First', icon: TrendingUp },
];

export default function ClickGrowthPop() {
  const [pops, setPops] = useState([]);
  const indexRef = useRef(0);
  const lastPopAtRef = useRef(0);

  useEffect(() => {
    const handlePageInteraction = (e) => {
      // Strictly ignore any clickable buttons, links, form controls, or interactive menus
      const interactiveEl = e.target?.closest?.(
        'button, a, [role="button"], input, textarea, select, option, label'
      );
      if (interactiveEl) return;

      // Light throttle so rapid tapping stays smooth at 60fps
      const now = Date.now();
      if (now - lastPopAtRef.current < 140) return;
      lastPopAtRef.current = now;

      const vw = typeof window !== 'undefined' ? window.innerWidth : 360;
      const vh = typeof window !== 'undefined' ? window.innerHeight : 720;

      // Clamp X and Y so the curved rectangle card never clips off 360px screens
      const rawX = e.clientX || vw / 2;
      const rawY = e.clientY || vh / 2;
      const cardHalfWidth = 120;
      const clampedX = Math.max(cardHalfWidth + 10, Math.min(vw - cardHalfWidth - 10, rawX));
      const clampedY = Math.max(76, Math.min(vh - 28, rawY));

      const msg = GROWTH_POP_MESSAGES[indexRef.current % GROWTH_POP_MESSAGES.length];
      indexRef.current += 1;

      const id = `pop_${now}_${Math.random().toString(36).slice(2, 6)}`;

      setPops((prev) => [...prev.slice(-4), { id, x: clampedX, y: clampedY, ...msg }]);

      setTimeout(() => {
        setPops((prev) => prev.filter((item) => item.id !== id));
      }, 1300);
    };

    document.addEventListener('click', handlePageInteraction, { passive: true });
    return () => document.removeEventListener('click', handlePageInteraction);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[80] overflow-hidden select-none"
    >
      <AnimatePresence>
        {pops.map((pop) => {
          const IconComponent = pop.icon;
          return (
            <div
              key={pop.id}
              style={{ left: pop.x, top: pop.y }}
              className="fixed -translate-x-1/2 -translate-y-full pointer-events-none"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.72, y: 8 }}
                animate={{ opacity: 1, scale: 1.03, y: -34 }}
                exit={{ opacity: 0, scale: 0.9, y: -64 }}
                transition={{ type: 'spring', stiffness: 420, damping: 24, mass: 0.7 }}
                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-gradient-to-br from-white/95 via-amber-50/90 to-white/95 backdrop-blur-xl border border-amber-400/70 shadow-[0_14px_34px_rgba(180,83,9,0.16),0_0_0_1px_rgba(255,255,255,0.95)_inset] min-w-[220px] max-w-[260px]"
              >
                <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-amber-500 via-yellow-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                  <IconComponent size={14} className="text-[#ffffff]" />
                </div>
                <div className="flex flex-col leading-tight min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-black tracking-wider text-emerald-700 uppercase">
                      {pop.headline}
                    </span>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-slate-900 text-[#ffffff] tracking-wide shrink-0">
                      {pop.badge}
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-slate-900 truncate mt-0.5">
                    {pop.keyword}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
