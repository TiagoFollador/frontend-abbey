import Image from 'next/image'
import { MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import { eventFormats, venueSpaces } from '@/data/event-formats'
import { EventCard } from '@/components/ui/event-card'
import { CapacityTable } from '@/components/ui/capacity-table'

const highlights = [
  {
    src: '/images/events/highlight-01.jpg',
    alt: 'Casamento na Abbey — decoração floral',
  },
  {
    src: '/images/events/highlight-02.jpg',
    alt: 'Evento corporativo na Abbey',
  },
  {
    src: '/images/events/highlight-03.jpg',
    alt: 'Formatura celebrada na Abbey',
  },
] as const

export function EventsSection() {
  return (
    <section id="eventos">
      {/* ── Section Header ────────────────────────────────────── */}
      <div className="bg-brown text-cream py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="text-eyebrow text-primary uppercase tracking-brand mb-4">
            EVENTOS &amp; CATERING
          </p>
          <h2 className="font-display text-display-sm md:text-display-md text-[#FDFAF5] mb-6">
            Seu evento. Nossa paixão.
          </h2>
          <p className="text-body-lg text-cream/80">
            Casamentos, eventos corporativos, formaturas e catering externo —
            cada evento recebe atenção única e gastronomia de alto nível.
          </p>
        </div>
      </div>

      {/* ── Event Format Cards ────────────────────────────────── */}
      <div className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="mb-10">
            <p className="text-eyebrow text-primary uppercase tracking-brand mb-3">
              FORMATOS DE EVENTO
            </p>
            <h3 className="font-display text-heading-lg text-foreground">
              Como podemos celebrar com você
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventFormats.map((format) => (
              <EventCard key={format.id} format={format} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Venue Capacity ────────────────────────────────────── */}
      <div className="bg-muted/50 py-16">
        <div className="container">
          <div className="mb-8">
            <p className="text-eyebrow text-primary uppercase tracking-brand mb-3">
              NOSSOS ESPAÇOS
            </p>
            <h3 className="font-display text-heading-lg text-foreground mb-4">
              Ambientes para cada ocasião
            </h3>
            <p className="text-body-sm text-muted-foreground">
              ⚠ Capacidades serão confirmadas em breve. Entre em contato para disponibilidade.
            </p>
          </div>

          <CapacityTable spaces={venueSpaces} />
        </div>
      </div>

      {/* ── Highlights Gallery ────────────────────────────────── */}
      <div className="py-16">
        <div className="container">
          <h3 className="font-display text-heading-lg text-foreground mb-8">
            Momentos que ficam
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((image) => (
              <div
                key={image.src}
                className="relative overflow-hidden rounded-lg h-60 md:h-72"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <div className="bg-brown py-16 text-center">
        <div className="container max-w-2xl">
          <h3 className="font-display text-display-sm text-[#FDFAF5] mb-4">
            Pronto para criar memórias?
          </h3>
          <p className="text-body-lg text-cream/80 mb-10">
            Fale com nossa equipe e receba um orçamento personalizado.
          </p>
          <a
            href="#orcamento"
            id="orcamento"
            className={cn(
              'inline-flex items-center gap-2',
              'bg-primary text-primary-foreground',
              'px-10 py-4 rounded-lg text-body-lg font-medium',
              'hover:bg-primary/90 transition-all shadow-gold'
            )}
          >
            <MessageSquare className="size-5" aria-hidden="true" />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
