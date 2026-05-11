export interface HeroImage {
  src: string
  alt: string
  priority?: boolean
}

export const heroImages: HeroImage[] = [
  { src: "/images/hero/ambiente-01.jpg", alt: "Salão principal da Abbey — mesas elegantes em ambiente histórico", priority: true },
  { src: "/images/hero/gastronomia-01.jpg", alt: "Prato executivo — culinária refinada da Abbey" },
  { src: "/images/hero/evento-01.jpg", alt: "Evento corporativo na Abbey — espaço decorado" },
  { src: "/images/hero/ambiente-02.jpg", alt: "Varanda externa da Abbey — ambiente acolhedor" },
]
