'use client';

import { useState, useMemo, useRef } from 'react';
import {
  TrendingUp,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Zap,
  Quote,
  Award,
  ChevronLeft,
  ChevronRight,
  XCircle,
} from 'lucide-react';
import { ourClients, clientCategories } from '@/lib/clients-data';

const WHATSAPP_NUMBER = '919440336396';

const DELIVERY_STATS = [
  { value: '99.4%', label: 'On-Time Delivery Rate', sub: 'Across Active Builds', icon: ShieldCheck },
  { value: '2 Days', label: 'Express Delivery', sub: 'Offer Live Now', icon: Clock },
  { value: '3.4x', label: 'Avg Client Lead Lift', sub: 'Direct WhatsApp & Web', icon: TrendingUp },
  { value: '100%', label: 'Approved Before Pay', sub: 'Zero-Risk Sample Rule', icon: Award },
];

const RESULTS_SLIDES = [
  {
    id: 'brand-authority',
    tag: '01 • Brand Authority',
    title: 'Look Customized & Best — Never Cheap',
    metric: '3x Higher Trust',
    beforeTitle: 'Before AuraLink',
    beforeText: 'Generic links or social pages make premium businesses look unorganized and cheap.',
    afterTitle: 'After AuraLink (2 Days)',
    afterText: 'Customized high-trust glass design that proves your brand quality the instant visitors land.',
  },
  {
    id: 'direct-leads',
    tag: '02 • Instant Enquiries',
    title: 'WhatsApp & UPI Direct Conversion',
    metric: '2.8x More Enquiries',
    beforeTitle: 'Before AuraLink',
    beforeText: 'Sending rates, photos & details manually in DMs loses impatient mobile buyers.',
    afterTitle: 'After AuraLink (2 Days)',
    afterText: 'Clear service rates, instant WhatsApp tap, and frictionless UPI/Card checkout convert buyers fast.',
  },
  {
    id: 'smart-admin',
    tag: '03 • Smart Store Admin',
    title: 'Product & Smart Stock Count Control',
    metric: '100% Owner Control',
    beforeTitle: 'Before AuraLink',
    beforeText: 'Waiting on developers for small edits and accidentally taking orders for out-of-stock items.',
    afterTitle: 'After AuraLink (2 Days)',
    afterText: 'Add/remove products anytime with real-time Smart Stock Count alerts from your phone.',
  },
  {
    id: 'seo-speed',
    tag: '04 • Google & Mobile Speed',
    title: 'Built for Google Search & 360px Phones',
    metric: '< 1.5s Load Speed',
    beforeTitle: 'Before AuraLink',
    beforeText: 'Invisible on Google searches and heavy pages that lag on mobile data.',
    afterTitle: 'After AuraLink (2 Days)',
    afterText: 'Full Technical SEO, schema markup, and blazing-fast mobile speed that wins ad clicks.',
  },
];

