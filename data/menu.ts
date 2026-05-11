export type DietaryTag = 'vegetariano' | 'sem-gluten' | 'destaque'

export interface MenuItem {
  id: string
  name: string
  description: string
  category: 'executivo' | 'buffet' | 'alacarte'
  image?: string
  dietaryTags?: DietaryTag[]
  highlight?: boolean
}

export const menuItems: MenuItem[] = [
  // Almoço Executivo (category: 'executivo')
  {
    id: 'exec-01',
    name: 'Filé ao Molho Madeira',
    description:
      'Medalhão de filé mignon grelhado ao ponto, molho madeira artesanal, purê de batata-doce e legumes salteados.',
    category: 'executivo',
    dietaryTags: ['destaque'],
    highlight: true,
  },
  {
    id: 'exec-02',
    name: 'Salmão Grelhado com Ervas',
    description:
      'Filé de salmão marinado em ervas frescas, acompanhado de risoto de limão-siciliano e aspargos.',
    category: 'executivo',
    dietaryTags: ['sem-gluten'],
  },
  {
    id: 'exec-03',
    name: 'Ravióli de Ricota e Espinafre',
    description:
      'Massa fresca artesanal recheada, ao molho de tomate-cereja confitado e manjericão.',
    category: 'executivo',
    dietaryTags: ['vegetariano'],
  },
  // Buffet (category: 'buffet')
  {
    id: 'buf-01',
    name: 'Lombo à Brasileira',
    description:
      'Lombo suíno temperado com ervas e assado lentamente, acompanhamentos sazonais.',
    category: 'buffet',
  },
  {
    id: 'buf-02',
    name: 'Quiche de Legumes',
    description:
      'Torta salgada de massa folhada recheada com legumes frescos da estação.',
    category: 'buffet',
    dietaryTags: ['vegetariano'],
  },
  {
    id: 'buf-03',
    name: 'Frango ao Curry',
    description:
      'Frango caipira cozido em curry suave com leite de coco, servido com arroz integral.',
    category: 'buffet',
    dietaryTags: ['sem-gluten'],
  },
  // À la Carte (category: 'alacarte')
  {
    id: 'ala-01',
    name: 'Carpaccio de Filé',
    description:
      'Lâminas finas de filé mignon, rúcula, parmesão ralado, alcaparras e azeite trufado.',
    category: 'alacarte',
    dietaryTags: ['sem-gluten', 'destaque'],
    highlight: true,
  },
  {
    id: 'ala-02',
    name: 'Risoto de Funghi Porcini',
    description:
      'Arroz arbóreo cremoso com funghi porcini importado, finalizado com manteiga e parmesão.',
    category: 'alacarte',
    dietaryTags: ['vegetariano', 'sem-gluten'],
  },
]
