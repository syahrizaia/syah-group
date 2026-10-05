import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Syne } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  metadataBase: new URL("https://syahriza.vercel.app"),
  title: {
    default: "Syah Group | Tiga Pilar, Satu Ekosistem",
    template: "%s | Syah Group",
  },
  description: "Syah Group menghubungkan tiga pilar bisnis: alat berat dan industri, software dan teknologi, serta Syah Studio untuk multimedia dan visual.",
  keywords: ["Syah Group", "Alat Berat", "Teknologi Informasi", "Software", "Multimedia", "Videografi", "Fotografi", "Editing", "Perusahaan Indonesia", "Inovasi"],
  authors: [{ name: "Syahriza", url: "https://syahriza.vercel.app" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://syahriza.vercel.app",
    siteName: "Syah Group",
    title: "Syah Group | Tiga Pilar, Satu Ekosistem",
    description: "Syah Group menghubungkan tiga pilar bisnis: alat berat dan industri, software dan teknologi, serta Syah Studio untuk multimedia dan visual.",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
        alt: "Syah Group Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syah Group | Tiga Pilar, Satu Ekosistem",
    description: "Syah Group menghubungkan tiga pilar bisnis: alat berat dan industri, software dan teknologi, serta Syah Studio untuk multimedia dan visual.",
    creator: "@syahriza",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Syah Group",
    "url": "https://syahriza.vercel.app",
    "logo": "https://syahriza.vercel.app/icon.png",
    "description": "Syah Group menghubungkan tiga pilar bisnis: alat berat dan industri, software dan teknologi, serta Syah Studio untuk multimedia dan visual."
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${syne.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
