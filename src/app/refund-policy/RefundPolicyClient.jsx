'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, CheckCircle2, Clock, ShieldCheck, Mail, Phone } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import GradientBackground from '@/components/effects/GradientBackground';

export default function RefundPolicyClient() {
  return (
    <div className="relative min-h-screen pb-24">
      <GradientBackground />

      <section className="relative pt-32 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6">
            ⚖️ Transparent Client Protection
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-[hsl(230,15%,65%)] text-sm max-w-lg mx-auto">
            Last Updated: January 2026. Clear guidelines for order cancellations, milestone deliverables, and Razorpay payment settlements.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 max-w-4xl mx-auto space-y-8">
        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
              <Clock className="w-5 h-5 text-cyan-300" />
            </div>
            <h2 className="font-display text-xl font-bold text-white">1. Cancellation Period (Pre-Development)</h2>
          </div>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed mb-4">
            We understand that project scopes or business priorities may shift. We provide a risk-free cancellation window:
          </p>
          <ul className="list-disc pl-5 text-sm text-[hsl(230,15%,70%)] space-y-2">
            <li><strong>24-Hour Notice:</strong> If you cancel an order within 24 hours of payment and before discovery/design kickoff, you are eligible for a <strong>100% full refund</strong> with no cancellation fee.</li>
            <li><strong>How to Cancel:</strong> Submit your cancellation request via email to <strong className="text-white">hello@auralinkdigitalagency.indevs.in</strong> or send an urgent WhatsApp notice to <strong className="text-white">+91 9440336396</strong> citing your invoice / transaction ID.</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-purple-300" />
            </div>
            <h2 className="font-display text-xl font-bold text-white">2. Milestone Delivery & Ongoing Work</h2>
          </div>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed mb-4">
            Our custom development (Websites, AI Agents, SaaS software) operates on transparent milestone stages:
          </p>
          <ul className="list-disc pl-5 text-sm text-[hsl(230,15%,70%)] space-y-2">
            <li><strong>Active Milestones:</strong> Once a milestone (e.g., UI/UX design, architecture setup, custom API integration) is initiated and work has commenced, payments allocated to that milestone are non-refundable as they cover direct developer and designer labor hours.</li>
            <li><strong>Subsequent Milestones:</strong> If you wish to discontinue a project mid-way, you will not be billed for any uncommenced future milestones. All completed deliverables and assets produced up to that date will be handed over to you.</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-300" />
            </div>
            <h2 className="font-display text-xl font-bold text-white">3. Revisions & Quality Guarantee</h2>
          </div>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed mb-4">
            We are dedicated to your total satisfaction:
          </p>
          <ul className="list-disc pl-5 text-sm text-[hsl(230,15%,70%)] space-y-2">
            <li><strong>Complimentary Revisions:</strong> Every website and custom software project includes up to 3 rounds of structural revisions to ensure the deliverable matches your specifications.</li>
            <li><strong>Post-Launch Warranty:</strong> We provide 30 days of complimentary bug-fixing and technical monitoring post-deployment to ensure peak stability.</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-blue-300" />
            </div>
            <h2 className="font-display text-xl font-bold text-white">4. Refund Processing Time (Razorpay)</h2>
          </div>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed mb-4">
            When a refund is approved by AuraLink Digital Agency:
          </p>
          <ul className="list-disc pl-5 text-sm text-[hsl(230,15%,70%)] space-y-2">
            <li>Refunds are initiated directly via our <strong>Razorpay Payment Gateway</strong> back to the original source method (UPI account, Credit/Debit card, or NetBanking).</li>
            <li>Processing typically takes <strong>5 to 7 business days</strong> to reflect in your bank account, depending on your issuing financial institution.</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <h2 className="font-display text-xl font-bold text-white mb-4">5. Billing Inquiries & Dispute Resolution</h2>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed mb-4">
            If you have questions regarding an invoice or charge, our executive team is ready to resolve it promptly:
          </p>
          <div className="space-y-2 text-sm text-[hsl(230,15%,70%)] font-mono">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Email:</span>
              <a href="mailto:hello@auralinkdigitalagency.indevs.in" className="text-cyan-300 hover:underline">
                hello@auralinkdigitalagency.indevs.in
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>WhatsApp / Call:</span>
              <a href="tel:+919440336396" className="text-cyan-300 hover:underline">
                +91 9440336396
              </a>
            </p>
            <p>AuraLink Digital Agency, Andhra Pradesh, India</p>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
