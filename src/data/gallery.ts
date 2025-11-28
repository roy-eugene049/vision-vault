export type GalleryCategory = 'all' | 'websites' | 'posters' | 'banners' | 'logos' | 'flyers' | 'branding' | 'other'

export interface GalleryItem {
  id: string
  title: string
  category: GalleryCategory
  image: string
  description?: string
  tags?: string[]
  link?: string
}

export const galleryItems: GalleryItem[] = [
  // Placeholder items - you can add your actual images later
  {
    id: 'gallery-1',
    title: 'Brand Identity Design',
    category: 'branding',
    image: '/api/placeholder/800/600',
    description: 'Complete brand identity system',
    tags: ['Branding', 'Logo', 'Identity'],
  },
  {
    id: 'gallery-2',
    title: 'Event Poster',
    category: 'posters',
    image: '/api/placeholder/800/600',
    description: 'Modern event poster design',
    tags: ['Poster', 'Event', 'Design'],
  },
  {
    id: 'gallery-3',
    title: 'Product Banner',
    category: 'banners',
    image: '/api/placeholder/800/600',
    description: 'E-commerce product banner',
    tags: ['Banner', 'E-commerce', 'Marketing'],
  },
  {
    id: 'gallery-4',
    title: 'Logo Design',
    category: 'logos',
    image: '/api/placeholder/800/600',
    description: 'Modern logo concept',
    tags: ['Logo', 'Branding'],
  },
  {
    id: 'gallery-5',
    title: 'Promotional Flyer',
    category: 'flyers',
    image: '/api/placeholder/800/600',
    description: 'Marketing flyer design',
    tags: ['Flyer', 'Marketing', 'Print'],
  },
  {
    id: 'gallery-6',
    title: 'Website Design',
    category: 'websites',
    image: '/api/placeholder/800/600',
    description: 'Modern website interface',
    tags: ['Web Design', 'UI/UX'],
  },
]

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'websites', label: 'Websites' },
  { id: 'posters', label: 'Posters' },
  { id: 'banners', label: 'Banners' },
  { id: 'logos', label: 'Logos' },
  { id: 'flyers', label: 'Flyers' },
  { id: 'branding', label: 'Branding' },
  { id: 'other', label: 'Other' },
]

