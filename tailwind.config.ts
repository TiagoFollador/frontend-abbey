import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        /* Abbey brand palette */
        gold: {
          DEFAULT: "#C9A96E",
          light: "#D9BE90",
          dark: "#B08A4A",
        },
        cream: {
          DEFAULT: "#FAF6EF",
          dark: "#F2EAD8",
        },
        brown: {
          DEFAULT: "#2C1810",
          light: "#4A2C1E",
          dark: "#1A0E08",
        },
        burgundy: {
          DEFAULT: "#6B2737",
          light: "#8A3347",
          dark: "#4E1B27",
        },
        "soft-white": "#FDFAF5",

        /* shadcn CSS-variable tokens (HSL channels in --var for opacity modifier support) */
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", ...fontFamily.serif],
        body: ["var(--font-inter)", ...fontFamily.sans],
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "brand-xs": "var(--space-2)",
        "brand-sm": "var(--space-4)",
        "brand-md": "var(--space-8)",
        "brand-lg": "var(--space-12)",
        "brand-xl": "var(--space-20)",
      },
      fontSize: {
        "display-xl": ["var(--text-7xl)", { lineHeight: "1",   letterSpacing: "var(--tracking-tight)" }],
        "display-lg": ["var(--text-6xl)", { lineHeight: "1",   letterSpacing: "var(--tracking-tight)" }],
        "display-md": ["var(--text-5xl)", { lineHeight: "1.1", letterSpacing: "var(--tracking-tight)" }],
        "display-sm": ["var(--text-4xl)", { lineHeight: "1.2" }],
        "heading-lg": ["var(--text-3xl)", { lineHeight: "1.3" }],
        "heading-md": ["var(--text-2xl)", { lineHeight: "1.35" }],
        "heading-sm": ["var(--text-xl)",  { lineHeight: "1.4" }],
        "body-lg":    ["var(--text-lg)",  { lineHeight: "1.75" }],
        "body-base":  ["var(--text-base)",{ lineHeight: "1.6" }],
        "body-sm":    ["var(--text-sm)",  { lineHeight: "1.5" }],
        "caption":    ["var(--text-xs)",  { lineHeight: "1.4", letterSpacing: "var(--tracking-wide)" }],
        "eyebrow":    ["var(--text-sm)",  { lineHeight: "1",   letterSpacing: "var(--tracking-brand)" }],
      },
      boxShadow: {
        sm:   "var(--shadow-sm)",
        md:   "var(--shadow-md)",
        lg:   "var(--shadow-lg)",
        xl:   "var(--shadow-xl)",
        gold: "var(--shadow-gold)",
      },
      letterSpacing: {
        brand: "var(--tracking-brand)",
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        base: "var(--transition-base)",
        slow: "var(--transition-slow)",
      },
      transitionTimingFunction: {
        brand: "var(--ease-brand)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
