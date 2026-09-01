'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useCurrency } from '@/lib/currency-context';
import { ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CurrencySelector({ compact = false }) {
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
        className={`inline-flex items-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.04] text-xs font-semibold text-white backdrop-blur-md hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[hsl(270,95%,65%)]/50 ${
          compact ? 'px-2.5 py-1.5' : 'px-3 py-2'
        }`}
        aria-label="Select Currency"
      >
        <span className="text-sm">{current.flag}</span>
        <span className="tracking-wider">{current.code} ({current.symbol})</span>
        <ChevronDown size={14} className={`text-[hsl(230,15%,65%)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 rounded-xl border border-cyan-500/30 bg-slate-950/95 shadow-2xl shadow-cyan-500/20 backdrop-blur-2xl z-[9999]"
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
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 shadow-sm'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">{curr.flag}</span>
                      <span>{curr.code}</span>
                    </span>
                    <span className="font-mono text-cyan-300 font-bold">{curr.symbol}</span>
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
