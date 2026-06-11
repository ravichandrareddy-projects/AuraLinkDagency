'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, HelpCircle, Bot, Globe, ArrowRight } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import Button from '@/components/ui/Button'
import HoverText from '@/components/ui/HoverText'
import Accordion from '@/components/ui/Accordion'
import GradientBackground from '@/components/effects/GradientBackground'
import ScrollReveal from '@/components/effects/ScrollReveal'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    icon: HelpCircle,
    color: 'accent-purple',
    items: [
      {
        question: 'How long does development take?',
        answer:
          'Development timelines vary based on project complexity. A simple website takes 2-4 weeks, while custom software or AI agents typically take 6-16 weeks. We provide a detailed timeline during our discovery phase and keep you updated throughout the process.',
      },
      {
        question: 'Do you provide ongoing support?',
        answer:
          'Absolutely! All our plans include post-launch support ranging from 1 to 6 months. We also offer extended maintenance packages for ongoing updates, bug fixes, performance monitoring, and feature additions.',
      },
      {
        question: 'What technologies do you use?',
        answer:
          'We work with modern, industry-leading technologies including React, Next.js, Node.js, Python, Flutter, React Native, AWS, Firebase, MongoDB, PostgreSQL, and various AI/ML frameworks. We choose the best tech stack based on your project requirements.',
      },
      {
        question: 'Do you offer maintenance packages?',
        answer:
          'Yes! We offer monthly maintenance packages starting at ₹5,000/month. This includes regular updates, security patches, performance optimization, content updates, and priority support.',
      },
    ],
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    icon: Bot,
    color: 'accent-blue',
    items: [
      {
        question: 'Can AI agents integrate with my existing CRM?',
        answer:
          'Yes, our AI agents are designed to integrate seamlessly with popular CRMs like Salesforce, HubSpot, Zoho, and custom systems. We handle the entire integration process to ensure smooth data flow between your agent and existing tools.',
      },
      {
        question: 'How accurate are the AI agents?',
        answer:
          'Our AI agents achieve 95%+ accuracy rates after the initial training period. We continuously monitor and fine-tune the agents based on real interaction data to improve performance over time.',
      },
      {
        question: 'Can I customize what the AI agent says?',
        answer:
          'Completely. You have full control over your agent\'s personality, tone, scripts, responses, and escalation rules. We provide an easy-to-use dashboard to make changes anytime.',
      },
    ],
  },
  {
    id: 'websites-software',
    title: 'Websites & Software',
    icon: Globe,
    color: 'accent-cyan',
    items: [
      {
        question: 'Do you redesign existing websites?',
        answer:
          'Yes! Website redesign is one of our core services. We\'ll modernize your existing site with a fresh design, improved performance, better SEO, mobile responsiveness, and conversion optimization while preserving your brand identity.',
      },
      {
        question: 'Do you provide source code?',
        answer:
          'Yes, you own 100% of the source code. Upon project completion, we transfer all code, assets, and documentation to you. Your intellectual property always remains yours.',
      },
      {
        question: 'What\'s included in website hosting?',
        answer:
          'We can set up hosting on platforms like Vercel, AWS, or your preferred provider. Our plans include initial deployment, SSL certificates, domain configuration, and performance optimization. Hosting costs are separate and typically range from ₹500-5,000/month depending on traffic.',
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return faqCategories

    const query = searchQuery.toLowerCase()
    return faqCategories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.items.length > 0)
  }, [searchQuery])

  const totalResults = filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0)

  return (
    <main className="min-h-screen bg-[hsl(230,25%,7%)]">
      {/* Hero Section */}
      <section className="relative py-24 pt-32 overflow-hidden">
        <GradientBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium rounded-full bg-[hsl(270,95%,65%)]/10 text-[hsl(270,95%,65%)] border border-[hsl(270,95%,65%)]/20">
                <HelpCircle className="w-3.5 h-3.5" />
                Support Center
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent"
            >
            <HoverText text="Frequently Asked Questions" className="bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent" highlightHover={false} />
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-[hsl(230,15%,65%)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Find answers to common questions about our services, process, and support.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 max-w-2xl mx-auto px-4">
        <ScrollReveal>
          <GlassCard className="p-2" hover={false}>
            <div className="flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-[hsl(230,10%,45%)] flex-shrink-0" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none py-3 text-[hsl(0,0%,95%)] placeholder:text-[hsl(230,10%,45%)] focus:outline-none text-[15px]"
              />
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => setSearchQuery('')}
                  className="text-[hsl(230,10%,45%)] hover:text-[hsl(230,15%,65%)] transition-colors text-sm flex-shrink-0"
                >
                  Clear
                </motion.button>
              )}
            </div>
          </GlassCard>
          {searchQuery && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[hsl(230,10%,45%)] text-sm mt-3 text-center"
            >
              {totalResults} result{totalResults !== 1 ? 's' : ''} found
            </motion.p>
          )}
        </ScrollReveal>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 max-w-3xl mx-auto px-4">
        {filteredCategories.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
              <Search className="w-7 h-7 text-[hsl(230,10%,45%)]" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[hsl(0,0%,95%)] mb-2">
              No results found
            </h3>
            <p className="text-[hsl(230,15%,65%)] text-sm">
              Try searching with different keywords or{' '}
              <button
                onClick={() => setSearchQuery('')}
                className="text-[hsl(270,95%,65%)] hover:underline"
              >
                browse all questions
              </button>
            </p>
          </motion.div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category, catIndex) => {
              const Icon = category.icon
              return (
                <ScrollReveal key={category.id} delay={catIndex * 0.1}>
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        category.color === 'accent-purple'
                          ? 'bg-[hsl(270,95%,65%)]/10 text-[hsl(270,95%,65%)]'
                          : category.color === 'accent-blue'
                          ? 'bg-[hsl(210,100%,60%)]/10 text-[hsl(210,100%,60%)]'
                          : 'bg-[hsl(185,100%,55%)]/10 text-[hsl(185,100%,55%)]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-[hsl(0,0%,95%)]">
                      {category.title}
                    </h2>
                  </div>
                  <Accordion items={category.items} />
                </ScrollReveal>
              )
            })}
          </div>
        )}
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-[hsl(230,20%,11%)]">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <GlassCard className="max-w-2xl mx-auto p-10 md:p-14 text-center" hover={false}>
              {/* Decorative glow */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-[hsl(270,95%,65%)]/[0.06] rounded-full blur-[80px]" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] flex items-center justify-center">
                  <HelpCircle className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[hsl(0,0%,95%)] mb-3">
                  Still have questions?
                </h2>
                <p className="text-[hsl(230,15%,65%)] mb-8 max-w-md mx-auto leading-relaxed">
                  Our team is here to help. Reach out and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button variant="primary" href="/contact">
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" href="mailto:hello@auralink.agency">
                    Email Us
                  </Button>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
