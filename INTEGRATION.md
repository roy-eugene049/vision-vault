# 🚀 TwiiceWRLD Integration Instructions

## Overview
This document provides step-by-step instructions for integrating the TwiiceWRLD portfolio into your existing TanStack Start project.

## ✅ Prerequisites
- Node.js 18+ installed
- pnpm package manager
- Existing TanStack Start project (already set up)

## 📦 Dependencies Installed
- `framer-motion` - For animations and transitions

## 🗂️ File Structure Created

```
src/
├── components/
│   ├── ui/
│   │   ├── Starfield.tsx
│   │   ├── RoleSwitcher.tsx
│   │   ├── GlassCard.tsx
│   │   ├── HolographicCard.tsx
│   │   └── TimelineNode.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   └── Contact.tsx
│   └── Header.tsx (updated)
├── contexts/
│   └── RoleContext.tsx
├── data/
│   ├── roles.ts
│   ├── skills.ts
│   ├── projects.ts
│   └── experience.ts
├── utils/
│   └── animations.ts
├── routes/
│   ├── __root.tsx (updated)
│   └── index.tsx (updated)
└── styles.css (updated)
```

## 🔧 Integration Steps

### Step 1: Verify Dependencies
All required dependencies should already be installed. If not, run:
```bash
pnpm install
```

### Step 2: Update Contact Information
Edit `/src/components/sections/Contact.tsx` and update the contact links:
- Replace `roy.eugene@example.com` with your actual email
- Replace LinkedIn and GitHub URLs with your actual profiles

### Step 3: Customize Project Links (Optional)
Edit `/src/data/projects.ts` and add actual project links to the `link` property of each project object.

### Step 4: Add Project Images (Optional)
If you have project images, add them to the `public/` folder and reference them in the `image` property of projects in `/src/data/projects.ts`.

### Step 5: Run Development Server
```bash
pnpm dev
```

The site should now be accessible at `http://localhost:2222`

## 🎨 Customization Guide

### Changing Role Colors
Edit `/src/data/roles.ts` to modify the color scheme for each role:
- `primaryColor`: Main accent color
- `secondaryColor`: Secondary accent
- `accentColor`: Highlight color

### Adding New Skills
Edit `/src/data/skills.ts` and add skills to the appropriate role array.

### Adding New Projects
Edit `/src/data/projects.ts` and add new project objects. Make sure to:
- Set `role` array to include relevant role IDs
- Set `featured: true` to show in the projects section
- Add technologies used

### Modifying Experience Timeline
Edit `/src/data/experience.ts` to add, remove, or modify experience entries.

### Updating About Section Copy
Edit `/src/components/sections/About.tsx` to modify the narrative text.

## 🎯 Key Features

### Role Switching
- Users can switch between 3 roles: Software Engineer, UI/UX Developer, Full-Stack Developer
- Each role changes:
  - Theme colors
  - Hero subtitle
  - Skills displayed
  - Projects filtered
  - Starfield particle density

### Animations
- All sections use Framer Motion for smooth animations
- Scroll-triggered animations for sections
- Hover effects on interactive elements
- Smooth role transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized for all screen sizes

## 🐛 Troubleshooting

### Issue: Starfield not showing
- Check browser console for errors
- Ensure canvas is supported in your browser
- Verify `useRole` hook is working correctly

### Issue: Role switching not working
- Verify `RoleProvider` wraps the app in `__root.tsx`
- Check that `RoleContext` is properly exported
- Ensure CSS variables are updating

### Issue: Animations not working
- Verify `framer-motion` is installed
- Check browser console for errors
- Ensure viewport settings are correct

### Issue: Styles not applying
- Clear browser cache
- Restart dev server
- Verify TailwindCSS is properly configured

## 📱 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm serve
```

### Deploy
The built files will be in the `.output` directory. Deploy according to your hosting provider's instructions.

## 📝 Notes

- The site uses dark mode only (as per requirements)
- All animations are GPU-accelerated for performance
- Images are optional - the site works without them
- Contact information should be updated before going live
- SEO metadata is included in `__root.tsx`

## 🎉 You're All Set!

Your TwiiceWRLD portfolio is now ready. Customize the content, add your real contact information, and deploy!

For questions or issues, refer to the architecture documentation in `ARCHITECTURE.md`.


