import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRole } from '../../contexts/RoleContext'
import { galleryItems, galleryCategories, GalleryCategory } from '../../data/gallery'
import { GlassCard } from '../ui/GlassCard'
import { BorderBeam } from '../ui/border-beam'
import { fadeInUp, staggerContainer } from '../../utils/animations'

// Generate consistent random offset
const generateOffset = (seed: string): number => {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i)
    hash = hash & hash
  }
  return Math.abs(hash % 100)
}

export function Gallery() {
  const { theme } = useRole()
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all')

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="relative py-24 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 min-h-screen flex items-center justify-center z-10">
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
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white relative"
              style={{
                background: `linear-gradient(135deg, #ffffff 0%, ${theme.primaryColor} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Design Gallery
            </h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto mt-4">
              A collection of graphic design works, visual identities, and creative projects
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 md:gap-4">
            {galleryCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-white/10 border border-white/20 text-white'
                    : 'bg-white/[0.02] border border-white/10 text-white/70 hover:bg-white/[0.05] hover:text-white'
                }`}
                style={
                  selectedCategory === category.id
                    ? {
                        borderColor: theme.primaryColor,
                        backgroundColor: `${theme.primaryColor}15`,
                        color: theme.primaryColor,
                      }
                    : {}
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            key={selectedCategory}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="relative w-full group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <GlassCard hover className="overflow-hidden p-0">
                  <BorderBeam
                    colorFrom={theme.primaryColor}
                    colorTo={theme.accentColor}
                    duration={8}
                    initialOffset={generateOffset(item.id)}
                  />
                  <div className="relative">
                    {/* Image */}
                    <div className="relative w-full h-64 overflow-hidden bg-black/20">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to a gradient placeholder if image fails to load
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          target.parentElement!.style.background = `linear-gradient(135deg, ${theme.primaryColor}20, ${theme.accentColor}20)`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: `${theme.primaryColor}20`,
                            color: theme.primaryColor,
                            border: `1px solid ${theme.primaryColor}40`,
                            backdropFilter: 'blur(10px)',
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      {item.description && (
                        <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                      )}
                      
                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 rounded text-xs font-medium text-white/60 bg-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Link */}
                      {item.link && (
                        <motion.a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold mt-4 group/link"
                          style={{ color: theme.primaryColor }}
                          whileHover={{ x: 6 }}
                        >
                          View Project
                          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-white/60 text-lg">No items found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

