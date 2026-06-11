'use client';

import { motion } from 'framer-motion';
import { Globe, Rocket, ShoppingCart, Briefcase, UtensilsCrossed, Building2, HeartPulse, Layout, RefreshCw, Zap, Search, Smartphone, Shield, BarChart3, Palette, Check, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GradientBackground from '@/components/effects/GradientBackground';
import ScrollReveal from '@/components/effects/ScrollReveal';
import HoverText from '@/components/ui/HoverText';

const categories = [
  { icon: Globe, name: 'Business Websites', desc: 'Professional online presence that establishes trust and credibility for your brand.', price: '₹10,000', features: ['Custom design', 'Contact forms', 'Mobile responsive'] },
  { icon: Rocket, name: 'Startup Websites', desc: 'Launch with impact — fast, modern websites built for growth and conversion.', price: '₹15,000', features: ['Modern design', 'Fast loading', 'SEO ready'] },
  { icon: ShoppingCart, name: 'E-Commerce Stores', desc: 'Sell online seamlessly with fully integrated product catalogs and payments.', price: '₹25,000', features: ['Product catalog', 'Payment gateway', 'Inventory management'] },
  { icon: Briefcase, name: 'Portfolio Websites', desc: 'Showcase your work with stunning visual layouts and smooth animations.', price: '₹12,000', features: ['Gallery layouts', 'Project showcases', 'Smooth animations'] },
  { icon: UtensilsCrossed, name: 'Restaurant Websites', desc: 'Digital menus, table booking, and online ordering for modern restaurants.', price: '₹10,000', features: ['Digital menu', 'Online booking', 'Order system'] },
  { icon: Building2, name: 'Real Estate Websites', desc: 'Property listings, virtual tours, and agent profiles for real estate businesses.', price: '₹20,000', features: ['Property listings', 'Search filters', 'Agent profiles'] },
  { icon: HeartPulse, name: 'Healthcare Websites', desc: 'Patient-focused design with appointment booking and health information.', price: '₹18,000', features: ['Appointment booking', 'Patient portal', 'HIPAA compliance'] },
  { icon: Layout, name: 'Landing Pages', desc: 'High-conversion single pages designed to maximize leads and sign-ups.', price: '₹5,000', features: ['A/B testing ready', 'Lead capture', 'Fast loading'] },
  { icon: RefreshCw, name: 'Website Redesign', desc: 'Modernize your existing site with fresh design, better performance, and improved SEO.', price: '₹15,000', features: ['Brand refresh', 'Performance boost', 'SEO overhaul'] },
];

const metrics = [
  { icon: Zap, label: 'Page Speed', value: 95, suffix: '+', desc: 'Lighthouse Score' },
  { icon: Search, label: 'SEO Score', value: 98, suffix: '+', desc: 'Optimization' },
  { icon: Smartphone, label: 'Mobile Score', value: 100, suffix: '%', desc: 'Responsive' },
  { icon: Shield, label: 'Uptime', value: 99.9, suffix: '%', desc: 'Guaranteed' },
];

const features = [
  { icon: Zap, title: 'Fast Loading', desc: 'Optimized for blazing-fast page speeds under 2 seconds.' },
  { icon: Search, title: 'SEO Optimized', desc: 'Built-in SEO best practices to rank higher on Google.' },
  { icon: BarChart3, title: 'Conversion Focused', desc: 'Strategic layouts designed to turn visitors into customers.' },
  { icon: Smartphone, title: 'Responsive Design', desc: 'Perfect experience across all devices and screen sizes.' },
  { icon: BarChart3, title: 'Analytics Setup', desc: 'Google Analytics and conversion tracking pre-configured.' },
  { icon: Shield, title: 'Security', desc: 'SSL certificates, security headers, and best practices.' },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function WebsitesPage() {
  return (
    <div className="relative">
      <GradientBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(185,100%,55%)] text-sm font-medium mb-6">
              🌐 Web Development
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent"
          >
            <HoverText text="Websites Designed" className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent" highlightHover={false} />
            <br />
            <HoverText text="To Convert" className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent" highlightHover={false} />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[hsl(230,15%,65%)] text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            High-performance, SEO-optimized websites that turn visitors into customers and drive real business results.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Button variant="primary" href="/contact">Get My Website</Button>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Website Categories" subtitle="From business sites to e-commerce stores — we build websites for every industry" centered gradient />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {categories.map((cat) => (
              <motion.div key={cat.name} variants={fadeUp}>
                <GlassCard hover className="p-0 h-full flex flex-col overflow-hidden group">
                  <div className="h-1 w-full bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] group-hover:h-1.5 transition-all duration-300" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(270,95%,65%)]/15 to-[hsl(210,100%,60%)]/15 flex items-center justify-center mb-4">
                      <cat.icon size={22} className="text-[hsl(210,100%,60%)]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">{cat.name}</h3>
                    <p className="text-[hsl(230,15%,55%)] text-sm leading-relaxed mb-4 flex-1">{cat.desc}</p>
                    <ul className="space-y-2 mb-5">
                      {cat.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[hsl(230,15%,65%)]">
                          <Check size={14} className="text-[hsl(185,100%,55%)] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent">
                        From {cat.price}
                      </span>
                      <Button variant="ghost" size="sm" href="/contact">
                        Get Started <ArrowRight size={14} />
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 px-4 bg-[hsl(230,20%,11%)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Built for Performance" subtitle="Every website we build is optimized for speed, SEO, and reliability" centered />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {metrics.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.1}>
                <GlassCard className="p-6 text-center relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(185,100%,55%)] to-transparent" />
                  <m.icon size={24} className="text-[hsl(185,100%,55%)] mx-auto mb-3" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                    <AnimatedCounter end={m.value} suffix={m.suffix} duration={2} />
                  </div>
                  <p className="text-[hsl(230,15%,65%)] text-sm font-medium">{m.label}</p>
                  <p className="text-[hsl(230,10%,45%)] text-xs mt-1">{m.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Every Website Includes" subtitle="Standard features that come with every website we build" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <GlassCard hover className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(270,95%,65%)]/15 to-[hsl(210,100%,60%)]/15 flex items-center justify-center mb-4">
                    <f.icon size={20} className="text-[hsl(270,95%,65%)]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-[hsl(230,15%,55%)] text-sm leading-relaxed">{f.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-r from-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Get Your Dream Website</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">Let's create a website that looks stunning, loads fast, and converts visitors into customers.</p>
              <Button variant="secondary" href="/contact">Get My Website</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