export default function ClientDeliveryAndResultsSwiper() {
  const [selectedCategory, setSelectedCategory] = useState('All Clients');
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const filteredClients = useMemo(() => {
    if (selectedCategory === 'All Clients') return ourClients;
    return ourClients.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  const scrollToSlide = (idx) => {
    const clamped = Math.max(0, Math.min(RESULTS_SLIDES.length - 1, idx));
    setActiveSlide(clamped);
    const track = swiperRef.current;
    if (!track || !track.children?.[clamped]) return;
    const card = track.children[clamped];
    track.scrollTo({ left: Math.max(0, card.offsetLeft - 8), behavior: 'smooth' });
  };

  const handleSwiperScroll = () => {
    const track = swiperRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(track.children).forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = idx;
      }
    });
    setActiveSlide(closest);
  };

  return (
    <section id="client-delivery" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* ─── PART A: OUR CLIENTS & DELIVERY RATE ─── */}
        <div className="rounded-3xl bg-white/75 backdrop-blur-2xl border border-white/95 shadow-[0_20px_56px_rgba(15,23,42,0.07),0_0_0_1px_rgba(148,163,184,0.18)] p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-[11px] font-black uppercase tracking-widest">
                <ShieldCheck size={12} className="text-emerald-700" />
                Verified Delivery Performance
              </span>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 mt-2">
                Our Clients &amp; Delivery Rate
              </h2>
              <p className="text-xs sm:text-base text-slate-600 mt-1 max-w-2xl">
                Delivered in 2 days, engineered cleanly, and built to turn mobile traffic into direct revenue.
              </p>
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-[#ffffff] text-xs font-extrabold self-start lg:self-auto transition-all"
            >
              <span>See Packages &amp; Pricing</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Delivery Rate KPI Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-7">
            {DELIVERY_STATS.map((stat) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/90 border border-slate-200/80 p-3.5 sm:p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-sans font-black text-xl sm:text-3xl text-emerald-700">
                      {stat.value}
                    </span>
                    <IconComp size={18} className="text-slate-700 shrink-0" />
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">{stat.sub}</div>
                </div>
              );
            })}
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-5">
            {clientCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all min-h-[38px] ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-[#ffffff] shadow-sm'
                    : 'bg-white/85 border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Client Impact Cards (Horizontal Swipe on Mobile / 3-Col Desktop Grid) */}
          <div className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar -mx-2 px-2 lg:mx-0 lg:px-0 pb-2 lg:pb-0">
            {filteredClients.slice(0, 6).map((client) => (
              <div
                key={client.id}
                className="w-[82vw] max-w-[320px] sm:w-[330px] lg:w-auto lg:max-w-none shrink-0 snap-center rounded-2xl bg-white/90 border border-slate-200/90 p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-xl bg-gradient-to-br ${client.color} text-[#ffffff] font-black text-xs flex items-center justify-center shrink-0 shadow-sm`}
                      >
                        {client.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="font-extrabold text-sm text-slate-900 truncate">
                          {client.name}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {client.industry}
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-black shrink-0">
                      On-Time
                    </span>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-3 mb-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Result Delivered
                    </div>
                    <div className="font-sans font-black text-lg text-emerald-700">
                      {client.metric}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-700 mt-0.5">
                      {client.project}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic mb-3">
                    <Quote size={12} className="inline mr-1 text-amber-600" />
                    {client.testimonial}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-700">
                  <span>{client.author}</span>
                  <span className="text-amber-700">{client.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── PART B: SMART SWIPEABLE "SEE WHAT CHANGES IN 2 DAYS" RESULTS SWIPER ─── */}
        <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[0_20px_56px_rgba(15,23,42,0.07),0_0_0_1px_rgba(148,163,184,0.18)] p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-[#ffffff] text-[11px] font-black uppercase tracking-wider">
                <Zap size={11} className="text-amber-400" />
                Swipe Left ↔ Right to Compare Results
              </span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 mt-2">
                See What Changes in 2 Days
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Interactive side-by-side transformation from generic online presence to customized brand growth.
              </p>
            </div>

            {/* Smart Swiper Controls (Desktop & Mobile) */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                type="button"
                onClick={() => scrollToSlide(activeSlide - 1)}
                disabled={activeSlide === 0}
                aria-label="Previous Result Slide"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 shadow-sm disabled:opacity-40 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs font-extrabold text-slate-700 px-2">
                {activeSlide + 1} / {RESULTS_SLIDES.length}
              </span>
              <button
                type="button"
                onClick={() => scrollToSlide(activeSlide + 1)}
                disabled={activeSlide === RESULTS_SLIDES.length - 1}
                aria-label="Next Result Slide"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 shadow-sm disabled:opacity-40 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Quick Topic Jump Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-5">
            {RESULTS_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => scrollToSlide(idx)}
                className={`px-3.5 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all ${
                  activeSlide === idx
                    ? 'bg-emerald-600 text-[#ffffff] shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                {slide.tag}
              </button>
            ))}
          </div>

          {/* Horizontal Interactive Swiper Track (All Screens — Smooth Swipe Left/Right) */}
          <div
            ref={swiperRef}
            onScroll={handleSwiperScroll}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 cursor-grab active:cursor-grabbing"
          >
            {RESULTS_SLIDES.map((slide) => (
              <div
                key={slide.id}
                className="w-[85vw] max-w-[340px] sm:w-[440px] lg:w-[560px] lg:max-w-none shrink-0 snap-center rounded-2xl bg-gradient-to-br from-white via-slate-50/70 to-emerald-50/50 border border-slate-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-700">
                      {slide.tag}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black">
                      {slide.metric}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-lg sm:text-xl text-slate-900 mb-4">
                    {slide.title}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="rounded-xl bg-rose-50/80 border border-rose-200/80 p-3.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-rose-700 mb-1.5">
                        <XCircle size={13} />
                        <span>{slide.beforeTitle}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {slide.beforeText}
                      </p>
                    </div>

                    <div className="rounded-xl bg-emerald-50/90 border border-emerald-200 p-3.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1.5">
                        <CheckCircle2 size={13} />
                        <span>{slide.afterTitle}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold">
                        {slide.afterText}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-200/70">
                  <span className="text-[11px] font-bold text-slate-500">
                    Delivered in 2 Days by AuraLink
                  </span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hi AuraLink Digital Agency! I liked "${slide.title}" — I want a customized website delivered in 2 days.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 hover:text-emerald-800"
                  >
                    <MessageSquare size={13} />
                    <span>Get Free Sample →</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Swiper Progress Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {RESULTS_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => scrollToSlide(idx)}
                aria-label={`Slide ${idx + 1}: ${slide.title}`}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === idx ? 'w-8 bg-emerald-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
