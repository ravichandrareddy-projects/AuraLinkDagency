'use client';

import React from 'react';
import { Search, Globe, MapPin, Cpu, CheckCircle, ArrowRight, FileText } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientBackground from '@/components/effects/GradientBackground';
import ScrollReveal from '@/components/effects/ScrollReveal';

const seoPillars = [
  {
    title: 'Technical & On-Page SEO',
    description: 'Schema markup, canonical URLs, semantic HTML hierarchy, internal linking, and Core Web Vitals speed optimization.',
    icon: Search,
  },
  {
    title: 'Local SEO & Google Business Profile',
    description: 'Local keyword targeting, map pack optimization, and local review collection systems.',
    icon: MapPin,
  },
  {
    title: 'AI Search & LLM Discoverability (llms.txt)',
    description: 'Structuring machine-readable context files and AI search indexation strategies.',
    icon: Cpu,
  },
  {
    title: 'Search Console & Bing Webmaster Setup',
    description: 'Sitemap submission, crawl audit validation, indexation monitoring, and error resolution.',
    icon: FileText,
  },
];

export default function SEOServicePage() {
  return (
    <div className="relative min-h-screen pb-24">
      <GradientBackground />

      <section className="relative pt-32 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(185,100%,55%)] text-xs font-semibold mb-6">
            🔍 Technical SEO & AI Search Optimization
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-6">
            Rank Higher on Google & <br />
            <span className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent">
              AI Search Engines
            </span>
          </h1>
          <p className="text-[hsl(230,15%,65%)] text-lg max-w-xl mx-auto mb-8">
            White-hat technical SEO architecture, structured Schema data, and AI-readable documentation layers.
          </p>
          <Button variant="primary" href="/contact">
            Request SEO Audit <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <SectionHeading title="SEO Architecture Pillars" subtitle="Engineered discoverability for Google and AI agents" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {seoPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.title} delay={idx * 0.1}>
                <GlassCard hover className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[hsl(185,100%,55%)]/15 border border-[hsl(185,100%,55%)]/20 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-[hsl(185,100%,55%)]" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">{p.title}</h3>
                    <p className="text-[hsl(230,15%,65%)] text-sm leading-relaxed mb-4">{p.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[hsl(185,100%,55%)]">
                    <CheckCircle size={14} /> Production-ready & white-hat compliant
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
