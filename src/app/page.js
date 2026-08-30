'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion'
import {
  ArrowRight, Play, Sparkles, Upload, Brain, Target, Bell,
  CheckCircle2, TrendingUp, Briefcase, Zap, Bot, Code2, Globe, BarChart3,
  MessageSquare, Search, Plug, Rocket
} from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import HoverText from '@/components/ui/HoverText'
import ProblemSearch from '@/components/ui/ProblemSearch'
import RevenueCalculator from '@/components/ui/RevenueCalculator'
import { homepagePricingHighlights } from '@/lib/pricing-data'
import { useCurrency } from '@/lib/currency-context'

// ─── Data ───────────────────────────────────────────────────────────────────────
const floatingBadges = [
  { icon: CheckCircle2, text: 'Agent Deployed', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20', x: '-8%', y: '20%' },
  { icon: TrendingUp, text: '24/7 Operations', color: 'text-indigo-400', bg: 'bg-indigo-400/10 border-indigo-400/20', x: '90%', y: '15%' },
  { icon: MessageSquare, text: 'Auto-Replies', color: 'text-violet-400', bg: 'bg-violet-400/10 border-violet-400/20', x: '85%', y: '70%' },
]

const features = [
  {
    id: 'ai-agents',
    icon: Bot,
    title: 'AI Agents',
    description: 'Deploy intelligent AI agents that automate calls, messages, sales, onboarding, and more — working 24/7 so you don\'t have to.',
    color: 'from-indigo-500 to-violet-500',
    glow: 'rgba(99,102,241,0.25)',
    border: 'rgba(99,102,241,0.2)',
    tag: 'Automated Support',
    stat: '24/7',
    statLabel: 'Availability',
    link: '/ai-agents',
  },
  {
    id: 'custom-software',
    icon: Code2,
    title: 'Custom Software',
    description: 'Custom-built SaaS platforms, internal tools, and enterprise software engineered for scalability, performance, and growth.',
    color: 'from-violet-500 to-purple-500',
    glow: 'rgba(139,92,246,0.25)',
    border: 'rgba(139,92,246,0.2)',
    tag: 'Tailored Solutions',
    stat: '100%',
    statLabel: 'Custom Built',
    link: '/software',
  },
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Websites',
    description: 'Modern, conversion-optimized business websites that establish authority, capture leads, and drive measurable revenue.',
    color: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6,182,212,0.25)',
    border: 'rgba(6,182,212,0.2)',
    tag: 'High Conversion',
    stat: '5x',
    statLabel: 'More Leads',
    link: '/websites',
  },
]

