'use client';

import { useState, useMemo } from 'react';
import {
  TrendingUp,
  Clock,
  ShieldCheck,
  ArrowRight,
  Quote,
  Award,
} from 'lucide-react';
import { ourClients, clientCategories } from '@/lib/clients-data';
import ReminiBeforeAfterSlider from '@/components/offer/ReminiBeforeAfterSlider';

const DELIVERY_STATS = [
  { value: '99.4%', label: 'On-Time Delivery Rate', sub: 'Across Active Builds', icon: ShieldCheck },
  { value: '2 Days', label: 'Express Delivery', sub: 'Offer Live Now', icon: Clock },
  { value: '3.4x', label: 'Avg Client Lead Lift', sub: 'Direct WhatsApp & Web', icon: TrendingUp },
  { value: '100%', label: 'Approved Before Pay', sub: 'Zero-Risk Sample Rule', icon: Award },
];

export default function ClientDeliveryAndResultsSwiper() {
  const [selectedCategory, setSelectedCategory] = useState('All Clients');

  const filteredClients = useMemo(() => {
    if (selectedCategory === 'All Clients') return ourClients;
    return ourClients.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

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

        {/* ─── PART B: REMINI-STYLE BEFORE / AFTER SCANNER SLIDER ─── */}
        <ReminiBeforeAfterSlider />
      </div>
    </section>
  );
}
