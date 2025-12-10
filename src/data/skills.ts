import { RoleId } from './roles'

export interface Skill {
  name: string
  category: string
  level: 'expert' | 'advanced' | 'intermediate'
  icon?: string
}

export const skillsByRole: Record<RoleId, Skill[]> = {
  'software-engineer': [
    { name: 'React', category: 'Frontend', level: 'expert' },
    { name: 'Next.js', category: 'Framework', level: 'expert' },
    { name: 'TypeScript', category: 'Language', level: 'expert' },
    { name: 'TailwindCSS', category: 'Styling', level: 'expert' },
    { name: 'JavaScript', category: 'Language', level: 'expert' },
    { name: 'Vue.js', category: 'Frontend', level: 'advanced' },
    { name: 'Nuxt.js', category: 'Framework', level: 'advanced' },
    { name: 'API Integration', category: 'Backend', level: 'advanced' },
    { name: 'Performance Optimization', category: 'Engineering', level: 'expert' },
    { name: 'Security', category: 'Engineering', level: 'advanced' },
    { name: 'Architecture', category: 'Engineering', level: 'advanced' },
    { name: 'Responsive Design', category: 'Frontend', level: 'expert' },
    { name: 'State Management', category: 'Frontend', level: 'expert' },
    { name: 'Testing', category: 'Engineering', level: 'advanced' },
  ],
  'ui-ux-developer': [
    { name: 'Figma', category: 'Design', level: 'expert' },
    { name: 'Adobe XD', category: 'Design', level: 'advanced' },
    { name: 'Adobe Photoshop', category: 'Design', level: 'expert' },
    { name: 'Adobe Illustrator', category: 'Design', level: 'expert' },
    { name: 'Logo Design', category: 'Branding', level: 'expert' },
    { name: 'Brand Identity', category: 'Branding', level: 'expert' },
    { name: 'Brand Strategy', category: 'Branding', level: 'advanced' },
    { name: 'Visual Identity', category: 'Branding', level: 'expert' },
    { name: 'Typography', category: 'Design', level: 'expert' },
    { name: 'Color Theory', category: 'Design', level: 'expert' },
    { name: 'Motion Graphics', category: 'Animation', level: 'advanced' },
    { name: '3D Design', category: 'Design', level: 'advanced' },
    { name: 'VFX', category: 'Visual Effects', level: 'intermediate' },
    { name: 'Visual Storytelling', category: 'Design', level: 'expert' },
    { name: 'UI Systems', category: 'Design', level: 'expert' },
    { name: 'Prototyping', category: 'Design', level: 'expert' },
    { name: 'Web Design', category: 'Design', level: 'expert' },
    { name: 'User Research', category: 'UX', level: 'advanced' },
    { name: 'Wireframing', category: 'Design', level: 'expert' },
    { name: 'User Testing', category: 'UX', level: 'advanced' },
    { name: 'Information Architecture', category: 'UX', level: 'advanced' },
    { name: 'Interaction Design', category: 'UX', level: 'expert' },
  ],
  'full-stack-developer': [
    { name: 'Python', category: 'Language', level: 'advanced' },
    { name: 'Node.js', category: 'Backend', level: 'expert' },
    { name: 'C#', category: 'Language', level: 'advanced' },
    { name: '.NET', category: 'Framework', level: 'advanced' },
    { name: 'MySQL', category: 'Database', level: 'advanced' },
    { name: 'PostgreSQL', category: 'Database', level: 'advanced' },
    { name: 'Database Design', category: 'Database', level: 'expert' },
    { name: 'SQL', category: 'Database', level: 'expert' },
    { name: 'REST APIs', category: 'Backend', level: 'expert' },
    { name: 'GraphQL', category: 'Backend', level: 'advanced' },
    { name: 'API Design', category: 'Backend', level: 'expert' },
    { name: 'Server Architecture', category: 'Backend', level: 'expert' },
    { name: 'Integrations', category: 'Backend', level: 'expert' },
    { name: 'Authentication', category: 'Backend', level: 'expert' },
    { name: 'Authorization', category: 'Backend', level: 'advanced' },
    { name: 'System Design', category: 'Architecture', level: 'expert' },
    { name: 'Microservices', category: 'Architecture', level: 'advanced' },
    { name: 'Scalability', category: 'Architecture', level: 'expert' },
    { name: 'Load Balancing', category: 'Architecture', level: 'advanced' },
    { name: 'Caching', category: 'Backend', level: 'advanced' },
    { name: 'DevOps', category: 'DevOps', level: 'advanced' },
    { name: 'CI/CD', category: 'DevOps', level: 'advanced' },
    { name: 'Docker', category: 'DevOps', level: 'advanced' },
    { name: 'Cloud Services', category: 'DevOps', level: 'advanced' },
    { name: 'Automation', category: 'DevOps', level: 'advanced' },
  ],
}


