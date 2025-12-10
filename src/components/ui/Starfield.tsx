import { useEffect, useRef } from 'react'
import { useRole } from '../../contexts/RoleContext'

interface Star {
  x: number
  y: number
  z: number
  prevX: number
  prevY: number
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const starsRef = useRef<Star[]>([])
  const { theme } = useRole()

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
    const numStars = theme.particleDensity === 'high' ? 200 : theme.particleDensity === 'medium' ? 150 : 100
    starsRef.current = Array.from({ length: numStars }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 2000,
      prevX: 0,
      prevY: 0,
    }))

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      starsRef.current.forEach((star) => {
        star.z -= theme.starSpeed * 2

        if (star.z <= 0) {
          star.z = 2000
          star.x = Math.random() * canvas.width
          star.y = Math.random() * canvas.height
        }

        const k = 128 / star.z
        const px = star.x
        const py = star.y
        star.x = centerX + (star.x - centerX) * k
        star.y = centerY + (star.y - centerY) * k

        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
          star.z = 2000
          star.x = Math.random() * canvas.width
          star.y = Math.random() * canvas.height
        }

        const opacity = (1 - star.z / 2000) * 0.8
        const size = (1 - star.z / 2000) * 2

        // Convert hex to rgba helper
        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16)
          const g = parseInt(hex.slice(3, 5), 16)
          const b = parseInt(hex.slice(5, 7), 16)
          return `rgba(${r}, ${g}, ${b}, ${alpha})`
        }

        // Draw star trail
        if (star.prevX !== 0 && star.prevY !== 0) {
          ctx.strokeStyle = hexToRgba(theme.primaryColor, opacity)
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(star.prevX, star.prevY)
          ctx.lineTo(star.x, star.y)
          ctx.stroke()
        }

        // Draw star
        ctx.fillStyle = hexToRgba(theme.primaryColor, opacity)
        ctx.globalAlpha = opacity
        ctx.beginPath()
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1

        star.prevX = star.x
        star.prevY = star.y
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}


