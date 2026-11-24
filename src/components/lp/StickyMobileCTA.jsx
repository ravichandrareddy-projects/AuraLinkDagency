'use client';

import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function StickyMobileCTA() {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 border-t border-cyan-500/30 p-2.5 backdrop-blur-2xl shadow-2xl flex items-center gap-2">
      <a
        href="https://wa.me/919440336396?text=Hi%20AuraLink,%20I%20saw%20your%20Instagram%20ad%20and%20want%20to%20grow%20my%20business!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
      >
        <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping mr-0.5" />
        <MessageSquare size={15} className="fill-slate-950" />
        <span>Chat on WhatsApp</span>
      </a>

      <button
        onClick={scrollToForm}
        className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all"
      >
        <Sparkles size={14} className="text-cyan-200" />
        <span>Claim Free Audit</span>
      </button>
    </div>
  );
}
