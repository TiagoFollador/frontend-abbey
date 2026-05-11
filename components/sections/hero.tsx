"use client"

import Image from "next/image"
import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

import { cn } from "@/lib/utils"
import { heroImages } from "@/data/hero-images"

export function HeroSection() {
  const prefersReduced = useReducedMotion()

  const transition: Transition = prefersReduced
    ? { duration: 0 }
    : { duration: 0.7, ease: "easeOut" }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition },
  }

  return (
    <section
      className={cn(
        "relative w-full min-h-screen dark",
        "flex items-center justify-start overflow-hidden bg-brown-dark"
      )}
    >
      {/* Slideshow background */}
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="absolute inset-0 w-full h-full"
        aria-label="Galeria de imagens da Abbey"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={image.src}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 animate-hero-kenburns">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0 && image.priority === true}
                  sizes="100vw"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={cn(
          "relative z-20 w-full",
          "flex items-end md:items-center",
          "min-h-screen",
          "px-6 md:px-12 lg:px-24",
          "pb-20 md:pb-0"
        )}
      >
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="text-eyebrow uppercase tracking-brand text-gold-light mb-4"
          >
            São José dos Pinhais, PR
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-display-md md:text-display-lg text-white mb-6"
          >
            Gastronomia que se vive, eventos que se lembram
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-body-lg text-white/80 mb-10"
          >
            Almoços executivos, buffet refinado e espaço para eventos inesquecíveis
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#reservas"
              className={cn(
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "px-8 py-3 rounded-lg font-medium",
                "transition-all duration-base shadow-gold",
                "inline-block text-center"
              )}
            >
              Reservar Almoço
            </a>
            <a
              href="#eventos"
              className={cn(
                "border-2 border-white/80 text-white hover:bg-white/10",
                "px-8 py-3 rounded-lg font-medium",
                "transition-all duration-base",
                "inline-block text-center"
              )}
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Ken Burns keyframes */}
      <style>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
        .animate-hero-kenburns {
          animation: kenburns 8s ease-in-out infinite alternate;
          position: absolute;
          inset: 0;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
