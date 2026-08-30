'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Share2, TrendingUp, Users, Video, Database, Target, Search, Check, Zap, Clock, DollarSign, BarChart3, Shield, Plug, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientBackground from '@/components/effects/GradientBackground';
import ScrollReveal from '@/components/effects/ScrollReveal';
import HoverText from '@/components/ui/HoverText';

const iconMap = {
  'voice-calling': Phone,
  'whatsapp': MessageSquare,
  'social-media': Share2,
  'sales': TrendingUp,
  'onboarding': Users,
  'video-generation': Video,
  'data-scraping': Database,
  'lead-generation': Target,
  'data-scraper': Search,
};

import { useCurrency } from '@/lib/currency-context';

const colorMap = {
  'voice-calling': 'from-purple-500 to-blue-500',
  'whatsapp': 'from-green-500 to-emerald-500',
  'social-media': 'from-pink-500 to-rose-500',
  'sales': 'from-orange-500 to-amber-500',
  'onboarding': 'from-blue-500 to-cyan-500',
  'video-generation': 'from-red-500 to-pink-500',
  'data-scraping': 'from-cyan-500 to-teal-500',
  'lead-generation': 'from-violet-500 to-purple-500',
  'data-scraper': 'from-indigo-500 to-blue-500',
};

const agents = [
  { id: 'voice-calling', name: 'Voice Calling Agent', tagline: 'Automate outbound & inbound calls', prices: { INR: 19999, USD: 499, EUR: 449 }, capabilities: ['Outbound calling campaigns', 'Appointment booking & reminders', 'Automated follow-ups', 'Customer support handling'] },
  { id: 'whatsapp', name: 'WhatsApp Agent', tagline: 'Engage customers on WhatsApp 24/7', prices: { INR: 14999, USD: 399, EUR: 379 }, capabilities: ['Automated conversations', 'Lead capture & qualification', 'Customer support chatbot', 'Order updates & tracking'] },
  { id: 'social-media', name: 'Social Media Manager', tagline: 'Automate your social presence', prices: { INR: 19999, USD: 449, EUR: 399 }, capabilities: ['AI post generation', 'Smart scheduling', 'Content planning & calendar', 'Performance analytics'] },
  { id: 'sales', name: 'Sales Agent', tagline: 'Close more deals on autopilot', prices: { INR: 24999, USD: 499, EUR: 449 }, capabilities: ['Lead qualification & scoring', 'Follow-up automation', 'CRM integration', 'Meeting booking'] },
  { id: 'onboarding', name: 'Onboarding Agent', tagline: 'Streamline employee & client onboarding', prices: { INR: 19999, USD: 399, EUR: 379 }, capabilities: ['Employee onboarding flows', 'Customer onboarding', 'Document collection', 'Progress tracking'] },
  { id: 'video-generation', name: 'Video Generation Agent', tagline: 'Create videos with AI', prices: { INR: 24999, USD: 499, EUR: 449 }, capabilities: ['Reels & shorts creation', 'Marketing video production', 'Product demo videos', 'AI-powered editing'] },
  { id: 'data-scraping', name: 'Data Scraping Agent', tagline: 'Extract business intelligence', prices: { INR: 14999, USD: 349, EUR: 329 }, capabilities: ['Lead scraping at scale', 'Business data extraction', 'Competitor monitoring', 'Market research'] },
  { id: 'lead-generation', name: 'Lead Generation Agent', tagline: 'Fill your pipeline automatically', prices: { INR: 19999, USD: 449, EUR: 399 }, capabilities: ['Multi-channel lead capture', 'Lead scoring & prioritization', 'Funnel automation', 'Campaign tracking'] },
  { id: 'data-scraper', name: 'Data Scraper Agent', tagline: 'Build your data advantage', prices: { INR: 12999, USD: 299, EUR: 279 }, capabilities: ['Web scraping automation', 'Data enrichment', 'Automated reporting', 'Database building'] },
];

const steps = [
  { num: '01', title: 'Discovery', desc: 'We learn about your business needs and identify automation opportunities', icon: Search },
  { num: '02', title: 'Configuration', desc: 'We set up and train your AI agent with your specific workflows', icon: Zap },
  { num: '03', title: 'Integration', desc: 'We connect with your existing tools, CRM, and communication channels', icon: Plug },
  { num: '04', title: 'Launch', desc: 'Your agent goes live 24/7, continuously learning and improving', icon: ArrowRight },
];

