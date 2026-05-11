'use client'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { GalleryGrid } from '@/components/ui/gallery-grid'
import { galleryImages, type GalleryCategory } from '@/data/gallery-images'
import { cn } from '@/lib/utils'

type FilterCategory = 'todos' | GalleryCategory

const FILTERS: { label: string; value: FilterCategory }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Ambientes', value: 'ambientes' },
  { label: 'Gastronomia', value: 'gastronomia' },
  { label: 'Eventos', value: 'eventos' },
]

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('todos')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages = activeFilter === 'todos'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter)

  const slides = filteredImages.map(img => ({ src: img.src, alt: img.alt }))

  function handleImageClick(index: number) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="galeria" className="bg-background py-20 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-eyebrow text-primary uppercase tracking-brand mb-3">GALERIA</p>
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Momentos que inspiram
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Cada imagem conta a história de uma experiência única — ambientes que acolhem,
            pratos que surpreendem e eventos que ficam na memória.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex gap-2 mb-10 overflow-x-auto pb-1 justify-center"
          role="tablist"
          aria-label="Filtrar galeria por categoria"
        >
          {FILTERS.map(filter => (
            <button
              key={filter.value}
              role="tab"
              aria-selected={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                'shrink-0 px-5 py-2 rounded-full text-body-sm font-medium transition-all duration-fast border',
                activeFilter === filter.value
                  ? 'bg-primary text-primary-foreground border-primary shadow-gold'
                  : 'bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <GalleryGrid
          images={filteredImages}
          onImageClick={handleImageClick}
        />

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
          plugins={[Zoom, Thumbnails]}
        />
      </div>
    </section>
  )
}
