interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export default function Skills() {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'Next.js', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 88, category: 'frontend' },
    { name: 'Vue.js', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 88, category: 'backend' },
    { name: 'Python', level: 85, category: 'backend' },
    { name: 'PostgreSQL', level: 82, category: 'backend' },
    { name: 'MongoDB', level: 80, category: 'backend' },
    { name: 'GraphQL', level: 78, category: 'backend' },
    { name: 'REST APIs', level: 90, category: 'backend' },

    // Tools
    { name: 'Git', level: 92, category: 'tools' },
    { name: 'Docker', level: 80, category: 'tools' },
    { name: 'AWS', level: 75, category: 'tools' },
    { name: 'Vercel', level: 88, category: 'tools' },
    { name: 'Webpack', level: 78, category: 'tools' },
    { name: 'Jest', level: 85, category: 'tools' },

    // Design
    { name: 'Figma', level: 85, category: 'design' },
    { name: 'Adobe XD', level: 80, category: 'design' },
    { name: 'UI/UX Design', level: 82, category: 'design' },
    { name: 'Responsive Design', level: 90, category: 'design' },
  ];

  const categories = {
    frontend: { title: 'Frontend Development', icon: '🎨' },
    backend: { title: 'Backend Development', icon: '⚙️' },
    tools: { title: 'Tools & DevOps', icon: '🛠️' },
    design: { title: 'Design & UX', icon: '✨' },
  };

  const getSkillsByCategory = (category: string) => 
    skills.filter(skill => skill.category === category);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(categories).map(([key, category]) => (
              <div key={key} className="bg-background rounded-xl p-6 shadow-sm border border-foreground/10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {getSkillsByCategory(key).map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground/80 font-medium">{skill.name}</span>
                        <span className="text-primary font-medium text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-foreground/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground text-center mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Redux', 'Zustand', 'Prisma', 'Supabase', 'Firebase', 'Stripe',
                'Socket.io', 'Three.js', 'Framer Motion', 'Chart.js', 'D3.js',
                'Cypress', 'Playwright', 'Storybook', 'Vite', 'Turborepo'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-foreground/5 hover:bg-primary/10 text-foreground/70 hover:text-primary rounded-full text-sm font-medium transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-foreground mb-8">
              Certifications & Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-foreground/5 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3.09 8.26L12 14L20.91 8.26L12 2ZM21 16L12 22L3 16L12 10L21 16Z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground mb-2">AWS Certified</h4>
                <p className="text-sm text-foreground/70">Cloud Solutions Architecture</p>
              </div>
              
              <div className="p-6 bg-foreground/5 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L12 14L10.91 8.26L12 2ZM21 16L12 22L3 16L12 10L21 16Z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Google Analytics</h4>
                <p className="text-sm text-foreground/70">Digital Marketing & Analytics</p>
              </div>
              
              <div className="p-6 bg-foreground/5 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3.09 8.26L12 14L20.91 8.26L12 2ZM21 16L12 22L3 16L12 10L21 16Z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Scrum Master</h4>
                <p className="text-sm text-foreground/70">Agile Project Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
