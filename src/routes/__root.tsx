import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'
import { RoleProvider } from '../contexts/RoleContext'
import { MatrixGrid } from '../components/ui/MatrixGrid'
import { LightShower } from '../components/ui/LightShower'
import { GalaxyBackground } from '../components/ui/GalaxyBackground'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Roy Eugene | TwiiceWRLD - Software Engineer, UI/UX Developer, Full-Stack Problem Solver',
      },
      {
        name: 'description',
        content: 'Welcome to TwiiceWRLD - The portfolio of Roy Eugene. Software Engineer, UI/UX Developer, and Full-Stack Problem Solver building systems and visuals from the future.',
      },
      {
        property: 'og:title',
        content: 'Roy Eugene | TwiiceWRLD',
      },
      {
        property: 'og:description',
        content: 'Software Engineer, UI/UX Developer, and Full-Stack Problem Solver',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl text-white/70">Page not found</p>
        <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">
          Return to Home
        </a>
      </div>
    </div>
  ),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-black text-white overflow-x-hidden relative">
        <RoleProvider>
          {/* Futuristic Background Effects */}
          <div className="fixed inset-0 z-0">
            <GalaxyBackground />
            <MatrixGrid />
            <LightShower />
          </div>
          <Header />
          <div className="relative z-10">
            {children}
          </div>
        </RoleProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
