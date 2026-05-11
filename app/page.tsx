import type { Metadata } from "next"
import HeroSection from "@/components/sections/hero"
import MenuSection from "@/components/sections/menu"
import EventsSection from "@/components/sections/events"
import GallerySection from "@/components/sections/gallery"

export const metadata: Metadata = {
  title: "Abbey Gastronomia e Eventos",
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MenuSection />
      <EventsSection />
      <GallerySection />
    </main>
  )
}
