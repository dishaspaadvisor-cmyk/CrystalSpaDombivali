"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/siteConfig";

export default function AboutHero() {
  const whatsappNumber = SITE.phoneWhatsApp.replace(/\D/g, "");

  return (
    <section className="relative h-[65vh] min-h-[550px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero/hero.png"
        alt="About Crystal Spa"
        fill
        priority
        className="object-cover"
      />

      {/* Brand Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,.85), rgba(0,0,0,.45), rgba(236,38,143,.25))",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl text-white">
            {/* Badge */}
            <span
              className="inline-flex items-center rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur-md md:text-sm"
              style={{
                borderColor: SITE.brand,
                color: SITE.brand,
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            >
              {SITE.title}
            </span>

            {/* Title */}
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              A Luxury Wellness Spa
            </h1>

            {/* Line */}
            <div
              className="mt-6 h-1 w-24 rounded-full"
              style={{ backgroundColor: SITE.brand }}
            />

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-lg lg:text-xl">
              Experience luxury wellness, premium massage therapies,
              professional care, and complete relaxation at Crystal Spa
              Nagpur.
            </p>

            {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href={`tel:${SITE.phoneCall}`}
                  className="flex items-center justify-center rounded-full bg-[#EC268F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 sm:w-auto"
                >
                  📞 Call Now
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 sm:w-auto"
                >
                  WhatsApp Us
                </a>
              </div>

        
          </div>
        </div>
      </div>

    </section>
  );
}