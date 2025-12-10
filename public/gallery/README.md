# Gallery Assets Directory

This directory contains all gallery images organized by category.

## Folder Structure

```
public/gallery/
├── branding/     # Brand identity designs, visual identities
├── posters/      # Event posters, promotional posters
├── banners/      # Web banners, social media banners
├── logos/        # Logo designs
├── flyers/       # Promotional flyers, marketing materials
├── websites/     # Website designs, UI/UX mockups
└── other/        # Other design work
```

## Adding Images

1. Place your image files in the appropriate category folder
2. Use descriptive filenames (e.g., `kundarilla-palace-branding.jpg`)
3. Recommended formats: `.jpg`, `.png`, `.webp`
4. Recommended sizes: 1200x800px or larger for best quality

## Image Paths

Images in this directory are referenced from the root as:
- `/gallery/branding/your-image.jpg`
- `/gallery/posters/your-image.jpg`
- etc.

## Example

If you add an image at `public/gallery/branding/twiice-tech-identity.jpg`, 
reference it in `src/data/gallery.ts` as:
```typescript
image: '/gallery/branding/twiice-tech-identity.jpg'
```

