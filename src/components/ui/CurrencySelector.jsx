'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useCurrency } from '@/lib/currency-context';
import { ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CurrencySelector({ compact = false, light = false }) {
  const { currency, setCurrency, currencies } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = currencies[currency] || currencies.USD;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 rounded-xl border text-xs font-semibold backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 ${
          light
            ? 'border-slate-200/90 bg-white/80 text-slate-900 shadow-sm hover:bg-white hover:border-slate-300 focus:ring-emerald-500/40'
            : 'border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.2] focus:ring-[hsl(270,95%,65%)]/50'
        } ${compact ? 'px-2.5 py-1.5' : 'px-3 py-2'}`}
        aria-label="Select Currency"
      >
        <span className="text-sm">{current.flag}</span>
        <span className="tracking-wider">{current.code} ({current.symbol})</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${
            light ? 'text-slate-500' : 'text-[hsl(230,15%,65%)]'
          } ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute right-0 mt-2 w-48 rounded-xl border shadow-2xl backdrop-blur-2xl z-[9999] ${
              light
                ? 'border-slate-200 bg-white/95 shadow-slate-900/10'
                : 'border-cyan-500/30 bg-slate-950/95 shadow-cyan-500/20'
            }`}
          >
            <div className="p-1.5 space-y-1 max-h-60 overflow-y-auto">
              {Object.values(currencies).map((curr) => {
                const isSelected = curr.code === currency;
                return (
                  <button
                    key={curr.code}
                    onClick={() => {
                      setCurrency(curr.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-bold rounded-lg transition-colors ${
                      light
                        ? isSelected
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-sm'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                        : isSelected
                          ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 shadow-sm'
                          : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">{curr.flag}</span>
                      <span>{curr.code}</span>
                    </span>
                    <span className={`font-mono font-bold ${light ? 'text-emerald-700' : 'text-cyan-300'}`}>
                      {curr.symbol}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
