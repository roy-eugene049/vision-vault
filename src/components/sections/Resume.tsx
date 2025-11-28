import { motion } from 'framer-motion'
import { useRole } from '../../contexts/RoleContext'
import { experience } from '../../data/experience'
import { TimelineNode } from '../ui/TimelineNode'
import { fadeInUp, transition } from '../../utils/animations'

export function Resume() {
  const { theme } = useRole()

  return (
    <section id="resume" className="relative py-24 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 min-h-screen flex items-center justify-center z-10">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-16">
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
              The Journey of Roy Eugene
            </h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto mt-4">
              A timeline of professional growth and impact
            </p>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col items-center w-full space-y-8 md:space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="w-full flex justify-center">
                <div className="w-full max-w-5xl">
                  <TimelineNode
                    experience={exp}
                    index={index}
                    isLast={index === experience.length - 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


