export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experience: Experience[] = [
  {
    id: 'dukaloco',
    company: 'Dukaloco',
    role: 'Frontend Engineer',
    period: '2023 - Present',
    description: 'Building next-generation Next.js frontends with custom UI systems and performance optimization.',
    achievements: [
      'Reduced load times by 40% through advanced optimization',
      'Created reusable UI component library',
      'Implemented security best practices across all projects',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Performance'],
  },
  {
    id: 'aegir-consult',
    company: 'Aegir Consult Ltd',
    role: 'Full-Stack Developer',
    period: '2022 - 2023',
    description: 'Designed and implemented Vue/Nuxt SSR/SSG solutions with scalable architecture patterns.',
    achievements: [
      'Architected enterprise-level Vue/Nuxt applications',
      'Implemented SSR/SSG strategies for optimal performance',
      'Led technical decisions for complex projects',
    ],
    technologies: ['Vue', 'Nuxt', 'SSR', 'SSG', 'Architecture'],
  },
  {
    id: 'cp-cim-pool',
    company: 'CP CIM-Pool AG',
    role: 'Backend Developer',
    period: '2021 - 2022',
    description: 'Developed .NET-based enterprise automation systems with MySQL integration.',
    achievements: [
      'Built enterprise automation solutions',
      'Integrated complex MySQL database systems',
      'Streamlined business processes through automation',
    ],
    technologies: ['.NET', 'MySQL', 'C#', 'Automation', 'Enterprise'],
  },
  {
    id: 'dexx-media',
    company: 'Dexx Media Labs',
    role: 'Senior Engineer / Technical Lead',
    period: '2020 - 2021',
    description: 'Led technical development, building scalable full-stack solutions with modern architecture.',
    achievements: [
      'Led technical team of 5+ engineers',
      'Architected scalable full-stack solutions',
      'Mentored junior developers',
    ],
    technologies: ['Node.js', 'React', 'Python', 'MySQL', 'Leadership'],
  },
  {
    id: 'haste-inc',
    company: 'Haste Inc',
    role: 'Project Manager',
    period: '2019 - 2020',
    description: 'Managed complex technical projects, coordinating cross-functional teams.',
    achievements: [
      'Delivered projects on time and within scope',
      'Coordinated cross-functional teams',
      'Improved project delivery efficiency by 30%',
    ],
    technologies: ['Project Management', 'Agile', 'DevOps', 'Coordination'],
  },
  {
    id: 'planet-cents',
    company: 'Planet Cents',
    role: 'Tech, Design, Multimedia',
    period: '2018 - 2019',
    description: 'Created immersive multimedia experiences combining technology, design, and storytelling.',
    achievements: [
      'Developed innovative digital products',
      'Combined tech and design for unique experiences',
      'Created multimedia content systems',
    ],
    technologies: ['React', 'Motion Graphics', '3D Design', 'Multimedia'],
  },
  {
    id: 'twiice-tech',
    company: 'Twiice Tech',
    role: 'Graphic Designer, 3D, VFX',
    period: '2017 - 2018',
    description: 'Designed complete visual identity systems including 3D graphics, VFX, and motion design.',
    achievements: [
      'Created complete brand visual identities',
      'Produced 3D graphics and VFX content',
      'Developed motion design systems',
    ],
    technologies: ['Figma', '3D Design', 'VFX', 'Motion Graphics', 'Branding'],
  },
  {
    id: 'swahilibox',
    company: 'SwahiliBox',
    role: 'Frontend Developer',
    period: '2016 - 2017',
    description: 'Built responsive frontend interfaces with focus on user experience and accessibility.',
    achievements: [
      'Developed accessible web interfaces',
      'Improved user experience metrics',
      'Built responsive design systems',
    ],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Accessibility'],
  },
]


