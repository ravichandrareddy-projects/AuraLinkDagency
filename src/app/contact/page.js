'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  MessageSquare,
  Calendar,
  MapPin,
  Clock,
  Globe,
  ArrowRight,
  CheckCircle,
  Send,
  Sparkles,
} from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import Button from '@/components/ui/Button'
import HoverText from '@/components/ui/HoverText'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import GradientBackground from '@/components/effects/GradientBackground'
import ScrollReveal from '@/components/effects/ScrollReveal'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const budgetOptions = [
  'Starter / Basic',
  'Growth / Standard',
  'Professional / Premium',
  'Enterprise',
  'Flexible / To be discussed',
]

const projectTypes = [
  'Website Development',
  'AI Agent',
  'Custom Software',
  'Mobile App',
  'Website Redesign',
  'Other',
]

const supportCards = [
  {
    icon: Mail,
    title: 'Order & Call Support Email',
    detail: 'hello@auralinkdigitalagency.indevs.in',
    sub: 'Ticket support — We reach out within 12 hours',
    gradient: 'from-accent-purple to-accent-blue',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp & Direct Call',
    detail: '+91 9440336396',
    sub: 'Call or chat with us instantly',
    gradient: 'from-accent-blue to-accent-cyan',
  },
  {
    icon: Calendar,
    title: 'Schedule Meeting',
    detail: 'Book a 30-minute discovery call',
    sub: null,
    cta: true,
    gradient: 'from-accent-cyan to-accent-purple',
  },
]

const officeInfo = [
  { icon: MapPin, text: 'Andhra Pradesh, India' },
  { icon: Clock, text: 'Mon-Sat, 10AM - 7PM IST' },
  { icon: Globe, text: 'Serving clients worldwide' },
]

const inputClasses =
  'bg-[hsl(230,18%,15%)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-[hsl(0,0%,95%)] w-full focus:outline-none focus:border-[hsl(270,95%,65%)] focus:ring-1 focus:ring-accent-purple/50 transition-all placeholder:text-[hsl(230,10%,45%)] text-sm'

