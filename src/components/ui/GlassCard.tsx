import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { fadeInUp, transition } from '../../utils/animations'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      transition={transition}
      className={cn(
        "glass-modern rounded-3xl",
        "p-8 md:p-12 lg:p-16",
        hover && "hover:bg-white/[0.05] hover:border-white/20 glow-hover",
        "transition-all duration-500 ease-out",
        "relative overflow-hidden",
        className
      )}
      whileHover={hover ? { scale: 1.01, y: -8 } : undefined}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}