// ─── Floating 3D Card ──────────────────────────────────────────────────────────
function FloatingCard3D() {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [15, -15]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-15, 15]), { stiffness: 150, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full max-w-sm mx-auto"
    >
      <div className="glass-card p-6 relative overflow-hidden gradient-border">
        {/* Card shimmer */}
        <div className="absolute inset-0 animate-shimmer pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white text-xs font-semibold">AI Agent Status</p>
              <p className="text-[#64748b] text-[10px]">Lead Generation Bot</p>
            </div>
          </div>
          <span className="badge badge-emerald text-[10px]">Active</span>
        </div>

        {/* Skills/Capabilities */}
        <p className="text-[#64748b] text-xs mb-2 font-medium">Capabilities</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {['Voice Calls', 'WhatsApp', 'Email Auth', 'CRM Sync', '24/7'].map((skill) => (
            <span
              key={skill}
              className="text-[10px] px-2 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Metric bar */}
        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-[#94a3b8]">Lead Conversion Rate</span>
            <span className="text-emerald-400 font-bold">42%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full gradient-cool"
              initial={{ width: 0 }}
              animate={{ width: '42%' }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Jobs found -> Leads Gen */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/5">
          <span className="text-[#64748b] text-xs">Leads Generated</span>
          <div className="flex items-center gap-1">
            <Target className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-white font-bold text-sm">847</span>
            <span className="text-[#64748b] text-[10px]">this month</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Hero Section ───────────────────────────────────────────────────────────────
function HeroSection() {
  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
              <span className="badge badge-indigo">
                <Sparkles className="w-3 h-3" />
                AI-Powered Digital Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white mb-6"
            >
              <HoverText text="Grow your " className="text-white" />
              <HoverText text="business " className="gradient-text" highlightHover={false} />
              <span className="inline-block px-3.5 py-1 rounded-2xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 border border-cyan-400/40 text-cyan-300 font-black text-4xl sm:text-5xl lg:text-6xl mx-1 shadow-lg shadow-cyan-500/20 animate-pulse">
                10x
              </span>
              <br />
              <HoverText text="and scale " className="text-white" />
              <span className="relative inline-block">
                <HoverText text="faster" className="text-white" />
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 rounded-full gradient-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              We build AI-powered agents, custom software products, and modern business websites that automate operations and drive revenue.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="btn-primary text-base py-3.5 px-7 animate-pulse-glow">
                <Sparkles className="w-5 h-5" />
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary text-base py-3.5 px-7 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                Explore Services
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['A', 'T', 'I', 'S', 'D'].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#08080f] flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: `hsl(${220 + i * 30}, 70%, 55%)` }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xs">★</span>
                  ))}
                </div>
                <p className="text-[#64748b] text-xs mt-0.5">
                  <span className="text-white font-semibold">150+</span> projects delivered
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Floating badges */}
            {floatingBadges.map((badge, i) => (
              <motion.div
                key={i}
                className={`absolute z-10 flex items-center gap-2 px-3 py-2 rounded-xl border ${badge.bg} backdrop-blur-xl text-xs font-medium ${badge.color} shadow-lg`}
                style={{ left: badge.x, top: badge.y }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.2, duration: 0.5, ease: 'backOut' }}
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
                >
                  <badge.icon className="w-3.5 h-3.5" />
                </motion.div>
                {badge.text}
              </motion.div>
            ))}

            {/* Glow ring behind card */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent blur-3xl" />

            <FloatingCard3D />

            {/* Stats below card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 grid grid-cols-3 gap-3"
            >
              {[
                { label: 'Time Saved', value: '70%', icon: Target, color: 'text-violet-400' },
                { label: 'Revenue Growth', value: '3x', icon: TrendingUp, color: 'text-emerald-400' },
                { label: 'Client Satisfaction', value: '98%', icon: Bell, color: 'text-cyan-400' },
              ].map(({ label, value, icon: Icon, color }) => (
                <div key={label} className="glass-card p-3 text-center">
                  <Icon className={`w-4 h-4 ${color} mx-auto mb-1`} />
                  <p className="text-white font-bold text-lg">{value}</p>
                  <p className="text-[#64748b] text-[10px]">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Features Card ──────────────────────────────────────────────────────────────
function FeatureCard({ feature, index }) {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), { stiffness: 200, damping: 25 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const Icon = feature.icon

  return (
    <Link href={feature.link || '/services'} className="block h-full">
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card p-6 group relative overflow-hidden cursor-pointer h-full flex flex-col justify-between hover:border-[hsl(270,95%,65%)]/50 transition-all duration-300"
      >
        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]"
          style={{ background: `radial-gradient(circle at 50% 0%, ${feature.glow} 0%, transparent 70%)` }}
        />

        {/* Icon */}
        <div className="mb-4 relative z-10">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold text-lg font-display">{feature.title}</h3>
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                style={{
                  color: `rgba(255,255,255,0.7)`,
                  borderColor: feature.border,
                  background: `${feature.glow}`,
                }}
              >
                {feature.tag}
              </span>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed mb-4">{feature.description}</p>
          </div>

          {/* Stat */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
            <div>
              <p className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                {feature.stat}
              </p>
              <p className="text-[#4b5563] text-[11px]">{feature.statLabel}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[#4b5563] group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="section-pad relative z-10">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="badge badge-indigo">
              <Zap className="w-3 h-3" />
              Everything You Need
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
          >
            End-to-end{' '}
            <span className="gradient-text">digital solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#64748b] text-lg max-w-xl mx-auto"
          >
            From custom AI agents to premium business websites. Built to cut operational costs and scale your growth.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.id} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section ───────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="section-pad relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="glass-strong p-12 rounded-[32px] relative overflow-hidden gradient-border">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-5xl text-white mb-6 relative z-10"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#94a3b8] text-lg mb-8 relative z-10 max-w-2xl mx-auto"
          >
            Let&apos;s discuss how AI agents and custom software can automate and grow your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <Link href="/contact" className="btn-primary py-4 px-8 text-lg animate-pulse-glow">
              <Sparkles className="w-5 h-5" />
              Book Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PricingCard({ item, index, formatPrice }) {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), { stiffness: 200, damping: 25 })

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-[hsl(270,95%,65%)]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        <span className="text-[11px] font-semibold text-[hsl(185,100%,55%)] uppercase tracking-wider block mb-2">
          {item.popularFor}
        </span>
        <h3 className="font-display font-bold text-lg text-white mb-4 group-hover:text-[hsl(270,95%,65%)] transition-colors">
          {item.category}
        </h3>
        <div className="mb-6">
          <span className="text-xs text-[#94a3b8] block mb-1">
            {item.startingLabel ? `${item.startingLabel} ` : 'Fixed Package '}
          </span>
          <span className="text-3xl font-extrabold gradient-text">
            {formatPrice(item.prices)}
          </span>
        </div>
      </div>

      <Link
        href={item.link}
        className="inline-flex items-center justify-between text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] px-4 py-2.5 rounded-xl transition-all duration-200 group-hover:scale-[1.02]"
      >
        <span>Explore Solutions</span>
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  )
}

// ─── Homepage Pricing Highlights Section ─────────────────────────────────────────
function HomepagePricingSection() {
  const { formatPrice, currency } = useCurrency();

  return (
    <section className="section-pad relative z-10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge badge-purple mb-3">
            <Zap className="w-3.5 h-3.5 text-[hsl(270,95%,65%)]" />
            Transparent Localized Pricing
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
            Solutions Built For <span className="gradient-text">Every Scale</span>
          </h2>
          <p className="text-[#94a3b8] text-base">
            No hidden fees. Select your preferred currency in the menu to preview localized rates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homepagePricingHighlights.map((item, i) => (
            <PricingCard key={item.category} item={item} index={i} formatPrice={formatPrice} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] text-white font-semibold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <span>View Full Detailed Pricing Catalog</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose AuraLink Section ──────────────────────────────────────────────
const whyChooseReasons = [
  {
    icon: Zap,
    title: '24/7 AI Availability',
    desc: 'Your AI agents never sleep, ensuring round-the-clock lead capture and customer coverage for your business.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: TrendingUp,
    title: '70%+ Operational Cost Savings',
    desc: 'Drastically reduce operational overhead by automating repetitive support, sales, and booking workflows.',
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Infinite Scalability',
    desc: 'Handle thousands of customer interactions simultaneously without hiring extra staff or expanding call centers.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Target,
    title: '99.9% Execution Accuracy',
    desc: 'Custom-trained AI models with zero human fatigue, continuous learning, and error-free execution.',
    gradient: 'from-amber-500 to-rose-500',
  },
  {
    icon: Sparkles,
    title: 'Sub-Second Speed',
    desc: 'Instant responses across Voice, WhatsApp, and Web Chat — eliminate waiting times and boost conversion.',
    gradient: 'from-rose-500 to-purple-500',
  },
  {
    icon: Brain,
    title: 'Seamless Integrations',
    desc: 'Connects directly with your existing CRM, Razorpay, Stripe, WhatsApp Business API, and custom databases.',
    gradient: 'from-indigo-500 to-cyan-500',
  },
]

function WhyChooseCard({ item, index }) {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), { stiffness: 200, damping: 25 })

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const Icon = item.icon

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
    >
      <div>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-purple-300 transition-colors">{item.title}</h3>
        <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  )
}

function WhyChooseSection() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge badge-purple mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(270,95%,65%)]" />
            The AuraLink Advantage
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">
            Why Choose <span className="gradient-text">AuraLink Digital Agency</span>
          </h2>
          <p className="text-[#94a3b8] text-base">
            Transforming businesses with intelligent AI agents, custom software platforms, and high-converting web engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseReasons.map((item, i) => (
            <WhyChooseCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works Section ──────────────────────────────────────────────────────
const processSteps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn about your business needs, analyze existing workflows, and identify high-impact automation opportunities.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Configuration',
    desc: 'We architect, configure, and train your custom AI agents and software platforms tailored to your exact operations.',
    icon: Zap,
  },
  {
    num: '03',
    title: 'Integration',
    desc: 'We seamlessly connect your solution with existing tools, CRM, WhatsApp API, payment gateways, and databases.',
    icon: Plug,
  },
  {
    num: '04',
    title: 'Launch & Scale',
    desc: 'Your AI agent & software platform go live 24/7, continuously learning, driving leads, and generating ROI.',
    icon: Rocket,
  },
]

