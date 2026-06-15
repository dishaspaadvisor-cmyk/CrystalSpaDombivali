"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What spa services do you offer?",
    answer:
      "We offer Full Body Massage, Thai Massage, Swedish Massage, Deep Tissue Massage, Hot Oil Massage, Couple Massage, and many more wellness therapies.",
  },
  {
    question: "Do I need to book an appointment?",
    answer:
      "Appointments are recommended to ensure availability. However, walk-in guests are also welcome based on available slots.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Crystal Spa is open every day from 10:00 AM to 10:00 PM for your convenience.",
  },
  {
    question: "Are your therapists professionally trained?",
    answer:
      "Yes. All our therapists are highly trained professionals with experience in wellness and spa therapies.",
  },
  {
    question: "Do you provide couple spa sessions?",
    answer:
      "Absolutely! We offer couple massage and wellness packages in a luxurious and relaxing environment.",
  },
  {
    question: "Is parking available at the spa?",
    answer:
      "Yes, convenient parking facilities are available for all our guests.",
  },
];

export default function Faq() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#FFF5FA] py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#EC268F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#EC268F]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Have Questions?
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#EC268F]" />

          <p className="mt-6 text-lg text-gray-600">
            Everything you need to know about Crystal Spa Nagpur.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#EC268F] bg-white shadow-lg"
                    : "border-pink-100 bg-white hover:border-[#EC268F]/50"
                }`}
              >
                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className={`flex w-full items-center justify-between px-6 py-5 text-left transition-all duration-300 ${
                    isOpen
                      ? "bg-[#EC268F] text-white"
                      : "text-gray-900"
                  }`}
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-2xl transition-all ${
                      isOpen
                        ? "bg-white text-[#EC268F]"
                        : "bg-pink-50 text-[#EC268F]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-[#FFF8FC] px-6 py-5 text-gray-600 leading-8">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}