'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  ExternalLink,
} from 'lucide-react';
import { ourClients, clientCategories } from '@/lib/clients-data';

function DarkClientLogoLink({ client }) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={client.website}
      target="_blank"
      rel="noopener noreferrer"
      title={`Open ${client.name} website`}
      aria-label={`Visit ${client.name} website`}
      className="w-12 h-12 rounded-xl bg-white border border-white/20 hover:border-cyan-400 flex items-center justify-center overflow-hidden shadow-lg shadow-cyan-500/20 shrink-0 transition-all hover:scale-105"
    >
      {client.logo && !imgError ? (
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          onError={() => setImgError(true)}
          loading="lazy"
          className="w-full h-full object-contain p-1"
        />
      ) : (
        <div
          className={`w-full h-full bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-black text-base`}
        >
          {client.initials}
        </div>
      )}
    </a>
  );
}

export default function OurClientsSection() {
  const [activeCategory, setActiveCategory] = useState('All Clients');

  const filteredClients =
    activeCategory === 'All Clients'
      ? ourClients
      : ourClients.filter((c) => c.category === activeCategory);

  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Background neon ambient glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Users size={14} className="text-cyan-400" />
            <span>Verified Client Portfolio • Click Any Logo to Visit</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Our Clients &amp; <span className="logo-blue-shine-text">Live Deployments</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Explore real portals, e-commerce brands, CRM systems, and mobile apps engineered by AuraLink. Tap any logo to open the live site.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {clientCategories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-300/40 scale-105'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Client Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all duration-300 shadow-xl flex flex-col justify-between group">
                  <div>
                    {/* Client Header with Clickable Logo */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <DarkClientLogoLink client={client} />
                        <div className="min-w-0">
                          <a
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display font-bold text-lg text-white hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 max-w-full"
                          >
                            <span className="truncate">{client.name}</span>
                            <ExternalLink size={13} className="shrink-0 opacity-70" />
                          </a>
                          <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                            <Building2 size={12} className="text-cyan-400 shrink-0" />
                            <span className="truncate">{client.industry}</span>
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 shrink-0">
                        {client.badge}
                      </span>
                    </div>

                    {/* Metric Pill */}
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent border border-cyan-500/20 mb-4 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <TrendingUp size={16} className="text-emerald-400 shrink-0" />
                        <span className="font-display font-extrabold text-sm sm:text-base text-white truncate">
                          {client.metric}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-200/80 shrink-0">
                        {client.period}
                      </span>
                    </div>

                    {/* Deliverable Project */}
                    <div className="mb-3">
                      <p className="text-[11px] uppercase font-mono tracking-wider text-slate-500 font-bold mb-1">
                        Engineered Deliverable:
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-200">
                        {client.project}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3">
                      {client.summary}
                    </p>
                  </div>

                  {/* Footer Link */}
                  <div className="pt-3 border-t border-white/[0.06] mt-2 flex items-center justify-between">
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-cyan-300 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink size={12} />
                    </a>
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* "Join Our Client Roster" Interactive Callout Card */}
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent border border-dashed border-cyan-400/40 hover:border-cyan-300 flex flex-col items-center justify-center text-center p-8 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Add Your Brand Next
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-xs">
                  Ready to deploy custom web portals, CRM systems, or an E-Commerce storefront?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-extrabold text-xs shadow-lg hover:bg-cyan-100 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
