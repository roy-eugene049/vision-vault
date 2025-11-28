import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRole } from '../../contexts/RoleContext'
import { Starfield } from '../ui/Starfield'
import { RoleSwitcher } from '../ui/RoleSwitcher'
import { ShimmerButton } from '../ui/shimmer-button'
import { fadeInUp, transition } from '../../utils/animations'

export function Hero() {
  const { theme } = useRole()

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 z-10">
      {/* Starfield Background */}
      <Starfield />

      {/* Enhanced ethereal background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{ backgroundColor: theme.primaryColor, opacity: 0.12 }}
          animate={{
            x: [0, 100, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full blur-[130px]"
          style={{ backgroundColor: theme.accentColor, opacity: 0.1 }}
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: theme.secondaryColor, opacity: 0.08 }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={transition}
          className="text-center space-y-10 md:space-y-16"
        >
          {/* Role Switcher */}
          <div className="mb-10 md:mb-16">
            <RoleSwitcher />
          </div>

          {/* Name with enhanced styling - modern hierarchy */}
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ ...transition, duration: 0.8 }}
            className="space-y-8 md:space-y-12"
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.05] tracking-tight text-white relative"
              style={{
                background: `linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.95) 40%, ${theme.primaryColor} 80%, ${theme.accentColor} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 40px rgba(0, 217, 255, 0.3))',
              }}
            >
              ROY
              <br />
              EUGENE
              <div
                className="absolute inset-0 blur-2xl opacity-25 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.accentColor})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ROY
                <br />
                EUGENE
              </div>
            </motion.h1>

            {/* Title with clean typography */}
            <motion.p
              key={`title-${theme.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ ...transition, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white/95 tracking-tight"
            >
              {theme.title}
            </motion.p>

            {/* Subtitle with clean styling */}
            <motion.p
              key={`subtitle-${theme.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ ...transition, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light mt-6"
            >
              {theme.subtitle}
            </motion.p>
          </motion.div>

          {/* CTA Button with clean styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.6 }}
            className="pt-12 md:pt-16 flex gap-4 justify-center flex-wrap"
          >
            <ShimmerButton
              onClick={scrollToAbout}
              className="font-medium text-base md:text-lg px-10 py-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
              shimmerColor={theme.primaryColor}
              background={theme.primaryColor}
              style={{ color: '#fff' }}
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </ShimmerButton>
            <motion.button
              onClick={scrollToAbout}
              className="font-medium text-base md:text-lg px-10 py-4 rounded-lg border border-white/20 bg-transparent hover:bg-white/5 text-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-8 h-14 rounded-full border-2 flex items-start justify-center p-3 bg-white/[0.02] backdrop-blur-xl border-white/10"
            style={{ borderColor: theme.primaryColor }}
          >
            <motion.div
              className="w-1.5 h-4 rounded-full"
              style={{ backgroundColor: theme.primaryColor }}
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}


