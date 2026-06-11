'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Star, Quote } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import HoverText from '@/components/ui/HoverText';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GradientBackground from '@/components/effects/GradientBackground';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { portfolioProjects as portfolioData } from '@/lib/portfolio-data';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'ai-agents', label: 'AI Agents' },
  { key: 'websites', label: 'Websites' },
  { key: 'software', label: 'Software' },
  { key: 'automation', label: 'Automation' },
];

const categoryColors = {
  'ai-agents': 'purple',
  'websites': 'blue',
  'software': 'cyan',
  'automation': 'purple',
};

const gradientMap = {
  'ai-agents': 'from-purple-600/30 to-blue-600/20',
  'websites': 'from-blue-600/30 to-cyan-600/20',
  'software': 'from-cyan-600/30 to-teal-600/20',
  'automation': 'from-violet-600/30 to-purple-600/20',
};

const stats = [
  { label: 'Projects', value: 50, suffix: '+' },
  { label: 'Industries', value: 30, suffix: '+' },
  { label: 'Repeat Clients', value: 95, suffix: '%' },
  { label: 'Avg Rating', value: 4.9, suffix: '★' },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeFilter);

  return (
    <div className="relative">
      <GradientBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(270,95%,65%)] text-sm font-medium mb-6">
              🏆 Our Work
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent"
          >
            <HoverText text="Our Work Speaks" className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent" highlightHover={false} />
            <br />
            <HoverText text="For Itself" className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent" highlightHover={false} />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[hsl(230,15%,65%)] text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore our portfolio of AI agents, websites, and software solutions that have transformed businesses.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-[hsl(230,25%,7%)]/80 backdrop-blur-2xl border-y border-white/[0.04] px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f.key
                  ? 'text-white'
                  : 'text-[hsl(230,15%,55%)] hover:text-white'
              }`}
            >
              {activeFilter === f.key && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {activeFilter !== f.key && (
                <div className="absolute inset-0 bg-white/[0.04] border border-white/[0.06] rounded-full" />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard hover className="p-0 overflow-hidden h-full flex flex-col group">
                    {/* Image Placeholder */}
                    <div className={`relative h-48 bg-gradient-to-br ${gradientMap[project.category] || 'from-purple-600/20 to-blue-600/20'} flex items-center justify-center overflow-hidden`}>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
                      <span className="font-display text-2xl font-bold text-white/20">{project.title}</span>
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={16} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={categoryColors[project.category] || 'purple'}>
                          {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </Badge>
                        <span className="text-[hsl(230,10%,45%)] text-xs">{project.industry}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-[hsl(230,15%,55%)] text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[hsl(230,15%,55%)] text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Results */}
                      <p className="text-[hsl(185,100%,55%)] text-sm font-medium mb-4">
                        {project.results}
                      </p>

                      {/* Testimonial */}
                      {project.testimonial && (
                        <div className="mt-auto pt-4 border-t border-white/[0.06]">
                          <p className="text-[hsl(230,15%,55%)] text-xs italic leading-relaxed mb-2">
                            &ldquo;{project.testimonial.quote}&rdquo;
                          </p>
                          <p className="text-[hsl(230,10%,45%)] text-xs">
                            — {project.testimonial.author}, {project.testimonial.role}
                          </p>
                        </div>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-[hsl(230,20%,11%)]/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    <AnimatedCounter end={s.value} suffix={s.suffix} duration={2} />
                  </div>
                  <p className="text-[hsl(230,15%,55%)] text-sm">{s.label}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Create Something Amazing</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">Ready to transform your business? Let&apos;s discuss your project.</p>
              <Button variant="secondary" href="/contact">Start Your Project</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
