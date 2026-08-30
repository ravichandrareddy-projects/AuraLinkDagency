'use client';

import React, { useState, useEffect } from 'react';
import { Search, Sparkles, ArrowRight, HelpCircle, CheckCircle2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { suggestedProblems, findSolutionsForProblem } from '@/lib/recommendation-engine';

export default function ProblemSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(async () => {
      const res = await findSolutionsForProblem(query);
      setResults(res);
      setIsSearching(false);
      setHasSearched(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelectSuggested = (text) => {
    setQuery(text);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <GlassCard className="p-6 md:p-8 relative overflow-hidden" hover={false}>
        {/* Top subtle glow */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)]" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(270,95%,65%)]/10 border border-[hsl(270,95%,65%)]/20 text-[hsl(270,95%,65%)] text-xs font-semibold mb-2">
              <Sparkles size={14} /> AI Solution Discovery Search Engine
            </div>
            <h3 className="font-display text-2xl md:text-4xl font-extrabold text-white">
              What are you trying to <span className="gradient-text">solve & improve?</span>
            </h3>
            <p className="text-[hsl(230,15%,65%)] text-sm md:text-base mt-1">
              Search your exact business challenge or goal to instantly discover tailored AuraLink AI agents, software, and web solutions.
            </p>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded bg-white/[0.04] text-[hsl(230,15%,55%)] border border-white/[0.06] self-start md:self-center">
            AI Search Engine
          </span>
        </div>

        {/* Input Bar */}
        <div className="relative mb-6">
          <div className="relative flex items-center">
            <Search size={20} className="absolute left-4 text-[hsl(230,15%,55%)] pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. I want to increase my leads and automate WhatsApp customer support..."
              className="w-full pl-12 pr-10 py-4 bg-[hsl(230,22%,9%)] border border-white/[0.1] rounded-2xl text-white placeholder:text-[hsl(230,15%,45%)] text-sm sm:text-base focus:outline-none focus:border-[hsl(270,95%,65%)] focus:ring-2 focus:ring-[hsl(270,95%,65%)]/20 transition-all duration-300 shadow-inner"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 text-xs font-medium text-[hsl(230,15%,55%)] hover:text-white px-2 py-1 bg-white/[0.06] rounded-lg transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Suggested Chips */}
        <div className="mb-6">
          <p className="text-xs font-medium text-[hsl(230,15%,55%)] mb-2.5 flex items-center gap-1.5">
            <HelpCircle size={13} /> Or click a common business goal:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedProblems.slice(0, 5).map((prob, i) => (
              <button
                key={i}
                onClick={() => handleSelectSuggested(prob)}
                className={`text-xs px-3 py-1.5 rounded-xl border transition-all duration-200 text-left ${
                  query === prob
                    ? 'bg-[hsl(270,95%,65%)]/20 border-[hsl(270,95%,65%)] text-white font-medium shadow-md shadow-purple-500/10'
                    : 'bg-white/[0.03] border-white/[0.08] text-[hsl(230,15%,70%)] hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {prob}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Display */}
        <AnimatePresence mode="wait">
          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-6 pt-6 border-t border-white/[0.08]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider text-[hsl(185,100%,55%)] uppercase flex items-center gap-1.5">
                  <CheckCircle2 size={14} /> Recommended Solutions ({results.length})
                </span>
                <span className="text-xs text-[hsl(230,15%,50%)]">
                  Matched via capability rules
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-5 rounded-2xl bg-[hsl(230,22%,9%)] border border-white/[0.08] hover:border-[hsl(270,95%,65%)]/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[hsl(270,95%,65%)]/15 text-[hsl(270,95%,65%)] text-[10px] font-bold tracking-wider uppercase border border-[hsl(270,95%,65%)]/20">
                          {item.category}
                        </span>
                        <Zap size={14} className="text-[hsl(185,100%,55%)] opacity-70 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-display font-bold text-base text-white group-hover:text-[hsl(185,100%,55%)] transition-colors mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-[hsl(230,15%,65%)] text-xs leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] mb-4">
                        <p className="text-[11px] text-[hsl(230,15%,75%)] italic">
                          <strong className="text-[hsl(270,95%,65%)] not-italic font-semibold">Why recommended: </strong>
                          {item.why}
                        </p>
                      </div>
                    </div>

                    <a
                      href={item.link}
                      className="inline-flex items-center justify-between text-xs font-semibold text-white bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] px-4 py-2.5 rounded-xl shadow-md shadow-purple-500/15 hover:shadow-purple-500/30 transition-all duration-200 group-hover:scale-[1.02]"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight size={14} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </div>
  );
}
