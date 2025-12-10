import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, ExternalLink, ZoomIn, ZoomOut } from 'lucide-react'
import { GalleryItem } from '../../data/gallery'
import { useRole } from '../../contexts/RoleContext'

interface GalleryModalProps {
  item: GalleryItem | null
  isOpen: boolean
  onClose: () => void
}

export function GalleryModal({ item, isOpen, onClose }: GalleryModalProps) {
  const { theme } = useRole()
  const [imageSrc, setImageSrc] = useState<string>('')
  const [isZoomed, setIsZoomed] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering portal
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden' // Prevent background scrolling

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Update image source when item changes
  useEffect(() => {
    if (!item) return

    // Check if there's a full version available (for websites)
    const hasFullVersion = item.category === 'websites' && item.image.includes('-min')
    const fullImagePath = hasFullVersion 
      ? item.image.replace('-min.png', '.png').replace('-min.jpg', '.jpg').replace('-min.jpeg', '.jpeg')
      : item.image
    
    setImageSrc(fullImagePath)
    setIsZoomed(false)
  }, [item])

  if (!item || !mounted) return null

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed bg-black/95 backdrop-blur-lg flex items-center justify-center"
            style={{ 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0,
              zIndex: 99999,
              padding: '1rem',
              paddingTop: 'max(1rem, env(safe-area-inset-top, 0px) + 1rem)',
              position: 'fixed',
            }}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ 
                type: "spring", 
                duration: 0.6,
                bounce: 0.2
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-7xl max-h-[95vh] bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px ${theme.primaryColor}20, 0 0 60px ${theme.primaryColor}10`,
                zIndex: 100000,
                position: 'relative',
                marginTop: 'env(safe-area-inset-top, 0)',
              }}
            >
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors group"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close modal"
              >
                <X className="w-5 h-5 group-hover:text-white transition-colors" />
              </motion.button>

              {/* Image Container */}
              <div className="relative w-full bg-gradient-to-b from-black/50 to-black/30">
                <div 
                  className={`relative w-full max-h-[75vh] overflow-auto transition-all duration-300 ${
                    isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <img
                    src={imageSrc}
                    alt={item.title}
                    className={`w-full h-auto object-contain transition-transform duration-500 ease-out ${
                      isZoomed ? 'scale-150' : 'scale-100'
                    }`}
                    onError={(e) => {
                      // Fallback to original image if full version doesn't exist
                      const target = e.target as HTMLImageElement
                      if (target.src !== item.image && imageSrc !== item.image) {
                        setImageSrc(item.image)
                      } else {
                        target.style.display = 'none'
                        target.parentElement!.style.background = `linear-gradient(135deg, ${theme.primaryColor}20, ${theme.accentColor}20)`
                      }
                    }}
                  />
                  
                  {/* Zoom Indicator */}
                  <div className="absolute bottom-6 right-6 z-10">
                    <motion.div 
                      className="px-4 py-2.5 rounded-xl backdrop-blur-md border border-white/30 bg-black/60 shadow-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-white text-sm font-medium flex items-center gap-2">
                        {isZoomed ? (
                          <>
                            <ZoomOut className="w-4 h-4" />
                            Click to zoom out
                          </>
                        ) : (
                          <>
                            <ZoomIn className="w-4 h-4" />
                            Click to zoom in
                          </>
                        )}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Category Badge */}
                <motion.div 
                  className="absolute top-6 left-6 z-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span
                    className="px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-md shadow-lg"
                    style={{
                      backgroundColor: `${theme.primaryColor}25`,
                      color: theme.primaryColor,
                      border: `1px solid ${theme.primaryColor}50`,
                      boxShadow: `0 4px 12px ${theme.primaryColor}20`,
                    }}
                  >
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 lg:p-10 space-y-5 bg-gradient-to-b from-transparent to-black/20">
                <div className="space-y-3">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.title}
                  </motion.h3>
                  {item.description && (
                    <motion.p 
                      className="text-base md:text-lg text-white/70 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </div>

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <motion.div 
                    className="flex flex-wrap gap-2 pt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-lg text-sm font-medium"
                        style={{
                          backgroundColor: `${theme.primaryColor}15`,
                          color: theme.primaryColor,
                          border: `1px solid ${theme.primaryColor}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                )}

                {/* Actions */}
                <motion.div 
                  className="flex flex-wrap gap-3 pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {item.link && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                      style={{
                        backgroundColor: `${theme.primaryColor}20`,
                        color: theme.primaryColor,
                        border: `1px solid ${theme.primaryColor}40`,
                        boxShadow: `0 4px 12px ${theme.primaryColor}15`,
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: `${theme.primaryColor}30`,
                        boxShadow: `0 6px 20px ${theme.primaryColor}25`,
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Project
                    </motion.a>
                  )}
                  {item.category === 'websites' && item.image.includes('-min') && (
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation()
                        // Toggle between min and full version
                        const fullPath = item.image.replace('-min.png', '.png').replace('-min.jpg', '.jpg').replace('-min.jpeg', '.jpeg')
                        const currentIsMin = imageSrc.includes('-min')
                        setImageSrc(currentIsMin ? fullPath : item.image)
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {imageSrc.includes('-min') ? 'View Full Size' : 'View Preview'}
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  // Render modal to document body using portal
  return createPortal(modalContent, document.body)
}

