'use client';

import { useState, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

export default function SwipeStickTrack({
  children,
  itemCount = 3,
  trackClassName = '',
  stickVariant = 'emerald',
  mobileOnlyStick = false,
  stickLabel = 'Slide Stick or Swipe Cards',
}) {
  const trackRef = useRef(null);
  const railRef = useRef(null);
  const isDraggingCardsRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const isDraggingStickRef = useRef(false);

  const [progress, setProgress] = useState(0);

  const syncProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 2) {
      setProgress(0);
      return;
    }
    setProgress(Math.max(0, Math.min(1, track.scrollLeft / maxScroll)));
  }, []);

  // Scrub horizontal scroll directly from pointer position on the Swipe Stick rail
  const scrubFromClientX = useCallback((clientX) => {
    const rail = railRef.current;
    const track = trackRef.current;
    if (!rail || !track) return;
    const rect = rail.getBoundingClientRect();
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (rect.width <= 0 || maxScroll <= 0) return;

    const thumbFraction = Math.min(0.45, Math.max(0.24, 1 / Math.max(2, itemCount)));
    const thumbPx = rect.width * thumbFraction;
    const usableWidth = Math.max(1, rect.width - thumbPx);
    const offset = clientX - rect.left - thumbPx / 2;
    const ratio = Math.max(0, Math.min(1, offset / usableWidth));

    track.scrollLeft = ratio * maxScroll;
    setProgress(ratio);
  }, [itemCount]);

  // Pointer drag on the card track itself (supports desktop mouse swipe + touch)
  const handleCardsPointerDown = (e) => {
    if (e.pointerType === 'touch') return;
    if (e.target?.closest?.('a, button, input, select, textarea')) return;
    const track = trackRef.current;
    if (!track) return;
    isDraggingCardsRef.current = true;
    startXRef.current = e.clientX;
    startScrollLeftRef.current = track.scrollLeft;
  };

  const handleCardsPointerMove = (e) => {
    if (!isDraggingCardsRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const dx = e.clientX - startXRef.current;
    track.scrollLeft = startScrollLeftRef.current - dx;
  };

  const handleCardsPointerUp = () => {
    isDraggingCardsRef.current = false;
  };

  // Pointer drag/tap on the Swipe Stick rail
  const handleRailPointerDown = (e) => {
    isDraggingStickRef.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    scrubFromClientX(e.clientX);
  };

  const handleRailPointerMove = (e) => {
    if (!isDraggingStickRef.current) return;
    scrubFromClientX(e.clientX);
  };

  const handleRailPointerUp = (e) => {
    isDraggingStickRef.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const thumbPct = Math.round(Math.min(44, Math.max(26, 100 / Math.max(2, itemCount))));
  const thumbLeftPct = progress * (100 - thumbPct);

  const thumbColors =
    stickVariant === 'gold'
      ? 'bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 shadow-amber-600/30'
      : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 shadow-emerald-600/30';

  const railColors =
    stickVariant === 'gold'
      ? 'bg-amber-50/90 border-amber-300/80'
      : 'bg-slate-100/90 border-slate-200/90';

  return (
    <div>
      {/* Swipeable Cards Track */}
      <div
        ref={trackRef}
        onScroll={syncProgress}
        onPointerDown={handleCardsPointerDown}
        onPointerMove={handleCardsPointerMove}
        onPointerUp={handleCardsPointerUp}
        onPointerLeave={handleCardsPointerUp}
        className={trackClassName}
      >
        {children}
      </div>

      {/* Tactile Glass Left <-> Right Swipe Stick */}
      <div className={`${mobileOnlyStick ? 'lg:hidden' : ''} mt-4 max-w-md mx-auto select-none`}>
        <div
          ref={railRef}
          onPointerDown={handleRailPointerDown}
          onPointerMove={handleRailPointerMove}
          onPointerUp={handleRailPointerUp}
          onPointerCancel={handleRailPointerUp}
          role="slider"
          aria-label={stickLabel}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          tabIndex={0}
          className={`relative h-10 rounded-full border backdrop-blur-xl shadow-inner p-1 cursor-ew-resize touch-none ${railColors}`}
        >
          {/* Subtle Track Helper Text Behind Stick */}
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
            <span>← Left</span>
            <span>Right →</span>
          </div>

          {/* Sliding Liquid Glass Stick Thumb */}
          <div
            style={{
              width: `${thumbPct}%`,
              left: `${thumbLeftPct}%`,
            }}
            className={`relative z-10 h-full rounded-full ${thumbColors} shadow-md flex items-center justify-center gap-1.5 text-[#ffffff] text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-[box-shadow]`}
          >
            <MoveHorizontal size={14} className="shrink-0" />
            <span>Swipe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
