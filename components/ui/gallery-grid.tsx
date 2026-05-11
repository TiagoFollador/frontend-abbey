'use client'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { GalleryImage } from '@/data/gallery-images'

interface GalleryGridProps {
  images: GalleryImage[]
  onImageClick: (index: number) => void
  className?: string
}

export function GalleryGrid({ images, onImageClick, className }: GalleryGridProps) {
  return (
    <div className={cn('columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4', className)}>
      {images.map((image, index) => (
        <button
          key={image.id}
          onClick={() => onImageClick(index)}
          className="break-inside-avoid block w-full overflow-hidden rounded-lg cursor-pointer group relative"
          aria-label={`Ver foto: ${image.alt}`}
        >
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-auto object-cover transition-transform duration-slow group-hover:scale-105"
              loading="lazy"
              placeholder="blur"
              blurDataURL={image.blurDataURL}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/20 transition-colors duration-base rounded-lg" />
          </div>
        </button>
      ))}
    </div>
  )
}
