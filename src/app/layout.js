import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlotingButton from "../components/FlotingButton";
import { SITE } from "../lib/siteConfig";

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

        {/* Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18271592496"
          strategy="afterInteractive"
        />

        {/* Google Ads Initialization */}
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'AW-18271592496');
          `}
        </Script>

        {/* Conversion Function */}
        <Script id="google-conversion-function" strategy="afterInteractive">
          {`
            window.gtag_report_conversion = function(url) {

              var callback = function () {
                if (typeof url !== 'undefined') {
                  window.location = url;
                }
              };

              gtag('event', 'conversion', {
                send_to: 'AW-18271592496/0ggeCOm3tMUcELDAyYhE',
                value: 1.0,
                currency: 'INR',
                transaction_id: '',
                event_callback: callback
              });

              return false;
            };
          `}
        </Script>

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <FlotingButton />

      </body>
    </html>
  );
}