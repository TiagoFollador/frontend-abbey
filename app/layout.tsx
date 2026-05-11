import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://abbeygastronomia.com.br",
  ),
  title: {
    default: "Abbey Gastronomia e Eventos | São José dos Pinhais",
    template: "%s | Abbey Gastronomia e Eventos",
  },
  description:
    "Restaurante e espaço para eventos em São José dos Pinhais, PR. Almoço executivo e realização de eventos com experiência gastronômica única.",
  keywords: [
    "restaurante",
    "eventos",
    "São José dos Pinhais",
    "almoço executivo",
    "buffet",
    "gastronomia",
    "espaço para eventos",
  ],
  authors: [{ name: "Abbey Gastronomia e Eventos" }],
  creator: "Abbey Gastronomia e Eventos",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Abbey Gastronomia e Eventos",
    title: "Abbey Gastronomia e Eventos | São José dos Pinhais",
    description:
      "Restaurante e espaço para eventos em São José dos Pinhais, PR.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abbey Gastronomia e Eventos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abbey Gastronomia e Eventos",
    description:
      "Restaurante e espaço para eventos em São José dos Pinhais, PR.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfairDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
