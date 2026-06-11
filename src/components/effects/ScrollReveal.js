'use client'

import { motion } from 'framer-motion'

const directionVariants = {
  up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
}

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0 }) {
  const variant = directionVariants[direction] || directionVariants.up

  return (
    <motion.div
      className={className}
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
