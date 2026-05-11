import Image from 'next/image'
import {
  ArrowRight,
  Heart,
  Briefcase,
  GraduationCap,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { EventFormat } from '@/data/event-formats'

const ICON_MAP = {
  Heart,
  Briefcase,
  GraduationCap,
  UtensilsCrossed,
  Sparkles,
} as const

type IconName = keyof typeof ICON_MAP

interface EventCardProps {
  format: EventFormat
  className?: string
}

export function EventCard({ format, className }: EventCardProps) {
  const IconComponent =
    format.icon in ICON_MAP
      ? ICON_MAP[format.icon as IconName]
      : null

  return (
    <article
      className={cn(
        'flex flex-col bg-card border border-border rounded-lg overflow-hidden shadow-sm',
        'hover:shadow-md transition-shadow duration-base',
        className
      )}
    >
      {/* Image or icon header */}
      {format.image ? (
        <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
          <Image
            src={format.image}
            alt={format.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center bg-primary/10 py-10">
          {IconComponent && (
            <IconComponent
              className="size-12 text-primary"
              aria-hidden="true"
            />
          )}
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        {/* Icon + title row (only show icon here when there's no image) */}
        <div className="flex items-center gap-2">
          {format.image && IconComponent && (
            <IconComponent
              className="size-5 text-primary shrink-0"
              aria-hidden="true"
            />
          )}
          <h3 className="font-display text-heading-md text-foreground">
            {format.title}
          </h3>
        </div>

        <p className="text-body-sm text-muted-foreground flex-1">
          {format.description}
        </p>

        <a
          href="#orcamento"
          className={cn(
            'inline-flex items-center gap-1.5',
            'text-primary text-body-sm font-medium',
            'hover:text-primary/80 transition-colors'
          )}
        >
          {format.ctaLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default EventCard
