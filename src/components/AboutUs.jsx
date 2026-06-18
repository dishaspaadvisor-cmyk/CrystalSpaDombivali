"use client";

import Image from "next/image";
import { SITE } from "@/lib/siteConfig";
import {
  FaSpa,
  FaUserCheck,
  FaAward,
  FaHeart,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Images Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
              <Image
                src="/gallary/5.png"
                alt="Crystal Spa"
                width={700}
                height={800}
                className="h-[600px] w-full object-cover"
              />
            </div>

           

            {/* Pink Background Shape */}
            <div className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-full bg-[#EC268F]/15 blur-3xl"></div>
          </div>

          {/* Content */}
          <div>

            <span className="inline-block rounded-full bg-[#EC268F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#EC268F]">
              About Crystal Spa
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              A Luxury Wellness Experience Designed For
              <span className="text-[#EC268F]">
                {" "}Your Mind & Body
              </span>
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-[#EC268F]" />

            <p className="mt-8 text-lg leading-8 text-gray-600">
              At Crystal Spa Dombivali, we believe true wellness begins with
              complete relaxation. Our professional therapists combine
              traditional healing techniques with modern spa therapies
              to provide an unforgettable experience.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Whether you seek stress relief, muscle recovery, or simply
              a peaceful escape from daily life, our luxurious spa
              environment is designed to refresh your body, calm your
              mind, and restore your energy.
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={`tel:${SITE.phoneCall}`}
                className="rounded-full bg-[#EC268F] px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Call Now
              </a>

              <a
                href={`https://wa.me/${SITE.phoneWhatsApp.replace(
                  /\D/g,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:scale-105"
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