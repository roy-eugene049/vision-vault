import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import { useRole } from '../../contexts/RoleContext'
import { GlassCard } from '../ui/GlassCard'
import { BorderBeam } from '../ui/border-beam'
import { fadeInUp, transition } from '../../utils/animations'

// Generate consistent random offset
const generateOffset = (seed: string): number => {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i)
    hash = hash & hash
  }
  return Math.abs(hash % 100)
}

export function Contact() {
  const { theme } = useRole()

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:roy.eugene@example.com',
      text: 'roy.eugene@example.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/royeugene',
      text: 'linkedin.com/in/royeugene',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/royeugene',
      text: 'github.com/royeugene',
    },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 min-h-screen flex items-center justify-center z-10">
      <div className="max-w-5xl mx-auto w-full px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          transition={transition}
          className="space-y-16 md:space-y-24"
        >
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white relative"
              style={{
                background: `linear-gradient(135deg, #ffffff 0%, ${theme.primaryColor} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Connect with Roy Eugene
            </h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto mt-4">
              Let's build the future together
            </p>
          </div>

          {/* Contact Card */}
          <GlassCard className="relative p-8 md:p-12 lg:p-16">
            <BorderBeam
              colorFrom={theme.primaryColor}
              colorTo={theme.accentColor}
              duration={8}
              initialOffset={generateOffset('contact-section')}
            />
            <div className="relative z-10 space-y-10 md:space-y-12">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Roy Eugene</h3>
                <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                  Software Engineer • UI/UX Developer • Full-Stack Problem Solver
                </p>
              </div>

              <div className="space-y-4 md:space-y-5">
                {contactLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-5 p-6 md:p-7 rounded-xl bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 group"
                      whileHover={{ x: 8, scale: 1.01 }}
                    >
                      <div
                        className="p-3 rounded-lg flex-shrink-0"
                        style={{
                          backgroundColor: `${theme.primaryColor}15`,
                          color: theme.primaryColor,
                        }}
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm text-white/60 mb-1.5 font-medium">{link.label}</p>
                        <p className="text-sm md:text-base text-white font-semibold truncate">{link.text}</p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-xl flex-shrink-0"
                        style={{ color: theme.primaryColor }}
                      >
                        →
                      </motion.div>
                    </motion.a>
                  )
                })}
              </div>

              <div className="pt-8 border-t border-white/10 text-center">
                <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                  Ready to collaborate on something extraordinary? Let's create the future.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}


