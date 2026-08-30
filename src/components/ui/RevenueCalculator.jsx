'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, AlertTriangle, Sparkles, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { useCurrency } from '@/lib/currency-context';

export default function RevenueCalculator() {
  const { currency } = useCurrency();

  // Inputs
  const [monthlyLeads, setMonthlyLeads] = useState(250);
  const [leadValue, setLeadValue] = useState(
    currency.code === 'INR' ? 50000 : currency.code === 'EUR' ? 600 : 700
  );
  const [lostPercentage, setLostPercentage] = useState(35); // 35% default lead loss

  // Calculate Revenue Loss & Gains
  const calculation = useMemo(() => {
    const totalPotentialRevenue = monthlyLeads * leadValue; // monthly
    const monthlyLostLeads = Math.round(monthlyLeads * (lostPercentage / 100));
    const monthlyRevenueLost = monthlyLostLeads * leadValue;
    const yearlyRevenueLost = monthlyRevenueLost * 12;

    // AI Recovery rate (AuraLink captures 85% of missed leads 24/7)
    const monthlyRecoveredRevenue = Math.round(monthlyRevenueLost * 0.85);
    const yearlyRecoveredRevenue = monthlyRecoveredRevenue * 12;

    return {
      monthlyLostLeads,
      monthlyRevenueLost,
      yearlyRevenueLost,
      monthlyRecoveredRevenue,
      yearlyRecoveredRevenue,
    };
  }, [monthlyLeads, leadValue, lostPercentage]);

  // Formatter helper for Crores / Lakhs in INR, Millions / K in USD & EUR
  const formatFormattedCurrency = (val) => {
    const sym = currency.symbol;

    if (currency.code === 'INR') {
      if (val >= 10000000) {
        return `${sym}${(val / 10000000).toFixed(2)} Cr`;
      }
      if (val >= 100000) {
        return `${sym}${(val / 100000).toFixed(2)} Lakhs`;
      }
      return `${sym}${val.toLocaleString('en-IN')}`;
    } else {
      if (val >= 1000000) {
        return `${sym}${(val / 1000000).toFixed(2)}M`;
      }
      if (val >= 1000) {
        return `${sym}${(val / 1000).toFixed(1)}K`;
      }
      return `${sym}${val.toLocaleString()}`;
    }
  };

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-3">
            <AlertTriangle size={14} /> Lead Loss & Revenue ROI Calculator
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">
            How Much Revenue Are You Losing To <br />
            <span className="bg-gradient-to-r from-rose-400 via-[hsl(270,95%,65%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent">
              Slow Response & Unanswered Leads?
            </span>
          </h2>
          <p className="text-[hsl(230,15%,65%)] text-base">
            68% of customers buy from the business that responds first. Calculate your hidden monthly lead loss and see how AuraLink 24/7 AI Agents recover lost revenue.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <GlassCard className="lg:col-span-6 p-6 sm:p-8 border border-white/[0.1] space-y-6" hover={false}>
            <h3 className="font-display font-bold text-lg text-white border-b border-white/[0.08] pb-3 flex items-center justify-between">
              <span>Adjust Your Metrics</span>
              <span className="text-xs text-[hsl(185,100%,55%)] font-mono font-semibold">Currency: {currency.code} ({currency.symbol})</span>
            </h3>

            {/* Slider 1: Monthly Inquiries */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-[hsl(230,15%,70%)]">Monthly Inbound Leads & Inquiries:</span>
                <span className="text-white font-bold text-sm">{monthlyLeads.toLocaleString()} Leads/mo</span>
              </div>
              <input
                type="range"
                min="20"
                max="3000"
                step="10"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(parseInt(e.target.value))}
                className="w-full h-2 bg-white/[0.08] rounded-lg appearance-none cursor-pointer accent-[hsl(270,95%,65%)]"
              />
            </div>

            {/* Slider 2: Average Deal Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-[hsl(230,15%,70%)]">Average Deal / Customer Value:</span>
                <span className="text-white font-bold text-sm">{currency.symbol}{leadValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={currency.code === 'INR' ? 5000 : 100}
                max={currency.code === 'INR' ? 500000 : 10000}
                step={currency.code === 'INR' ? 5000 : 100}
                value={leadValue}
                onChange={(e) => setLeadValue(parseInt(e.target.value))}
                className="w-full h-2 bg-white/[0.08] rounded-lg appearance-none cursor-pointer accent-[hsl(185,100%,55%)]"
              />
            </div>

            {/* Slider 3: Missed Lead Percentage */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-[hsl(230,15%,70%)]">Unanswered / Slow Response Leads (%):</span>
                <span className="text-rose-400 font-bold text-sm">{lostPercentage}% Missed</span>
              </div>
              <input
                type="range"
                min="10"
                max="75"
                step="5"
                value={lostPercentage}
                onChange={(e) => setLostPercentage(parseInt(e.target.value))}
                className="w-full h-2 bg-white/[0.08] rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <p className="text-[11px] text-[hsl(230,15%,55%)] italic">
                *Industry average: 30%–45% of web & social leads go cold due to response delays over 5 minutes.
              </p>
            </div>
          </GlassCard>

          {/* Results Summary Column */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Loss Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-950/40 via-rose-900/20 to-black/40 border border-rose-500/30 relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                  ⚠️ Estimated Revenue Bleed (Loss)
                </span>
                <span className="text-xs text-rose-300 font-mono">
                  {calculation.monthlyLostLeads} Leads Lost/mo
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <span className="text-xs text-[hsl(230,15%,65%)] block">Monthly Revenue Loss</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-rose-400">
                    {formatFormattedCurrency(calculation.monthlyRevenueLost)}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[hsl(230,15%,65%)] block">Yearly Revenue Loss</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-rose-300">
                    {formatFormattedCurrency(calculation.yearlyRevenueLost)}
                  </span>
                </div>
              </div>
            </div>

            {/* Recovered Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[hsl(270,95%,65%)]/20 via-[hsl(210,100%,60%)]/20 to-emerald-950/30 border border-emerald-500/40 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} /> AuraLink AI Recovery Potential
                </span>
                <span className="text-xs text-emerald-300 font-mono">85% Recovery Rate</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <span className="text-xs text-[hsl(230,15%,65%)] block">Recovered Monthly</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                    {formatFormattedCurrency(calculation.monthlyRecoveredRevenue)}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[hsl(230,15%,65%)] block">Recovered Yearly</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-300">
                    {formatFormattedCurrency(calculation.yearlyRecoveredRevenue)}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>24/7 AI Voice & WhatsApp Instant Response</span>
                </div>
                <Button variant="primary" size="sm" href="/pricing" className="shrink-0">
                  Deploy AI Agent Now <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
