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
    { name: 'Adobe Illustrator', category: 'Design', level: 'advanced' },
    { name: 'Motion Graphics', category: 'Animation', level: 'advanced' },
    { name: '3D Design', category: 'Design', level: 'advanced' },
    { name: 'VFX', category: 'Visual Effects', level: 'intermediate' },
    { name: 'Visual Storytelling', category: 'Design', level: 'expert' },
    { name: 'UI Systems', category: 'Design', level: 'expert' },
    { name: 'Prototyping', category: 'Design', level: 'advanced' },
    { name: 'Brand Identity', category: 'Design', level: 'expert' },
    { name: 'Web Design', category: 'Design', level: 'expert' },
    { name: 'React', category: 'Frontend', level: 'advanced' },
    { name: 'HTML/CSS', category: 'Frontend', level: 'expert' },
    { name: 'Responsive Design', category: 'Frontend', level: 'expert' },
    { name: 'User Research', category: 'UX', level: 'advanced' },
    { name: 'Wireframing', category: 'Design', level: 'expert' },
  ],
  'full-stack-developer': [
    { name: 'Python', category: 'Language', level: 'advanced' },
    { name: 'Node.js', category: 'Backend', level: 'expert' },
    { name: 'MySQL', category: 'Database', level: 'advanced' },
    { name: 'C#', category: 'Language', level: 'advanced' },
    { name: '.NET', category: 'Framework', level: 'advanced' },
    { name: 'PostgreSQL', category: 'Database', level: 'advanced' },
    { name: 'REST APIs', category: 'Backend', level: 'expert' },
    { name: 'Integrations', category: 'Backend', level: 'expert' },
    { name: 'React', category: 'Frontend', level: 'advanced' },
    { name: 'Next.js', category: 'Framework', level: 'advanced' },
    { name: 'TypeScript', category: 'Language', level: 'advanced' },
    { name: 'Automation', category: 'DevOps', level: 'advanced' },
    { name: 'Scalability', category: 'Architecture', level: 'advanced' },
    { name: 'System Design', category: 'Architecture', level: 'advanced' },
    { name: 'DevOps', category: 'DevOps', level: 'advanced' },
    { name: 'Microservices', category: 'Architecture', level: 'advanced' },
  ],
}


