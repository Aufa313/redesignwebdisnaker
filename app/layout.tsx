import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import AiChat from "@/components/AiChat";
import Navbar from "@/components/Navbar";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import BannerCarousel from "@/components/BannerCarousel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://disnaker-sleman.example"),
  title: {
    default: "Dinas Ketenagakerjaan Sleman",
    template: "%s | Dinas Ketenagakerjaan Sleman",
  },
  description:
    "Portal layanan ketenagakerjaan, informasi pekerjaan, pelatihan, dan layanan publik di Kabupaten Sleman.",
  keywords: [
    "Disnaker Sleman",
    "Dinas Ketenagakerjaan Sleman",
    "lowongan kerja Sleman",
    "pelatihan kerja",
    "informasi publik",
  ],
  openGraph: {
    title: "Dinas Ketenagakerjaan Sleman",
    description:
      "Portal layanan ketenagakerjaan, informasi pekerjaan, pelatihan, dan layanan publik di Kabupaten Sleman.",
    url: "https://disnaker-sleman.example",
    siteName: "Dinas Ketenagakerjaan Sleman",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinas Ketenagakerjaan Sleman",
    description:
      "Portal layanan ketenagakerjaan, informasi pekerjaan, pelatihan, dan layanan publik di Kabupaten Sleman.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <BannerCarousel />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <AccessibilityMenu />
        <AiChat />
      </body>
    </html>
  );
}
