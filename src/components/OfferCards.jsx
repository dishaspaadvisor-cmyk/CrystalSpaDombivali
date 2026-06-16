"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

const offers = [
  {
    image: "/offers/offer1.png",
  },
  {
    image: "/offers/offer2.png",
  },
  {
    image: "/offers/offer3.png",
  },
];

export default function OfferCards() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span
            className="rounded-full px-5 py-2 text-sm font-medium uppercase tracking-[0.2em]"
            style={{
              backgroundColor: `${SITE.brand}15`,
              color: SITE.brand,
            }}
          >
            Special Offers
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Exclusive Spa Deals
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Discover premium wellness packages and luxury massage
            therapies at special promotional prices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] shadow-xl"
            >
              {/* Image */}
              <div className="relative h-[550px]">
                <Image
                  src={offer.image}
                  alt={offer.image}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />


                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  {offer.title ? (
                    <h3 className="text-3xl font-bold text-white">
                      {offer.title}
                    </h3>
                  ) : null}

                  {offer.description ? (
                    <p className="mt-4 text-white/90">
                      {offer.description}
                    </p>
                  ) : null}

                  {/* Hover Buttons Desktop */}
                  <div className="mt-6 hidden translate-y-6 gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:flex">
                    <a
                      href={`tel:${SITE.phoneCall}`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white"
                      style={{
                        backgroundColor: SITE.brand,
                      }}
                    >
                      <Phone size={18} />
                      Call Now
                    </a>

                    <a
                      href={`https://wa.me/${SITE.phoneWhatsApp.replace(
                        "+",
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-semibold text-white"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  </div>

                  {/* Mobile Buttons Always Visible */}
                  <div className="mt-6 flex gap-3 md:hidden">
                    <a
                      href={`tel:${SITE.phoneCall}`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white"
                      style={{
                        backgroundColor: SITE.brand,
                      }}
                    >
                      <Phone size={18} />
                      Call
                    </a>

                    <a
                      href={`https://wa.me/${SITE.phoneWhatsApp.replace(
                        "+",
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-semibold text-white"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}