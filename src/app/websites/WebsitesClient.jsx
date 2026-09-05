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
import { useCurrency } from '@/lib/currency-context';

const categories = [
  { icon: Globe, name: 'Local Business Website', desc: '1–3 page sleek website tailored for local shops, barbers, cafes, tutors, and micro-businesses.', prices: { INR: [7000, 10000], USD: [249, 299], EUR: [229, 279] }, features: ['1–3 Pages', 'WhatsApp Button Integration', 'Google Maps Support', 'Mobile Responsive'] },
  { icon: Layout, name: 'Landing Page', desc: 'High-converting single-page website with modern design and instant WhatsApp integration.', prices: { INR: [8000, 12000], USD: [249, 299], EUR: [229, 279] }, features: ['High Conversion Design', 'WhatsApp Integration', 'Lead Capture Form', 'Fast 1.5s Speed'] },
  { icon: ShoppingCart, name: 'E-Commerce Store', desc: 'Full-featured online store with admin panel to add/remove products and edit site content.', prices: { INR: [13000, 20000], USD: [399, 499], EUR: [369, 469] }, features: ['1 Year Free Domain & Hosting', 'Admin Panel (Owner Can Edit Site)', 'Add & Remove Products Easily', 'Payment Gateways (UPI, Cards)'] },
  { icon: Palette, name: "Fashion Website (Men's & Women's)", desc: "Custom e-commerce & showcase platform for men's and women's apparel brands.", prices: { INR: [13000, 20000], USD: [399, 499], EUR: [369, 469] }, features: ['1 Year Free Domain & Hosting', 'Admin Panel (Owner Can Edit Site)', 'Add & Remove Apparel & Sizes', 'WhatsApp Quick Order + Payments'] },
  { icon: RefreshCw, name: 'Website Redesign', desc: 'Modernize your outdated website with superior design, fast performance, and UX revamp.', prices: { INR: [15000, 22000], USD: [399, 499], EUR: [369, 469] }, features: ['Complete Visual Overhaul', 'Speed & Mobile Optimization', 'Core Web Vitals Boost', 'SEO Migration'] },
  { icon: Globe, name: 'Business Website', desc: 'Professional multi-page business site with admin panel to edit content and blogs.', prices: { INR: [23000, 30000], USD: [549, 649], EUR: [499, 599] }, features: ['1 Year Free Domain & Hosting', 'Admin Panel (Owner Can Edit Site)', 'Multi-Page Structure (8–10 Pages)', 'Full Technical SEO'] },
  { icon: Zap, name: 'Premium 3D Website', desc: 'Immersive WebGL / Three.js 3D experience with bespoke visual motion design.', prices: { INR: [35000, 45000], USD: [699, 849], EUR: [649, 799] }, features: ['1 Year Free Domain & Hosting', 'WebGL / Three.js 3D Motion', 'Interactive Scroll Effects', 'Bespoke UI/UX Engineering'] },
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
  const { formatPrice } = useCurrency();
  return (
    <div className="relative">
      <GradientBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(185,100%,55%)] text-sm font-medium">
              🌐 Web Development
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm font-mono font-bold">
              ⚡ Delivered in 48 Hours
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
                <GlassCard hover className="p-0 h-full flex flex-col overflow-hidden group border border-white/[0.08] shadow-2xl">
                  <div className="relative h-48 w-full overflow-hidden bg-black/40">
                    <img
                      src={cat.image || '/services/ecommerce_website.jpg'}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230,20%,8%)] via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                      <cat.icon size={20} className="text-[hsl(185,100%,55%)]" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">{cat.name}</h3>
                      <p className="text-[hsl(230,15%,60%)] text-xs leading-relaxed mb-4">{cat.desc}</p>

                      <ul className="space-y-2 mb-6">
                        {cat.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-[hsl(230,15%,75%)]">
                            <Check size={14} className="text-[hsl(185,100%,55%)] shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-3">
                      <span className="text-base sm:text-lg font-extrabold gradient-text">
                        {formatPrice(cat.prices)}
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
