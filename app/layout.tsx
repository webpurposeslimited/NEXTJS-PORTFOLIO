import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";

import "./globals.css";

// Dynamically import client components with SSR disabled to prevent hydration errors
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop").then(mod => mod.ScrollToTop), { ssr: false });

// Import Preloader directly to ensure it loads first
import { Preloader } from "@/components/ui/Preloader";

// Optimize font loading with display swap to prevent layout shift
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Orvith | Crafting Digital Experiences",
  description: "Discover Orvith's world of design and development — where freelance creativity meets smart digital solutions. From bold ideas to pixel-perfect execution.",
  keywords: [
    "web development",
    "frontend developer",
    "UI/UX design",
    "React developer",
    "Next.js developer",
    "freelance developer",
    "digital solutions",
    "web design",
    "responsive design",
    "modern web applications",
    "TypeScript",
    "JavaScript",
    "portfolio",
    "Orvith"
  ],
  authors: [{ name: "Orvith" }],
  creator: "Orvith",
  publisher: "Orvith",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://orvith.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Orvith | Crafting Digital Experiences",
    description: "Discover Orvith's world of design and development — where freelance creativity meets smart digital solutions.",
    url: 'https://Orvith.com', // Replace with your actual domain
    siteName: "Orvith's Portfolio",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Orvith | Crafting Digital Experiences",
    description: "Discover Orvith's world of design and development — where freelance creativity meets smart digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }, 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#18181b" /> {/* Updated to zinc theme color */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-zinc antialiased`}>
        <Preloader />
        <div style={{ visibility: 'hidden' }} id="content-container" className="content-container">
          {children}
          <ScrollToTop />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
