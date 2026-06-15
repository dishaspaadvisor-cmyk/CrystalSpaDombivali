"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Amazing experience at Crystal Spa. The ambience was relaxing and the massage was truly rejuvenating.",
  },
  {
    name: "Priya Verma",
    review:
      "One of the best spa experiences in Nagpur. Clean environment and professional therapists.",
  },
  {
    name: "Amit Patel",
    review:
      "Highly recommended! The deep tissue massage helped relieve my stress completely.",
  },
  {
    name: "Sneha Kapoor",
    review:
      "Beautiful interiors, excellent service, and a very relaxing atmosphere.",
  },
  {
    name: "Vikram Singh",
    review:
      "The therapists are skilled and attentive. Definitely coming back again.",
  },
  {
    name: "Neha Joshi",
    review:
      "A luxurious wellness experience. The hot oil massage was absolutely wonderful.",
  },
  {
    name: "Rohit Mehta",
    review:
      "Very professional staff and excellent service. Highly recommended for relaxation.",
  },
  {
    name: "Anjali Gupta",
    review:
      "Best spa in Nagpur. The environment is clean, peaceful, and luxurious.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FFF5FA] py-16 lg:py-20">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#EC268F]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#EC268F]/10 blur-3xl" />

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#EC268F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#EC268F]">
            Client Testimonials
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            What Our Clients Say
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#EC268F]" />

          <p className="mt-6 text-lg text-gray-600">
            Trusted by thousands of happy customers who choose Crystal Spa
            for wellness and relaxation.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group h-full rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#EC268F] hover:shadow-2xl">
                  {/* Quote Icon */}
                  <div className="mb-4 text-3xl text-[#EC268F]/30">
                    <FaQuoteLeft />
                  </div>

                  {/* Stars */}
                  <div className="mb-5 flex gap-1 text-[#EC268F]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="min-h-[140px] leading-8 text-gray-600">
                    "{item.review}"
                  </p>

                  {/* Customer */}
                  <div className="mt-6 flex items-center gap-4 border-t border-pink-100 pt-5">
                    {/* Avatar */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EC268F] text-lg font-bold text-white shadow-md">
                      {item.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900">
                        {item.name}
                      </h4>

                      <p className="text-sm text-[#EC268F]">
                        Verified Customer
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#EC268F]">
              5000+
            </h3>
            <p className="mt-2 text-gray-600">
              Happy Customers
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#EC268F]">
              4.9★
            </h3>
            <p className="mt-2 text-gray-600">
              Average Rating
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#EC268F]">
              10+
            </h3>
            <p className="mt-2 text-gray-600">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}