"use client";

import Image from "next/image";

const images = [
  "/gallary/1.png",
  "/gallary/3.png",
  "/gallary/5.png",
  "/gallary/6.png",
  "/gallary/7.png",
  "/gallary/8.png",
];

export default function Gallery() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#EC268F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#EC268F]">
            Gallery
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Explore Crystal Spa
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#EC268F]" />

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Take a glimpse into our luxurious spa environment,
            premium facilities, and relaxing wellness experiences.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={600}
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-5 left-5 translate-y-8 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold">
                  Crystal Spa
                </h3>

                <p className="text-sm text-gray-200">
                  Luxury Wellness Experience
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}