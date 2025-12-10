import { motion } from 'framer-motion'
import { useRole } from '../../contexts/RoleContext'
import { skillsByRole } from '../../data/skills'
import { HolographicCard } from '../ui/HolographicCard'
import { BorderBeam } from '../ui/border-beam'
import { fadeInUp, staggerContainer, transition } from '../../utils/animations'

// Generate consistent random offset
const generateOffset = (seed: string | number): number => {
  const str = String(seed)
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i)
    hash = hash & hash
  }
  return Math.abs(hash % 100)
}

export function Skills() {
  const { currentRole, theme } = useRole()
  const skills = skillsByRole[currentRole]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return theme.primaryColor
      case 'advanced':
        return theme.secondaryColor
      default:
        return theme.accentColor
    }
  }

  return (
    <section id="skills" className="relative py-24 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 min-h-screen flex items-center justify-center z-10">
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
              key={`skills-header-${theme.id}`}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white relative"
              style={{
                background: `linear-gradient(135deg, #ffffff 0%, ${theme.primaryColor} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Skills & Expertise
            </motion.h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto mt-4">
              Role-specific capabilities for <span className="font-medium text-white/90">{theme.name}</span>
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="relative w-full"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:bg-white/[0.03] hover:border-white/15 transition-all duration-300">
                  <BorderBeam
                    colorFrom={theme.primaryColor}
                    colorTo={theme.accentColor}
                    duration={8}
                    initialOffset={generateOffset(skill.name)}
                  />
                  <div className="text-center relative z-10 space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{skill.name}</h3>
                    <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">{skill.category}</p>
                    <div className="space-y-3 pt-3">
                      <div className="flex items-center justify-center gap-3">
                        <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              backgroundColor: getLevelColor(skill.level),
                              width: skill.level === 'expert' ? '100%' : skill.level === 'advanced' ? '75%' : '50%',
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level === 'expert' ? '100%' : skill.level === 'advanced' ? '75%' : '50%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{
                            color: getLevelColor(skill.level),
                            backgroundColor: `${getLevelColor(skill.level)}15`,
                            border: `1px solid ${getLevelColor(skill.level)}30`,
                          }}
                        >
                          {skill.level.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


