'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  ArrowLeftRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Zap,
  MessageSquare,
  ShoppingBag,
  Search,
  ShieldAlert,
  TrendingUp,
  PackageCheck,
} from 'lucide-react';

const WHATSAPP_NUMBER = '919440336396';

const SCENARIOS = [
  {
    id: 'brand',
    label: 'Brand Look',
    beforeTag: 'BEFORE AURALINK',
    afterTag: 'AFTER AURALINK • 2 DAYS',
    beforeHeadline: 'Generic Link-in-Bio / Cheap Look',
    beforeMetrics: ['High Bounce Rate (74%)', 'Slow 6.8s Load Time', 'Low Customer Trust'],
    beforeItems: [
      'Cluttered random text & blurry screenshots',
      'No custom brand identity or structure',
      'Visitors leave in 5 seconds for competitors',
    ],
    afterHeadline: 'Customized Premium Brand Storefront',
    afterMetrics: ['3.4x Higher Trust', 'Sub-1.5s Mobile Speed', '100% Brand Identity'],
    afterItems: [
      'Customized Liquid Glass UI built for your brand',
      'Clear services, rates, gallery & verified badge',
      'Proves your business quality from the first second',
    ],
    icon: Sparkles,
  },
  {
    id: 'leads',
    label: 'WhatsApp & UPI',
    beforeTag: 'BEFORE AURALINK',
    afterTag: 'AFTER AURALINK • 2 DAYS',
    beforeHeadline: 'Manual DM Chaos & Lost Orders',
    beforeMetrics: ['Missed Late-Night DMs', 'Zero Direct Checkout', 'Heavy Commission Cuts'],
    beforeItems: [
      'Replying manually to "Price please?" all day',
      'Losing impatient buyers waiting for rate photos',
      'Paying third-party apps 20–30% commission',
    ],
    afterHeadline: '1-Tap WhatsApp & UPI Checkout',
    afterMetrics: ['+180% Direct Enquiries', '0% Middleman Fee', '24/7 Instant Capture'],
    afterItems: [
      'Prefilled WhatsApp order button on every screen',
      'Instant UPI, Card & Razorpay payment acceptance',
      'Clean 4-field sample/enquiry form captures leads',
    ],
    icon: MessageSquare,
  },
  {
    id: 'admin',
    label: 'Smart Stock Admin',
    beforeTag: 'BEFORE AURALINK',
    afterTag: 'AFTER AURALINK • 2 DAYS',
    beforeHeadline: 'No Inventory Control or Owner Panel',
    beforeMetrics: ['Developer Dependency', 'Sold-Out Order Mixups', 'Manual Price Edits'],
    beforeItems: [
      'Paying extra just to add 1 new product photo',
      'Customers ordering out-of-stock items',
      'Zero centralized dashboard for stock counts',
    ],
    afterHeadline: 'Owner Admin + Smart Stock Count',
    afterMetrics: ['Add/Remove in 10s', 'Live Smart Stock Count', 'Auto Low-Stock Alerts'],
    afterItems: [
      'Owner Admin Panel to add/remove products easily',
      'Smart Stock Count automatically tracks quantities',
      'Edit prices, offers & photos anytime on mobile',
    ],
    icon: PackageCheck,
  },
  {
    id: 'seo',
    label: 'Google & SEO',
    beforeTag: 'BEFORE AURALINK',
    afterTag: 'AFTER AURALINK • 2 DAYS',
    beforeHeadline: 'Invisible on Google & AI Search',
    beforeMetrics: ['Unindexed Social Links', 'Zero Schema Markup', 'Zero Organic Traffic'],
    beforeItems: [
      'Instagram posts do not rank on Google Search',
      'No map directions, hours, or structured metadata',
      'Relying 100% on expensive cold ads forever',
    ],
    afterHeadline: 'Technical SEO & Google Authority',
    afterMetrics: ['Google + AI Ready', 'Structured JSON-LD', 'Local & Global Reach'],
    afterItems: [
      'Clean semantic structure & Technical SEO baked in',
      'Google Maps & verified contact trust signals',
      'Built to convert search + Meta/Instagram ad traffic',
    ],
    icon: Search,
  },
];