const benefits = [
  { icon: Clock, title: '24/7 Availability', desc: 'Your AI agents never sleep, ensuring round-the-clock coverage for your business.' },
  { icon: DollarSign, title: 'Cost Reduction', desc: 'Reduce operational costs by up to 70% with intelligent automation.' },
  { icon: BarChart3, title: 'Scalability', desc: 'Handle thousands of interactions simultaneously without hiring more staff.' },
  { icon: Target, title: 'Accuracy', desc: '95%+ accuracy rates with continuous learning and improvement.' },
  { icon: Zap, title: 'Speed', desc: 'Instant responses and actions — no more waiting times for your customers.' },
  { icon: Shield, title: 'Integration', desc: 'Seamlessly connects with your existing CRM, tools, and workflows.' },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function AIAgentsPage() {
  const { formatPrice } = useCurrency();
  const [hours, setHours] = useState(40);
  const [rate, setRate] = useState(500);
  const monthlySavings = Math.round(hours * rate * 0.7);
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="relative">
      <GradientBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(270,95%,65%)] text-sm font-medium mb-6">
              🤖 AI-Powered Automation
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent"
          >
            <HoverText text="AI Agents Working " className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent" highlightHover={false} /> 24/7
            <br />
            <HoverText text="For Your Business" className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent" highlightHover={false} />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[hsl(230,15%,65%)] text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Deploy intelligent AI agents that handle calls, messages, social media, sales, and more — while you focus on growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button variant="primary" href="/contact">Book AI Agent Demo</Button>
            <Button variant="ghost" href="#agents">Explore Agents</Button>
          </motion.div>
        </div>
      </section>

      {/* Agent Cards */}
      <section id="agents" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our AI Agent Suite" subtitle="Nine specialized AI agents designed to automate every aspect of your business" centered gradient />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {agents.map((agent) => {
              const Icon = iconMap[agent.id];
              return (
                <motion.div key={agent.id} variants={fadeUp}>
                  <GlassCard hover className="p-6 h-full flex flex-col group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[agent.id]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-1">{agent.name}</h3>
                    <p className="text-[hsl(230,15%,55%)] text-sm mb-4">{agent.tagline}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {agent.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[hsl(230,15%,65%)]">
                          <Check size={16} className="text-[hsl(185,100%,55%)] mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 flex items-center justify-between gap-3">
                      <span className="text-base font-extrabold gradient-text">
                        {formatPrice(agent.prices)}
                      </span>
                      <Button variant="ghost" size="sm" href="/contact">Book Demo</Button>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-[hsl(230,20%,11%)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="How It Works" subtitle="Get your AI agent up and running in four simple steps" centered />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)]" />
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.15}>
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg shadow-purple-500/20">
                    <step.icon size={28} className="text-white" />
                  </div>
                  <span className="text-[hsl(270,95%,65%)] text-sm font-mono font-bold">{step.num}</span>
                  <h3 className="font-display text-lg font-bold text-white mt-1 mb-2">{step.title}</h3>
                  <p className="text-[hsl(230,15%,55%)] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Calculate Your ROI" subtitle="See how much you could save with AI agent automation" centered />
          <div className="mt-12">
            <GlassCard className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-[hsl(230,15%,65%)] text-sm font-medium mb-3">
                    Hours spent on manual tasks per month
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range" min="10" max="200" value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="flex-1 h-2 bg-[hsl(230,18%,15%)] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[hsl(270,95%,65%)] [&::-webkit-slider-thumb]:to-[hsl(210,100%,60%)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-purple-500/30"
                    />
                    <span className="text-white font-bold text-xl w-16 text-right">{hours}h</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[hsl(230,15%,65%)] text-sm font-medium mb-3">
                    Average hourly cost (₹)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range" min="100" max="2000" step="50" value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="flex-1 h-2 bg-[hsl(230,18%,15%)] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[hsl(270,95%,65%)] [&::-webkit-slider-thumb]:to-[hsl(210,100%,60%)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-purple-500/30"
                    />
                    <span className="text-white font-bold text-xl w-20 text-right">₹{rate}</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[hsl(270,95%,65%)]/10 to-[hsl(210,100%,60%)]/10 border border-[hsl(270,95%,65%)]/20">
                  <p className="text-[hsl(230,15%,65%)] text-sm mb-1">Monthly Savings</p>
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent">
                    ₹{monthlySavings.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[hsl(185,100%,55%)]/10 to-[hsl(210,100%,60%)]/10 border border-[hsl(185,100%,55%)]/20">
                  <p className="text-[hsl(230,15%,65%)] text-sm mb-1">Yearly Savings</p>
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(185,100%,55%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent">
                    ₹{yearlySavings.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
              <p className="text-[hsl(230,10%,45%)] text-xs mt-4 text-center">*Based on 70% task automation. Actual results may vary.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-[hsl(230,20%,11%)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Why Choose AI Agents" subtitle="Transform your business with intelligent automation" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <GlassCard hover className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(270,95%,65%)]/20 to-[hsl(210,100%,60%)]/20 flex items-center justify-center mb-4">
                    <b.icon size={20} className="text-[hsl(270,95%,65%)]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-[hsl(230,15%,55%)] text-sm leading-relaxed">{b.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-slate-900/80 border border-purple-500/30 text-center overflow-hidden shadow-2xl backdrop-blur-xl">
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to Deploy Your AI Agent?</h2>
              <p className="text-[hsl(230,15%,70%)] text-base max-w-xl mx-auto mb-8">Start automating your business operations today with our intelligent 24/7 AI agents.</p>
              <Button variant="primary" href="/contact">Book AI Agent Demo</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