function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="badge badge-indigo mb-3"
          >
            <Zap className="w-3.5 h-3.5" />
            Simple 4-Step Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
          >
            How It <span className="gradient-text">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#94a3b8] text-base"
          >
            Get your autonomous AI agent and custom software platform up and running in four simple steps.
          </motion.p>
        </div>

        {/* 4 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-8">
          {/* Glowing connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 z-0" />

          {processSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center relative z-10 flex flex-col items-center group"
              >
                {/* Glowing step icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-4 shadow-xl shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-purple-400 text-sm font-mono font-bold tracking-widest">{step.num}</span>
                <h3 className="font-display text-xl font-bold text-white mt-1 mb-2 group-hover:text-cyan-300 transition-colors">{step.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Main Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSearch />
      <div className="divider max-w-7xl mx-auto px-6" />
      <RevenueCalculator />
      <div className="divider max-w-7xl mx-auto px-6" />
      <WhyChooseSection />
      <div className="divider max-w-7xl mx-auto px-6" />
      <HowItWorksSection />
      <div className="divider max-w-7xl mx-auto px-6" />
      <ServicesSection />
      <div className="divider max-w-7xl mx-auto px-6" />
      <HomepagePricingSection />
      <div className="divider max-w-7xl mx-auto px-6" />
      <CTASection />
    </>
  )
}
