import { useEffect, useRef } from 'react'
import { useRole } from '../../contexts/RoleContext'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
}

export function LightShower() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useRole()
  const particlesRef = useRef<Particle[]>([])

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

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: -10,
      vx: (Math.random() - 0.5) * 0.5,
      vy: Math.random() * 2 + 1,
      life: 0,
      maxLife: Math.random() * 100 + 50,
      size: Math.random() * 2 + 1,
    })

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particlesRef.current.push(createParticle())
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        const alpha = 1 - particle.life / particle.maxLife
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 10
        )
        // Convert hex to rgba
        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16)
          const g = parseInt(hex.slice(3, 5), 16)
          const b = parseInt(hex.slice(5, 7), 16)
          return `rgba(${r}, ${g}, ${b}, ${alpha})`
        }
        gradient.addColorStop(0, hexToRgba(theme.primaryColor, alpha))
        gradient.addColorStop(0.5, hexToRgba(theme.accentColor, alpha * 0.6))
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 10, 0, Math.PI * 2)
        ctx.fill()

        if (particle.life < particle.maxLife && particle.y < canvas.height + 50) {
          return true
        }
        return false
      })

      // Add new particles
      if (particlesRef.current.length < 50 && Math.random() > 0.7) {
        particlesRef.current.push(createParticle())
      }

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
      className="fixed inset-0 pointer-events-none opacity-30 z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

