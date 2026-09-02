'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Bot, Globe, Database, Cpu, Cloud, Zap, Clock, ShieldCheck, CheckCircle2, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientBackground from '@/components/effects/GradientBackground';
import ScrollReveal from '@/components/effects/ScrollReveal';

const turnaroundGuarantees = [
  {
    icon: Globe,
    title: 'Business Websites',
    time: '48 Hours',
    desc: 'High-converting responsive websites, landing pages, & digital stores delivered blazingly fast.',
    badge: 'Express 48h Delivery',
    gradient: 'from-cyan-500 to-blue-500',
    link: '/websites',
  },
  {
    icon: Bot,
    title: 'Autonomous AI Agents',
    time: '< 3 Business Days',
    desc: 'Voice calling bots, WhatsApp auto-responders, CRM sync & lead qualifiers configured & live.',
    badge: 'Under 3 Days',
    gradient: 'from-purple-500 to-indigo-500',
    link: '/ai-agents',
  },
  {
    icon: Code2,
    title: 'Custom Software & Apps',
    time: '< 7 Business Days',
    desc: 'Full-stack SaaS platforms, internal workflow tools, & enterprise software architectures.',
    badge: 'Under 7 Days',
    gradient: 'from-emerald-500 to-teal-500',
    link: '/software',
  },
];

const techCategories = [
  {
    category: 'AI & Machine Learning Engine',
    icon: Bot,
    color: 'text-purple-400',
    items: [
      { name: 'OpenAI GPT-4o & O3', desc: 'Reasoning, text generation & multi-modal intelligence' },
      { name: 'ElevenLabs Voice API', desc: 'Ultra-realistic human-like voice synthesis & calling' },
      { name: 'Anthropic Claude 3.5', desc: 'Complex reasoning & long-context data processing' },
      { name: 'Twilio & WhatsApp Cloud', desc: 'Omnichannel telephony & automated messaging' },
      { name: 'LangChain & LlamaIndex', desc: 'RAG knowledge base embeddings & vector databases' },
      { name: 'n8n & Zapier Enterprise', desc: 'Workflow automation & API integration triggers' },
    ],
  },
  {
    category: 'Modern Web & UI Tech',
    icon: Globe,
    color: 'text-cyan-400',
    items: [
      { name: 'Next.js 14 App Router', desc: 'Server-side rendering, SEO perfection & lightning speed' },
      { name: 'React 18 & Javascript', desc: 'Interactive dynamic UI state management' },
      { name: 'TailwindCSS & Vanilla CSS', desc: 'High-performance bespoke responsive styling' },
      { name: 'Three.js & WebGL', desc: '3D interactive web visual effects' },
      { name: 'Framer Motion', desc: '60fps micro-animations & smooth transitions' },
      { name: 'Lighthouse 95+ Score', desc: 'Guaranteed core web vitals & instant load times' },
    ],
  },
  {
    category: 'Backend & Cloud Infrastructure',
    icon: Cloud,
    color: 'text-indigo-400',
    items: [
      { name: 'Node.js & Python FastAPI', desc: 'High-concurrency microservices & API endpoints' },
      { name: 'PostgreSQL & Prisma ORM', desc: 'Scalable relational data storage & querying' },
      { name: 'Redis Cache & Queues', desc: 'Sub-millisecond memory caching & queue management' },
      { name: 'Docker & Kubernetes', desc: 'Containerized deployment & automatic scaling' },
      { name: 'AWS & Vercel Enterprise', desc: '99.9% uptime cloud infrastructure & global CDN' },
      { name: 'Stripe & Razorpay API', desc: 'Bank-grade payment gateways & automated billing' },
    ],
  },
];

export default function TechStackPage() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4">
      <GradientBackground />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <Cpu size={14} className="text-cyan-400" /> Engineered For Speed & Performance
            </span>
            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight mb-6">
              Our Modern <span className="logo-blue-shine-text">Tech Stack</span> & Rapid Delivery
            </h1>
            <p className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We leverage cutting-edge AI frameworks, Next.js architecture, and cloud infrastructure to ship production-ready digital products in days, not months.
            </p>
          </motion.div>
        </section>

        {/* Rapid Delivery Timeline Guarantees */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              ⚡ Guaranteed Delivery Timelines
            </h2>
            <p className="text-slate-400 text-sm mt-1">Clear, transparent turnaround schedules for every project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {turnaroundGuarantees.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <GlassCard className="p-6 relative overflow-hidden h-full flex flex-col justify-between border-cyan-500/20 hover:border-cyan-500/40">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${item.color}`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-extrabold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-3 font-mono">
                    {item.time}
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{item.desc}</p>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-white transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </Link>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Complete Tech Stack Categories */}
        <section className="mb-20">
          <SectionHeading
            title="Production Engineering Stack"
            subtitle="Industry-leading frameworks, AI models, and cloud technology powering your products"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {techCategories.map((cat, i) => (
              <ScrollReveal key={cat.category} delay={i * 0.1}>
                <GlassCard className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <cat.icon size={22} className={cat.color} />
                      <h3 className="font-display font-bold text-lg text-white">{cat.category}</h3>
                    </div>

                    <div className="space-y-4">
                      {cat.items.map((tech) => (
                        <div key={tech.name} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all">
                          <div className="flex items-center gap-2 text-white font-bold text-sm">
                            <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                            <span>{tech.name}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1 pl-5">{tech.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-cyan-950/40 border border-cyan-500/30">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white mb-3">
            Ready to Build Your Digital Product?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto mb-8">
            Tell us about your requirements and get a custom prototype delivered in record time.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-950 font-black text-sm hover:bg-cyan-200 transition-all shadow-xl shadow-cyan-500/20"
          >
            <Zap size={16} className="text-slate-950 fill-slate-950" />
            <span>Start Fast Project</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
}