export default function ReminiBeforeAfterSlider() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [splitPct, setSplitPct] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const stageRef = useRef(null);

  const scenario = SCENARIOS[selectedIdx] || SCENARIOS[0];
  const ScenarioIcon = scenario.icon;

  // Remini-style initial scan animation sweep until user interacts
  useEffect(() => {
    if (hasInteracted) return;
    let frameId;
    const start = performance.now();

    const animateScan = (now) => {
      const elapsed = (now - start) / 1000;
      // Smooth continuous Remini-style horizontal scan oscillation between 22% and 78%
      const wave = 50 + Math.sin(elapsed * 1.45) * 28;
      setSplitPct(wave);
      frameId = requestAnimationFrame(animateScan);
    };

    frameId = requestAnimationFrame(animateScan);
    return () => cancelAnimationFrame(frameId);
  }, [hasInteracted, selectedIdx]);

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
    e.currentTarget.setPointerCapture?.(e.pointerId);
    updateSplitFromClientX(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updateSplitFromClientX(e.clientX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[0_20px_56px_rgba(15,23,42,0.07),0_0_0_1px_rgba(148,163,184,0.18)] p-4 sm:p-8 lg:p-10">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-[#ffffff] text-[11px] font-black uppercase tracking-wider">
            <Zap size={11} className="text-amber-400" />
            Before vs After Scan • Drag Left ↔ Right
          </span>
          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 mt-2">
            See What Changes in 2 Days
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Slide the vertical scanner beam left or right to inspect the Before vs After transformation.
          </p>
        </div>

        {/* Clean Topic Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {SCENARIOS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedIdx(idx);
                setHasInteracted(false);
              }}
              className={`px-3.5 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all ${
                selectedIdx === idx
                  ? 'bg-emerald-600 text-[#ffffff] shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ─── REMINI-STYLE SPLIT-SCREEN BEFORE / AFTER SCANNER STAGE ─── */}
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
        className="relative w-full min-h-[370px] sm:min-h-[340px] lg:min-h-[360px] rounded-3xl overflow-hidden border-2 border-white shadow-[0_22px_60px_rgba(15,23,42,0.12)] select-none touch-none cursor-ew-resize"
      >
        {/* ─── RIGHT / BOTTOM LAYER: AFTER AURALINK (CRYSTAL CLEAR, VIBRANT, CUSTOMIZED) ─── */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
          {/* Top Bar inside After Layer */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-[#ffffff] text-[10px] sm:text-xs font-black tracking-wider uppercase shadow-sm ml-auto">
              <CheckCircle2 size={12} />
              {scenario.afterTag}
            </span>
          </div>

          {/* Main After Content (Right Aligned / Full Crisp UI) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-3">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
                <ScenarioIcon size={15} />
                <span>Customized Digital Presence</span>
              </div>
              <h4 className="font-sans font-black text-xl sm:text-3xl text-slate-950 leading-tight">
                {scenario.afterHeadline}
              </h4>
              <ul className="space-y-2">
                {scenario.afterItems.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-800">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden sm:grid lg:col-span-5 grid-cols-1 gap-2.5">
              {scenario.afterMetrics.map((m) => (
                <div
                  key={m}
                  className="rounded-2xl bg-white/95 border border-emerald-200 px-4 py-3 shadow-sm flex items-center justify-between"
                >
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">{m}</span>
                  <TrendingUp size={15} className="text-emerald-600 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar inside After Layer */}
          <div className="flex items-center justify-between text-[11px] font-bold text-emerald-800 pt-3 border-t border-emerald-200/70">
            <span>AuraLink Digital Agency • Delivered in 2 Days</span>
            <span className="hidden sm:inline">High-Trust Conversion Architecture</span>
          </div>
        </div>

        {/* ─── LEFT / TOP CLIPPED LAYER: BEFORE AURALINK (MUTED / UNOPTIMIZED / CLUTTERED) ─── */}
        <div
          style={{ clipPath: `inset(0 ${100 - splitPct}% 0 0)` }}
          className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-rose-100/80 p-5 sm:p-8 lg:p-10 flex flex-col justify-between"
        >
          {/* Subtle desaturated / blurred overlay feel like Remini "Before" */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-[#ffffff] text-[10px] sm:text-xs font-black tracking-wider uppercase shadow-sm">
              <XCircle size={12} className="text-rose-400" />
              {scenario.beforeTag}
            </span>
          </div>

          {/* Main Before Content (Exact matching geometry so split line aligns seamlessly!) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-3 opacity-85 grayscale-[45%]">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-rose-700 text-xs font-extrabold uppercase tracking-wider">
                <ShieldAlert size={15} />
                <span>Unoptimized Setup</span>
              </div>
              <h4 className="font-sans font-black text-xl sm:text-3xl text-slate-700 leading-tight">
                {scenario.beforeHeadline}
              </h4>
              <ul className="space-y-2">
                {scenario.beforeItems.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-600">
                    <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden sm:grid lg:col-span-5 grid-cols-1 gap-2.5">
              {scenario.beforeMetrics.map((m) => (
                <div
                  key={m}
                  className="rounded-2xl bg-white/70 border border-slate-300/80 px-4 py-3 shadow-inner flex items-center justify-between"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-600">{m}</span>
                  <XCircle size={15} className="text-rose-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 pt-3 border-t border-slate-300/70">
            <span>Generic / Slow Digital Setup</span>
            <span className="hidden sm:inline">Losing Ready-to-Buy Customers</span>
          </div>
        </div>

        {/* ─── GLOWING REMINI VERTICAL SCANNER BEAM & DRAG HANDLE ─── */}
        <div
          style={{ left: `${splitPct}%` }}
          className="absolute inset-y-0 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center justify-center"
        >
          {/* Soft Scan Aura Trailing Behind Line */}
          <div className="absolute inset-y-0 w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent blur-sm" />

          {/* Crisp Vertical Light Line */}
          <div className="w-[3px] h-full bg-gradient-to-b from-emerald-400 via-white to-amber-400 shadow-[0_0_16px_rgba(16,185,129,0.95),0_0_32px_rgba(251,191,36,0.75)]" />

          {/* Center Tactile Circular Scanner Knob */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-emerald-500 shadow-[0_8px_28px_rgba(15,23,42,0.28)] flex items-center justify-center transition-transform ${
              isDragging ? 'scale-110 ring-4 ring-emerald-400/40' : 'scale-100'
            }`}
          >
            <ArrowLeftRight size={18} className="text-emerald-700" />
          </div>
        </div>
      </div>

      {/* Bottom Interactive Hint & CTA */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
          <ShoppingBag size={14} className="text-emerald-600 shrink-0" />
          <span>
            {hasInteracted
              ? 'Drag anywhere on the comparison card to rescan Left ↔ Right'
              : 'Auto-scanning Before → After • Touch or drag anywhere to control manually'}
          </span>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            `Hi AuraLink Digital Agency! I tested the "${scenario.label}" Before/After scanner — I want my customized digital presence delivered in 2 days.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-[#ffffff] text-xs sm:text-sm font-extrabold shadow-md shadow-emerald-600/20 self-start sm:self-auto"
        >
          <MessageSquare size={15} />
          <span>Upgrade My Business in 2 Days</span>
        </a>
      </div>
    </div>
  );
}
