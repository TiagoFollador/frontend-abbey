export interface EventFormat {
  id: string
  title: string
  description: string
  icon: string          // Lucide icon name as string (we'll map it in the component)
  image?: string
  ctaLabel: string
}

export const eventFormats: EventFormat[] = [
  {
    id: 'casamentos',
    title: 'Casamentos',
    description:
      'Celebre o dia mais especial da sua vida em uma casa histórica cheia de charme. Ambientes exclusivos, decoração personalizada e gastronomia de alto padrão para tornar cada detalhe inesquecível.',
    icon: 'Heart',
    ctaLabel: 'Solicitar Orçamento',
    image: '/images/events/casamento-01.jpg',
  },
  {
    id: 'corporativo',
    title: 'Eventos Corporativos',
    description:
      'Da confraternização anual ao workshop estratégico: espaços versáteis com infraestrutura completa, atendimento personalizado e cardápio executivo para impressionar seus convidados.',
    icon: 'Briefcase',
    ctaLabel: 'Solicitar Orçamento',
    image: '/images/events/corporativo-01.jpg',
  },
  {
    id: 'formaturas',
    title: 'Formaturas',
    description:
      'Uma conquista merece uma celebração à altura. Ambiente Instagram-friendly, buffet completo e equipe dedicada para que você curta cada momento da sua festa.',
    icon: 'GraduationCap',
    ctaLabel: 'Solicitar Orçamento',
    image: '/images/events/formatura-01.jpg',
  },
  {
    id: 'catering',
    title: 'Catering Externo',
    description:
      'Levamos a experiência Abbey até você. Serviço completo de catering para eventos externos — montagem, equipe, gastronomia e suporte logístico do início ao fim.',
    icon: 'UtensilsCrossed',
    ctaLabel: 'Solicitar Orçamento',
  },
  {
    id: 'producao',
    title: 'Produção Completa',
    description:
      'Deixe tudo conosco. Do conceito ao desmonte, nossa equipe cuida de cada detalhe: decoração, iluminação, som, fotografia e gastronomia sob medida.',
    icon: 'Sparkles',
    ctaLabel: 'Solicitar Orçamento',
  },
]

export interface VenueSpace {
  id: string
  name: string
  capacity: string       // placeholder text like "A confirmar"
  features: string[]
}

export const venueSpaces: VenueSpace[] = [
  {
    id: 'salao-principal',
    name: 'Salão Principal',
    capacity: 'A confirmar',
    features: ['Ar-condicionado', 'Sonorização', 'Iluminação cênica'],
  },
  {
    id: 'varanda',
    name: 'Varanda',
    capacity: 'A confirmar',
    features: ['Ambiente externo', 'Vista para o jardim'],
  },
  {
    id: 'jardim',
    name: 'Jardim',
    capacity: 'A confirmar',
    features: ['Cerimônias ao ar livre', 'Tendas disponíveis'],
  },
  {
    id: 'sala-reunioes',
    name: 'Sala de Reuniões',
    capacity: 'A confirmar',
    features: ['Projetor', 'Wi-Fi', 'Quadro branco'],
  },
]
