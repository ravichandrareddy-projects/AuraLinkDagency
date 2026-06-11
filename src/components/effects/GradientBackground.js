'use client'

export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[hsl(270,95%,65%)]/[0.08] rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(210,100%,60%)]/[0.06] rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-[hsl(185,100%,55%)]/[0.04] rounded-full blur-[120px] animate-blob animation-delay-4000" />
    </div>
  )
}
