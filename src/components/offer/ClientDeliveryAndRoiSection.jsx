'use client';

import { useState, useMemo } from 'react';
import {
  TrendingUp,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Calculator,
  ArrowRight,
  MessageSquare,
  Zap,
  Quote,
  Award,
} from 'lucide-react';
import { ourClients, clientCategories } from '@/lib/clients-data';
import { formatCurrencyAmount } from '@/lib/pricing-data';

const WHATSAPP_NUMBER = '919440336396';

const DELIVERY_STATS = [
  { value: '99.4%', label: 'On-Time Delivery Rate', sub: 'Across Active Builds', icon: ShieldCheck },
  { value: '2 Days', label: 'Express Delivery', sub: 'Offer Live Now', icon: Clock },
  { value: '3.4x', label: 'Avg Client Lead Lift', sub: 'Direct WhatsApp & Web', icon: TrendingUp },
  { value: '100%', label: 'Approved Before Pay', sub: 'Zero-Risk Sample Rule', icon: Award },
];

const ROI_TIERS = [
  {
    id: 'starter',
    label: 'Starter Site',
    cost: { INR: 9000, USD: 269, EUR: 249 },
    conversionLift: 0.035,
  },
  {
    id: 'business',
    label: 'Business Growth',
    cost: { INR: 18500, USD: 419, EUR: 389 },
    conversionLift: 0.05,
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce Store',
    cost: { INR: 24000, USD: 525, EUR: 479 },
    conversionLift: 0.065,
  },
];

const ORDER_VALUE_PRESETS = {
  INR: [500, 1500, 3000, 7500],
  USD: [25, 65, 150, 350],
  EUR: [25, 60, 140, 320],
};

const COMPARE_MODES = {
  before: {
    label: 'Before AuraLink',
    badge: 'Lost Demand',
    points: [
      'Buyers search Google & Maps and pick competitors with a real website.',
      'Sending photos & rate lists manually in DMs wastes hours every week.',
      'No Smart Stock Count — customers ask about sold-out products.',
      'Zero Technical SEO — invisible on Google & AI search answers.',
    ],
  },
  after: {
    label: 'After AuraLink (2 Days)',
    badge: 'Maximized Growth',
    points: [
      'Instant 360px mobile site showcases rates, timings & trust in seconds.',
      '1-tap WhatsApp & UPI checkout converts ad clicks into real buyers.',
      'Owner Admin Panel lets you add/remove products & track stock live.',
      'Built-in Technical SEO puts your brand ahead of slow competitors.',
    ],
  },
};

