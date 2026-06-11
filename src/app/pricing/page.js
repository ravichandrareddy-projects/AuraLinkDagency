'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Download, CreditCard, Globe, Bot, Code, Puzzle, Sparkles, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import HoverText from '@/components/ui/HoverText';
import GradientBackground from '@/components/effects/GradientBackground';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { plans, customServices } from '@/lib/pricing-data';

const categoryIcons = { websites: Globe, aiAgents: Bot, software: Code, addons: Puzzle };
const categoryLabels = { websites: 'Websites', aiAgents: 'AI Agents', software: 'Software', addons: 'Add-ons' };

const invoices = [
  { id: 'INV-001', date: 'Jan 15, 2024', amount: '₹25,000', status: 'Paid' },
  { id: 'INV-002', date: 'Feb 15, 2024', amount: '₹5,000', status: 'Paid' },
  { id: 'INV-003', date: 'Mar 15, 2024', amount: '₹50,000', status: 'Pending' },
  { id: 'INV-004', date: 'Apr 15, 2024', amount: '₹10,000', status: 'Paid' },
];

const paymentMethods = [
  { name: 'Visa', primary: true },
  { name: 'Mastercard', primary: false },
  { name: 'UPI', primary: false },
  { name: 'Razorpay', primary: false },
  { name: 'Stripe', primary: false },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const allServices = useMemo(() => {
    const all = [];
    Object.entries(customServices).forEach(([category, items]) => {
      items.forEach(item => all.push({ ...item, category }));
    });
    return all;
  }, []);

  const selectedItems = allServices.filter(s => selectedServices.includes(s.id));
  const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const hasDiscount = selectedItems.length > 3;
  const discount = hasDiscount ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return '₹' + price.toLocaleString('en-IN');
    }
    return price;
  };

  const getDisplayPrice = (plan) => {
    if (plan.price === 'Custom') return 'Custom';
    const price = billingPeriod === 'yearly' ? Math.round(plan.price * 0.8) : plan.price;
    return formatPrice(price);
  };

  return (
    <div className="relative">
      <GradientBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(270,95%,65%)] text-sm font-medium mb-6">
              💰 Transparent Pricing
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
            className="text-[hsl(230,15%,65%)] text-lg md:text-xl max-w-2xl mx-auto"
          >
            Choose a plan or build your custom package. No hidden fees, no surprises.
          </motion.p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="pb-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="relative flex items-center bg-white/[0.04] border border-white/[0.08] rounded-xl p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`relative px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 z-10 ${
                billingPeriod === 'monthly' ? 'text-white' : 'text-[hsl(230,15%,55%)]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`relative px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 z-10 ${
                billingPeriod === 'yearly' ? 'text-white' : 'text-[hsl(230,15%,55%)]'
              }`}
            >
              Yearly
            </button>
            <motion.div
              className="absolute inset-y-1 rounded-lg bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)]"
              initial={false}
              animate={{
                left: billingPeriod === 'monthly' ? '4px' : '50%',
                right: billingPeriod === 'yearly' ? '4px' : '50%',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
          {billingPeriod === 'yearly' && (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
              <Badge variant="purple">Save 20%</Badge>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Standard Plans */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <div className={`relative h-full ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-[60]">
                      <Badge variant="purple">Most Popular</Badge>
                    </div>
                  )}
                  <GlassCard
                    hover
                    className={`p-6 h-full flex flex-col ${
                      plan.popular
                        ? 'ring-2 ring-[hsl(270,95%,65%)] shadow-lg shadow-purple-500/10'
                        : ''
                    }`}
                  >
                    <h3 className="font-display text-lg font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl md:text-4xl font-bold text-white">
                        {getDisplayPrice(plan)}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className="text-[hsl(230,15%,55%)] text-sm ml-1">/project</span>
                      )}
                    </div>
                    {billingPeriod === 'yearly' && plan.price !== 'Custom' && (
                      <p className="text-xs text-[hsl(270,95%,65%)] mb-3">
                        Save {formatPrice(Math.round(plan.price * 0.2))}
                      </p>
                    )}
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feat, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[hsl(230,15%,65%)]">
                          <Check size={16} className="text-[hsl(185,100%,55%)] mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={plan.popular ? 'primary' : 'secondary'}
                      onClick={() => alert('Payment Gateway Integration Coming Soon!')}
                      className="w-full justify-center"
                    >
                      {plan.cta || 'Get Started'}
                    </Button>
                  </GlassCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Builder */}
      <section className="py-24 px-4 bg-[hsl(230,20%,11%)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Build Your Custom Package" subtitle="Select exactly what you need and get an instant price estimate" centered />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8 mt-12">
            {/* Service Selection */}
            <div className="space-y-6">
              {Object.entries(customServices).map(([category, items]) => {
                const Icon = categoryIcons[category];
                return (
                  <GlassCard key={category} className="p-0 overflow-hidden">
                    <div className="px-6 py-4 border-b border-white/[0.06] flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(270,95%,65%)]/15 to-[hsl(210,100%,60%)]/15 flex items-center justify-center">
                        <Icon size={16} className="text-[hsl(270,95%,65%)]" />
                      </div>
                      <h3 className="font-display font-bold text-white">{categoryLabels[category]}</h3>
                    </div>
                    <div className="divide-y divide-white/[0.04]">
                      {items.map((service) => {
                        const isSelected = selectedServices.includes(service.id);
                        return (
                          <button
                            key={service.id}
                            onClick={() => toggleService(service.id)}
                            className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-all duration-200 hover:bg-white/[0.02] ${
                              isSelected ? 'bg-[hsl(270,95%,65%)]/[0.06]' : ''
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 shrink-0 ${
                              isSelected
                                ? 'bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] border-transparent'
                                : 'border-[hsl(230,10%,35%)]'
                            }`}>
                              {isSelected && <Check size={12} className="text-white" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-sm font-medium">{service.name}</p>
                              {service.description && (
                                <p className="text-[hsl(230,10%,45%)] text-xs mt-0.5 truncate">{service.description}</p>
                              )}
                            </div>
                            <span className="text-[hsl(230,15%,55%)] text-sm font-medium shrink-0">
                              {formatPrice(service.price)}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </GlassCard>
                );
              })}
            </div>

            {/* Price Summary */}
            <div className="lg:sticky lg:top-24 h-fit">
              <GlassCard className="p-0 overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)]" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-6">Your Package</h3>

                  {selectedItems.length === 0 ? (
                    <div className="py-12 text-center">
                      <Sparkles size={40} className="text-[hsl(230,10%,35%)] mx-auto mb-3" />
                      <p className="text-[hsl(230,10%,45%)] text-sm">Select services to see pricing</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-3 mb-6 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                        <AnimatePresence>
                          {selectedItems.map((item) => (
                            <motion.div
                              key={item.id}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="text-[hsl(230,15%,65%)] truncate mr-2">{item.name}</span>
                              <span className="text-white font-medium shrink-0">{formatPrice(item.price)}</span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>

                      <div className="border-t border-white/[0.08] pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-[hsl(230,15%,55%)]">Subtotal</span>
                          <span className="text-white">{formatPrice(subtotal)}</span>
                        </div>
                        {hasDiscount && (
                          <div className="flex justify-between text-sm">
                            <span className="text-[hsl(185,100%,55%)]">Bundle Discount (10%)</span>
                            <span className="text-[hsl(185,100%,55%)]">-{formatPrice(discount)}</span>
                          </div>
                        )}
                        <div className="border-t border-white/[0.08] pt-3 flex justify-between items-center">
                          <span className="text-white font-medium">Estimated Total</span>
                          <motion.span
                            key={total}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            className="text-2xl font-bold bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent"
                          >
                            {formatPrice(total)}
                          </motion.span>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="mt-6 space-y-3">
                    <Button variant="primary" href="/contact" className="w-full justify-center">
                      Get Custom Quote
                    </Button>
                    <p className="text-[hsl(230,10%,45%)] text-xs text-center">
                      or call us at +91 98765 43210
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Dashboard */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Billing & Payments" subtitle="Manage your invoices, payment methods, and subscriptions" centered />

          {/* Invoice History */}
          <div className="mt-12">
            <ScrollReveal>
              <GlassCard className="p-0 overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06]">
                  <h3 className="font-display font-bold text-white">Invoice History</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/[0.06]">
                        <th className="text-left px-6 py-3 text-[hsl(230,10%,45%)] text-xs font-medium uppercase tracking-wider">Invoice</th>
                        <th className="text-left px-6 py-3 text-[hsl(230,10%,45%)] text-xs font-medium uppercase tracking-wider">Date</th>
                        <th className="text-left px-6 py-3 text-[hsl(230,10%,45%)] text-xs font-medium uppercase tracking-wider">Amount</th>
                        <th className="text-left px-6 py-3 text-[hsl(230,10%,45%)] text-xs font-medium uppercase tracking-wider">Status</th>
                        <th className="text-right px-6 py-3 text-[hsl(230,10%,45%)] text-xs font-medium uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {invoices.map((inv) => (
                        <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-6 py-4 text-white text-sm font-medium">{inv.id}</td>
                          <td className="px-6 py-4 text-[hsl(230,15%,55%)] text-sm">{inv.date}</td>
                          <td className="px-6 py-4 text-white text-sm font-medium">{inv.amount}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              inv.status === 'Paid'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            }`}>
                              {inv.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-[hsl(230,15%,55%)] hover:text-white transition-colors inline-flex items-center gap-1 text-sm">
                              <Download size={14} /> Download
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Payment Methods */}
          <div className="mt-8">
            <ScrollReveal delay={0.1}>
              <h3 className="font-display font-bold text-white mb-4">Payment Methods</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {paymentMethods.map((pm) => (
                  <GlassCard
                    key={pm.name}
                    className={`p-4 text-center ${pm.primary ? 'ring-1 ring-[hsl(270,95%,65%)]/50' : ''}`}
                  >
                    <CreditCard size={24} className="mx-auto mb-2 text-[hsl(230,15%,55%)]" />
                    <p className="text-white text-sm font-medium">{pm.name}</p>
                    {pm.primary && (
                      <p className="text-[hsl(270,95%,65%)] text-xs mt-1">Primary</p>
                    )}
                  </GlassCard>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Subscription */}
          <div className="mt-8">
            <ScrollReveal delay={0.2}>
              <GlassCard className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display font-bold text-white">Growth Business</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Active
                      </span>
                    </div>
                    <p className="text-[hsl(230,15%,55%)] text-sm">
                      Next renewal: May 15, 2024 • ₹25,000
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="secondary" size="sm">Change Plan</Button>
                    <Button variant="ghost" size="sm">Cancel</Button>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
