import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navigation, Footer } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "@huntsyea",
    template: "%s — @huntsyea",
  },
  description: "Business and Product Leader. Growing ideas and people.",
  metadataBase: new URL("https://huntsyea.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "@huntsyea",
    title: "@huntsyea",
    description: "Business and Product Leader. Growing ideas and people.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@huntsyea",
    title: "@huntsyea",
    description: "Business and Product Leader. Growing ideas and people.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navigation />
        <main className="pt-[var(--space-10)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
