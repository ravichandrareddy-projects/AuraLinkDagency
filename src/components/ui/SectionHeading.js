'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function SectionHeading({ title, subtitle, centered = false, gradient = false }) {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${gradient ? 'bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] bg-clip-text text-transparent' : 'text-[hsl(0,0%,95%)]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[hsl(230,15%,65%)] text-lg max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
