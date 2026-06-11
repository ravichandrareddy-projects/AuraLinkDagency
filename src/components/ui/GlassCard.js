'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg'])

  const glareX = useTransform(x, v => (v + 0.5) * 100)
  const glareY = useTransform(y, v => (v + 0.5) * 100)
  const background = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`

  const handleMouseMove = (e) => {
    if (!hover || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const hasHFull = className.includes('h-full')

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className={`relative ${hasHFull ? 'h-full' : ''} ${hover && isHovered ? 'z-50' : 'z-10'}`}
    >
      <motion.div
        style={hover ? { rotateX, rotateY } : {}}
        className={`relative w-full ${hasHFull ? 'h-full' : ''} bg-white/[0.03] backdrop-blur-[24px] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden transition-colors duration-300`}
        whileHover={hover ? { 
          backgroundColor: 'rgba(255, 255, 255, 0.05)', 
          borderColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 20px 40px 0 rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)',
          scale: 1.02,
        } : {}}
      >
        {/* Dynamic glare spotlight effect */}
        {hover && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
            style={{
              background,
              opacity: isHovered ? 1 : 0
            }}
          />
        )}
        
        <div className={`relative z-10 w-full ${hasHFull ? 'h-full' : ''} ${className}`}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}
