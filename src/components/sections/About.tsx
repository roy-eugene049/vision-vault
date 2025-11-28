import { motion } from 'framer-motion'
import { useRole } from '../../contexts/RoleContext'
import { GlassCard } from '../ui/GlassCard'
import { BorderBeam } from '../ui/border-beam'
import { fadeInUp, staggerContainer, transition } from '../../utils/animations'

// Generate consistent random offset
const generateOffset = (seed: string): number => {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i)
    hash = hash & hash
  }
  return Math.abs(hash % 100)
}

export function About() {
  const { theme } = useRole()

  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 min-h-screen flex items-center justify-center z-10">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="space-y-16 md:space-y-24"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white relative"
              style={{
                background: `linear-gradient(135deg, #ffffff 0%, ${theme.primaryColor} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              About Roy Eugene
            </motion.h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto mt-4">
              Welcome to TwiiceWRLD — where software engineering meets Afrofuturist design
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={fadeInUp}>
            <GlassCard className="relative p-8 md:p-12 lg:p-16">
              <BorderBeam
                colorFrom={theme.primaryColor}
                colorTo={theme.accentColor}
                duration={8}
                initialOffset={generateOffset('about-section')}
              />
              <div className="relative z-10 space-y-8 md:space-y-10">
                <motion.p
                  className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Welcome to <span className="font-medium text-white">TwiiceWRLD</span> — a universe where
                  software engineering meets Afrofuturist design, where code becomes art, and where
                  technology serves humanity's next evolution.
                </motion.p>

                <div className="space-y-6 md:space-y-7 text-base text-white/70 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    I'm <strong className="text-white font-semibold">Roy Eugene</strong> — Software Engineer, UI/UX Developer,
                    and Full-Stack Problem Solver. I exist at the intersection of cutting-edge technology
                    and visionary design, building systems and visuals that feel like they're from the future.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    My journey spans from crafting pixel-perfect frontends with React and Next.js, to
                    architecting enterprise-level systems with .NET and Python, to designing immersive
                    visual experiences with 3D graphics and motion design. Each project is an opportunity
                    to push boundaries, blend disciplines, and create something that didn't exist before.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    At <strong className="text-white font-semibold">Dukaloco</strong>, I've built high-performance Next.js
                    frontends that load 40% faster through advanced optimization. At <strong className="text-white font-semibold">Aegir Consult</strong>,
                    I architected Vue/Nuxt SSR/SSG solutions that scale. At <strong className="text-white font-semibold">CP CIM-Pool AG</strong>,
                    I automated enterprise processes with .NET and MySQL. And at <strong className="text-white font-semibold">Dexx Media Labs</strong>,
                    I led technical teams to deliver scalable full-stack solutions.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    But beyond the code, I'm a creative technologist. My work at <strong className="text-white font-semibold">Twiice Tech</strong>
                    and <strong className="text-white font-semibold">Planet Cents</strong> reflects my passion for visual storytelling —
                    combining 3D design, VFX, and motion graphics to create brand identities that resonate
                    across dimensions.
                  </motion.p>
                </div>

                <motion.div
                  className="pt-8 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <p
                    className="text-lg md:text-xl text-white/90 leading-relaxed font-medium"
                  >
                    My mission: To build systems and visuals from the future, today. To bridge the gap between
                    engineering excellence and creative vision. To create experiences that feel like entering
                    another universe — a world called TwiiceWRLD.
                  </p>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


