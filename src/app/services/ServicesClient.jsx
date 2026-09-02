'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Bot, Code2, Cpu, BarChart3, Search, Palette, ShieldCheck, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientBackground from '@/components/effects/GradientBackground';
import ScrollReveal from '@/components/effects/ScrollReveal';

const serviceDisciplines = [
  {
    id: 'websites',
    icon: Globe,
    title: 'Websites & E-Commerce',
    tagline: 'High-converting digital presence',
    description: '1–3 page local starter sites, business portals, dynamic CMS websites, online stores, and immersive 3D WebGL experiences.',
    link: '/websites',
    badge: 'Core Service',
  },
  {
    id: 'ai-agents',
    icon: Bot,
    title: 'AI Agent Solutions',
    tagline: '24/7 Autonomous business intelligence',
    description: 'Human-like voice calling agents, 24/7 WhatsApp API bots, automated sales agents, lead scrapers, and video generators.',
    link: '/ai-agents',
    badge: 'Popular',
  },
  {
    id: 'software',
    icon: Code2,
    title: 'Custom Software Solutions',
    tagline: 'Enterprise-grade software architecture',
    description: 'Full-stack web applications, cross-platform mobile apps (iOS & Android), desktop software, SaaS platforms, CRMs, and custom ERPs.',
    link: '/software',
    badge: 'High Impact',
  },
  {
    id: 'automation',
    icon: Cpu,
    title: 'Automation Solutions',
    tagline: 'End-to-end operational efficiency',
    description: 'Custom workflow automation, API integration hooks, document parsing, lead routing, and repetitive task elimination.',
    link: '/services/automation',
    badge: 'Efficiency',
  },
  {
    id: 'digital-marketing',
    icon: BarChart3,
    title: 'Digital Marketing & Growth',
    tagline: 'Multi-channel acquisition strategies',
    description: 'Data-driven marketing, social media automation, email sequences, paid campaign management, and funnel optimization.',
    link: '/services/digital-marketing',
    badge: 'Growth',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & AI Search Optimization',
    tagline: 'Google & AI engine discoverability',
    description: 'Technical SEO audits, schema markup, Core Web Vitals optimization, local Google Business Profile rank tracking, and llms.txt optimization.',
    link: '/services/seo',
    badge: 'Search Rank',
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Creative Services',
    tagline: 'Memorable brand identity & UI/UX',
    description: 'Visual brand systems, UI/UX prototyping, design systems, design tokens, logo design, and brand guidelines.',
    link: '/contact',
    badge: 'Creative',
  },
  {
    id: 'maintenance',
    icon: ShieldCheck,
    title: 'Maintenance & Support Desk',
    tagline: 'Proactive upkeep & 24/7 uptime',
    description: 'Dedicated priority support desk, server monitoring, security patching, core updates, and performance tuning.',
    link: '/pricing',
    badge: 'Support',
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen pb-24">
      <GradientBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(185,100%,55%)] text-xs font-semibold mb-6">
              ⚡ Full-Stack Digital Agency Disciplines
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Engineering Solutions for <br />
            <span className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent">
              Measurable Business Growth
            </span>
          </motion.h1>

          <p className="text-[hsl(230,15%,65%)] text-lg max-w-2xl mx-auto mb-8">
            Explore AuraLink&apos;s 8 core service categories engineered to automate operations, capture leads, and scale revenue.
          </p>
        </div>
      </section>

      {/* Service Disciplines Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceDisciplines.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <ScrollReveal key={srv.id} delay={idx * 0.05}>
                <GlassCard hover className="p-6 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[hsl(270,95%,65%)]/20 to-[hsl(210,100%,60%)]/20 flex items-center justify-center border border-white/[0.1]">
                        <Icon className="w-6 h-6 text-[hsl(185,100%,55%)]" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/[0.04] text-[10px] font-semibold text-[hsl(270,95%,65%)] border border-white/[0.08]">
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[hsl(185,100%,55%)] transition-colors mb-1">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-semibold text-[hsl(270,95%,65%)] mb-3">
                      {srv.tagline}
                    </p>
                    <p className="text-[hsl(230,15%,65%)] text-sm leading-relaxed mb-6">
                      {srv.description}
                    </p>
                  </div>

                  <Link
                    href={srv.link}
                    className="inline-flex items-center justify-between text-xs font-semibold text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] px-4 py-3 rounded-xl transition-all duration-200"
                  >
                    <span>View Dedicated Services</span>
                    <ArrowRight size={14} />
                  </Link>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-10 text-center" hover={false}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Not sure which solution fits your exact goal?
            </h2>
            <p className="text-[hsl(230,15%,65%)] text-sm mb-6 max-w-md mx-auto">
              Use our interactive homepage discovery tool or speak with our senior solution architect.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="primary" href="/contact">
                Book Solution Discovery Call
              </Button>
              <Button variant="ghost" href="/">
                Try Solution Search
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
