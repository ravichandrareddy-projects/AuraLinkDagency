'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Monitor,
  Cloud,
  Users,
  Building,
  Wrench,
  Brain,
  ArrowRight,
  Lightbulb,
  Palette,
  Code2,
  TestTube2,
  Rocket,
} from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/ui/SectionHeading'
import GradientBackground from '@/components/effects/GradientBackground'
import ScrollReveal from '@/components/effects/ScrollReveal'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'
import HoverText from '@/components/ui/HoverText'
import { useCurrency } from '@/lib/currency-context'

/* ─── Inline Data ─── */

const categories = [
  {
    name: 'Web Applications',
    icon: Globe,
    description: 'Dynamic, responsive web apps built for performance, scalability, and seamless user experience.',
    tech: ['React', 'Next.js', 'Node.js'],
    timeline: '6-10 weeks',
    isStarting: true,
    prices: { INR: 39999, USD: 399, EUR: 379 },
    gradient: 'from-violet-500 to-blue-500',
  },
  {
    name: 'Mobile Applications',
    icon: Smartphone,
    description: 'Cross-platform mobile apps with native-level performance for iOS and Android.',
    tech: ['React Native', 'Flutter'],
    timeline: '8-14 weeks',
    isStarting: true,
    prices: { INR: 59999, USD: 599, EUR: 549 },
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Desktop Applications',
    icon: Monitor,
    description: 'Powerful desktop software for Windows, macOS, and Linux with modern UI.',
    tech: ['Electron', 'Python'],
    timeline: '6-10 weeks',
    isStarting: true,
    prices: { INR: 59999, USD: 599, EUR: 549 },
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    name: 'SaaS Platforms',
    icon: Cloud,
    description: 'Scalable cloud-based platforms with billing, auth, and multi-tenant architecture.',
    tech: ['Next.js', 'AWS', 'Stripe'],
    timeline: '12-20 weeks',
    isStarting: true,
    prices: { INR: 49999, USD: 699, EUR: 649 },
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'CRM Systems',
    icon: Users,
    description: 'Custom CRM solutions to manage leads, customers, and sales pipelines effortlessly.',
    tech: ['React', 'PostgreSQL'],
    timeline: '8-12 weeks',
    isStarting: true,
    prices: { INR: 59999, USD: 699, EUR: 649 },
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'ERP Systems',
    icon: Building,
    description: 'Enterprise resource planning connecting sales, inventory, HR, purchasing, and accounting.',
    tech: ['Node.js', 'MongoDB'],
    timeline: '16-24 weeks',
    isCustomQuote: true,
    prices: 'Custom Quote',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Internal Business Tools',
    icon: Wrench,
    description: 'Admin dashboards, automation tools, and internal utilities that save hours daily.',
    tech: ['React', 'Firebase'],
    timeline: '4-8 weeks',
    isStarting: true,
    prices: { INR: 39999, USD: 499, EUR: 449 },
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    name: 'AI-Powered Platforms',
    icon: Brain,
    description: 'Intelligent platforms leveraging AI/ML for automation, insights, and prediction.',
    tech: ['Python', 'TensorFlow', 'OpenAI'],
    timeline: '10-16 weeks',
    isStarting: true,
    prices: { INR: 49999, USD: 699, EUR: 649 },
    gradient: 'from-violet-600 to-indigo-500',
  },
]

const processSteps = [
  { num: 1, title: 'Discovery', description: 'Understanding your vision and requirements', icon: Lightbulb },
  { num: 2, title: 'Design', description: 'Creating intuitive UI/UX designs', icon: Palette },
  { num: 3, title: 'Development', description: 'Building with modern technologies', icon: Code2 },
  { num: 4, title: 'Testing', description: 'Rigorous QA and performance testing', icon: TestTube2 },
  { num: 5, title: 'Launch', description: 'Deployment and ongoing support', icon: Rocket },
]

const techStack = [
  'React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'AWS',
  'Firebase', 'MongoDB', 'PostgreSQL', 'TensorFlow', 'Docker', 'Kubernetes',
]

/* ─── Page Component ─── */

