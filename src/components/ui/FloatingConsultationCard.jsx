'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, X } from 'lucide-react';

export default function FloatingConsultationCard() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-slate-950 font-black shadow-2xl shadow-amber-500/40 hover:scale-110 transition-all duration-300 flex items-center gap-2 border border-amber-300/50"
        title="Book Consultation"
      >
        <Sparkles size={18} className="animate-spin" />
        <span className="text-xs uppercase tracking-wider font-extrabold hidden sm:inline">Book Call</span>
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="fixed bottom-6 right-6 z-40 w-72 sm:w-80 p-4 rounded-2xl bg-slate-900/90 dark:bg-slate-950/95 border-2 border-amber-400/50 shadow-2xl shadow-amber-500/30 backdrop-blur-2xl overflow-hidden"
      >
        {/* Top subtle shine effect */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 animate-pulse" />

        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300">
              Live Consultation Desk
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/50 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            title="Minimize"
          >
            <X size={14} />
          </button>
        </div>

        <h4 className="font-display font-extrabold text-sm text-white mb-1 flex items-center gap-1.5">
          <Sparkles size={15} className="text-amber-400 shrink-0" />
          <span>Book 1-on-1 Strategy Call</span>
        </h4>
        <p className="text-[hsl(230,15%,65%)] text-xs mb-3 leading-relaxed">
          Speak with our solutions architects to map your AI agent & website roadmap.
        </p>

        <Link
          href="/contact"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 hover:from-amber-300 hover:to-rose-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Calendar size={14} />
          <span>Schedule Free Call Now</span>
          <ArrowRight size={14} />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
