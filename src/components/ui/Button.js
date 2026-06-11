'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] text-white hover:shadow-lg hover:shadow-accent-purple/25',
  secondary: 'bg-white/[0.08] text-[hsl(0,0%,95%)] border border-white/[0.12] hover:bg-white/[0.12]',
  ghost: 'text-[hsl(230,15%,65%)] hover:text-[hsl(0,0%,95%)] hover:bg-white/[0.06]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
}

export default function Button({ children, variant = 'primary', size = 'md', href, onClick, type, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.span>
      </Link>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
