"use client";

import { SITE } from "@/lib/siteConfig";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactForm() {
  const whatsappNumber = SITE.phoneWhatsApp.replace(/\D/g, "");

  return (
    <section className="bg-[#FFF5FA] py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full bg-[#EC268F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#EC268F] md:text-sm">
              Contact Us
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Book Your
              <span className="text-[#EC268F]"> Spa Session</span>
            </h2>

            <div className="mt-4 h-1 w-20 rounded-full bg-[#EC268F]" />

            <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              Have questions or want to book an appointment? Our team is
              ready to assist you with all your wellness and relaxation
              needs.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EC268F] text-white">
                  <FaPhoneAlt />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Call Us</p>

                  <a
                    href={`tel:${SITE.phoneCall}`}
                    className="block break-all font-semibold text-gray-900"
                  >
                    {SITE.phoneCall}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <FaWhatsapp />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">WhatsApp</p>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block break-all font-semibold text-gray-900"
                  >
                    {SITE.phoneWhatsApp}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EC268F] text-white">
                  <FaEnvelope />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Email</p>

                  <a
                    href={`mailto:${SITE.email}`}
                    className="block break-all font-semibold text-gray-900"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EC268F] text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>

                  <a
                    href={SITE.addressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900"
                  >
                    View On Map
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            <div className="rounded-[24px] bg-white p-5 shadow-xl sm:p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </h3>

              <p className="mt-2 text-gray-500">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form className="mt-8 space-y-5">
                {/* Row 1 */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#EC268F]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#EC268F]"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#EC268F]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Select Service
                    </label>

                    <select className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#EC268F]">
                      <option>Full Body Massage</option>
                      <option>Thai Massage</option>
                      <option>Swedish Massage</option>
                      <option>Deep Tissue Massage</option>
                      <option>Hot Oil Massage</option>
                      <option>Couple Massage</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#EC268F]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#EC268F] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-pink-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}