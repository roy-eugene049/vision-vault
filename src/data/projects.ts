import { RoleId } from './roles'

export interface Project {
  id: string
  title: string
  description: string
  role: RoleId[]
  technologies: string[]
  image?: string
  link?: string
  websitePreview?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'dukaloco-frontend',
    title: 'Dukaloco Frontend Systems',
    description: 'Built high-performance Next.js frontends with custom UI systems, achieving 40% faster load times through advanced optimization techniques.',
    role: ['software-engineer'],
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    featured: true,
  },
  {
    id: 'aegir-architecture',
    title: 'Aegir Consult Architecture',
    description: 'Designed and implemented Vue/Nuxt SSR/SSG solutions, creating scalable architecture patterns for enterprise applications.',
    role: ['software-engineer', 'full-stack-developer'],
    technologies: ['Vue', 'Nuxt', 'SSR', 'SSG'],
    featured: true,
  },
  {
    id: 'cp-cim-automation',
    title: 'CP CIM-Pool Enterprise Automation',
    description: 'Developed .NET-based enterprise automation systems with MySQL integration, streamlining complex business processes.',
    role: ['full-stack-developer'],
    technologies: ['.NET', 'MySQL', 'C#', 'Automation'],
    featured: true,
  },
  {
    id: 'dexx-media-labs',
    title: 'Dexx Media Labs Platform',
    description: 'Led technical development as Senior Engineer, building scalable full-stack solutions with modern architecture patterns.',
    role: ['full-stack-developer', 'software-engineer'],
    technologies: ['Node.js', 'React', 'Python', 'MySQL'],
    featured: true,
  },
  {
    id: 'haste-project-management',
    title: 'Haste Inc Project Management',
    description: 'Managed complex technical projects, coordinating cross-functional teams and delivering solutions on time and within scope.',
    role: ['full-stack-developer'],
    technologies: ['Project Management', 'Agile', 'DevOps'],
    featured: false,
  },
  {
    id: 'planet-cents-multimedia',
    title: 'Planet Cents Multimedia',
    description: 'Created immersive multimedia experiences combining technology, design, and storytelling for innovative digital products.',
    role: ['ui-ux-developer', 'software-engineer'],
    technologies: ['React', 'Motion Graphics', '3D Design'],
    featured: true,
  },
  {
    id: 'twiice-tech-visuals',
    title: 'Twiice Tech Visual Identity',
    description: 'Designed complete visual identity system including 3D graphics, VFX, and motion design for tech brand positioning.',
    role: ['ui-ux-developer'],
    technologies: ['Figma', '3D Design', 'VFX', 'Motion Graphics'],
    featured: true,
  },
  {
    id: 'kundarilla-palace',
    title: 'Kundarilla Palace Website',
    description: 'Designed and developed a modern, elegant website for Kundarilla Palace, featuring responsive design and seamless user experience.',
    role: ['ui-ux-developer', 'software-engineer'],
    technologies: ['Web Design', 'UI/UX', 'Responsive Design', 'Figma'],
    link: 'https://kundarillapalace.co.ke/',
    websitePreview: 'https://kundarillapalace.co.ke/',
    featured: true,
  },
  {
    id: 'mesmerize-kenya',
    title: 'Mesmerize Kenya E-commerce',
    description: 'Created a beautiful e-commerce platform for Mesmerize Kenya with intuitive shopping experience and modern design aesthetics.',
    role: ['ui-ux-developer', 'software-engineer'],
    technologies: ['E-commerce', 'UI/UX', 'Web Design', 'Figma'],
    link: 'https://mesmerizekenya.com/shops/mesmerize',
    websitePreview: 'https://mesmerizekenya.com/shops/mesmerize',
    featured: true,
  },
  {
    id: 'eccosync',
    title: 'EccoSync Platform',
    description: 'Built a comprehensive full-stack platform with real-time synchronization capabilities, featuring robust architecture and scalable infrastructure.',
    role: ['full-stack-developer'],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'Real-time Sync'],
    featured: true,
  },
  {
    id: 'dynamic-decor',
    title: 'Dynamic Decor System',
    description: 'Developed a dynamic decoration management system with advanced features for real-time updates and user customization.',
    role: ['full-stack-developer'],
    technologies: ['Python', 'Node.js', 'MySQL', 'REST APIs'],
    featured: true,
  },
  {
    id: 'greenkiddo',
    title: 'GreenKiddo Platform',
    description: 'Created an eco-friendly platform for children with engaging features, sustainable design, and modern web technologies.',
    role: ['full-stack-developer', 'software-engineer'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    link: 'https://greenkiddo.vercel.app',
    websitePreview: 'https://greenkiddo.vercel.app',
    featured: true,
  },
  {
    id: 'airborne-safari',
    title: 'AirBorne Safari',
    description: 'Built a comprehensive safari booking and management platform with seamless user experience and robust backend systems.',
    role: ['full-stack-developer'],
    technologies: ['.NET', 'React', 'MySQL', 'API Integration'],
    featured: true,
  },
  {
    id: 'swahilibox-frontend',
    title: 'SwahiliBox Frontend Development',
    description: 'Built responsive frontend interfaces with focus on user experience and accessibility standards.',
    role: ['software-engineer', 'ui-ux-developer'],
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    featured: false,
  },
]


