'use client'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { DietaryBadge } from '@/components/ui/dietary-badge'
import type { MenuItem } from '@/data/menu'

interface MenuCardProps {
  item: MenuItem
  className?: string
}

export function MenuCard({ item, className }: MenuCardProps) {
  return (
    <article
      className={cn(
        'bg-card rounded-lg shadow-sm overflow-hidden border border-border/50 hover:shadow-md transition-shadow duration-base',
        className
      )}
    >
      {/* Image / placeholder */}
      <div className="relative w-full aspect-video">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted" aria-hidden="true" />
        )}

        {/* "Destaque do Chef" ribbon */}
        {item.highlight && (
          <span className="absolute top-0 left-0 bg-primary text-primary-foreground text-caption px-2 py-0.5 rounded-br z-10">
            Destaque do Chef
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="font-display text-heading-sm text-foreground">
          {item.name}
        </h3>

        <p className="text-body-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>

        {/* Dietary badges */}
        {item.dietaryTags && item.dietaryTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.dietaryTags.map((tag) => (
              <DietaryBadge key={tag} variant={tag} />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
