'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import GradientBackground from '@/components/effects/GradientBackground';

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen pb-24">
      <GradientBackground />

      <section className="relative pt-32 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(270,95%,65%)] text-xs font-semibold mb-6">
            📜 Service Agreement & Policies
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-[hsl(230,15%,65%)] text-sm max-w-lg mx-auto">
            Last Updated: January 2026. Terms governing services, deliverables, billing, and Razorpay payment transactions.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 max-w-4xl mx-auto space-y-8">
        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <h2 className="font-display text-xl font-bold text-white mb-4">1. Agreement Overview</h2>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed">
            By engaging AuraLink Digital Agency (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;) or placing an order via our online platform, you (&quot;Client&quot;) agree to these Terms of Service. Our services include Website & E-Commerce Development, AI Agent Engineering, Custom Software Solutions, Automation, and Technical SEO.
          </p>
        </GlassCard>

        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <h2 className="font-display text-xl font-bold text-white mb-4">2. Payments, Billing & Razorpay Integration</h2>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed mb-4">
            We accept online payments via <strong>Razorpay</strong> (supporting UPI, Credit Cards, Debit Cards, NetBanking, and Digital Wallets in INR, USD, and EUR):
          </p>
          <ul className="list-disc pl-5 text-sm text-[hsl(230,15%,70%)] space-y-2">
            <li><strong>Fixed Pricing & Retainers:</strong> Project fees are agreed upon prior to project kickoff or via online package selection.</li>
            <li><strong>Currency Conversion:</strong> Displayed multi-currency rates are predefined fixed estimates. Final billing is processed in the chosen currency authorized during Razorpay checkout.</li>
            <li><strong>Third-Party Infrastructure Fees:</strong> Development fees cover AuraLink services. Third-party usage (e.g., Telephony minutes, Meta WhatsApp API fees, AI LLM API tokens) is billed directly by respective providers.</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <h2 className="font-display text-xl font-bold text-white mb-4">3. Refund, Cancellation & Milestone Deliverables</h2>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed mb-4">
            Client satisfaction is our top priority. Our refund & cancellation policy operates as follows:
          </p>
          <ul className="list-disc pl-5 text-sm text-[hsl(230,15%,70%)] space-y-2">
            <li><strong>Pre-Development Cancellations:</strong> Orders canceled within 24 hours of payment before discovery phase kickoff are eligible for a full refund via Razorpay.</li>
            <li><strong>Milestone Payments:</strong> Once discovery, design wireframes, or custom software code development has commenced, fees are non-refundable for completed milestones.</li>
            <li><strong>Dispute Resolution:</strong> Payment queries or billing issues should be directed to <strong>billing@auralink.agency</strong> before initiating payment gateway chargebacks.</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <h2 className="font-display text-xl font-bold text-white mb-4">4. Intellectual Property & Ownership</h2>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed">
            Upon receipt of full payment via Razorpay or bank transfer, all custom source code, design assets, and website IP engineered specifically for the Client are transferred completely to the Client. AuraLink retains rights to proprietary reusable libraries and framework boilerplate.
          </p>
        </GlassCard>

        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <h2 className="font-display text-xl font-bold text-white mb-4">5. Contact Information</h2>
          <p className="text-sm text-[hsl(230,15%,70%)]">
            For legal notices or questions regarding these Terms, contact us at <strong>legal@auralink.agency</strong> or visit our headquarters in Bangalore, India.
          </p>
        </GlassCard>
      </section>
    </div>
  );
}
