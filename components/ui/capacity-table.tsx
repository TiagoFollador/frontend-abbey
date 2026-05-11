import { cn } from '@/lib/utils'
import type { VenueSpace } from '@/data/event-formats'

interface CapacityTableProps {
  spaces: VenueSpace[]
  className?: string
}

export function CapacityTable({ spaces, className }: CapacityTableProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {/* Desktop table */}
      <div className="hidden md:block border border-border rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-caption uppercase tracking-wide text-muted-foreground font-medium">
                Ambiente
              </th>
              <th className="px-4 py-3 text-caption uppercase tracking-wide text-muted-foreground font-medium">
                Capacidade *
              </th>
              <th className="px-4 py-3 text-caption uppercase tracking-wide text-muted-foreground font-medium">
                Características
              </th>
            </tr>
          </thead>
          <tbody>
            {spaces.map((space, index) => (
              <tr
                key={space.id}
                className={cn(
                  'border-t border-border',
                  index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                )}
              >
                <td className="px-4 py-3 text-body-sm font-medium text-foreground">
                  {space.name}
                </td>
                <td className="px-4 py-3 text-body-sm text-muted-foreground italic">
                  {space.capacity}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1.5">
                    {space.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-background border border-border rounded text-caption px-1.5 py-0.5 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden space-y-3">
        {spaces.map((space) => (
          <div
            key={space.id}
            className="border border-border rounded-lg bg-background p-4 space-y-2"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-body-sm font-medium text-foreground">
                {space.name}
              </span>
              <span className="text-caption text-muted-foreground italic">
                {space.capacity}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {space.features.map((feature) => (
                <span
                  key={feature}
                  className="bg-background border border-border rounded text-caption px-1.5 py-0.5 text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <p className="text-caption text-muted-foreground">
        * Capacidades sujeitas a confirmação. Consulte-nos para detalhes.
      </p>
    </div>
  )
}

export default CapacityTable
