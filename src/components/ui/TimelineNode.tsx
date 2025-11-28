import { motion } from 'framer-motion'
import { useRole } from '../../contexts/RoleContext'
import { Experience } from '../../data/experience'
import { fadeInUp, transition } from '../../utils/animations'

interface TimelineNodeProps {
  experience: Experience
  index: number
  isLast: boolean
}

export function TimelineNode({ experience, index, isLast }: TimelineNodeProps) {
  const { theme } = useRole()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      transition={{ ...transition, delay: index * 0.1 }}
      className="relative flex gap-6 md:gap-8 w-full max-w-4xl"
    >
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-6 top-16 bottom-0 w-0.5 opacity-30"
          style={{ background: `linear-gradient(to bottom, ${theme.primaryColor}, transparent)` }}
        />
      )}

      {/* Node circle */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
          style={{
            borderColor: theme.primaryColor,
            backgroundColor: `${theme.primaryColor}20`,
          }}
          whileHover={{ scale: 1.2 }}
          transition={transition}
        >
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: theme.primaryColor }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <motion.div
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          whileHover={{ x: 8 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
            <span
              className="text-sm font-semibold"
              style={{ color: theme.primaryColor }}
            >
              {experience.period}
            </span>
          </div>
          <h4 className="text-lg font-semibold text-white/80 mb-2">{experience.company}</h4>
          <p className="text-white/70 mb-4">{experience.description}</p>
          
          <div className="mb-4">
            <h5 className="text-sm font-semibold text-white/90 mb-2">Key Achievements:</h5>
            <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
              {experience.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${theme.primaryColor}20`,
                  color: theme.primaryColor,
                  border: `1px solid ${theme.primaryColor}40`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}


