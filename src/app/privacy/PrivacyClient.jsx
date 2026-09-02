'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import GradientBackground from '@/components/effects/GradientBackground';

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen pb-24">
      <GradientBackground />

      <section className="relative pt-32 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[hsl(185,100%,55%)] text-xs font-semibold mb-6">
            🔒 Legal Compliance & Trust
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-[hsl(230,15%,65%)] text-sm max-w-lg mx-auto">
            Last Updated: January 2026. Learn how AuraLink Digital Agency protects your personal information and transaction data.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 max-w-4xl mx-auto space-y-8">
        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <h2 className="font-display text-xl font-bold text-white mb-4">1. Information We Collect</h2>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed mb-4">
            AuraLink Digital Agency collects information required to provide web development, AI agent solutions, custom software engineering, and technical SEO services. This includes:
          </p>
          <ul className="list-disc pl-5 text-sm text-[hsl(230,15%,70%)] space-y-2">
            <li><strong>Personal Contact Data:</strong> Name, business email address, phone number, and project specifications provided via contact forms or consultations.</li>
            <li><strong>Payment & Billing Data:</strong> Payment transactions processed through our PCI-DSS compliant partner <strong>Razorpay</strong>. AuraLink does not store full credit/debit card numbers or UPI PINs on our servers.</li>
            <li><strong>Usage & Device Data:</strong> IP address, browser type, device identifiers, and pages visited to optimize website speed and security.</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <h2 className="font-display text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed mb-4">
            We use the information collected exclusively for legitimate business purposes:
          </p>
          <ul className="list-disc pl-5 text-sm text-[hsl(230,15%,70%)] space-y-2">
            <li>Delivering custom digital agency services, AI agent configurations, and software products.</li>
            <li>Processing secure payments, invoice generation, and order confirmations via Razorpay.</li>
            <li>Communicating project updates, milestone deliverables, and technical support.</li>
            <li>Ensuring website security, preventing fraudulent activity, and complying with legal obligations.</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <h2 className="font-display text-xl font-bold text-white mb-4">3. Data Sharing & Payment Gateway Security</h2>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed mb-4">
            We never sell, rent, or trade your personal information. Data is shared strictly with trusted operational infrastructure partners:
          </p>
          <ul className="list-disc pl-5 text-sm text-[hsl(230,15%,70%)] space-y-2">
            <li><strong>Razorpay Software Private Limited:</strong> Encrypted payment tokenization, UPI transactions, card processing, and netbanking authentication.</li>
            <li><strong>Cloud & Hosting Infrastructure:</strong> Vercel, AWS, and secure database services enforcing SSL encryption in transit and at rest.</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8 border border-white/[0.08]" hover={false}>
          <h2 className="font-display text-xl font-bold text-white mb-4">4. Your Data Rights & Contact</h2>
          <p className="text-sm text-[hsl(230,15%,70%)] leading-relaxed mb-4">
            You have the right to request access to, correction of, or deletion of your personal data held by AuraLink Digital Agency.
          </p>
          <p className="text-sm text-[hsl(230,15%,70%)]">
            For privacy inquiries or data requests, contact our Data Officer at <strong>privacy@auralink.agency</strong> or call <strong>+91 98765 43210</strong>.
          </p>
        </GlassCard>
      </section>
    </div>
  );
}
