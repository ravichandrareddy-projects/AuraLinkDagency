'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  Smartphone,
  Search,
  AlertCircle,
  ChevronDown,
  Globe,
  Sparkles,
  Award,
  Send,
  ShoppingBag,
  PackageCheck,
  BarChart3,
  Layers,
  Zap,
  Tag,
} from 'lucide-react';
import CurrencySelector from '@/components/ui/CurrencySelector';
import { useCurrency } from '@/lib/currency-context';
import { formatCurrencyAmount } from '@/lib/pricing-data';
import ClickGrowthPop from '@/components/offer/ClickGrowthPop';
import ClientDeliveryAndResultsSwiper from '@/components/offer/ClientDeliveryAndResultsSwiper';
import SwipeStickTrack from '@/components/offer/SwipeStickTrack';

const WHATSAPP_NUMBER = '918309264018';
const HERO_WA_TEXT = encodeURIComponent(
  'Hi AuraLink Digital Agency! Your Year-End Sale offer is live — I want a customized website delivered in 2 days for my business. Please share a free sample.'
);
const HERO_WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${HERO_WA_TEXT}`;

const PROBLEMS = [
  {
    icon: Search,
    title: 'Buyers search Google before calling',
    desc: 'Every day, customers search online for services and products near them. Without a fast, customized website, ready buyers click your competitor.',
  },
  {
    icon: AlertCircle,
    title: 'Cheap-looking sites hurt brand trust',
    desc: 'Your website proves your brand. A generic or social-only link hides your rates, catalog, stock, timings, and direct checkout flow.',
  },
  {
    icon: Smartphone,
    title: 'Slow websites kill mobile conversions',
    desc: 'Over 85% of ad clicks happen on mobile phones. You need an instant-loading 360px mobile-first website with 1-tap WhatsApp leads.',
  },
];

const GOLDEN_PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    saleBadge: 'OFFER LIVE • 2-DAY DELIVERY',
    tagline: 'Customized fast build to start capturing direct WhatsApp customers.',
    originalPrices: { INR: 15000, USD: 349, EUR: 319 },
    salePrices: { INR: [8000, 10000], USD: [249, 299], EUR: [229, 279] },
    includes: [
      'Customized 360px mobile-first business website',
      'Sticky green WhatsApp enquiry button',
      'Service rates, timings, photo gallery & map',
      'Basic Google SEO + SSL security setup',
      'Delivered in just 2 Days (48 Hours)',
    ],
    featured: false,
  },
  {
    id: 'business',
    name: 'Business Growth',
    saleBadge: 'END OF YEAR WINTER SALE',
    tagline: 'Built to prove your brand authority on local & global search.',
    originalPrices: { INR: 27000, USD: 599, EUR: 549 },
    salePrices: { INR: [17000, 20000], USD: [399, 449], EUR: [369, 419] },
    includes: [
      'Customized multi-section conversion website',
      'Lead capture enquiry form + WhatsApp instant sync',
      'Full Technical SEO & Google Business Profile optimization',
      'Premium glass UI design tailored to your brand',
      'Priority 2-Day (48h) delivery + free sample first',
    ],
    featured: true,
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Store',
    saleBadge: 'END OF SEASON SALE',
    tagline: 'Complete online store with full owner control & smart inventory.',
    originalPrices: { INR: 35000, USD: 749, EUR: 699 },
    salePrices: { INR: [23000, 25000], USD: [499, 549], EUR: [459, 509] },
    includes: [
      'Owner Admin Panel — edit products & site anytime',
      'Add & remove products + pricing in seconds',
      'Smart Stock Count tracking with live availability',
      'Payment Gateways (UPI, Cards, Razorpay) + WhatsApp Order',
      'Full Technical SEO, mobile speed & 2-day delivery',
    ],
    featured: false,
  },
];

const REAL_CAPABILITIES = [
  {
    icon: ShoppingBag,
    badge: 'E-Commerce Admin',
    title: 'Add, Edit & Remove Products Anytime',
    desc: 'Zero developer dependency. Manage product photos, prices, variants, and categories from your clean owner dashboard.',
  },
  {
    icon: PackageCheck,
    badge: 'Smart Stock Count',
    title: 'Automated Live Inventory Tracking',
    desc: 'Real-time smart stock count prevents overselling, highlights low-stock items automatically, and keeps orders organized.',
  },
  {
    icon: BarChart3,
    badge: 'SEO & Growth Built-In',
    title: 'Technical SEO + Direct WhatsApp Checkout',
    desc: 'Google schema markup, fast mobile loading, and 1-tap WhatsApp/UPI ordering designed to maximize every ad rupee.',
  },
];

const PROCESS_STEPS = [
  { num: '01', title: 'WhatsApp us', desc: 'Share your business name, services, or store goals in 30 seconds.' },
  { num: '02', title: 'See a free sample', desc: 'We prepare a customized design preview built for your brand first.' },
  { num: '03', title: 'Approve the look', desc: 'Confirm prices, text, and colors until you are 100% happy.' },
  { num: '04', title: 'Delivered in 2 days', desc: 'Your customized website or E-Commerce store is delivered in 48 hours.' },
];

const FAQS = [
  {
    q: 'Do you really deliver my customized website in 2 days?',
    a: 'Yes! The offer is live now — once you approve your custom preview and share your business text/photos, our engineering team delivers your mobile-first website in 2 days (48 hours).',
  },
  {
    q: 'How does the E-Commerce Admin Panel & Smart Stock Count work?',
    a: 'You get an easy-to-use Admin Panel where you can add new products, remove out-of-season items, update prices, and track live stock quantities with smart stock count indicators — right from your phone or laptop.',
  },
  {
    q: 'Who owns the website and domain name?',
    a: 'You retain 100% ownership of your domain, brand content, and store data. We never lock you into restrictive contracts.',
  },
  {
    q: 'Are End of Year Winter Sale & End of Season Sale prices fixed?',
    a: 'Yes! Starter (₹8,000–₹10,000), Business Growth (₹17,000–₹20,000), and E-Commerce Store (₹23,000–₹25,000) are locked seasonal sale rates with clear scope and zero hidden fees.',
  },
  {
    q: 'Do you support international currencies and clients outside India?',
    a: 'Yes! AuraLink Digital Agency serves businesses across India and worldwide, with automatic regional pricing in INR (₹), USD ($), and EUR (€), plus global payment gateways.',
  },
  {
    q: 'What if I already have an Instagram or Facebook page?',
    a: 'Your new website turns your social followers and ad clicks into paying buyers with structured pricing, Technical SEO for Google search, and instant WhatsApp checkout.',
  },
];

export default function OfferClient() {
  const { currency, setCurrency } = useCurrency();
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const [formState, setFormState] = useState({
    name: '',
    businessType: '',
    area: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [submitError, setSubmitError] = useState('');

  // Ensure Indian currency (INR) is the clean default on initial render,
  // while still honoring geo-auto-detection (USA->USD, UK/EU->EUR) and manual switcher clicks.
  useEffect(() => {
    setMounted(true);
    try {
      const manual = localStorage.getItem('auralink_currency_manual');
      const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
      const isIndiaTz = tz.includes('calcutta') || tz.includes('kolkata') || tz.includes('india');
      if (!manual && isIndiaTz && currency !== 'INR') {
        setCurrency('INR');
        // Clear manual flag set by setCurrency so future geo checks still work naturally
        localStorage.removeItem('auralink_currency_manual');
      }
    } catch {}
  }, [currency, setCurrency]);

  const activeCurrency = mounted ? currency : 'INR';
  const formatOfferPrice = (amountObj) => formatCurrencyAmount(amountObj, activeCurrency);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!formState.name.trim() || !formState.phone.trim()) {
      setSubmitError('Please enter your name and phone / WhatsApp number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          phone: formState.phone,
          businessType: formState.businessType || 'Business Website',
          area: formState.area || 'India / Global',
          goal: '2-Day Delivery & Year-End Sale Sample Request',
          utmSource: 'offer_ads_subdomain',
          utmCampaign: 'year_end_winter_sale',
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error || 'Could not send request. Please WhatsApp us directly.');
      } else {
        const waPrefill = encodeURIComponent(
          `Hi AuraLink Digital Agency! I am ${formState.name}. Business: ${
            formState.businessType || 'Business'
          } (${formState.area || 'Global'}). Please send my free customized sample for the 2-Day Delivery Offer. Phone: ${
            formState.phone
          }`
        );
        setSubmitResult({
          whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${waPrefill}`,
        });
        setFormState({ name: '', businessType: '', area: '', phone: '' });
      }
    } catch {
      setSubmitError('Network hiccup. Please tap the green WhatsApp button directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{ fontFamily: "'Lucida Sans Unicode', 'Lucida Grande', 'Inter', system-ui, sans-serif" }}
      className="min-h-screen bg-[#fafcff] text-slate-900 relative z-10 overflow-x-hidden selection:bg-amber-200 selection:text-slate-950"
    >
      {/* Slow-Moving Rainbow Smoke Keyframes */}
      <style jsx global>{`
        @keyframes rainbowSmokeDriftA {
          0% {
            transform: translate3d(-4%, -4%, 0) scale(1) rotate(0deg);
          }
          50% {
            transform: translate3d(8%, 6%, 0) scale(1.14) rotate(12deg);
          }
          100% {
            transform: translate3d(-2%, 10%, 0) scale(0.96) rotate(-8deg);
          }
        }
        @keyframes rainbowSmokeDriftB {
          0% {
            transform: translate3d(4%, -3%, 0) scale(1.05) rotate(0deg);
          }
          50% {
            transform: translate3d(-9%, 8%, 0) scale(0.95) rotate(-14deg);
          }
          100% {
            transform: translate3d(5%, -6%, 0) scale(1.12) rotate(10deg);
          }
        }
        @keyframes rainbowSmokeCenter {
          0% {
            transform: translate3d(-50%, -50%, 0) scale(0.95) rotate(0deg);
          }
          50% {
            transform: translate3d(-46%, -54%, 0) scale(1.15) rotate(18deg);
          }
          100% {
            transform: translate3d(-54%, -47%, 0) scale(1.02) rotate(-12deg);
          }
        }
        .smoke-drift-a {
          animation: rainbowSmokeDriftA 22s ease-in-out infinite alternate;
        }
        .smoke-drift-b {
          animation: rainbowSmokeDriftB 26s ease-in-out infinite alternate;
        }
        .smoke-drift-center {
          animation: rainbowSmokeCenter 24s ease-in-out infinite alternate;
        }
        @keyframes rainbowHighlightShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .rainbow-smoke-highlight {
          background: linear-gradient(
            115deg,
            rgba(244, 114, 182, 0.22),
            rgba(251, 191, 36, 0.28),
            rgba(52, 211, 153, 0.24),
            rgba(56, 189, 248, 0.24),
            rgba(168, 85, 247, 0.22),
            rgba(244, 114, 182, 0.22)
          );
          background-size: 240% 240%;
          animation: rainbowHighlightShift 12s ease infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Interactive Tap / Click "WOW" Floating Curved Glass Cards (Non-Button Only) */}
      <ClickGrowthPop />

      {/* ─── SLOW-MOVING RAINBOW SMOKE BACKGROUND (ALL CORNERS + CENTER) ─── */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Left Corner Smoke: Rose-Pink -> Warm Gold */}
        <div
          className="smoke-drift-a absolute -top-28 -left-24 w-[440px] h-[440px] sm:w-[560px] sm:h-[560px] rounded-full opacity-55 blur-[90px]"
          style={{
            background:
              'radial-gradient(circle at 35% 35%, rgba(244, 114, 182, 0.52), rgba(251, 191, 36, 0.36) 50%, transparent 75%)',
          }}
        />

        {/* Top-Right Corner Smoke: Sky-Cyan -> Violet */}
        <div
          className="smoke-drift-b absolute -top-24 -right-24 w-[460px] h-[460px] sm:w-[580px] sm:h-[580px] rounded-full opacity-55 blur-[95px]"
          style={{
            background:
              'radial-gradient(circle at 60% 35%, rgba(56, 189, 248, 0.52), rgba(168, 85, 247, 0.36) 55%, transparent 75%)',
          }}
        />

        {/* Center Rainbow Smoke Halo: Mint -> Gold -> Indigo-Rose */}
        <div
          className="smoke-drift-center absolute top-1/2 left-1/2 w-[520px] h-[520px] sm:w-[760px] sm:h-[620px] rounded-full opacity-50 blur-[105px]"
          style={{
            background:
              'conic-gradient(from 90deg at 50% 50%, rgba(52, 211, 153, 0.42), rgba(251, 191, 36, 0.44), rgba(244, 114, 182, 0.4), rgba(139, 92, 246, 0.38), rgba(56, 189, 248, 0.42), rgba(52, 211, 153, 0.42))',
          }}
        />

        {/* Bottom-Left Corner Smoke: Violet -> Aqua */}
        <div
          className="smoke-drift-b absolute -bottom-28 -left-24 w-[460px] h-[460px] sm:w-[560px] sm:h-[560px] rounded-full opacity-55 blur-[95px]"
          style={{
            background:
              'radial-gradient(circle at 40% 60%, rgba(167, 139, 250, 0.5), rgba(45, 212, 191, 0.38) 55%, transparent 75%)',
          }}
        />

        {/* Bottom-Right Corner Smoke: Amber-Gold -> Emerald */}
        <div
          className="smoke-drift-a absolute -bottom-28 -right-24 w-[460px] h-[460px] sm:w-[580px] sm:h-[580px] rounded-full opacity-55 blur-[95px]"
          style={{
            background:
              'radial-gradient(circle at 60% 60%, rgba(251, 191, 36, 0.5), rgba(16, 185, 129, 0.38) 55%, transparent 75%)',
          }}
        />

        {/* Subtle Architectural Grid Overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* ─── 1. STICKY GLASS TOP BAR ─── */}
      <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_4px_24px_rgba(15,23,42,0.05)]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-2">
          {/* Brand: AuraLink Digital Agency */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Link href="/" className="flex items-center gap-2.5 shrink-0" title="AuraLink Digital Agency">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 p-1 shadow-sm">
                <Image src="/logo.png" alt="AuraLink Digital Agency" fill className="object-contain p-1" priority />
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-0.5 text-sm sm:text-base font-black tracking-wider uppercase">
                  <span className="text-slate-950">AURA</span>
                  <span className="text-emerald-700">LINK</span>
                </div>
                <span className="text-[8.5px] sm:text-[9px] font-bold tracking-[0.14em] text-amber-700 uppercase mt-0.5">
                  Digital Agency
                </span>
              </div>
            </Link>

            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50/90 border border-amber-300/80 shadow-sm text-[11px] font-extrabold text-amber-900 shrink-0">
              <Zap size={11} className="text-amber-600" />
              <span>Offer Live Now • Delivered in 2 Days</span>
            </span>
          </div>

          {/* Right Controls: Phone Tap + Currency Selector + Green WhatsApp CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <a
              href="tel:+918309264018"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl bg-white/85 border border-slate-200/90 text-slate-800 hover:bg-white text-xs font-bold shadow-sm transition-all min-h-[40px]"
              aria-label="Call +91 83092 64018"
            >
              <Phone size={14} className="text-emerald-600 shrink-0" />
              <span className="hidden md:inline">+91 83092 64018</span>
              <span className="md:hidden text-[11px]">Call</span>
            </a>

            <div className="hidden sm:block">
              <CurrencySelector compact light />
            </div>

            <a
              href={HERO_WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-[#ffffff] font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all active:scale-95 min-h-[40px]"
            >
              <MessageSquare size={15} className="shrink-0" />
              <span>WhatsApp us</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* ─── 2. HERO SECTION (FULL DESKTOP SPLIT + DEDICATED MOBILE LAYOUT) ─── */}
        <section className="pt-5 pb-8 sm:pt-10 sm:pb-12 px-3.5 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08),0_0_0_1px_rgba(255,255,255,0.8)_inset] p-4 sm:p-8 lg:p-12">
              <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
                {/* Left Column (Desktop 7 cols / Mobile full width) */}
                <div className="lg:col-span-7">
                  {/* Top Sale & Global Reach Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-[#ffffff] text-[10px] sm:text-[11px] font-black tracking-wider uppercase shadow-md shadow-amber-600/20">
                      <Tag size={11} />
                      <span>Offer Live Now • Delivered in 2 Days</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/90 border border-slate-200 text-[10px] sm:text-[11px] font-bold text-slate-700">
                        <Globe size={11} className="text-emerald-600" />
                        <span>India &amp; Global</span>
                      </span>
                      <div className="sm:hidden">
                        <CurrencySelector compact light />
                      </div>
                    </div>
                  </div>

                  {/* Rainbow Smoke Highlight Statement Banner */}
                  <div className="rainbow-smoke-highlight rounded-2xl border border-white/90 px-4 py-3 sm:px-5 sm:py-3.5 mb-5 shadow-[0_8px_28px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                    <p className="text-xs sm:text-base font-extrabold text-slate-900 leading-snug tracking-normal">
                      <Sparkles size={14} className="inline mr-1.5 text-amber-700 -mt-0.5" />
                      Don&apos;t make your website look cheap — make it <span className="underline decoration-emerald-600 decoration-2 underline-offset-4">customized and the best</span>.{' '}
                      <span className="text-emerald-800">Your website proves your brand.</span>
                    </p>
                  </div>

                  {/* Single H1 (Clean Lucida / Normal Typography + Rainbow Smoke Highlight) */}
                  <h1 className="font-bold text-[26px] sm:text-4xl lg:text-5xl xl:text-[52px] tracking-tight text-slate-900 leading-[1.15] lg:leading-[1.12] mb-4 sm:mb-5">
                    A customized digital presence for your business,{' '}
                    <span className="inline-block px-2.5 py-0.5 rounded-2xl rainbow-smoke-highlight border border-white/80 text-slate-950 shadow-sm">
                      delivered in 2 days.
                    </span>
                  </h1>

                  {/* Sub-headline */}
                  <p className="text-sm sm:text-lg lg:text-xl text-slate-700 font-medium leading-relaxed mb-6 sm:mb-7">
                    High-converting websites, E-Commerce stores with Admin Panel &amp; Smart Stock Count, full SEO, and direct WhatsApp leads.{' '}
                    <strong className="text-slate-950 font-bold">
                      See a free sample before you pay.
                    </strong>
                  </p>

                  {/* Single Primary Green Accent CTA + Pricing Jump */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 mb-6">
                    <a
                      href={HERO_WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-[#ffffff] font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-600/25 transition-all hover:-translate-y-0.5 active:scale-[0.98] min-h-[54px] w-full sm:w-auto text-center"
                    >
                      <MessageSquare size={20} />
                      <span>Get my free sample on WhatsApp</span>
                    </a>

                    <a
                      href="#pricing"
                      className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-gradient-to-r from-amber-50 to-white border border-amber-300 text-slate-900 hover:from-amber-100 font-extrabold text-sm sm:text-base shadow-sm transition-all min-h-[54px] w-full sm:w-auto"
                    >
                      <Sparkles size={16} className="text-amber-600" />
                      <span>Packages &amp; Pricing</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} className="text-emerald-600" />
                      Reply within 2 hours • Direct AuraLink Digital Agency Builders
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-amber-800 font-bold">
                      <Sparkles size={13} className="text-amber-600" />
                      Tap anywhere on open space for growth highlights
                    </span>
                  </div>
                </div>

                {/* Desktop Right Executive Authority Panel (Desktop Only, keeps Mobile Clean) */}
                <div className="hidden lg:block lg:col-span-5">
                  <div className="rounded-3xl bg-gradient-to-br from-white/90 via-amber-50/60 to-emerald-50/60 border border-white shadow-[0_18px_46px_rgba(15,23,42,0.08)] p-6 space-y-5">
                    <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
                      <div className="flex items-center gap-3">
                        <div className="relative w-11 h-11 rounded-2xl bg-slate-900 p-1.5 shadow-sm shrink-0">
                          <Image src="/logo.png" alt="AuraLink Brand" fill className="object-contain p-1.5" />
                        </div>
                        <div>
                          <div className="text-xs font-black uppercase tracking-wider text-emerald-700">
                            AuraLink Digital Agency
                          </div>
                          <div className="text-sm font-extrabold text-slate-900">
                            Brand-First Custom Architecture
                          </div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                        Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: '2 Days', label: 'Express 48-Hour Delivery' },
                        { value: '₹0 Risk', label: 'Free Sample Before Pay' },
                        { value: 'Smart Admin', label: 'Products & Stock Control' },
                        { value: 'Direct', label: '100% WhatsApp & UPI Leads' },
                      ].map((kpi) => (
                        <div
                          key={kpi.label}
                          className="rounded-2xl bg-white/95 border border-slate-200/75 p-4 shadow-sm"
                        >
                          <div className="text-xl font-black text-slate-950 tracking-tight">
                            {kpi.value}
                          </div>
                          <div className="text-xs font-semibold text-slate-600 mt-1">
                            {kpi.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl bg-slate-900 text-[#ffffff] p-4 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                          Year-End Winter Sale Active
                        </div>
                        <div className="text-sm font-extrabold mt-0.5">
                          Starting ₹8,000 • Delivered in 48h
                        </div>
                      </div>
                      <a
                        href="#pricing"
                        className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black shrink-0 transition-colors"
                      >
                        View Plans
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Compact KPI Strip (Hidden on Desktop lg+) */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-200/80 lg:hidden">
                {[
                  { value: '2 Days', label: 'Express 48-Hour Delivery' },
                  { value: '₹0 Risk', label: 'Free Sample Before Pay' },
                  { value: 'Smart Admin', label: 'Products & Stock Control' },
                  { value: 'Direct', label: '100% WhatsApp & UPI Leads' },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-sm p-3.5"
                  >
                    <div className="text-lg font-black text-slate-900 tracking-tight">
                      {kpi.value}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600 mt-0.5">
                      {kpi.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. CLIENT DELIVERY RATE & SWIPEABLE "SEE WHAT CHANGES IN 2 DAYS" RESULTS ─── */}
        <ClientDeliveryAndResultsSwiper />

        {/* ─── 4. WHY BUSINESSES SWITCH TO AURALINK ─── */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
                Why Businesses Switch to AuraLink
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 mt-1">
                Stop losing ready-to-buy customers every day.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PROBLEMS.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/75 backdrop-blur-xl border border-white shadow-[0_10px_30px_rgba(15,23,42,0.05),0_0_0_1px_rgba(148,163,184,0.16)] p-5 sm:p-7"
                  >
                    <div className="w-11 h-11 rounded-xl bg-slate-900 text-[#ffffff] flex items-center justify-center mb-4 shadow-sm">
                      <IconComp size={20} />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 5. PACKAGES & PRICING (RIGHT AFTER WHY BUSINESSES SWITCH) ─── */}
        <section id="pricing" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5 sm:mb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-widest">
                  <Sparkles size={12} className="text-amber-600" />
                  Limited-Time Year-End Deals
                </span>
                <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 mt-2">
                  Packages &amp; Pricing
                </h2>
                <p className="text-xs sm:text-base text-slate-600 mt-1">
                  Transparent seasonal pricing in Indian Rupees (auto-adapts globally). Customized &amp; delivered in 2 days with zero hidden surprises.
                </p>
              </div>
              <CurrencySelector light />
            </div>

            <SwipeStickTrack
              itemCount={GOLDEN_PRICING_PLANS.length}
              stickVariant="gold"
              mobileOnlyStick={true}
              stickLabel="Swipe Packages Left or Right"
              trackClassName="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 items-stretch overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 pb-3 lg:pb-0 cursor-grab active:cursor-grabbing lg:cursor-default"
            >
              {GOLDEN_PRICING_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-[1.5px] transition-all duration-300 hover:-translate-y-1 w-[84vw] max-w-[340px] sm:w-[360px] lg:w-auto lg:max-w-none shrink-0 snap-center ${
                    plan.featured
                      ? 'bg-gradient-to-br from-amber-400 via-yellow-200 to-amber-500 shadow-[0_24px_60px_rgba(217,119,6,0.22)]'
                      : 'bg-gradient-to-br from-amber-300/80 via-white/90 to-amber-400/75 shadow-[0_18px_45px_rgba(180,83,9,0.12)]'
                  }`}
                >
                  {/* Inner Liquid Glass Surface */}
                  <div className="h-full rounded-[22.5px] bg-gradient-to-br from-white/90 via-amber-50/75 to-white/85 backdrop-blur-2xl p-5 sm:p-7 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)]">
                    <div>
                      {/* Top Gold Sale Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                        <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-[#ffffff] text-[9.5px] sm:text-[10px] font-black tracking-wider uppercase shadow-sm">
                          <Tag size={10} />
                          {plan.saleBadge}
                        </span>
                        {plan.featured && (
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-[#ffffff] text-[10px] font-extrabold uppercase tracking-wider shrink-0">
                            Best Value
                          </span>
                        )}
                      </div>

                      <h3 className="font-sans font-black text-xl sm:text-2xl text-slate-950">
                        {plan.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1 mb-4 sm:mb-5">
                        {plan.tagline}
                      </p>

                      {/* Strike-Through Original + Sale Price */}
                      <div className="rounded-2xl bg-gradient-to-r from-amber-100/70 via-white/85 to-amber-50/80 border border-amber-300/70 p-3.5 sm:p-4 mb-4 sm:mb-5 shadow-inner">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                            Regular Price:
                          </span>
                          <span className="text-sm sm:text-base font-extrabold text-slate-400 line-through decoration-red-500 decoration-2">
                            {formatOfferPrice(plan.originalPrices)}
                          </span>
                        </div>
                        <div className="font-sans font-black text-2xl sm:text-3xl text-slate-950 tracking-tight">
                          {formatOfferPrice(plan.salePrices)}
                        </div>
                        <div className="text-[11px] font-bold text-emerald-700 mt-1">
                          Includes 2-Day Express Delivery • See Sample First
                        </div>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                        {plan.includes.map((inc) => (
                          <li
                            key={inc}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-emerald-600 shrink-0 mt-0.5"
                            />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hi AuraLink Digital Agency! I want the ${plan.name} (${plan.saleBadge}) package. Please share a free sample.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-[#ffffff] font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all min-h-[48px]"
                    >
                      <MessageSquare size={17} />
                      <span>Claim {plan.name} Offer</span>
                    </a>
                  </div>
                </div>
              ))}
            </SwipeStickTrack>
          </div>
        </section>

        {/* ─── 6. FULL ADMIN PANEL, SMART STOCK COUNT & TECHNICAL SEO (AFTER P&P) ─── */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-white/75 backdrop-blur-2xl border border-white shadow-[0_18px_48px_rgba(15,23,42,0.06),0_0_0_1px_rgba(148,163,184,0.18)] p-5 sm:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7 pb-5 border-b border-slate-200/80">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700">
                    Real Business Control • Built for Profit
                  </span>
                  <h2 className="font-sans font-black text-2xl sm:text-3xl text-slate-900 mt-1">
                    Full Admin Panel, Smart Stock Count &amp; Technical SEO
                  </h2>
                </div>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold self-start">
                  <Layers size={15} />
                  Owner Controlled System
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {REAL_CAPABILITIES.map((cap) => {
                  const IconComp = cap.icon;
                  return (
                    <div
                      key={cap.title}
                      className="rounded-2xl bg-white/85 border border-slate-200/80 p-5 sm:p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-emerald-600 text-[#ffffff] flex items-center justify-center shadow-sm">
                          <IconComp size={18} />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-black uppercase">
                          {cap.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. HOW IT WORKS (4 STEPS — 2-DAY DELIVERY) ─── */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
                Simple 4-Step Delivery
              </span>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                From WhatsApp message to custom delivery in 2 days.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_28px_rgba(15,23,42,0.05),0_0_0_1px_rgba(148,163,184,0.16)] p-5 sm:p-6"
                >
                  <div className="inline-flex items-center justify-center px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-mono text-xs font-black mb-3">
                    STEP {step.num}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 8. TRUST & GUARANTEE BLOCK ─── */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white shadow-[0_14px_38px_rgba(15,23,42,0.06),0_0_0_1px_rgba(148,163,184,0.18)] p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 p-2 shadow-md shrink-0 relative">
                    <Image src="/logo.png" alt="AuraLink Digital Agency" fill className="object-contain p-1.5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
                      AuraLink Digital Agency
                    </span>
                    <h2 className="font-sans font-black text-xl sm:text-2xl text-slate-900">
                      Built Direct by Engineers — No Middlemen
                    </h2>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether you run a local business or a nationwide D2C E-Commerce brand, you work directly with <strong>AuraLink Digital Agency</strong> — combining modern React/Next.js speed, clean Admin Dashboards, Smart Stock Control, and WhatsApp automation.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-amber-50/70 border border-emerald-200 p-5 sm:p-6 shrink-0 w-full md:w-96">
                <div className="flex items-center gap-3 mb-2">
                  <Award size={22} className="text-emerald-700 shrink-0" />
                  <span className="font-black text-sm sm:text-base text-emerald-950">
                    Zero-Risk Sample Guarantee
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  &ldquo;No payment until you see and approve your sample.&rdquo; Delivered in 2 days once approved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. FAQ ACCORDION ─── */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
                Quick Answers
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-3xl text-slate-900 mt-1">
                Common Questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_6px_22px_rgba(15,23,42,0.04),0_0_0_1px_rgba(148,163,184,0.16)] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left min-h-[54px]"
                    >
                      <span className="font-bold text-sm sm:text-base text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-emerald-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 10. FINAL READY-TO-BUY CTA + 4-FIELD SAMPLE FORM ─── */}
        <section id="sample-form" className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-white/85 backdrop-blur-2xl border border-white shadow-[0_24px_64px_rgba(15,23,42,0.08),0_0_0_1px_rgba(148,163,184,0.2)] p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Direct WhatsApp Pitch */}
                <div className="md:col-span-5 space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-black uppercase tracking-wider">
                    Offer Live Now • Delivered in 2 Days
                  </span>
                  <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                    Ready to get your customized business website delivered in 2 days?
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Message us on WhatsApp now for the fastest reply, or fill in 4 quick details to claim your free sample & Year-End Sale rate.
                  </p>
                  <a
                    href={HERO_WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-[#ffffff] font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all min-h-[50px]"
                  >
                    <MessageSquare size={18} />
                    <span>Get my free sample on WhatsApp</span>
                  </a>
                </div>

                {/* Right 4-Field Form */}
                <div className="md:col-span-7">
                  {submitResult ? (
                    <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#16A34A] text-[#ffffff] flex items-center justify-center mx-auto">
                        <CheckCircle2 size={24} />
                      </div>
                      <h3 className="font-sans font-black text-xl text-slate-900">
                        Sample Request Received!
                      </h3>
                      <p className="text-sm text-slate-700">
                        Our AuraLink Digital Agency team will prepare your free sample right away. Want instant priority?
                      </p>
                      <a
                        href={submitResult.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-[#ffffff] font-extrabold text-sm shadow-md min-h-[48px]"
                      >
                        <MessageSquare size={16} />
                        <span>Open Prefilled WhatsApp Chat</span>
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Suresh Reddy"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 min-h-[46px]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Business / Store Type *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="E-Commerce / Business / Services"
                            value={formState.businessType}
                            onChange={(e) =>
                              setFormState({ ...formState, businessType: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 min-h-[46px]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            City / Country *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="City, State or Country"
                            value={formState.area}
                            onChange={(e) => setFormState({ ...formState, area: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 min-h-[46px]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98XXXXXXXX"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 min-h-[46px]"
                          />
                        </div>
                      </div>

                      {submitError && (
                        <p className="text-xs font-semibold text-red-600">{submitError}</p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-60 text-[#ffffff] font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all min-h-[50px]"
                      >
                        <Send size={16} />
                        <span>{isSubmitting ? 'Sending request...' : 'Send me a sample'}</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── DEDICATED MINIMAL FOOTER ─── */}
      <footer className="relative z-10 border-t border-slate-200 bg-white/80 backdrop-blur-xl pt-8 pb-24 sm:py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-600">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="font-bold text-slate-800">
            AuraLink Digital Agency • Hyderabad, Telangana, India • Express 2-Day Delivery
          </div>
          <div>
            Email:{' '}
            <a
              href="mailto:hello@auralinkdigitalagency.indevs.in"
              className="font-semibold text-emerald-700 hover:underline"
            >
              hello@auralinkdigitalagency.indevs.in
            </a>{' '}
            • Phone / WhatsApp:{' '}
            <a href="tel:+918309264018" className="font-semibold text-emerald-700 hover:underline">
              +91 83092 64018
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 pt-1">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-900">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-slate-900">
              Refund Policy
            </Link>
            <span>•</span>
            <Link href="/" className="hover:text-slate-900">
              Main Agency Site
            </Link>
          </div>
        </div>
      </footer>

      {/* ─── MOBILE STICKY BOTTOM CONVERSION BAR ─── */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur-2xl border-t border-slate-200/90 px-3 py-2.5 shadow-[0_-8px_28px_rgba(15,23,42,0.08)]">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <a
            href="tel:+918309264018"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-extrabold text-xs min-h-[46px] shrink-0"
          >
            <Phone size={15} className="text-emerald-600" />
            <span>Call</span>
          </a>
          <a
            href={HERO_WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-[#ffffff] font-extrabold text-sm shadow-md shadow-emerald-600/25 min-h-[46px]"
          >
            <MessageSquare size={16} />
            <span>Free Sample on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
