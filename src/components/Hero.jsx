"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { SITE } from "@/lib/siteConfig";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/hero/hero.png",
    title: "Luxury Spa & Wellness",
    description:
      "Experience premium massage therapies, wellness treatments, and complete relaxation at Crystal Spa Nagpur.",
  },
  {
    image: "/hero/hero2.png",
    title: "Best Spa in Dombivli",
    description:
      "Refresh your body, calm your mind, and restore your energy with our expert spa professionals.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[650px] sm:min-h-[700px] lg:h-screen">
              {/* Background */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-[#EC268F]/30" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                  <div className="max-w-3xl text-center lg:text-left text-white">
                    
                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full border border-[#EC268F] bg-[#EC268F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#EC268F] backdrop-blur-md md:px-5 md:text-sm">
                      {SITE.title}
                    </span>

                    {/* Heading */}
                    <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>

                    {/* Divider */}
                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#EC268F] lg:mx-0 md:w-24" />

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 md:text-xl lg:max-w-xl">
                      {slide.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                      <a
                        href={`tel:${SITE.phoneCall}`}
                        className="flex items-center justify-center rounded-full bg-[#EC268F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-pink-700"
                      >
                        📞 Call Now
                      </a>

                      <a
                        href={`https://wa.me/${SITE.phoneWhatsApp.replace(
                          /\D/g,
                          ""
                        )}`}
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
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 30px !important;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.6;
        }

        .swiper-pagination-bullet-active {
          width: 35px;
          border-radius: 999px;
          background: #ec268f;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .swiper-pagination {
            bottom: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}