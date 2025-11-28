# 🌌 TwiiceWRLD Architecture Plan

## Overview
TwiiceWRLD is an Afrofuturist portfolio website for **Roy Eugene** built on TanStack Start, featuring dynamic role-based theming, cosmic visuals, and immersive animations.

## Tech Stack
- **Framework**: TanStack Start (file-based routing, SSR)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Folder Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Starfield.tsx          # Animated starfield background
│   │   ├── ParticleSystem.tsx      # Particle effects
│   │   ├── RoleSwitcher.tsx       # Role selection component
│   │   ├── GlassCard.tsx           # Glassmorphism card component
│   │   ├── HolographicCard.tsx    # Holographic skill cards
│   │   └── TimelineNode.tsx        # Resume timeline nodes
│   ├── sections/
│   │   ├── Hero.tsx                # Hero section with role switcher
│   │   ├── About.tsx               # About section
│   │   ├── Skills.tsx              # Skills section
│   │   ├── Projects.tsx            # Projects section
│   │   ├── Resume.tsx              # Interactive timeline
│   │   └── Contact.tsx             # Contact section
│   └── Header.tsx                  # Navigation header
├── contexts/
│   └── RoleContext.tsx             # Global role state management
├── data/
│   ├── roles.ts                    # Role definitions & themes
│   ├── skills.ts                   # Skills data per role
│   ├── projects.ts                 # Projects data
│   └── experience.ts               # Resume/experience data
├── hooks/
│   ├── useRole.ts                  # Role switching hook
│   └── useTheme.ts                 # Theme management hook
├── utils/
│   └── animations.ts               # Shared animation variants
├── routes/
│   ├── __root.tsx                  # Root layout
│   └── index.tsx                   # Landing page
└── styles.css                       # Global styles + custom CSS

```

## Core Architecture Concepts

### 1. Role-Based Theming System
- Three roles: Software Engineer, UI/UX Developer, Full-Stack Developer
- Each role has:
  - Primary accent color
  - Secondary accent color
  - Particle density settings
  - Skill highlights
  - Featured projects
  - Hero subtitle text

### 2. State Management
- React Context API for global role state
- Local state for UI interactions
- Theme colors propagate via CSS variables

### 3. Animation Strategy
- Framer Motion for all transitions
- Shared animation variants for consistency
- Stagger animations for lists
- Smooth role transitions (no abrupt changes)

### 4. Visual Effects
- Starfield: Canvas-based animated stars
- Particles: CSS-based particle system
- Glassmorphism: Backdrop blur + transparency
- Holographic effects: Gradient borders + animations
- Cosmic grid: CSS grid overlay

### 5. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized animations for mobile

## Component Hierarchy

```
RootDocument (__root.tsx)
├── Header
└── Index Page
    ├── Hero
    │   ├── Starfield (background)
    │   ├── RoleSwitcher
    │   └── Hero Content
    ├── About
    ├── Skills
    │   └── HolographicCard[] (role-based)
    ├── Projects
    │   └── ProjectCard[] (role-filtered)
    ├── Resume
    │   └── TimelineNode[] (vertical timeline)
    └── Contact
        └── GlassCard
```

## Data Flow

1. **Role Selection** → RoleContext updates → Theme CSS variables update → All components re-render with new theme
2. **Project Filtering** → Role state → Filter projects array → Display filtered projects
3. **Skill Display** → Role state → Filter skills array → Display role-specific skills

## Performance Optimizations

- Lazy load heavy components (Starfield, ParticleSystem)
- Memoize expensive calculations
- Use CSS transforms for animations (GPU-accelerated)
- Debounce role switching to prevent rapid re-renders
- Optimize images and assets

## SEO & Metadata

- Dynamic meta tags based on current role
- Semantic HTML structure
- Proper heading hierarchy
- Open Graph tags
- Twitter Card support

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast mode support


