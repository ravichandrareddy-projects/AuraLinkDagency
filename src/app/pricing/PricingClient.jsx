'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Globe, Bot, Code, Puzzle, Sparkles, ArrowRight, ShieldAlert, Layers, HelpCircle } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import HoverText from '@/components/ui/HoverText';
import GradientBackground from '@/components/effects/GradientBackground';
import ScrollReveal from '@/components/effects/ScrollReveal';
import CurrencySelector from '@/components/ui/CurrencySelector';
import RazorpayButton from '@/components/ui/RazorpayButton';
import InteractivePaymentPortal from '@/components/ui/InteractivePaymentPortal';
import { useCurrency } from '@/lib/currency-context';
import { packages, customServices } from '@/lib/pricing-data';

const categoryIcons = {
  packages: Layers,
  websites: Globe,
  aiAgents: Bot,
  software: Code,
  addons: Puzzle,
};

const categoryLabels = {
  packages: 'Packages & Bundles',
  websites: 'Websites & E-Commerce',
  aiAgents: 'AI Agent Solutions',
  software: 'Custom Software',
  addons: 'Add-ons & Support',
};

export default function PricingPage() {
  const { currency, formatPrice } = useCurrency();
  const [activeTab, setActiveTab] = useState('packages');
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]
    );
  };

  const allServiceItems = useMemo(() => {
    const list = [];
    Object.entries(customServices).forEach(([catKey, items]) => {
      items.forEach((item) => list.push({ ...item, category: catKey }));
    });
    return list;
  }, []);

  const selectedItems = allServiceItems.filter((s) => selectedServices.includes(s.id));

  return (
    <div className="relative min-h-screen pb-24">
      <GradientBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(270,95%,65%)] text-sm font-medium mb-6">
              💰 Transparent Localized Pricing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent"
          >
            <HoverText text="Simple Pricing For" className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent" highlightHover={false} />
            <br />
            <HoverText text="Every Business" className="bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent" highlightHover={false} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[hsl(230,15%,65%)] text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Select your preferred currency. Transparent fixed rates with no hidden live conversion fees.
          </motion.p>

          {/* Currency Switcher Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 p-2 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-xl"
          >
            <span className="text-xs font-semibold text-[hsl(230,15%,65%)] pl-2">Select Display Currency:</span>
            <CurrencySelector />
          </motion.div>
        </div>
      </section>

      {/* Interactive Custom Payment & Search Portal */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <InteractivePaymentPortal />
      </section>

      {/* Category Tabs */}
      <section className="py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {Object.keys(categoryLabels).map((catKey) => {
              const Icon = categoryIcons[catKey];
              const isActive = activeTab === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setActiveTab(catKey)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] text-white shadow-lg shadow-purple-500/20 font-semibold'
                      : 'text-[hsl(230,15%,65%)] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon size={16} />
                  <span>{categoryLabels[catKey]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content Display */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Packages View */}
          {activeTab === 'packages' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <ScrollReveal key={pkg.id} delay={i * 0.08}>
                  <GlassCard
                    hover
                    className={`p-6 h-full flex flex-col justify-between relative ${
                      pkg.popular ? 'ring-2 ring-[hsl(270,95%,65%)] shadow-xl shadow-purple-500/15' : ''
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge variant="purple">Most Popular</Badge>
                      </div>
                    )}
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-1">{pkg.name}</h3>
                      <p className="text-[hsl(230,15%,55%)] text-xs mb-4">{pkg.tagline}</p>

                      <div className="mb-6">
                        <span className="text-3xl sm:text-4xl font-extrabold text-white">
                          {formatPrice(pkg.prices)}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feat, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-[hsl(230,15%,70%)]">
                            <Check size={16} className="text-[hsl(185,100%,55%)] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {pkg.note && (
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs mb-6">
                          ⚠️ {pkg.note}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <RazorpayButton
                        amountMap={pkg.prices}
                        serviceName={pkg.name}
                        className="w-full"
                        buttonText="Pay & Book Now (Razorpay)"
                      />
                      <Button variant="ghost" size="sm" href="/contact" className="w-full justify-center">
                        {pkg.cta} <ArrowRight size={14} />
                      </Button>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Websites View */}
          {activeTab === 'websites' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customServices.websites.map((srv, i) => (
                <ScrollReveal key={srv.id} delay={i * 0.05}>
                  <GlassCard hover className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[hsl(185,100%,55%)]">Web Development</span>
                      <h3 className="font-display text-lg font-bold text-white mt-1 mb-2">{srv.name}</h3>
                      <p className="text-[hsl(230,15%,60%)] text-xs mb-4 leading-relaxed">{srv.description}</p>

                      <div className="mb-5">
                        <span className="text-2xl font-bold gradient-text">{formatPrice(srv.prices)}</span>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {srv.features.map((f, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-[hsl(230,15%,70%)]">
                            <Check size={14} className="text-[hsl(185,100%,55%)] shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <RazorpayButton amountMap={srv.prices} serviceName={srv.name} className="w-full" />
                      <Button variant="ghost" size="sm" href="/contact" className="w-full justify-center">
                        Get Custom Scope <ArrowRight size={14} />
                      </Button>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* AI Agents View */}
          {activeTab === 'aiAgents' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customServices.aiAgents.map((agent, i) => (
                <ScrollReveal key={agent.id} delay={i * 0.05}>
                  <GlassCard hover className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[hsl(270,95%,65%)]">AI Agent Solution</span>
                      <h3 className="font-display text-lg font-bold text-white mt-1 mb-2">{agent.name}</h3>
                      <p className="text-[hsl(230,15%,60%)] text-xs mb-4 leading-relaxed">{agent.description}</p>

                      <div className="mb-4">
                        <span className="text-2xl font-bold gradient-text">{formatPrice(agent.prices)}</span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {agent.features.map((f, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-[hsl(230,15%,70%)]">
                            <Check size={14} className="text-[hsl(185,100%,55%)] shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      {agent.usageNotice && (
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[11px] text-[hsl(230,15%,60%)] mb-6">
                          ℹ️ <span className="italic">{agent.usageNotice}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <RazorpayButton amountMap={agent.prices} serviceName={agent.name} className="w-full" buttonText="Pay & Deploy Agent" />
                      <Button variant="ghost" size="sm" href="/contact" className="w-full justify-center">
                        Book Demo Call <ArrowRight size={14} />
                      </Button>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Software View */}
          {activeTab === 'software' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customServices.software.map((sw, i) => (
                <ScrollReveal key={sw.id} delay={i * 0.05}>
                  <GlassCard hover className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[hsl(210,100%,60%)]">Custom Software</span>
                      <h3 className="font-display text-lg font-bold text-white mt-1 mb-2">{sw.name}</h3>
                      <p className="text-[hsl(230,15%,60%)] text-xs mb-4 leading-relaxed">{sw.description}</p>

                      <div className="mb-4">
                        {sw.isCustomQuote ? (
                          <span className="text-2xl font-bold text-[hsl(185,100%,55%)]">Custom Quote</span>
                        ) : (
                          <div>
                            <span className="text-xs text-[hsl(230,15%,55%)] block">Starting from</span>
                            <span className="text-2xl font-bold gradient-text">
                              {formatPrice(sw.prices, true)}
                            </span>
                          </div>
                        )}
                      </div>

                      {sw.erpExplanation && (
                        <div className="p-3 rounded-xl bg-[hsl(270,95%,65%)]/10 border border-[hsl(270,95%,65%)]/20 text-xs text-[hsl(230,15%,80%)] mb-4">
                          <strong className="text-[hsl(270,95%,65%)] block mb-1">Enterprise ERP Scope:</strong>
                          {sw.erpExplanation}
                        </div>
                      )}

                      <ul className="space-y-2 mb-6">
                        {sw.features.map((f, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-[hsl(230,15%,70%)]">
                            <Check size={14} className="text-[hsl(185,100%,55%)] shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="ghost" size="sm" href="/contact" className="w-full justify-center">
                      Request Consultation <ArrowRight size={14} />
                    </Button>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Add-ons View */}
          {activeTab === 'addons' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {customServices.addons.map((add, i) => (
                <ScrollReveal key={add.id} delay={i * 0.05}>
                  <GlassCard hover className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[hsl(185,100%,55%)]">Add-on Service</span>
                      <h3 className="font-display text-lg font-bold text-white mt-1 mb-2">{add.name}</h3>
                      <p className="text-[hsl(230,15%,60%)] text-xs mb-4 leading-relaxed">{add.description}</p>

                      <div className="mb-4">
                        <span className="text-2xl font-bold gradient-text">
                          {formatPrice(add.prices, false, add.period || '')}
                        </span>
                      </div>

                      {add.regionalNote && (
                        <p className="text-xs text-[hsl(230,15%,50%)] italic mb-4">{add.regionalNote}</p>
                      )}
                    </div>

                    <Button variant="ghost" size="sm" href="/contact" className="w-full justify-center">
                      Add to Package <ArrowRight size={14} />
                    </Button>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Disclaimers & Scope Transparency Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <GlassCard className="p-6 md:p-8 border border-white/[0.08]" hover={false}>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white mb-2">Important Scope & Infrastructure Notes</h4>
              <ul className="space-y-2 text-xs text-[hsl(230,15%,65%)] leading-relaxed list-disc pl-4">
                <li>
                  <strong>Development vs. Usage Billed Separately:</strong> AI Agent pricing covers development, prompt engineering, and integration. Third-party infrastructure costs (Voice carrier minutes, Meta WhatsApp API charges, OpenAI/LLM API calls) are billed separately based on consumption.
                </li>
                <li>
                  <strong>Scope Dependent Software:</strong> Prices listed for Custom Software & Web Apps indicate entry starting thresholds. Final cost depends on total pages, API complexity, role permissions, and database volume.
                </li>
                <li>
                  <strong>Complete SEO Included:</strong> Technical SEO, metadata, sitemap generation, and mobile speed optimization are standard components included in all AuraLink website projects.
                </li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] shadow-2xl relative overflow-hidden">
            <h2 className="font-display text-3xl font-extrabold text-white mb-3">Need a Custom Tailored Package?</h2>
            <p className="text-white/80 text-sm max-w-xl mx-auto mb-8">
              Speak with our senior solutions engineers to get a clear scope breakdown and fixed proposal.
            </p>
            <Button variant="secondary" href="/contact">
              Talk to AuraLink Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
