import { lazy, Suspense } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/sections/Hero'

// Lazy load section components
const About = lazy(() => import('../components/sections/About').then(m => ({ default: m.About })))
const Skills = lazy(() => import('../components/sections/Skills').then(m => ({ default: m.Skills })))
const Projects = lazy(() => import('../components/sections/Projects').then(m => ({ default: m.Projects })))
const Gallery = lazy(() => import('../components/sections/Gallery').then(m => ({ default: m.Gallery })))
const Resume = lazy(() => import('../components/sections/Resume').then(m => ({ default: m.Resume })))
const Contact = lazy(() => import('../components/sections/Contact').then(m => ({ default: m.Contact })))

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-white/20 border-t-white/60 rounded-full animate-spin" />
  </div>
)

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="relative w-full">
      <div id="hero">
        <Hero />
      </div>
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Resume />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </main>
  )
}
