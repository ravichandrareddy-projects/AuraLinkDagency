'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceLinks = [
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/software', label: 'Software Products' },
  { href: '/websites', label: 'Website Development' },
  { href: '/pricing', label: 'Pricing & Billing' },
];

const companyLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[hsl(230,20%,6%)] border-t border-white/[0.06]">
      {/* Gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[hsl(270,95%,65%)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <Image src="/logo.png" alt="AuraLink" fill className="object-contain" />
              </div>
              <span className="font-display font-bold text-lg bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent">
                AuraLink
              </span>
            </Link>
            <p className="text-[hsl(230,15%,55%)] text-sm leading-relaxed mb-6">
              We build AI-powered agents, custom software products, and modern websites that automate operations and drive revenue for businesses worldwide.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[hsl(230,15%,55%)] hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[hsl(230,15%,55%)] text-sm hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[hsl(230,15%,55%)] text-sm hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Stay Updated
            </h4>
            <p className="text-[hsl(230,15%,55%)] text-sm mb-4">
              Get the latest updates on AI, software, and web development.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 text-sm bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-[hsl(230,10%,40%)] focus:outline-none focus:border-[hsl(270,95%,65%)]/50 focus:ring-1 focus:ring-[hsl(270,95%,65%)]/25 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-[hsl(230,15%,55%)] text-sm">
                <Mail size={14} />
                <span>hello@auralink.agency</span>
              </div>
              <div className="flex items-center gap-3 text-[hsl(230,15%,55%)] text-sm">
                <Phone size={14} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-[hsl(230,15%,55%)] text-sm">
                <MapPin size={14} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(230,10%,40%)] text-sm">
            © 2026 AuraLink Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[hsl(230,10%,40%)] text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[hsl(230,10%,40%)] text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
