"use client";

import Image from "next/image";
import { SITE } from "@/lib/siteConfig";

export default function OffersHero() {
  const whatsappNumber = SITE.phoneWhatsApp.replace(/\D/g, "");

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[550px] sm:min-h-[600px] lg:h-[85vh]">
        {/* Background */}
        <Image
          src="/hero/hero2.png"
          alt="Crystal Spa Offers"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-[#EC268F]/25" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl text-center lg:text-left text-white">
              
              {/* Badge */}
              <span className="inline-flex rounded-full border border-[#EC268F] bg-[#EC268F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#EC268F] backdrop-blur-md md:px-5 md:text-sm">
                Limited Time Offers
              </span>

              {/* Heading */}
              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Exclusive
                <span className="block text-[#EC268F]">
                  Spa Packages
                </span>
              </h1>

              {/* Divider */}
              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#EC268F] lg:mx-0 md:w-24" />

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 md:text-xl lg:max-w-xl">
                Relax, rejuvenate, and save with our premium wellness
                packages. Enjoy luxury spa experiences at special
                promotional prices crafted for complete relaxation.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href={`tel:${SITE.phoneCall}`}
                  className="flex items-center justify-center rounded-full bg-[#EC268F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
                >
                  📞 Book Now
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
                >
                  WhatsApp Us
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}