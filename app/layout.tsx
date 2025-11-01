import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import Script from "next/script";
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
  title: "Junk Hauler Boise - Professional Junk Removal Service",
  description: "Professional junk removal service in Boise and the Treasure Valley. Same-day service available. Licensed and insured. Get an instant quote!",
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
      </head>
      <body
        className={`${inter.variable} ${lexend.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
