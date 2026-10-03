import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { StructuredData } from "@/components/seo/StructuredData";
import { COMPANY_INFO } from "@/data/company";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071D35",
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.contact.websiteUrl),
  title: {
    default: "Blue Sphere Facilities Management FZCO | Dubai, UAE",
    template: "%s | Blue Sphere Facilities Management",
  },
  description:
    "Blue Sphere Facilities Management FZCO provides professional facility management, advisory, and operational support for commercial, industrial, healthcare, leisure, and public facilities in Dubai, UAE.",
  keywords: [
    "Facilities Management Dubai",
    "FM Advisory UAE",
    "Commercial Facility Management Dubai",
    "Integrated Facility Management UAE",
    "Dubai Silicon Oasis Facilities Management",
    "Blue Sphere FZCO",
    "Facility Management Company Dubai",
    "Healthcare FM Support Dubai",
    "Industrial Facility Management UAE",
    "Asset Preservation Dubai",
    "FM Strategic Consultancy UAE",
  ],
  authors: [{ name: "BLUE SPHERE FACILITIES MANAGEMENT – FZCO" }],
  creator: "BLUE SPHERE FACILITIES MANAGEMENT – FZCO",
  publisher: "BLUE SPHERE FACILITIES MANAGEMENT – FZCO",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: `${COMPANY_INFO.contact.websiteUrl}/`,
    title: "Blue Sphere Facilities Management FZCO | Dubai, UAE",
    description:
      "Professional facility management, advisory, and operational support designed to enhance safety, efficiency, compliance, sustainability, and long-term facility performance.",
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Blue Sphere Facilities Management Dubai Head Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Sphere Facilities Management FZCO | Dubai, UAE",
    description:
      "Professional facility management, advisory, and operational support across Dubai and the UAE.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
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
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai, United Arab Emirates",
    "geo.position": "25.1213454;55.3789498",
    "ICBM": "25.1213454, 55.3789498",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
