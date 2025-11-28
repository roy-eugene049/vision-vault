import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Skills } from '../components/sections/Skills'
import { Projects } from '../components/sections/Projects'
import { Gallery } from '../components/sections/Gallery'
import { Resume } from '../components/sections/Resume'
import { Contact } from '../components/sections/Contact'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="relative w-full">
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Resume />
      <Contact />
    </main>
  )
}
