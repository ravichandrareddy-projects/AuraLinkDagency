'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import CurrencySelector from '@/components/ui/CurrencySelector';
import { useTheme } from '@/lib/theme-context';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/software', label: 'Software' },
  { href: '/websites', label: 'Websites' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
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
            ? 'bg-slate-900/90 dark:bg-slate-950/90 border-b border-white/15 shadow-2xl py-3 backdrop-blur-2xl'
            : 'bg-white/10 dark:bg-white/[0.06] border-b border-white/20 shadow-xl py-4 backdrop-blur-xl'
        }`}
      >
        <div className="w-full px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo - Aligned Far Left */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="AuraLink Digital Agency"
                  fill
                  className="object-contain filter drop-shadow-md"
                  priority
                />
              </div>
              <div className="font-display font-black text-xl sm:text-2xl tracking-wider uppercase flex items-center gap-2 leading-none">
                <span className="aurora-rainbow-text font-black">AURALINK</span>
                <span className="text-xs sm:text-sm font-mono font-extrabold tracking-[0.2em] text-cyan-200/90 uppercase ml-0.5 border-l border-cyan-400/40 pl-2">
                  DIGITAL AGENCY
                </span>
              </div>
            </Link>

            {/* Full Screen Desktop Navigation Links - Bigger Blue-White Font */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm sm:text-base font-bold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white font-extrabold'
                        : 'text-cyan-100/90 hover:text-white hover:bg-cyan-500/20'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-cyan-500/30 border border-cyan-300/40 rounded-full shadow-md shadow-cyan-500/20" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Tools: Theme Switcher, Currency Selector & CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {/* Light / Dark Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={16} className="text-amber-300" /> : <Moon size={16} className="text-purple-300" />}
              </button>

              <CurrencySelector compact />

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold rounded-full bg-white text-slate-950 hover:bg-slate-100 shadow-lg shadow-white/10 transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
              >
                <Sparkles size={14} className="text-slate-950" />
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-white/10 text-white"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} className="text-amber-300" /> : <Moon size={18} className="text-purple-300" />}
              </button>
              <CurrencySelector compact />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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

                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                        pathname === link.href
                          ? 'bg-white/20 text-white shadow-md border border-white/30'
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
    </>
  );
}
