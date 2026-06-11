'use client'

const variantStyles = {
  purple: 'bg-[hsl(270,95%,65%)]/15 text-[hsl(270,95%,65%)] border-[hsl(270,95%,65%)]/25',
  blue: 'bg-[hsl(210,100%,60%)]/15 text-[hsl(210,100%,60%)] border-[hsl(210,100%,60%)]/25',
  cyan: 'bg-[hsl(185,100%,55%)]/15 text-[hsl(185,100%,55%)] border-[hsl(185,100%,55%)]/25',
  glass: 'bg-white/[0.06] text-[hsl(230,15%,65%)] border-white/[0.08]',
}

export default function Badge({ children, variant = 'purple' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border ${variantStyles[variant]}`}>
      {children}
    </span>
  )
}
