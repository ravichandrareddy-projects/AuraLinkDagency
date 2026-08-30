'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert } from 'lucide-react';

export default function LogoModal({ isOpen, onClose }) {
  const [isSecureBlackout, setIsSecureBlackout] = useState(false);

  useEffect(() => {
    // Detect PrintScreen key pressed or print media
    const handleKeyDown = (e) => {
      if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 'p') || (e.metaKey && e.key === 'p')) {
        setIsSecureBlackout(true);
        setTimeout(() => setIsSecureBlackout(false), 2000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl select-none">
        {/* Anti-screen capture / Print CSS style injection */}
        <style jsx global>{`
          @media print {
            body {
              display: none !important;
            }
          }
        `}</style>

        {/* Modal Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative z-10 max-w-lg w-full p-6 sm:p-8 rounded-3xl bg-slate-950 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 text-center overflow-hidden select-none"
          onContextMenu={(e) => e.preventDefault()} // Disable right click
          onDragStart={(e) => e.preventDefault()} // Disable drag
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all z-20"
            title="Close Preview"
          >
            <X size={20} />
          </button>

          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold mb-6">
            <ShieldAlert size={14} className="text-cyan-400" /> Protected Brand Emblem
          </div>

          {/* Secure Image Display with Blackout Layer */}
          <div
            className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto my-4 rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center select-none"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* The Logo Image */}
            <div className="relative w-full h-full p-4 pointer-events-none select-none">
              <Image
                src="/logo.png"
                alt="AuraLink Official Logo"
                fill
                className="object-contain pointer-events-none select-none filter drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]"
                draggable={false}
              />
            </div>

            {/* Invisible Security Touch Shield Overlay */}
            <div
              className="absolute inset-0 z-10 bg-transparent cursor-default pointer-events-auto"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />

            {/* Anti-Screenshot Blackout Cover Layer */}
            {isSecureBlackout && (
              <div className="absolute inset-0 z-30 bg-black flex flex-col items-center justify-center text-rose-400 p-4">
                <ShieldAlert size={32} className="mb-2 animate-bounce" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-center">
                  Screen Capture Restricted
                </span>
              </div>
            )}
          </div>

          {/* Footer Protection Note */}
          <p className="text-[11px] font-mono text-slate-400 mt-4 tracking-wide">
            © AuraLink Digital Agency. Proprietary Logo Mark. Direct saving & right-click disabled.
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
