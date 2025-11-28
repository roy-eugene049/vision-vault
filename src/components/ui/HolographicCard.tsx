import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useRole } from '../../contexts/RoleContext'
import { scaleIn, transition } from '../../utils/animations'

interface HolographicCardProps {
  children: ReactNode
  className?: string
}

export function HolographicCard({ children, className = '' }: HolographicCardProps) {
  const { theme } = useRole()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={scaleIn}
      transition={transition}
      className={`
        relative p-6 rounded-xl
        bg-gradient-to-br from-white/5 to-white/0
        border border-white/10
        overflow-hidden
        group
        ${className}
      `}
      whileHover={{ scale: 1.05, y: -4 }}
      style={{
        boxShadow: `0 0 20px ${theme.primaryColor}20, inset 0 0 20px ${theme.primaryColor}10`,
      }}
    >
      {/* Animated border gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.primaryColor}40, transparent)`,
          animation: 'shimmer 3s infinite',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </motion.div>
  )
}


