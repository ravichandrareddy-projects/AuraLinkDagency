'use client';

import React from 'react';
import { Cpu, Zap, ArrowRight, CheckCircle, Workflow, Database, RefreshCw } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientBackground from '@/components/effects/GradientBackground';
import ScrollReveal from '@/components/effects/ScrollReveal';

const automationFeatures = [
  {
    title: 'Custom Workflow Integration',
    description: 'Connect form submissions, CRMs, email services, databases, and third-party tools seamlessly.',
    icon: Workflow,
  },
  {
    title: 'Document & Data Parsing',
    description: 'Extract structured information automatically from incoming PDFs, receipts, and emails.',
    icon: Database,
  },
  {
    title: 'Lead Routing & Notification Automation',
    description: 'Instantly push qualified leads to sales team phones, Slack, WhatsApp, or CRM channels.',
    icon: Zap,
  },
  {
    title: 'Recurring Task Automation',
    description: 'Eliminate hours of manual data entry, CSV exports, and repetitive admin tasks.',
    icon: RefreshCw,
  },
];

export default function AutomationServicePage() {
  return (
    <div className="relative min-h-screen pb-24">
      <GradientBackground />

      <section className="relative pt-32 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(185,100%,55%)] text-xs font-semibold mb-6">
            ⚙️ Workflow Automation & Integration
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-6">
            Eliminate Repetitive Tasks & <br />
            <span className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent">
              Automate Operations 24/7
            </span>
          </h1>
          <p className="text-[hsl(230,15%,65%)] text-lg max-w-xl mx-auto mb-8">
            Connect your fragmented web tools, forms, CRMs, and databases into one unified automated pipeline.
          </p>
          <Button variant="primary" href="/contact">
            Discuss Your Automation Flow <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <SectionHeading title="Automation Capabilities" subtitle="Tailored workflow engineering for operational speed" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {automationFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={idx * 0.1}>
                <GlassCard hover className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[hsl(270,95%,65%)]/15 border border-[hsl(270,95%,65%)]/20 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-[hsl(270,95%,65%)]" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-[hsl(230,15%,65%)] text-sm leading-relaxed mb-4">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[hsl(185,100%,55%)]">
                    <CheckCircle size={14} /> Built-in error fallback & logging
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-10 text-center" hover={false}>
            <h2 className="font-display text-2xl font-bold text-white mb-3">Ready to save 20+ hours per week?</h2>
            <p className="text-[hsl(230,15%,65%)] text-sm mb-6 max-w-md mx-auto">
              Our integration engineers map out your workflow bottlenecks and deploy robust automation hooks.
            </p>
            <Button variant="primary" href="/contact">
              Schedule Automation Discovery
            </Button>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
