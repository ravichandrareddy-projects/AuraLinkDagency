'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import CurrencySelector from '@/components/ui/CurrencySelector';

export default function MetaAdsLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black">
      {/* Distraction-Free Sticky Ad Header */}
      <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-xl border-b border-white/10 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Emblem */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0">
              <Image
                src="/logo.png"
                alt="AuraLink"
                fill
                className="object-contain filter drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-0.5">
                <span className="aura-text-shine font-black text-lg sm:text-xl tracking-wider">AURA</span>
                <span className="link-text-shine font-black text-lg sm:text-xl tracking-wider">LINK</span>
              </div>
              <span className="text-[7.5px] sm:text-[9px] font-mono font-bold tracking-[0.16em] text-cyan-200 uppercase">
                GROWTH SYSTEMS
              </span>
            </div>
          </div>

          {/* Social Proof Trust Badge (Desktop) */}
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-200 text-xs font-mono font-semibold">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span>Guaranteed 48h Turnaround • 4.9★ Rated</span>
          </div>

          {/* Currency Switcher & Direct WhatsApp CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <CurrencySelector compact />

            <a
              href="https://wa.me/919440336396?text=Hi%20AuraLink,%20I%20saw%20your%20Instagram%20ad%20and%20want%20to%20scale%20my%20business!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare size={14} className="fill-slate-950 text-slate-950" />
              <span className="hidden sm:inline">WhatsApp Us</span>
              <span className="sm:hidden">Chat</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Dedicated Clean Footer (No Exit Leakage) */}
      <footer className="border-t border-white/10 bg-slate-950/90 py-10 px-4 sm:px-8 text-center text-xs text-slate-400">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs">
            <Link href="/privacy" target="_blank" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" target="_blank" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="/refund-policy" target="_blank" className="hover:text-cyan-300 transition-colors">Refund & Cancellation Policy</Link>
          </div>

          <p className="text-[11px] text-slate-400">
            © 2026 AuraLink Digital Agency. Delivering autonomous AI systems and high-converting business platforms. Andhra Pradesh, India.
          </p>

          <p className="text-[10px] text-slate-400 max-w-xl mx-auto leading-relaxed">
            Disclaimer: This site is not affiliated with or endorsed by Meta Platforms, Inc., Facebook, or Instagram. All product names, logos, and brands are property of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}
