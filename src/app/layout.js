import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlotingButton from "../components/FlotingButton";
import { SITE } from "../lib/siteConfig";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: SITE.title || "Orange Spa",
  description: "Orange Spa Dombivali - Relaxation & Wellness",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="0Tn5Ii84ekGysx4hjpDv4SKP87exOB5BRLYfIOc-Y1Y"
        />
      </head>

      <body className="min-h-full flex flex-col">
         <Script
    src="https://www.googletagmanager.com/gtag/js?id=AW-18271592496"
    strategy="afterInteractive"
  />

  <Script id="google-ads" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18271592496');
    `}
  </Script>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FlotingButton />
      </body>
    </html>
  );
}