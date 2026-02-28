import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://medicync.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4159ff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Medicync — The First Laptop Built for Healthcare",
    template: "%s | Medicync",
  },
  description:
    "Clinical-grade AI workstation laptop built for clients. GPU-accelerated medical imaging, HIPAA-compliant security, DICOM-grade display, and AI-powered diagnostics — all in one device. Join the beta program.",
  keywords: [
    "medical laptop",
    "clinical workstation",
    "HIPAA compliant laptop",
    "medical imaging laptop",
    "DICOM display",
    "AI diagnostics",
    "physician laptop",
    "hospital laptop",
    "CBCT laptop",
    "CT scan laptop",
    "MRI imaging workstation",
    "surgical planning",
    "medical-grade computer",
    "healthcare technology",
    "clinical computing",
    "biometric security laptop",
    "Medicync",
  ],
  authors: [{ name: "Medicync", url: siteUrl }],
  creator: "Medicync",
  publisher: "Medicync",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Medicync",
    title: "Medicync — The First Laptop Built for Healthcare",
    description:
      "Clinical-grade AI workstation for clients. GPU-accelerated imaging, absolute data security, and AI-powered intelligence. Join the beta — first 1,000 clients get it for $500.",
    images: [
      {
        url: "/notebook-branco-profissional.png",
        width: 1200,
        height: 630,
        alt: "Medicync clinical-grade laptop for clients",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicync — The First Laptop Built for Healthcare",
    description:
      "Clinical-grade AI workstation for clients. GPU-accelerated imaging, HIPAA-compliant security, DICOM display. Join the beta program.",
    images: ["/notebook-branco-profissional.png"],
    creator: "@medicync",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

import SmoothScroll from "./components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/LOGOMEDICYNCCHANG.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
