import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useRole } from '../../contexts/RoleContext'
import { projects } from '../../data/projects'
import { GlassCard } from '../ui/GlassCard'
import { Meteors } from '../ui/meteors'
import { BorderBeam } from '../ui/border-beam'
import { fadeInUp, staggerContainer, transition } from '../../utils/animations'

// Generate consistent random offsets for unison movement
const generateOffset = (seed: string | number): number => {
  // Use seed to generate consistent random number
  const str = String(seed)
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i)
    hash = hash & hash
  }
  return Math.abs(hash % 100)
}

export function Projects() {
  const { currentRole, theme } = useRole()
  
  // Filter projects by current role
  const filteredProjects = projects.filter(
    (project) => project.role.includes(currentRole) && project.featured
  )

  return (
    <section id="projects" className="relative py-24 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 min-h-screen flex items-center justify-center overflow-hidden z-10">
      <Meteors number={20} />
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 relative z-10">
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
              key={`projects-header-${theme.id}`}
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
              Featured Projects
            </motion.h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto mt-4">
              Showcasing work as <span className="font-medium text-white/90">{theme.name}</span>
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="relative w-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <GlassCard hover className="h-full w-full" style={{ padding: 0 }}>
                  <BorderBeam
                    colorFrom={theme.primaryColor}
                    colorTo={theme.secondaryColor}
                    duration={8}
                    initialOffset={generateOffset(project.id)}
                  />
                  <div className="h-full w-full p-6 md:p-8 lg:p-10 flex flex-col relative z-10 space-y-4 md:space-y-5">
                    {/* Website Preview for UI/UX projects */}
                    {project.websitePreview && currentRole === 'ui-ux-developer' && (
                      <motion.a
                        href={project.websitePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group/preview flex-shrink-0"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <div className="w-14 h-14 mx-auto rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover/preview:bg-white/20 transition-colors">
                              <ExternalLink className="w-7 h-7 text-white/60 group-hover/preview:text-white transition-colors" />
                            </div>
                            <p className="text-xs text-white/60 font-medium">Live Preview</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-xs text-white/80 font-medium truncate opacity-0 group-hover/preview:opacity-100 transition-opacity">
                            {project.websitePreview.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          </p>
                        </div>
                      </motion.a>
                    )}
                    
                    <div className="flex-grow min-h-0 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">{project.title}</h3>
                      <p className="text-sm md:text-base text-white/75 leading-relaxed">{project.description}</p>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 flex-shrink-0 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: `${theme.primaryColor}15`,
                            color: theme.primaryColor,
                            border: `1px solid ${theme.primaryColor}30`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold mt-auto pt-3 group flex-shrink-0"
                        style={{ color: theme.primaryColor }}
                        whileHover={{ x: 6 }}
                      >
                        View {project.websitePreview ? 'Website' : 'Project'}
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