export default function SoftwarePage() {
  const { formatPrice } = useCurrency();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ─── Hero ─── */}
      <section className="relative py-24 pt-32 overflow-hidden">
        <GradientBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge variant="purple">Custom Software Solutions</Badge>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm font-mono font-bold">
                ⚡ Delivered in &lt; 7 Business Days
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6 mb-6 leading-[1.1]">
              <HoverText text="Custom Software" className="text-[hsl(0,0%,95%)]" />
              <br />
              <HoverText text="Built Around Your Business" className="gradient-text" highlightHover={false} />
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-[hsl(230,15%,65%)] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              From web apps to enterprise ERPs, we build software that solves real problems and scales with you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" href="#categories">
                View Products
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Product Categories Grid ─── */}
      <section id="categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="What We Build"
            subtitle="End-to-end software solutions for every business need — built with care, shipped with confidence."
            centered
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
          >
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <motion.div key={cat.name} variants={staggerItem}>
                  <GlassCard className="p-6 h-full flex flex-col group" hover>
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg text-[hsl(0,0%,95%)] mb-2">
                      {cat.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[hsl(230,15%,65%)] text-sm leading-relaxed mb-4 flex-grow">
                      {cat.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cat.tech.map((t) => (
                        <Badge key={t} variant="glass">{t}</Badge>
                      ))}
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[hsl(185,100%,55%)] text-xs font-medium px-2.5 py-1 rounded-full bg-[hsl(185,100%,55%)]/10 border border-[hsl(185,100%,55%)]/20">
                        ⏱ {cat.timeline}
                      </span>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-base font-extrabold gradient-text">
                        {cat.isCustomQuote ? 'Custom Quote' : formatPrice(cat.prices, cat.isStarting)}
                      </span>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(270,95%,65%)] hover:text-[hsl(210,100%,60%)] transition-colors duration-300 group/link"
                      >
                        Get Started
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── Development Process ─── */}
      <section className="py-24 bg-[hsl(230,20%,11%)] relative overflow-hidden">
        {/* Subtle bg glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[hsl(270,95%,65%)]/[0.04] rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Our Development Process" centered />

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block mt-8">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-30" />

              <div className="grid grid-cols-5 gap-4">
                {processSteps.map((step, i) => {
                  const StepIcon = step.icon
                  return (
                    <ScrollReveal key={step.num} delay={i * 0.12}>
                      <div className="flex flex-col items-center text-center">
                        {/* Numbered circle */}
                        <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center mb-5 shadow-lg shadow-accent-purple/20">
                          <StepIcon className="w-8 h-8 text-white" />
                        </div>

                        <span className="text-xs font-bold text-[hsl(185,100%,55%)] tracking-widest uppercase mb-2">
                          Step {step.num}
                        </span>

                        <h4 className="font-display font-bold text-[hsl(0,0%,95%)] text-lg mb-2">
                          {step.title}
                        </h4>

                        <p className="text-[hsl(230,15%,65%)] text-sm leading-relaxed max-w-[180px]">
                          {step.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile / Tablet: vertical timeline */}
          <div className="lg:hidden mt-8 space-y-6">
            {processSteps.map((step, i) => {
              const StepIcon = step.icon
              return (
                <ScrollReveal key={step.num} delay={i * 0.1}>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center shadow-lg shadow-accent-purple/20">
                      <StepIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[hsl(185,100%,55%)] tracking-widest uppercase">
                        Step {step.num}
                      </span>
                      <h4 className="font-display font-bold text-[hsl(0,0%,95%)] text-lg mt-1">
                        {step.title}
                      </h4>
                      <p className="text-[hsl(230,15%,65%)] text-sm leading-relaxed mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Tech Stack ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Technologies We Use" centered />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-60px' }}
          >
            {techStack.map((tech) => (
              <motion.div key={tech} variants={staggerItem}>
                <GlassCard className="p-5 flex items-center justify-center group cursor-default" hover>
                  <motion.span
                    className="font-display font-semibold text-[hsl(230,15%,65%)] group-hover:text-[hsl(0,0%,95%)] transition-colors duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden">
              {/* Gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-accent-blue/10 to-accent-cyan/5" />
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl" />

              <div className="relative z-10 py-16 px-8 sm:px-12 text-center">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  <span className="gradient-text">Let&apos;s Build Your Software</span>
                </h2>
                <p className="text-[hsl(230,15%,65%)] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  Tell us about your project and we&apos;ll turn your vision into a high-performance digital product.
                </p>
                <Button variant="primary" size="lg" href="/contact">
                  Build My Software <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