const labelClasses = 'text-[hsl(230,15%,65%)] text-sm font-medium mb-2 block'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [ticketId, setTicketId] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your project'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    const generatedTicket = 'TICK-' + Math.floor(10000 + Math.random() * 90000)
    setTicketId(generatedTicket)
    setSubmitted(true)
  }

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
                <Send className="w-3.5 h-3.5" />
                Get In Touch
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent"
            >
              <HoverText text="Let's Build Something" className="bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent" highlightHover={false} />
              <br />
              <HoverText text="Amazing Together" className="bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent" highlightHover={false} />
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-[hsl(230,15%,65%)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content — Two Column Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12">
          {/* Left Column — Contact Form */}
          <ScrollReveal>
            <GlassCard className="p-8 md:p-10 relative overflow-hidden" hover={false}>
              {/* Decorative corner glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[hsl(270,95%,65%)]/[0.06] rounded-full blur-[80px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative z-10">
                      <h2 className="font-display text-2xl font-bold text-[hsl(0,0%,95%)] mb-1">
                        Tell Us About Your Project
                      </h2>
                      <p className="text-[hsl(230,10%,45%)] text-sm mb-8">
                        Fill out the form below and we&apos;ll craft a perfect solution for you.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Row 1: Name + Email */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className={labelClasses}>
                              Name <span className="text-[hsl(270,95%,65%)]">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleChange}
                              className={`${inputClasses} ${errors.name ? 'border-red-500/50 focus:border-red-500' : ''}`}
                            />
                            {errors.name && (
                              <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="email" className={labelClasses}>
                              Email <span className="text-[hsl(270,95%,65%)]">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@company.com"
                              value={formData.email}
                              onChange={handleChange}
                              className={`${inputClasses} ${errors.email ? 'border-red-500/50 focus:border-red-500' : ''}`}
                            />
                            {errors.email && (
                              <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        {/* Row 2: Phone + Company */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="phone" className={labelClasses}>
                              Phone
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={handleChange}
                              className={inputClasses}
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className={labelClasses}>
                              Company
                            </label>
                            <input
                              id="company"
                              name="company"
                              type="text"
                              placeholder="Your Company"
                              value={formData.company}
                              onChange={handleChange}
                              className={inputClasses}
                            />
                          </div>
                        </div>

                        {/* Row 3: Budget + Project Type */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="budget" className={labelClasses}>
                              Budget
                            </label>
                            <select
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className={`${inputClasses} appearance-none cursor-pointer`}
                            >
                              <option value="" className="bg-[hsl(230,18%,15%)] text-[hsl(230,10%,45%)]">
                                Select budget range
                              </option>
                              {budgetOptions.map((opt) => (
                                <option key={opt} value={opt} className="bg-[hsl(230,18%,15%)] text-[hsl(0,0%,95%)]">
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="projectType" className={labelClasses}>
                              Project Type
                            </label>
                            <select
                              id="projectType"
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleChange}
                              className={`${inputClasses} appearance-none cursor-pointer`}
                            >
                              <option value="" className="bg-[hsl(230,18%,15%)] text-[hsl(230,10%,45%)]">
                                Select project type
                              </option>
                              {projectTypes.map((opt) => (
                                <option key={opt} value={opt} className="bg-[hsl(230,18%,15%)] text-[hsl(0,0%,95%)]">
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className={labelClasses}>
                            Message <span className="text-[hsl(270,95%,65%)]">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell us about your project, goals, and timeline..."
                            value={formData.message}
                            onChange={handleChange}
                            className={`${inputClasses} resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500' : ''}`}
                          />
                          {errors.message && (
                            <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
                          )}
                        </div>

                        {/* Submit */}
                        <Button variant="primary" type="submit" className="w-full">
                          Send Message
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </form>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center py-16 text-center relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="font-display text-2xl font-bold text-[hsl(0,0%,95%)] mb-2"
                    >
                      Thank You! Ticket Registered
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-2 text-center max-w-md"
                    >
                      <div className="inline-block px-4 py-1.5 rounded-full bg-[hsl(270,95%,65%)]/20 border border-[hsl(270,95%,65%)]/40 text-[hsl(270,95%,65%)] font-mono font-bold text-sm">
                        Ticket ID: {ticketId || 'TICK-84920'}
                      </div>
                      <p className="text-[hsl(230,15%,75%)] text-sm leading-relaxed">
                        Our specialized booking team will reach out to you within <strong>12 hours</strong> regarding your order and call booking.
                      </p>
                      <p className="text-[hsl(230,15%,55%)] text-xs font-mono pt-2">
                        Official Order Support Email: hello@auralinkdigitalagency.indevs.in
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="mt-8"
                    >
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            company: '',
                            budget: '',
                            projectType: '',
                            message: '',
                          })
                        }}
                      >
                        Send another message
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </ScrollReveal>

          {/* Right Column — Support Options */}
          <div className="space-y-5">
            {supportCards.map((card, index) => {
              const Icon = card.icon
              return (
                <ScrollReveal key={card.title} delay={index * 0.1} direction="right">
                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-base font-semibold text-[hsl(0,0%,95%)] mb-1">
                          {card.title}
                        </h3>
                        <p className="text-[hsl(230,15%,65%)] text-sm">{card.detail}</p>
                        {card.sub && (
                          <p className="text-[hsl(230,10%,45%)] text-xs mt-1">{card.sub}</p>
                        )}
                        {card.cta && (
                          <div className="mt-3">
                            <Button variant="ghost" size="sm">
                              Schedule Now
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              )
            })}

            {/* Office Info Card */}
            <ScrollReveal delay={0.3} direction="right">
              <GlassCard className="p-6" hover={false}>
                <h3 className="font-display text-sm font-semibold text-[hsl(0,0%,95%)] mb-4 uppercase tracking-wider">
                  Office Info
                </h3>
                <div className="space-y-4">
                  {officeInfo.map((info) => {
                    const Icon = info.icon
                    return (
                      <div key={info.text} className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-[hsl(270,95%,65%)] flex-shrink-0" />
                        <span className="text-[hsl(230,15%,65%)] text-sm">{info.text}</span>
                      </div>
                    )
                  })}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <GlassCard
            className="relative overflow-hidden p-12 md:p-16"
            hover={false}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary to-bg-tertiary" />
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
            {/* Glow spots */}
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-[hsl(270,95%,65%)]/10 rounded-full blur-[60px]" />
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[hsl(210,100%,60%)]/10 rounded-full blur-[60px]" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] flex items-center justify-center mb-6 shadow-lg shadow-accent-purple/20"
              >
                <MapPin className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-[hsl(0,0%,95%)] mb-2">
                Bangalore, India
              </h3>
              <p className="text-[hsl(230,15%,65%)]">
                We work with clients globally
              </p>
            </div>
          </GlassCard>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium rounded-full bg-[hsl(185,100%,55%)]/10 text-[hsl(185,100%,55%)] border border-[hsl(185,100%,55%)]/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  Ready to Start?
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(0,0%,95%)] mb-4">
                Ready to get started?
              </h2>
              <p className="text-[hsl(230,15%,65%)] text-lg max-w-xl mx-auto mb-12">
                Join 150+ businesses that trust AuraLink for their digital growth.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
                {[
                  { value: 150, suffix: '+', label: 'Projects' },
                  { value: 98, suffix: '%', label: 'Satisfaction' },
                  { value: 24, suffix: '/7', label: 'Support' },
                ].map((stat) => (
                  <GlassCard key={stat.label} className="p-6 text-center" hover={false}>
                    <div className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[hsl(230,10%,45%)] text-sm">{stat.label}</div>
                  </GlassCard>
                ))}
              </div>

              <Button variant="primary" size="lg" href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
