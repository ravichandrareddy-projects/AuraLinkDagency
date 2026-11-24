'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sparkles,
  Sun,
  Moon,
  MoreHorizontal,
  Code2,
  Cpu,
  Users,
  HelpCircle,
  BarChart3,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import CurrencySelector from '@/components/ui/CurrencySelector';
import { useTheme } from '@/lib/theme-context';
import LogoModal from '@/components/ui/LogoModal';

// Primary desktop navigation links
const primaryNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/websites', label: 'Websites' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

// Overflow features available under the 3-Dots (...) Menu
const moreNavFeatures = [
  {
    href: '/software',
    label: 'Custom Software',
    desc: 'SaaS platforms, Web & Mobile apps',
    icon: Code2,
    badge: 'Popular',
  },
  {
    href: '/clients',
    label: 'Our Clients',
    desc: 'Client roster, case studies & proof',
    icon: Users,
    badge: 'New',
  },
  {
    href: '/tech-stack',
    label: 'Tech Stack & Speeds',
    desc: 'Guaranteed 48h to 7-day turnaround',
    icon: Cpu,
  },
  {
    href: '/faq',
    label: 'FAQ & Guidance',
    desc: 'Pricing, delivery, APIs & integrations',
    icon: HelpCircle,
  },
  {
    href: '/admin',
    label: 'Admin Portal',
    desc: 'Live visitor tracking & geo-analytics',
    icon: BarChart3,
    badge: 'Secure',
  },
];

