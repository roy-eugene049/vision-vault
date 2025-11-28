import { useEffect, useRef } from 'react'
import { useRole } from '../../contexts/RoleContext'

interface Star {
  x: number
  y: number
  z: number
  size: number
  speed: number
}

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useRole()
  const starsRef = useRef<Star[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Initialize stars
    const initStars = () => {
      starsRef.current = []
      for (let i = 0; i < 200; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
        })
      }
    }
    initStars()

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      starsRef.current.forEach((star) => {
        star.z -= star.speed

        if (star.z <= 0) {
          star.z = 1000
          star.x = Math.random() * canvas.width
          star.y = Math.random() * canvas.height
        }

        const k = 128 / star.z
        const px = star.x * k + centerX
        const py = star.y * k + centerY

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = star.size * k
          const alpha = (1 - star.z / 1000) * 0.8

          // Convert hex to rgba
          const hexToRgba = (hex: string, alpha: number) => {
            const r = parseInt(hex.slice(1, 3), 16)
            const g = parseInt(hex.slice(3, 5), 16)
            const b = parseInt(hex.slice(5, 7), 16)
            return `rgba(${r}, ${g}, ${b}, ${alpha})`
          }

          const gradient = ctx.createRadialGradient(px, py, 0, px, py, size * 2)
          gradient.addColorStop(0, hexToRgba(theme.primaryColor, alpha))
          gradient.addColorStop(0.5, hexToRgba(theme.accentColor, alpha * 0.6))
          gradient.addColorStop(1, 'transparent')

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(px, py, size * 2, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [theme.primaryColor, theme.accentColor])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40 z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

