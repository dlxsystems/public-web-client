import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "dlxsystems",
  description: "Branding website for dlx-systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${foundersGrotesk.variable} ${foundersGroteskText.variable} ${foundersGroteskMono.variable}
    antialiased
  `}
      >
        {children}
      </body>
    </html>
  );
}
