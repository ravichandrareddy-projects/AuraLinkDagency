'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Building2, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import OurClientsSection from '@/components/ui/OurClientsSection';
import GradientBackground from '@/components/effects/GradientBackground';
import Button from '@/components/ui/Button';

export default function ClientsClient() {
  return (
    <div className="relative min-h-screen pb-20">
      <GradientBackground />

      {/* Hero Header */}
      <section className="relative pt-32 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6">
            💼 Verified Client Partnerships
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-6">
            Empowering Modern Brands With <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Autonomous Systems & Websites
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Real founders, measurable sales uplifts, and operational freedom. See what AuraLink engineers have built for leading enterprises.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact">
              Deploy Your System <ArrowRight size={16} />
            </Button>
            <a
              href="https://wa.me/918309264018?text=Hi%20AuraLink,%20I'm%20interested%20in%20becoming%20a%20client!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white font-medium border border-white/[0.15] transition-all"
            >
              WhatsApp Us Instantly
            </a>
          </div>
        </div>
      </section>

      {/* Main Client Showcase */}
      <OurClientsSection />

      {/* Client Success Metrics Banner */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display font-black text-3xl sm:text-4xl text-cyan-400">98%</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Client Retention Rate</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl sm:text-4xl text-purple-400">48h</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Express Turnaround</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl sm:text-4xl text-emerald-400">3.2x</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Average Conversion Lift</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl sm:text-4xl text-amber-400">24/7</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Autonomous Uptime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
