export type RoleId = 'software-engineer' | 'ui-ux-developer' | 'full-stack-developer'

export interface RoleTheme {
  id: RoleId
  name: string
  title: string
  subtitle: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  particleDensity: 'low' | 'medium' | 'high'
  starSpeed: number
  gradient: string
}

export const roles: Record<RoleId, RoleTheme> = {
  'software-engineer': {
    id: 'software-engineer',
    name: 'Frontend Engineer',
    title: 'Frontend Engineer',
    subtitle: 'Frontend-Focused • React • Next.js • TypeScript',
    primaryColor: '#00d9ff', // Cyan
    secondaryColor: '#0099cc',
    accentColor: '#00ffff',
    particleDensity: 'medium',
    starSpeed: 0.5,
    gradient: 'from-cyan-500/20 via-blue-500/20 to-cyan-400/20',
  },
  'ui-ux-developer': {
    id: 'ui-ux-developer',
    name: 'UI/UX Developer',
    title: 'UI/UX Developer + Graphic Designer',
    subtitle: 'Figma • Motion Graphics • 3D Design • VFX',
    primaryColor: '#ff00ff', // Magenta
    secondaryColor: '#cc00cc',
    accentColor: '#ff66ff',
    particleDensity: 'high',
    starSpeed: 0.8,
    gradient: 'from-purple-500/20 via-pink-500/20 to-fuchsia-400/20',
  },
  'full-stack-developer': {
    id: 'full-stack-developer',
    name: 'Full-Stack Developer',
    title: 'Full-Stack / Systems Developer',
    subtitle: 'Python • Node.js • .NET • MySQL • DevOps',
    primaryColor: '#00ff88', // Green
    secondaryColor: '#00cc66',
    accentColor: '#66ffaa',
    particleDensity: 'low',
    starSpeed: 0.3,
    gradient: 'from-emerald-500/20 via-teal-500/20 to-green-400/20',
  },
}

export const defaultRole: RoleId = 'software-engineer'


