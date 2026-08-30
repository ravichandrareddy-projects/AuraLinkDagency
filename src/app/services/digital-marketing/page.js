'use client';

import React from 'react';
import { BarChart3, TrendingUp, Target, Mail, Share2, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientBackground from '@/components/effects/GradientBackground';
import ScrollReveal from '@/components/effects/ScrollReveal';

const marketingServices = [
  {
    title: 'Lead Generation Campaigns',
    description: 'Multi-channel acquisition strategies focused on capturing high-intent prospects for B2B & B2C.',
    icon: Target,
  },
  {
    title: 'Social Media Management',
    description: 'Content creation, post scheduling, engagement automation, and audience growth analytics.',
    icon: Share2,
  },
  {
    title: 'Automated Email Marketing',
    description: 'Personalized drip sequences, newsletter broadcasts, and transactional email workflows.',
    icon: Mail,
  },
  {
    title: 'Conversion Rate Optimization (CRO)',
    description: 'A/B testing, heatmap tracking, UX adjustments, and copy refinement to maximize sales per visitor.',
    icon: TrendingUp,
  },
];

export default function DigitalMarketingServicePage() {
  return (
    <div className="relative min-h-screen pb-24">
      <GradientBackground />

      <section className="relative pt-32 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(270,95%,65%)] text-xs font-semibold mb-6">
            📈 Performance Marketing & Growth
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-6">
            Data-Driven Marketing That <br />
            <span className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent">
              Drives Measurable Revenue
            </span>
          </h1>
          <p className="text-[hsl(230,15%,65%)] text-lg max-w-xl mx-auto mb-8">
            Turn your brand visibility into predictable client acquisition with growth funnels and AI content tools.
          </p>
          <Button variant="primary" href="/contact">
            Start Growth Campaign <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <SectionHeading title="Digital Marketing Solutions" subtitle="Scalable acquisition systems engineered for ROI" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {marketingServices.map((m, idx) => {
            const Icon = m.icon;
            return (
              <ScrollReveal key={m.title} delay={idx * 0.1}>
                <GlassCard hover className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[hsl(210,100%,60%)]/15 border border-[hsl(210,100%,60%)]/20 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-[hsl(210,100%,60%)]" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">{m.title}</h3>
                    <p className="text-[hsl(230,15%,65%)] text-sm leading-relaxed mb-4">{m.description}</p>
                  </div>
                  <Button variant="ghost" size="sm" href="/contact" className="w-fit">
                    Learn More <ArrowRight size={14} />
                  </Button>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
