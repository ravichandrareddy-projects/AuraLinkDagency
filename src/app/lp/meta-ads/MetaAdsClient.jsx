'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Bot,
  Globe,
  Clock,
  ShieldCheck,
  ChevronDown,
  Phone,
  BarChart3,
  Flame,
  AlertTriangle,
  Award,
  Send,
} from 'lucide-react';
import { useCurrency } from '@/lib/currency-context';
import StickyMobileCTA from '@/components/lp/StickyMobileCTA';

export default function MetaAdsClient() {
  const { currency, formatPrice, currencies } = useCurrency();

  // UTM tracking from URL
  const [utmParams, setUtmParams] = useState({
    source: 'instagram_ads',
    campaign: 'growth_meta',
  });

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: 'E-Commerce / Retail',
    goal: 'Double my online sales & leads',
    budget: 'Standard Growth Package',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState('');

  // Interactive ROI Calculator State
  const [monthlyAdSpend, setMonthlyAdSpend] = useState(25000); // INR base or normalized

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setUtmParams({
        source: params.get('utm_source') || 'instagram_ads',
        campaign: params.get('utm_campaign') || 'growth_meta',
      });
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          utmSource: utmParams.source,
          utmCampaign: utmParams.campaign,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setWhatsappRedirectUrl(data.whatsappUrl);
      } else {
        alert(data.error || 'Failed to submit form. Please WhatsApp us directly.');
      }
    } catch {
      alert('Network error. Please connect directly via WhatsApp at +91 9440336396.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pricing bundles normalized by currency
  const bundles = [
    {
      id: 'express-funnel',
      name: 'Express 48h Web Funnel',
      badge: 'Speed Guarantee',
      highlight: false,
      price: { INR: 8000, USD: 249, EUR: 229 },
      desc: 'High-converting 1-thumb mobile landing page designed specifically for Instagram ad traffic.',
      features: [
        'Guaranteed 48-Hour Live Deployment',
        'Sub-Second Next.js Load Speed',
        'Instant WhatsApp Click-to-Chat Button',
        'Meta Pixel & Conversion Tracking Setup',
        'Mobile-First 1-Thumb Scrolling UX',
        '1 Year Free High-Speed Hosting',
      ],
      ctaText: 'Claim 48h Funnel',
    },
    {
      id: 'full-dominance',
      name: 'All-In-One Growth Dominance',
      badge: 'Most Popular (85% Choose This)',
      highlight: true,
      price: { INR: 19999, USD: 649, EUR: 599 },
      desc: 'The complete acquisition engine: High-converting website + 24/7 AI WhatsApp Sales Agent.',
      features: [
        'Everything in Express Web Funnel',
        '24/7 Autonomous WhatsApp Sales Agent',
        'Auto-Qualify & Capture Inquiries at 2 AM',
        'Automated Product Catalog & Pricing Sharing',
        'Razorpay Payment Link Integration (UPI/Cards)',
        'Meta Pixel + CAPI Advanced Tracking',
        '30 Days Dedicated Maintenance & Support',
      ],
      ctaText: 'Deploy Full System',
    },
    {
      id: 'ai-whatsapp-bot',
      name: '24/7 AI WhatsApp Agent',
      badge: 'Automation Power',
      highlight: false,
      price: { INR: 14999, USD: 499, EUR: 449 },
      desc: 'Deploy an autonomous AI agent on your official WhatsApp Business number to close leads 24/7.',
      features: [
        'Official Meta WhatsApp Cloud API Setup',
        'Instant 0-Second Reply to Ad Leads',
        'Custom Knowledge Training on Your Business',
        'Automated Appointment & Call Scheduling',
        'Lead Data Synced to Google Sheets / CRM',
        'Handles 10,000+ Concurrent Conversations',
      ],
      ctaText: 'Get AI WhatsApp Agent',
    },
  ];

  const estimatedLeads = Math.round((monthlyAdSpend / 30) * 1.8);
  const estimatedRevenueLift = Math.round(monthlyAdSpend * 3.4);

  return (
    <div className="relative overflow-hidden pb-24 md:pb-16">
      {/* Background Neon Aura Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[800px] -right-40 w-[450px] h-[450px] bg-blue-500/15 blur-[150px] pointer-events-none" />

      {/* ─── 1. HERO SECTION (Ad Congruence & Hook) ─── */}
      <section className="relative pt-12 sm:pt-20 pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Urgency / Ad Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-cyan-500/15 border border-cyan-400/40 text-cyan-200 text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/10 mb-6"
          >
            <Flame size={16} className="text-amber-400 animate-bounce" />
            <span>Exclusive Instagram Growth Offer • 48h Express Delivery</span>
          </motion.div>

          {/* Main Direct Response Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.15] mb-6"
          >
            Turn Your Instagram Traffic Into{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Predictable Paying Clients
            </span>
          </motion.h1>

          {/* Subheadline addressing pain point */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Stop losing ad dollars to slow, clunky websites and missed manual DMs. AuraLink builds{' '}
            <strong className="text-white">sub-second conversion funnels</strong> &{' '}
            <strong className="text-white">24/7 AI WhatsApp Agents</strong> delivered in just 48 hours.
          </motion.p>

          {/* Dual Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto mb-10"
          >
            <a
              href="https://wa.me/919440336396?text=Hi%20AuraLink,%20I%20saw%20your%20Instagram%20ad!%20I'm%20ready%20to%20scale%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageSquare size={18} className="fill-slate-950" />
              <span>Chat Directly on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] text-white font-extrabold text-sm border border-white/20 hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles size={16} className="text-cyan-300" />
              <span>Claim Free Audit</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Social Proof Live Numbers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10"
          >
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-display font-black text-xl sm:text-2xl text-cyan-300">48 Hours</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Turnaround</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-display font-black text-xl sm:text-2xl text-purple-400">24/7</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">AI WhatsApp</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-display font-black text-xl sm:text-2xl text-emerald-400">+156%</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Avg Conversion Lift</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-display font-black text-xl sm:text-2xl text-amber-400">4.9 / 5.0</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Client Rating</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. THE PROBLEM VS. THE AURALINK SYSTEM ─── */}
      <section className="py-14 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase">
            Why 80% Of Instagram Ads Lose Money
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white mt-1">
            The Traditional Way vs. The AuraLink Engine
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The Old Broken Way */}
          <div className="p-6 sm:p-8 rounded-3xl bg-rose-950/20 border border-rose-500/30 shadow-xl relative">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase font-mono mb-4">
              <AlertTriangle size={16} />
              <span>The Broken Traditional Way</span>
            </div>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>3–6 second page load times cause 60%+ of mobile Instagram visitors to bounce before seeing your offer.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Prospects DM you at 10 PM. You reply the next morning. By then, they bought from your competitor.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Generic website design with 20 confusing menu links that distract visitors from taking action.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Agencies charging exorbitant retainers and taking 4–8 weeks to deliver a basic landing page.</span>
              </li>
            </ul>
          </div>

          {/* The AuraLink Autonomous Way */}
          <div className="p-6 sm:p-8 rounded-3xl bg-cyan-950/30 border border-cyan-400/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm uppercase font-mono mb-4">
              <CheckCircle2 size={16} className="text-cyan-400" />
              <span>The AuraLink Autonomous Engine</span>
            </div>
            <ul className="space-y-3.5 text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">✓</span>
                <span><strong className="text-white">Sub-second 0.8s Next.js load speed</strong> keeping 95%+ of mobile ad visitors on your page.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">✓</span>
                <span><strong className="text-white">24/7 AI WhatsApp Agent</strong> replies in 0 seconds, answers questions, and qualifies buyers while you sleep.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">✓</span>
                <span><strong className="text-white">High-converting 1-thumb layout</strong> with single-goal CTA and instant Razorpay UPI/Card checkout.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">✓</span>
                <span><strong className="text-white">Guaranteed 48-hour delivery</strong> backed by transparent fixed pricing.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 3. THREE CORE PACKAGES WITH DYNAMIC MULTI-CURRENCY ─── */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            Transparent Pricing • Zero Hidden Retainers
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-1">
            Choose Your Growth Blueprint
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Instant deployment. Billed transparently in your local currency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bundles.map((bundle) => {
            const isFav = bundle.highlight;
            const priceFormatted = formatPrice(bundle.price);

            return (
              <div
                key={bundle.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFav
                    ? 'bg-gradient-to-b from-cyan-950/60 via-slate-900/90 to-purple-950/40 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 scale-[1.03] z-10'
                    : 'bg-white/[0.03] border border-white/[0.1] hover:border-cyan-500/40'
                }`}
              >
                {isFav && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md">
                    {bundle.badge}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-cyan-300 font-bold uppercase">
                      {!isFav && bundle.badge}
                    </span>
                    <h3 className="font-display font-black text-xl text-white mt-1">
                      {bundle.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {bundle.desc}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 my-2 border-y border-white/[0.08]">
                    <span className="text-3xl font-display font-black text-white">
                      {priceFormatted}
                    </span>
                    <span className="text-xs text-slate-400 block mt-1">One-time setup • Full ownership</span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 my-6 text-xs sm:text-sm text-slate-300">
                    {bundle.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/919440336396?text=${encodeURIComponent(
                    `Hi AuraLink! I saw your Instagram ad and I want to deploy the ${bundle.name} for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all ${
                    isFav
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 active:scale-95'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 active:scale-95'
                  }`}
                >
                  <MessageSquare size={16} />
                  <span>{bundle.ctaText}</span>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 4. INTERACTIVE ROI ESTIMATOR ─── */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="p-8 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Live Impact Calculator
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
              Estimate Your Lead & Revenue Acceleration
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Slide your approximate monthly advertising budget to see projected returns with AuraLink:
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between text-sm font-bold text-white mb-2 font-mono">
                <span>Monthly Instagram / Meta Ad Spend:</span>
                <span className="text-cyan-300 text-lg">
                  {currency === 'INR' ? `₹${monthlyAdSpend.toLocaleString('en-IN')}` : `$${Math.round(monthlyAdSpend / 85).toLocaleString('en-US')}`}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="200000"
                step="5000"
                value={monthlyAdSpend}
                onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-center">
                <p className="text-xs text-cyan-200 font-mono uppercase">Projected Qualified Leads</p>
                <p className="text-3xl font-display font-black text-white mt-1">
                  ~{estimatedLeads} / mo
                </p>
                <p className="text-[11px] text-cyan-300/70 mt-1 font-mono">Auto-qualified via WhatsApp</p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-400/30 text-center">
                <p className="text-xs text-purple-200 font-mono uppercase">Projected Sales Lift</p>
                <p className="text-3xl font-display font-black text-white mt-1">
                  {currency === 'INR' ? `₹${estimatedRevenueLift.toLocaleString('en-IN')}` : `$${Math.round(estimatedRevenueLift / 85).toLocaleString('en-US')}`}
                </p>
                <p className="text-[11px] text-purple-300/70 mt-1 font-mono">Based on 3.4x average ROI uplift</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. FAST 20-SECOND LEAD CAPTURE FORM ─── */}
      <section id="lead-form" className="py-16 px-4 sm:px-6 max-w-xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-cyan-400/40 shadow-2xl shadow-cyan-500/15 backdrop-blur-2xl relative overflow-hidden">
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold mb-2">
              ⚡ 15-Minute Strategy Audit
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Claim Your Free Growth Blueprint
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Tell us about your business. We will send a custom audit & WhatsApp roadmap within 2 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-display font-black text-xl text-white">
                Application Received!
              </h4>
              <p className="text-xs text-slate-300 max-w-xs mx-auto">
                Thank you, {formData.name}! Our team is reviewing your details right now.
              </p>
              {whatsappRedirectUrl && (
                <a
                  href={whatsappRedirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/30 transition-all hover:scale-105"
                >
                  <MessageSquare size={16} />
                  <span>Connect Instantly on WhatsApp</span>
                </a>
              )}
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase font-mono">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase font-mono">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 9440336396"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase font-mono">
                  Business Industry / Model
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400"
                >
                  <option value="E-Commerce / Fashion / Retail">E-Commerce / Fashion / Retail</option>
                  <option value="Local Business / Clinic / Salon / Cafe">Local Business / Clinic / Salon / Cafe</option>
                  <option value="Real Estate / Coaching / Services">Real Estate / Coaching / Consulting</option>
                  <option value="SaaS / Software / Tech Startup">SaaS / Software / Tech Startup</option>
                  <option value="Other">Other Business</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase font-mono">
                  Primary Objective
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400"
                >
                  <option value="Double my online sales & leads">Double my online sales & leads</option>
                  <option value="Deploy 24/7 AI WhatsApp bot for customer replies">Deploy 24/7 AI WhatsApp bot for customer replies</option>
                  <option value="Launch a 48-hour high-converting website">Launch a 48-hour high-converting website</option>
                  <option value="Complete Growth Dominance System">Complete Growth Dominance System</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <span>Securing Audit...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Get Free 15-Min Strategy Audit</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center font-mono mt-2">
                🔒 100% Privacy Guaranteed. Zero spam. We reach out within 2 hours.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ─── 6. OBJECTION-BUSTING FAQ ─── */}
      <section className="py-12 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-display font-black text-2xl text-white">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <h4 className="font-bold text-white mb-2">Can this integrate with my existing Instagram ad campaigns?</h4>
            <p className="text-slate-400 leading-relaxed">
              Yes! You simply place your landing page URL into your Meta Ads Manager campaign. When users swipe up or tap &quot;Learn More&quot; on your Reel or Story, they land directly on this high-speed page with full Meta Pixel tracking enabled.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <h4 className="font-bold text-white mb-2">How does the 48-hour turnaround guarantee work?</h4>
            <p className="text-slate-400 leading-relaxed">
              Once you confirm your project and share your basic business details/assets, our engineering team deploys your production-ready funnel within 48 hours. If we fail to deliver on schedule, you receive an immediate 100% refund.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <h4 className="font-bold text-white mb-2">Can the AI WhatsApp agent answer specific questions about my products?</h4>
            <p className="text-slate-400 leading-relaxed">
              Yes! We train your agent on your exact pricing, FAQs, menu/catalog, and policies. It talks naturally to customers, answers queries in English/Hindi/Telugu/regional languages, and takes orders 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA Bar for Instagram app users */}
      <StickyMobileCTA />
    </div>
  );
}
