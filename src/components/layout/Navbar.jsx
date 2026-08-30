'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import CurrencySelector from '@/components/ui/CurrencySelector';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/software', label: 'Software' },
  { href: '/websites', label: 'Websites' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-3 py-3 transition-all duration-300 pointer-events-none"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? 'bg-[rgba(15,15,30,0.85)] backdrop-blur-xl border border-white/[0.1] shadow-2xl shadow-purple-950/20 rounded-full px-5 py-2.5'
            : 'bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-2xl px-6 py-3.5'
        }`}>
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="AuraLink Digital Agency"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-[hsl(270,95%,65%)] via-[hsl(210,100%,60%)] to-[hsl(185,100%,55%)] bg-clip-text text-transparent">
                AuraLink
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-[hsl(230,15%,70%)] hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-gradient-to-r from-[hsl(270,95%,65%)]/20 to-[hsl(210,100%,60%)]/20 rounded-full border border-[hsl(270,95%,65%)]/40 shadow-sm shadow-purple-500/20"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Items */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <CurrencySelector compact />
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] text-white shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                <Sparkles size={13} />
                <span>Get Started</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <CurrencySelector compact />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.1] transition-all"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[hsl(230,25%,7%)] border-l border-white/[0.1] z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display font-bold text-lg bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent">
                    AuraLink
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Link
                    href="/"
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      pathname === '/' ? 'bg-white/[0.08] text-white font-bold' : 'text-[hsl(230,15%,65%)]'
                    }`}
                  >
                    Home
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        pathname === link.href
                          ? 'bg-white/[0.08] text-white font-bold border border-white/[0.08]'
                          : 'text-[hsl(230,15%,65%)] hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] text-white shadow-lg shadow-purple-500/25"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
