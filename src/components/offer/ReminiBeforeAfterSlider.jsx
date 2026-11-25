'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  ArrowLeftRight,
  CheckCircle2,
  XCircle,
  Zap,
  MessageSquare,
  Phone,
  ArrowDown,
  ShoppingBag,
} from 'lucide-react';

const WHATSAPP_NUMBER = '918309264018';
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi AuraLink Digital Agency! I saw your Before vs After 2-Day transformation — I want a customized digital presence delivered in 2 days.'
)}`;

const FEATURE_BOXES = [
  {
    category: 'Brand Design',
    beforeTitle: 'Generic Look',
    beforeDesc: 'Link-in-bio or basic templates lower customer trust.',
    afterTitle: 'Customized & Best',
    afterDesc: 'Bespoke Glass UI that proves your brand authority.',
  },
  {
    category: 'Delivery Speed',
    beforeTitle: 'Weeks of Delay',
    beforeDesc: 'Endless follow-ups and slow agency timelines.',
    afterTitle: 'Delivered in 2 Days',
    afterDesc: '48-hour express delivery — approve sample first.',
  },
  {
    category: 'WhatsApp Leads',
    beforeTitle: 'Manual DM Chaos',
    beforeDesc: 'Replying "price please?" manually loses buyers.',
    afterTitle: '1-Tap WhatsApp',
    afterDesc: 'Instant prefilled enquiry & quick-order chat.',
  },
  {
    category: 'Payments & Margin',
    beforeTitle: 'No Direct Checkout',
    beforeDesc: 'Losing 20–30% commission to third-party apps.',
    afterTitle: 'UPI & Cards (0% Fee)',
    afterDesc: 'Direct checkout straight into your bank account.',
  },
  {
    category: 'Store Control',
    beforeTitle: 'No Stock Control',
    beforeDesc: 'Sold-out mixups and paying devs for tiny edits.',
    afterTitle: 'Admin + Smart Stock',
    afterDesc: 'Add/remove products & track stock count live.',
  },
  {
    category: 'Google & Speed',
    beforeTitle: '6.8s Slow & Hidden',
    beforeDesc: 'Invisible on Google & slow on mobile data.',
    afterTitle: 'Technical SEO (<1.5s)',
    afterDesc: 'Google + AI search ready on every 360px phone.',
  },
];

export default function ReminiBeforeAfterSlider() {
  const [splitPct, setSplitPct] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const stageRef = useRef(null);
  const touchOriginRef = useRef({ x: 0, y: 0, axis: null });

  // Remini-style continuous scan sweep until visitor hovers/touches the stage
  useEffect(() => {
    if (hasInteracted) return;
    let frameId;
    const start = performance.now();

    const animateScan = (now) => {
      const elapsed = (now - start) / 1000;
      const wave = 50 + Math.sin(elapsed * 1.45) * 28;
      setSplitPct(wave);
      frameId = requestAnimationFrame(animateScan);
    };

    frameId = requestAnimationFrame(animateScan);
    return () => cancelAnimationFrame(frameId);
  }, [hasInteracted]);

  const updateSplitFromClientX = useCallback((clientX) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplitPct(Math.max(3, Math.min(97, pct)));
  }, []);

  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse') {
      setHasInteracted(true);
      setIsDragging(true);
      updateSplitFromClientX(e.clientX);
      return;
    }
    // On touch/pen: record start position without blocking native vertical scroll
    touchOriginRef.current = { x: e.clientX, y: e.clientY, axis: null };
  };

  const handlePointerMove = (e) => {
    if (e.pointerType === 'mouse') {
      if (!hasInteracted) setHasInteracted(true);
      updateSplitFromClientX(e.clientX);
      return;
    }

    // Touch gesture axis detection so vertical page scrolling ALWAYS stays buttery smooth
    const origin = touchOriginRef.current;
    const dx = Math.abs(e.clientX - origin.x);
    const dy = Math.abs(e.clientY - origin.y);

    if (!origin.axis) {
      if (dy > 6 && dy > dx) {
        origin.axis = 'y';
        return;
      }
      if (dx > 8 && dx > dy) {
        origin.axis = 'x';
        setHasInteracted(true);
        setIsDragging(true);
      }
    }

    if (origin.axis === 'x') {
      updateSplitFromClientX(e.clientX);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    touchOriginRef.current = { x: 0, y: 0, axis: null };
  };

  return (
    <div
      data-no-growth-pop="true"
      className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[0_20px_56px_rgba(15,23,42,0.07),0_0_0_1px_rgba(148,163,184,0.18)] p-4 sm:p-8 lg:p-10"
    >
      {/* Section Header */}
      <div className="mb-5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-[#ffffff] text-[11px] font-black uppercase tracking-wider">
          <Zap size={11} className="text-amber-400" />
          Before vs After Scan • Move Mouse or Swipe Left ↔ Right
        </span>
        <h3 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 mt-2">
          See What Changes in 2 Days
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Every feature side-by-side in clean boxes — move your mouse across the card to scan Before vs After AuraLink.
        </p>
      </div>

      {/* ─── REMINI SPLIT-SCREEN BEFORE / AFTER BOX GRID ─── */}
      <div
        ref={stageRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        role="slider"
        aria-label="Before and After 2-Day Feature Comparison Slider"
        aria-valuemin={3}
        aria-valuemax={97}
        aria-valuenow={Math.round(splitPct)}
        tabIndex={0}
        className="relative w-full rounded-3xl overflow-hidden border-2 border-white shadow-[0_22px_60px_rgba(15,23,42,0.12)] select-none touch-pan-y cursor-ew-resize"
      >
        {/* ─── RIGHT / BASE LAYER: AFTER AURALINK (RELATIVE SO IT SETS EXACT CONTAINER HEIGHT) ─── */}
        <div className="w-full bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-3.5 sm:p-7 lg:p-9">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 mb-3.5 sm:mb-5 border-b border-emerald-200/80">
            <span className="text-[11px] sm:text-sm font-extrabold text-slate-800">
              AuraLink Custom Presence
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-600 text-[#ffffff] text-[9.5px] sm:text-xs font-black tracking-wider uppercase shadow-sm">
              <CheckCircle2 size={11} />
              AFTER • DELIVERED IN 2 DAYS
            </span>
          </div>

          {/* 6 Symmetrical Feature Boxes (Compact 2-Col Mobile / 3-Col Desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
            {FEATURE_BOXES.map((box) => (
              <div
                key={box.category}
                className="rounded-xl sm:rounded-2xl bg-white/95 border border-emerald-200 p-3 sm:p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-emerald-700 truncate">
                      {box.category}
                    </span>
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  </div>
                  <div className="font-sans font-extrabold text-xs sm:text-lg text-slate-950 mb-0.5 sm:mb-1 leading-snug">
                    {box.afterTitle}
                  </div>
                  <p className="text-[11px] sm:text-sm text-slate-700 leading-snug font-medium">
                    {box.afterDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── LEFT / CLIPPED OVERLAY LAYER: BEFORE AURALINK (EXACT SAME GRID GEOMETRY) ─── */}
        <div
          style={{ clipPath: `inset(0 ${100 - splitPct}% 0 0)` }}
          className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-rose-100/85 p-3.5 sm:p-7 lg:p-9"
        >
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 mb-3.5 sm:mb-5 border-b border-slate-300/80">
            <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-slate-800 text-[#ffffff] text-[9.5px] sm:text-xs font-black tracking-wider uppercase shadow-sm">
              <XCircle size={11} className="text-rose-400" />
              BEFORE AURALINK
            </span>
            <span className="text-[11px] sm:text-sm font-bold text-slate-500">
              Unoptimized Setup
            </span>
          </div>

          {/* Exact Matching 6 Symmetrical Feature Boxes */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 opacity-90 grayscale-[45%]">
            {FEATURE_BOXES.map((box) => (
              <div
                key={box.category}
                className="rounded-xl sm:rounded-2xl bg-white/75 border border-slate-300/90 p-3 sm:p-5 shadow-inner flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-rose-600 truncate">
                      {box.category}
                    </span>
                    <XCircle size={14} className="text-rose-500 shrink-0" />
                  </div>
                  <div className="font-sans font-extrabold text-xs sm:text-lg text-slate-700 mb-0.5 sm:mb-1 leading-snug">
                    {box.beforeTitle}
                  </div>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-snug font-medium">
                    {box.beforeDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── GLOWING REMINI VERTICAL SCANNER BEAM & HANDLE ─── */}
        <div
          style={{ left: `${splitPct}%` }}
          className="absolute inset-y-0 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center justify-center"
        >
          <div className="absolute inset-y-0 w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent blur-sm" />
          <div className="w-[3px] h-full bg-gradient-to-b from-emerald-400 via-white to-amber-400 shadow-[0_0_16px_rgba(16,185,129,0.95),0_0_32px_rgba(251,191,36,0.75)]" />
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-emerald-500 shadow-[0_8px_28px_rgba(15,23,42,0.28)] flex items-center justify-center transition-transform ${
              isDragging ? 'scale-110 ring-4 ring-emerald-400/40' : 'scale-100'
            }`}
          >
            <ArrowLeftRight size={18} className="text-emerald-700" />
          </div>
        </div>
      </div>

      {/* Unified Bottom Action Bar — All Required Buttons in 1 Place */}
      <div className="mt-5 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
          <ShoppingBag size={14} className="text-emerald-600 shrink-0" />
          <span>
            {hasInteracted
              ? 'Move mouse or swipe across the boxes to rescan Left ↔ Right'
              : 'Auto-scanning Before → After • Hover mouse or swipe anywhere to control'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-[#ffffff] text-xs sm:text-sm font-extrabold shadow-md shadow-emerald-600/20 min-h-[44px]"
          >
            <MessageSquare size={15} />
            <span>Get Free Sample on WhatsApp</span>
          </a>

          <a
            href="tel:+918309264018"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 text-xs sm:text-sm font-extrabold shadow-sm min-h-[44px]"
          >
            <Phone size={14} className="text-emerald-600" />
            <span>Call Now</span>
          </a>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-amber-50 border border-amber-300 hover:bg-amber-100 text-amber-950 text-xs sm:text-sm font-extrabold shadow-sm min-h-[44px]"
          >
            <span>Packages &amp; Pricing</span>
            <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