// All links for mobile drawer
const allNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/websites', label: 'Websites' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/software', label: 'Software' },
  { href: '/clients', label: 'Our Clients' },
  { href: '/tech-stack', label: 'Tech Stack' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin', label: 'Admin Portal' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreMenuRef = useRef(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Check if current route is within the "More" items
  const isMoreActive = moreNavFeatures.some((item) => pathname === item.href);

  // Close "More" dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(e.target)) {
        setIsMoreOpen(false);
      }
    };
    if (isMoreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMoreOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsMoreOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/90 dark:bg-slate-950/90 border-b border-white/15 shadow-2xl py-2.5 sm:py-3 backdrop-blur-2xl'
            : 'bg-white/10 dark:bg-white/[0.06] border-b border-white/20 shadow-xl py-3 sm:py-4 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Logo - Aligned Far Left */}
            <div className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <div
                onClick={() => setIsLogoModalOpen(true)}
                onContextMenu={(e) => e.preventDefault()}
                className="relative w-8 h-8 sm:w-10 sm:h-10 cursor-pointer transition-transform duration-300 group-hover:scale-105 select-none"
                title="Click to view protected emblem"
              >
                <Image
                  src="/logo.png"
                  alt="AuraLink Digital Agency"
                  fill
                  className="object-contain filter drop-shadow-[0_0_10px_rgba(0,212,255,0.5)] select-none pointer-events-none"
                  priority
                  draggable={false}
                />
              </div>
              <Link href="/" className="flex flex-col sm:flex-row sm:items-center items-start leading-none gap-0.5 sm:gap-2">
                <div className="flex items-center gap-0.5">
                  <span className="aura-text-shine font-black text-base sm:text-xl xl:text-2xl tracking-[0.12em]">AURA</span>
                  <span className="link-text-shine font-black text-base sm:text-xl xl:text-2xl tracking-[0.12em]">LINK</span>
                </div>
                <span className="hidden sm:inline-block text-[8px] xl:text-[10px] font-mono font-extrabold tracking-[0.16em] text-cyan-200 uppercase sm:border-l-2 sm:border-cyan-400/50 sm:pl-2 drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
                  DIGITAL AGENCY
                </span>
              </Link>
            </div>

            {/* Desktop / Laptop Navigation: Adapts smoothly on short & wide laptop screens */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {primaryNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white font-extrabold'
                        : 'text-cyan-100/85 hover:text-white hover:bg-cyan-500/20'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-cyan-500/30 border border-cyan-300/40 rounded-full shadow-md shadow-cyan-500/20" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}

              {/* 3-Dots (...) Top Bar Feature Menu */}
              <div className="relative" ref={moreMenuRef}>
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  aria-expanded={isMoreOpen}
                  aria-label="More Features"
                  title="More Features (Software, Clients, Tech Stack, FAQ, Admin)"
                  className={`relative flex items-center gap-1 px-2.5 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-all duration-200 ${
                    isMoreActive || isMoreOpen
                      ? 'bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border border-cyan-400/40 text-white shadow-md shadow-cyan-500/20'
                      : 'text-cyan-100/85 hover:text-white hover:bg-cyan-500/20 border border-transparent'
                  }`}
                >
                  <MoreHorizontal size={18} className={isMoreActive ? 'text-cyan-300' : 'text-cyan-200'} />
                  <span className="hidden xl:inline text-xs font-mono uppercase tracking-wider text-cyan-200/90">More</span>
                  {isMoreActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </button>

                {/* 3-Dots Dropdown Panel */}
                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 mt-2 w-72 p-2 rounded-2xl bg-slate-950/95 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 backdrop-blur-2xl z-50 overflow-hidden"
                    >
                      <div className="px-3 py-2 border-b border-white/[0.08] flex items-center justify-between">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-bold">
                          Feature Suite
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-200 font-mono">
                          AuraLink
                        </span>
                      </div>

                      <div className="py-1 space-y-1">
                        {moreNavFeatures.map((item) => {
                          const Icon = item.icon;
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMoreOpen(false)}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 group ${
                                isActive
                                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 text-white'
                                  : 'hover:bg-white/[0.06] text-slate-300 hover:text-white'
                              }`}
                            >
                              <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                                isActive
                                  ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/40'
                                  : 'bg-white/[0.05] text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-200'
                              }`}>
                                <Icon size={16} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-bold text-white group-hover:text-cyan-200 transition-colors">
                                    {item.label}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-purple-500/25 text-purple-200 border border-purple-400/30">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-1 pt-2 border-t border-white/[0.08] px-2 py-1 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>Direct Dial:</span>
                        <a href="tel:+919440336396" className="text-cyan-300 hover:underline">
                          +91 9440336396
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right Action Tools: Theme Switcher, Currency Selector & CTA */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              {/* Light / Dark Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-1.5 xl:p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={15} className="text-amber-300" /> : <Moon size={15} className="text-purple-300" />}
              </button>

              <CurrencySelector compact />

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 xl:px-4 py-1.5 xl:py-2 text-[11px] xl:text-xs font-extrabold rounded-full bg-white text-slate-950 hover:bg-slate-100 shadow-lg shadow-white/10 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                <Sparkles size={13} className="text-slate-950" />
                <span>Consultation</span>
              </Link>
            </div>

            {/* Mobile / Tablet Controls */}
            <div className="flex items-center gap-1.5 lg:hidden shrink-0">
              <CurrencySelector compact />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-white/10 border border-white/20 text-white"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={16} className="text-amber-300" /> : <Moon size={16} className="text-purple-300" />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/50 text-cyan-200 hover:bg-cyan-500/30 transition-all shadow-md shadow-cyan-500/20"
                aria-label="Toggle Navigation Menu"
                title="Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={22} className="text-cyan-200" /> : <Menu size={22} className="text-cyan-200" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-slate-950 border-l border-white/20 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col items-start leading-none">
                    <div className="font-display font-black text-base tracking-widest uppercase flex items-center">
                      <span className="text-white">AURA</span>
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">LINK</span>
                    </div>
                    <div className="flex items-center gap-1 w-full mt-0.5">
                      <div className="h-[1px] flex-1 bg-cyan-500/60" />
                      <span className="text-[7.5px] font-mono font-bold tracking-[0.2em] text-white/90 uppercase">
                        DIGITAL AGENCY
                      </span>
                      <div className="h-[1px] flex-1 bg-cyan-500/60" />
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/10 text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-1.5 max-h-[60vh] overflow-y-auto pr-1">
                  {allNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        pathname === link.href
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white shadow-md border border-cyan-400/30'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-5 py-3.5 text-sm font-extrabold rounded-xl bg-white text-slate-950 shadow-xl"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Protected Logo Modal */}
      <LogoModal isOpen={isLogoModalOpen} onClose={() => setIsLogoModalOpen(false)} />
    </>
  );
}