export default function ClientDeliveryAndRoiSection({ activeCurrency = 'INR' }) {
  const [selectedCategory, setSelectedCategory] = useState('All Clients');
  const [selectedTierId, setSelectedTierId] = useState('business');
  const [monthlyVisitors, setMonthlyVisitors] = useState(1200);
  const [orderPresetIdx, setOrderPresetIdx] = useState(1);
  const [compareTab, setCompareTab] = useState('after');

  const filteredClients = useMemo(() => {
    if (selectedCategory === 'All Clients') return ourClients;
    return ourClients.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  const activeTier = ROI_TIERS.find((t) => t.id === selectedTierId) || ROI_TIERS[1];
  const presets = ORDER_VALUE_PRESETS[activeCurrency] || ORDER_VALUE_PRESETS.INR;
  const avgOrderValue = presets[orderPresetIdx] || presets[1];
  const tierCost = activeTier.cost[activeCurrency] || activeTier.cost.INR;

  // Conservative ROI projection
  const extraMonthlyOrders = Math.max(4, Math.round(monthlyVisitors * activeTier.conversionLift));
  const extraMonthlyRevenue = extraMonthlyOrders * avgOrderValue;
  const annualExtraRevenue = extraMonthlyRevenue * 12;
  const roiMultiple = Math.max(2, Math.round(annualExtraRevenue / tierCost));
  const paybackOrders = Math.max(1, Math.ceil(tierCost / avgOrderValue));

  const formatMoney = (num) => formatCurrencyAmount(num, activeCurrency);

  return (
    <section id="client-roi" className="py-8 sm:py-14 px-4 sm:px-6 space-y-10 sm:space-y-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* ─── PART A: OUR CLIENTS & DELIVERY RATE ─── */}
        <div className="rounded-3xl bg-white/75 backdrop-blur-2xl border border-white/95 shadow-[0_20px_56px_rgba(15,23,42,0.07),0_0_0_1px_rgba(148,163,184,0.18)] p-5 sm:p-8 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-[11px] font-black uppercase tracking-widest">
                <ShieldCheck size={12} className="text-emerald-700" />
                Verified Delivery Performance
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-4xl text-slate-900 mt-2">
                Our Clients & Delivery Rate
              </h2>
              <p className="text-xs sm:text-base text-slate-600 mt-1 max-w-2xl">
                Built fast, launched on time, and engineered to turn mobile traffic into direct revenue.
              </p>
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-[#ffffff] text-xs font-extrabold self-start lg:self-auto transition-all"
            >
              <span>Jump to Packages & Pricing</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Delivery Rate KPI Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-7">
            {DELIVERY_STATS.map((stat) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/90 border border-slate-200/80 p-3.5 sm:p-4 shadow-sm"
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
                className={`px-3.5 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all min-h-[38px] ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-[#ffffff] shadow-sm'
                    : 'bg-white/85 border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile Horizontal Scroll / Desktop Grid Client Impact Cards */}
          <div className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar -mx-2 px-2 lg:mx-0 lg:px-0 pb-2 lg:pb-0">
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

        {/* ─── PART B: INTERACTIVE ROI CALCULATOR & BEFORE/AFTER GROWTH MATTER ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Interactive ROI Simulator */}
          <div className="lg:col-span-7 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[0_20px_52px_rgba(15,23,42,0.07),0_0_0_1px_rgba(148,163,184,0.18)] p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-black uppercase tracking-wider">
                  <Calculator size={12} />
                  Interactive ROI Calculator
                </span>
                <span className="text-[11px] font-bold text-emerald-700">
                  Instant Estimate
                </span>
              </div>

              <h3 className="font-sans font-black text-xl sm:text-3xl text-slate-900 mb-1.5">
                Calculate Your Website Return on Investment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-5">
                Tap your package tier and average customer order value to see how fast your AuraLink build pays for itself.
              </p>

              {/* Step 1: Select Package Tier */}
              <div className="mb-5">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Website Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {ROI_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all ${
                        selectedTierId === tier.id
                          ? 'bg-slate-900 border-slate-900 text-[#ffffff] shadow-md'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-amber-400'
                      }`}
                    >
                      <div className="text-[11px] sm:text-xs font-extrabold truncate">
                        {tier.label}
                      </div>
                      <div
                        className={`text-[10px] sm:text-xs font-bold mt-0.5 ${
                          selectedTierId === tier.id ? 'text-amber-300' : 'text-emerald-700'
                        }`}
                      >
                        {formatMoney(tier.cost[activeCurrency] || tier.cost.INR)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Avg Order Value */}
              <div className="mb-5">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  2. Average Sale / Order Value
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {presets.map((val, idx) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setOrderPresetIdx(idx)}
                      className={`py-2.5 px-2 rounded-xl border text-xs font-extrabold transition-all ${
                        orderPresetIdx === idx
                          ? 'bg-emerald-600 border-emerald-600 text-[#ffffff] shadow-sm'
                          : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      {formatMoney(val)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Monthly Visitors / Ad Clicks Slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-extrabold text-slate-700 mb-2">
                  <span className="uppercase tracking-wider">3. Monthly Ad & Google Visitors</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-[#ffffff]">
                    {monthlyVisitors.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={5000}
                  step={100}
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  aria-label="Monthly Visitors"
                  className="w-full accent-emerald-600 cursor-pointer h-2 rounded-lg bg-slate-200"
                />
              </div>
            </div>

            {/* Calculated ROI Output Box */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-amber-50 border border-emerald-200/90 p-4 sm:p-5">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-500">
                    Extra Monthly Sales
                  </div>
                  <div className="font-sans font-black text-base sm:text-2xl text-emerald-700 mt-0.5">
                    {formatMoney(extraMonthlyRevenue)}
                  </div>
                </div>
                <div className="border-x border-slate-200 px-1">
                  <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-500">
                    Pays Back In
                  </div>
                  <div className="font-sans font-black text-base sm:text-2xl text-slate-900 mt-0.5">
                    {paybackOrders} Orders
                  </div>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-500">
                    Est. 1-Year ROI
                  </div>
                  <div className="font-sans font-black text-base sm:text-2xl text-amber-700 mt-0.5">
                    {roiMultiple}x Return
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Before vs After Growth Switcher */}
          <div className="lg:col-span-5 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[0_20px_52px_rgba(15,23,42,0.07),0_0_0_1px_rgba(148,163,184,0.18)] p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-[#ffffff] text-[11px] font-black uppercase tracking-wider mb-4">
                <Zap size={11} className="text-amber-400" />
                Interactive Growth Comparison
              </span>

              <h3 className="font-sans font-black text-xl sm:text-2xl text-slate-900 mb-4">
                See What Changes in 2 Days
              </h3>

              {/* Toggle Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-slate-100 border border-slate-200 mb-5">
                {(['before', 'after']).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setCompareTab(mode)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all ${
                      compareTab === mode
                        ? mode === 'after'
                          ? 'bg-emerald-600 text-[#ffffff] shadow-sm'
                          : 'bg-slate-900 text-[#ffffff] shadow-sm'
                        : 'text-slate-700 hover:bg-white/70'
                    }`}
                  >
                    {COMPARE_MODES[mode].label}
                  </button>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    compareTab === 'after'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {COMPARE_MODES[compareTab].badge}
                </div>

                {COMPARE_MODES[compareTab].points.map((pt) => (
                  <div
                    key={pt}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-sm"
                  >
                    {compareTab === 'after' ? (
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Sparkles size={16} className="text-rose-500 shrink-0 mt-0.5" />
                    )}
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hi AuraLink Digital Agency! I checked my ROI (${roiMultiple}x projected return on ${activeTier.label}). Please send my free website sample!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-[#ffffff] font-extrabold text-sm shadow-lg shadow-emerald-600/25 transition-all min-h-[48px]"
              >
                <MessageSquare size={16} />
                <span>Lock This ROI — Free Sample</span>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 font-bold text-xs transition-all"
              >
                <span>View Packages & Pricing Below</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
