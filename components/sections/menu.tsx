'use client'
import { useState } from 'react'
import { CalendarCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MenuCard } from '@/components/ui/menu-card'
import { menuItems } from '@/data/menu'
import type { MenuItem } from '@/data/menu'

type Category = MenuItem['category']

interface Tab {
  label: string
  value: Category
}

const TABS: Tab[] = [
  { label: 'Almoço Executivo', value: 'executivo' },
  { label: 'Buffet', value: 'buffet' },
  { label: 'À la Carte', value: 'alacarte' },
]

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('executivo')

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  )

  return (
    <section id="cardapio" className="bg-background py-20 md:py-32">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-eyebrow text-primary uppercase tracking-brand mb-3">
            CARDÁPIO
          </p>
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Uma experiência gastronômica
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Descubra nossos pratos autorais, preparados com ingredientes
            selecionados e o cuidado de quem cozinha com paixão.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="mb-10">
          <div
            className="overflow-x-auto flex gap-6 pb-1 border-b border-border"
            role="tablist"
            aria-label="Categorias do cardápio"
          >
            {TABS.map((tab) => (
              <button
                key={tab.value}
                role="tab"
                aria-selected={activeCategory === tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={cn(
                  'shrink-0 pb-3 text-body-base transition-colors duration-base whitespace-nowrap',
                  activeCategory === tab.value
                    ? 'border-b-2 border-primary text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="#reservas"
            className={cn(
              'inline-flex items-center gap-2',
              'bg-primary text-primary-foreground',
              'px-8 py-3 rounded-lg font-medium',
              'hover:bg-primary/90 transition-all duration-base shadow-gold'
            )}
          >
            <CalendarCheck className="size-5" aria-hidden="true" />
            Fazer Reserva
          </a>
        </div>
      </div>
    </section>
  )
}

export default MenuSection
