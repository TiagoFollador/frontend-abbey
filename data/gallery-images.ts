import { BLUR_PLACEHOLDERS } from '@/lib/generate-blur-placeholder'

export type GalleryCategory = 'ambientes' | 'gastronomia' | 'eventos'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: GalleryCategory
  blurDataURL: string
  width: number
  height: number
}

export const galleryImages: GalleryImage[] = [
  // Ambientes
  { id: 'amb-01', src: '/images/gallery/ambiente-01.jpg', alt: 'Salão principal da Abbey — mesas elegantes', category: 'ambientes', blurDataURL: BLUR_PLACEHOLDERS.cream, width: 800, height: 600 },
  { id: 'amb-02', src: '/images/gallery/ambiente-02.jpg', alt: 'Varanda coberta da Abbey', category: 'ambientes', blurDataURL: BLUR_PLACEHOLDERS.cream, width: 800, height: 1067 },
  { id: 'amb-03', src: '/images/gallery/ambiente-03.jpg', alt: 'Jardim e área externa da Abbey', category: 'ambientes', blurDataURL: BLUR_PLACEHOLDERS.muted, width: 800, height: 534 },
  { id: 'amb-04', src: '/images/gallery/ambiente-04.jpg', alt: 'Detalhe da decoração histórica da Abbey', category: 'ambientes', blurDataURL: BLUR_PLACEHOLDERS.brown, width: 800, height: 800 },
  // Gastronomia
  { id: 'gast-01', src: '/images/gallery/prato-01.jpg', alt: 'Filé ao molho madeira — prato executivo', category: 'gastronomia', blurDataURL: BLUR_PLACEHOLDERS.gold, width: 800, height: 600 },
  { id: 'gast-02', src: '/images/gallery/prato-02.jpg', alt: 'Salmão grelhado com ervas frescas', category: 'gastronomia', blurDataURL: BLUR_PLACEHOLDERS.gold, width: 800, height: 533 },
  { id: 'gast-03', src: '/images/gallery/prato-03.jpg', alt: 'Sobremesa da casa — chocolate e frutas vermelhas', category: 'gastronomia', blurDataURL: BLUR_PLACEHOLDERS.brown, width: 800, height: 800 },
  { id: 'gast-04', src: '/images/gallery/prato-04.jpg', alt: 'Buffet de almoço executivo', category: 'gastronomia', blurDataURL: BLUR_PLACEHOLDERS.gold, width: 800, height: 600 },
  // Eventos
  { id: 'evt-01', src: '/images/gallery/evento-01.jpg', alt: 'Casamento na Abbey — cerimônia no jardim', category: 'eventos', blurDataURL: BLUR_PLACEHOLDERS.cream, width: 800, height: 534 },
  { id: 'evt-02', src: '/images/gallery/evento-02.jpg', alt: 'Evento corporativo — confraternização de empresa', category: 'eventos', blurDataURL: BLUR_PLACEHOLDERS.muted, width: 800, height: 600 },
  { id: 'evt-03', src: '/images/gallery/evento-03.jpg', alt: 'Formatura celebrada na Abbey', category: 'eventos', blurDataURL: BLUR_PLACEHOLDERS.cream, width: 800, height: 1067 },
  { id: 'evt-04', src: '/images/gallery/evento-04.jpg', alt: 'Mesa de doces para eventos na Abbey', category: 'eventos', blurDataURL: BLUR_PLACEHOLDERS.gold, width: 800, height: 800 },
]
