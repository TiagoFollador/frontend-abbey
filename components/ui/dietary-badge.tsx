import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-caption font-medium transition-colors',
  {
    variants: {
      variant: {
        vegetariano: 'bg-emerald-100 text-emerald-800',
        'sem-gluten': 'bg-amber-100 text-amber-800',
        destaque:
          'bg-primary/15 text-primary-foreground border border-primary/30',
      },
    },
    defaultVariants: { variant: 'vegetariano' },
  }
)

const LABELS: Record<string, string> = {
  vegetariano: 'Vegetariano',
  'sem-gluten': 'Sem Glúten',
  destaque: 'Destaque do Chef',
}

interface DietaryBadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string
}

export function DietaryBadge({ variant, className }: DietaryBadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)}>
      {LABELS[variant ?? 'vegetariano']}
    </span>
  )
}
