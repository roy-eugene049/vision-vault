export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating web applications that solve real-world problems. My journey 
                started with curiosity about how websites work, and it has evolved 
                into a deep love for crafting exceptional user experiences.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                I specialize in modern JavaScript frameworks, cloud technologies, 
                and agile development practices. When I'm not coding, you can find 
                me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 rounded-lg bg-foreground/5">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-foreground/70">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-foreground/5">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-foreground/70">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-foreground/5">
                  <div className="text-2xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-foreground/70">Happy Clients</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-foreground/5">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-foreground/70">Dedication</div>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Core Competencies
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground/80">Frontend Development</span>
                    <span className="text-primary font-medium">95%</span>
                  </div>
                  <div className="w-full bg-foreground/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground/80">Backend Development</span>
                    <span className="text-primary font-medium">90%</span>
                  </div>
                  <div className="w-full bg-foreground/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground/80">UI/UX Design</span>
                    <span className="text-primary font-medium">85%</span>
                  </div>
                  <div className="w-full bg-foreground/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground/80">DevOps & Cloud</span>
                    <span className="text-primary font-medium">80%</span>
                  </div>
                  <div className="w-full bg-foreground/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <div className="pt-6">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  download
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
