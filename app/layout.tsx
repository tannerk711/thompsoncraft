import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thompson Craft LLC | Professional Junk Removal in Rio Rancho & Central New Mexico",
  description: "Professional junk removal service in Rio Rancho and Central New Mexico. Stress-free, respectful service with eco-friendly disposal. Same-day service available. Licensed & insured.",
  keywords: "junk removal Rio Rancho, Albuquerque junk removal, Santa Fe junk removal, stump grinding New Mexico, gravel delivery Rio Rancho, eco-friendly disposal NM, estate cleanout Albuquerque, construction debris removal, professional junk hauling",
  openGraph: {
    title: "Thompson Craft LLC | Professional Junk Removal Rio Rancho",
    description: "Professional, stress-free junk removal throughout Central New Mexico. Eco-friendly, respectful, and reliable.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://upload-widget.cloudinary.com/global/all.js"
          strategy="beforeInteractive"
        />
        {/* Google Analytics — update with Thompson Craft LLC tracking ID when available */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXXXXXXXXX');
          `}
        </Script> */}
      </head>
      <body
        className={`${inter.variable} ${lexend.variable} antialiased font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
