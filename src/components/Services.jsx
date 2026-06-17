"use client";

import Image from "next/image";
import { SITE } from "@/lib/siteConfig";

const services = [
  {
    image: "/services/1.png",
    title: "Jacuzzi Massage",
    description:
      "Relieve stress and restore balance with our signature full body massage therapy.",
  },
  {
    image: "/services/2.png",
    title: "Thai Massage",
    description:
      "Traditional stretching and pressure-point techniques for complete rejuvenation.",
  },
  {
    image: "/services/3.png",
    title: "Deep Tissue Massage",
    description:
      "Target muscle tension and chronic pain with our expert therapists.",
  },
  {
    image: "/services/4.png",
    title: "Hot Oil Massage",
    description:
      "Relax deeply with warm aromatic oils and therapeutic healing techniques.",
  },
  {
    image: "/services/5.png",
    title: "Couple Massage",
    description:
      "Enjoy a luxurious spa experience together in a peaceful environment.",
  },
  {
    image: "/services/6.png",
    title: "Swedish Massage",
    description:
      "Gentle relaxation therapy designed to improve circulation and wellness.",
  },
];

export default function Services() {
  const whatsappNumber = SITE.phoneWhatsApp.replace(/\D/g, "");

  return (
    <section className="bg-[#fafafa] py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#EC268F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#EC268F]">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Premium Spa Treatments
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#EC268F]" />

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover luxury wellness therapies designed to relax your body,
            refresh your mind, and rejuvenate your spirit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Service Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={`tel:${SITE.phoneCall}`}
                    className="flex-1 rounded-full bg-[#EC268F] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-pink-700"
                  >
                    📞 Call
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-[#25D366] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}