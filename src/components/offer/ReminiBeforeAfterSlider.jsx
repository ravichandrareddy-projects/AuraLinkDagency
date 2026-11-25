'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  ArrowLeftRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Zap,
  MessageSquare,
  Phone,
  ShieldAlert,
  TrendingUp,
  ArrowDown,
  ShoppingBag,
} from 'lucide-react';

const WHATSAPP_NUMBER = '919440336396';
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi AuraLink Digital Agency! I saw your Before vs After 2-Day transformation — I want a customized digital presence delivered in 2 days.'
)}`;

const BEFORE_POINTS = [
  'Generic link-in-bio or cheap layout hurts customer trust',
  'Manual "Price please?" DMs & missed late-night orders',
  'No Owner Admin Panel or Smart Stock Count (sold-out mixups)',
  'Invisible on Google Search with slow 6.8s mobile loading',
];

const AFTER_POINTS = [
  'Customized Liquid Glass brand design proves your quality',
  '1-Tap WhatsApp Enquiry + instant UPI/Card Checkout (0% fee)',
  'Owner Admin Panel to add/remove products + Smart Stock Count',
  'Full Technical SEO, Google Maps & sub-1.5s mobile speed',
];

const BEFORE_CARDS = [
  { label: 'Load Speed', value: '6.8s Slow' },
  { label: 'Store Control', value: 'No Stock Count' },
  { label: 'Google Rank', value: 'Unindexed' },
];

const AFTER_CARDS = [
  { label: 'Delivery Time', value: '2 Days Express' },
  { label: 'Store Control', value: 'Smart Stock Admin' },
  { label: 'Conversion Lift', value: '3.4x Direct Leads' },
];

export default function ReminiBeforeAfterSlider() {
  const [splitPct, setSplitPct] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const stageRef = useRef(null);

  // Remini-style continuous scan sweep until visitor grabs or clicks the stage
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
    setSplitPct(Math.max(4, Math.min(96, pct)));
  }, []);

  const handlePointerDown = (e) => {
    setHasInteracted(true);
    setIsDragging(true);
    if (e.pointerType !== 'mouse') {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    }
    updateSplitFromClientX(e.clientX);
  };

  const handlePointerMove = (e) => {
    // On desktop mouse, moving anywhere over the card moves the scanner beam without holding/clicking!
    if (e.pointerType === 'mouse' || isDragging) {
      if (!hasInteracted) setHasInteracted(true);
      updateSplitFromClientX(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      data-no-growth-pop="true"
      className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[0_20px_56px_rgba(15,23,42,0.07),0_0_0_1px_rgba(148,163,184,0.18)] p-4 sm:p-8 lg:p-10"
    >
      {/* Section Header (No Tabs — Single Unified View) */}
      <div className="mb-5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-[#ffffff] text-[11px] font-black uppercase tracking-wider">
          <Zap size={11} className="text-amber-400" />
          Before vs After Scan • Drag Left ↔ Right
        </span>
        <h3 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 mt-2">
          See What Changes in 2 Days
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Everything you get in one customized build — drag the glowing vertical scanner left or right to compare Before vs After AuraLink.
        </p>
      </div>

      {/* ─── SINGLE REMINI-STYLE SPLIT-SCREEN BEFORE / AFTER SCANNER STAGE ─── */}
      <div
        ref={stageRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        role="slider"
        aria-label="Before and After 2-Day Comparison Slider"
        aria-valuemin={4}
        aria-valuemax={96}
        aria-valuenow={Math.round(splitPct)}
        tabIndex={0}
        className="relative w-full min-h-[430px] sm:min-h-[380px] lg:min-h-[390px] rounded-3xl overflow-hidden border-2 border-white shadow-[0_22px_60px_rgba(15,23,42,0.12)] select-none touch-none cursor-ew-resize"
      >
        {/* ─── RIGHT / BOTTOM LAYER: AFTER AURALINK (COMPLETE CUSTOMIZED EXPERIENCE) ─── */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-4 sm:p-8 lg:p-10 flex flex-col justify-between">
          {/* Mock Top Bar Preview + After Tag */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-emerald-200/70">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/95 border border-emerald-200 text-xs font-extrabold text-slate-900 shadow-sm">
              <Sparkles size={13} className="text-amber-600" />
              <span>Your Brand • Verified Official Storefront</span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-[#ffffff] text-[10px] sm:text-xs font-black tracking-wider uppercase shadow-sm ml-auto">
              <CheckCircle2 size={12} />
              AFTER AURALINK • DELIVERED IN 2 DAYS
            </span>
          </div>

          {/* Main After Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-3">
            <div className="lg:col-span-7 space-y-3">
              <h4 className="font-sans font-black text-xl sm:text-3xl text-slate-950 leading-tight">
                Customized Digital Presence, Admin Panel &amp; Direct Sales
              </h4>
              <ul className="space-y-2">
                {AFTER_POINTS.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-800"
                  >
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden sm:grid lg:col-span-5 grid-cols-1 gap-2.5">
              {AFTER_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl bg-white/95 border border-emerald-200 px-4 py-3 shadow-sm flex items-center justify-between gap-3"
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {card.label}
                    </div>
                    <div className="text-sm font-extrabold text-slate-950">{card.value}</div>
                  </div>
                  <TrendingUp size={16} className="text-emerald-600 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-bold text-emerald-800 pt-3 border-t border-emerald-200/70">
            <span>AuraLink Digital Agency • Customized &amp; Best</span>
            <span className="hidden sm:inline">0% Middleman Fee • Google + AI SEO Ready</span>
          </div>
        </div>

        {/* ─── LEFT / TOP CLIPPED LAYER: BEFORE AURALINK ─── */}
        <div
          style={{ clipPath: `inset(0 ${100 - splitPct}% 0 0)` }}
          className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-rose-100/80 p-4 sm:p-8 lg:p-10 flex flex-col justify-between"
        >
          {/* Mock Top Bar Preview + Before Tag */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-300/70">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-[#ffffff] text-[10px] sm:text-xs font-black tracking-wider uppercase shadow-sm">
              <XCircle size={12} className="text-rose-400" />
              BEFORE AURALINK
            </span>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/60 border border-slate-300 text-xs font-bold text-slate-600">
              <ShieldAlert size={13} className="text-rose-500" />
              <span>Generic / Unoptimized Link</span>
            </div>
          </div>

          {/* Main Before Grid (Aligned Geometry) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-3 opacity-85 grayscale-[45%]">
            <div className="lg:col-span-7 space-y-3">
              <h4 className="font-sans font-black text-xl sm:text-3xl text-slate-700 leading-tight">
                Slow, Unorganized Setup Losing Ready Buyers
              </h4>
              <ul className="space-y-2">
                {BEFORE_POINTS.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-600"
                  >
                    <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden sm:grid lg:col-span-5 grid-cols-1 gap-2.5">
              {BEFORE_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl bg-white/70 border border-slate-300/80 px-4 py-3 shadow-inner flex items-center justify-between gap-3"
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {card.label}
                    </div>
                    <div className="text-sm font-bold text-slate-600">{card.value}</div>
                  </div>
                  <XCircle size={16} className="text-rose-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 pt-3 border-t border-slate-300/70">
            <span>Cheap Look • Missed Enquiries</span>
            <span className="hidden sm:inline">Losing Ready-to-Buy Customers Daily</span>
          </div>
        </div>

        {/* ─── GLOWING REMINI VERTICAL SCANNER BEAM & DRAG HANDLE ─── */}
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
              ? 'Move mouse or swipe across the card to rescan Left ↔ Right'
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
            href="tel:+919440336396"
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
