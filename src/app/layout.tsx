import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SmoothScroll from "./util/smooth-scroll";
import { Navbar } from "./components/navbar.component";
import { Footer } from "./components/footer.component";

export const foundersGrotesk = localFont({
  src: [
    {
      path: "../../public/assets/fonts/FoundersGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGrotesk-LightItalic.otf",
      weight: "300",
      style: "italic",
    },

    {
      path: "../../public/assets/fonts/FoundersGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGrotesk-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },

    {
      path: "../../public/assets/fonts/FoundersGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGrotesk-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },

    {
      path: "../../public/assets/fonts/FoundersGrotesk-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGrotesk-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },

    {
      path: "../../public/assets/fonts/FoundersGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGrotesk-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-founders",
  display: "swap",
});

export const foundersGroteskText = localFont({
  src: [
    {
      path: "../../public/assets/fonts/FoundersGroteskText-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGroteskText-LightItalic.otf",
      weight: "300",
      style: "italic",
    },

    {
      path: "../../public/assets/fonts/FoundersGroteskText-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGroteskText-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },

    {
      path: "../../public/assets/fonts/FoundersGroteskText-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGroteskText-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },

    {
      path: "../../public/assets/fonts/FoundersGroteskText-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGroteskText-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },

    {
      path: "../../public/assets/fonts/FoundersGroteskText-Bold-.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGroteskText-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-founders-text",
  display: "swap",
});

export const foundersGroteskMono = localFont({
  src: [
    {
      path: "../../public/assets/fonts/FoundersGroteskMono-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGroteskMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGroteskMono-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGroteskMono-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGroteskMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-founders-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dlxsystems.com"),
  title: {
    default: "DLX Systems | Systems Architecture & Digital Transformation",
    template: "%s | DLX Systems",
  },
  description:
    "DLX Systems helps companies build scalable engineering foundations, modern platforms, and systems that grow with confidence. Expert consulting in architecture and cloud engineering.",
  keywords: [
    "Systems Architecture",
    "Digital Transformation",
    "Cloud Engineering",
    "Software Consulting",
    "Product Engineering",
    "Platform Modernization",
    "Data Platforms",
  ],
  authors: [{ name: "Chamod Nugekotuwa", url: "https://www.dlxsystems.com" }],
  creator: "DLX Systems",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dlxsystems.com",
    title: "DLX Systems | Systems Architecture & Digital Transformation",
    description:
      "We build systems that scale ideas. Clean architecture, thoughtful engineering, and long-term impact.",
    siteName: "DLX Systems",
    images: [
      {
        url: "/assets/images/og-image.jpg", // Ensure this exists or fallback
        width: 1200,
        height: 630,
        alt: "DLX Systems - Systems Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DLX Systems | Systems Architecture",
    description:
      "We build systems that scale ideas. Clean architecture, thoughtful engineering, and long-term impact.",
    images: ["/assets/images/og-image.jpg"],
    creator: "@dlxsystems", // Update if known
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
  alternates: {
    canonical: "https://www.dlxsystems.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DLX Systems",
    url: "https://www.dlxsystems.com",
    logo: "https://www.dlxsystems.com/assets/images/logo-full.png", // Update path if needed
    founder: {
      "@type": "Person",
      name: "Chamod Nugekotuwa",
    },
    sameAs: [
      "https://www.linkedin.com/company/dlxsystems", // Update if real
      "https://github.com/dlxsystems",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "ceo@dlxsystems.com",
      contactType: "customer service",
    },
  };

  return (
    <html
      lang="en"
      className={`${foundersGrotesk.variable} ${foundersGroteskText.variable} ${foundersGroteskMono.variable}`}
    >
      <body className="antialiased bg-white/60">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-50 bg-white">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-50/80 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-pulse" />
          <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-50/80 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-pulse delay-700" />
          <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-sky-50/80 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-pulse delay-1000" />
        </div>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
