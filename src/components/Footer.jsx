"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { SITE } from "../lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Accent Border */}
      <div className="h-1 w-full bg-[#EC268F]" />

      <div className="mx-auto max-w-[94rem] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-6 text-3xl font-bold text-[#EC268F]">
              Crystal Spa
            </h3>

            <p className="leading-8 text-gray-300">
              Premium spa and wellness experience in Chhatrapati Sambhaji Nagar.
              Enjoy luxury massage therapies, peaceful ambience, professional
              care, and complete relaxation.
            </p>

            {/* Social Media */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://facebook.com/your-page"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-[#1877F2] hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com/your-profile"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-[#25D366] hover:text-white"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-[#FF0000] hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-[#EC268F]">
              Quick Links
            </h4>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/" className="transition hover:text-[#EC268F]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-[#EC268F]">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#EC268F]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="transition hover:text-[#EC268F]"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/offers"
                  className="transition hover:text-[#EC268F]"
                >
                  Offers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-[#EC268F]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-[#EC268F]">
              Our Services
            </h4>

            <ul className="space-y-4 text-gray-300">
              <li>Full Body Massage</li>
              <li>Female to Male Massage</li>
              <li>Four Hand Massage</li>
              <li>Thai Massage</li>
              <li>Deep Tissue Massage</li>
              <li>Hot Oil Massage</li>
              <li>Swedish Massage</li>
            </ul>
          </div>


          {/* Contact Info */}
<div>
  <h4 className="mb-6 text-2xl font-semibold text-[#EC268F]">
    Contact Info
  </h4>

  <div className="space-y-5 text-gray-300">

    <div className="flex items-start gap-4">
      <FaMapMarkerAlt className="mt-1 shrink-0 text-[#EC268F]" />
      <p>
        Shop No. 106, 107, 1st floor, Sonal Business Park, Gharda Circle Road, Trimurti Nagar, Dombivli East, Dombivli, Maharashtra 4212012
      </p>
    </div>

    <div className="flex items-center gap-4">
      <FaPhoneAlt className="shrink-0 text-[#EC268F]" />

      <a
        href={`tel:${SITE.phoneCall}`}
        className="break-all transition hover:text-[#EC268F]"
      >
        {SITE.phoneCall}
      </a>
    </div>

    <div className="flex items-center gap-4">
      <FaWhatsapp className="shrink-0 text-[#25D366]" />

      <a
        href={`https://wa.me/${SITE.phoneWhatsApp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all transition hover:text-[#25D366]"
      >
        {SITE.phoneWhatsApp}
      </a>
    </div>

    <div className="flex items-center gap-4">
      <FaEnvelope className="shrink-0 text-[#EC268F]" />

      <a
        href={`mailto:${SITE.email}`}
        className="break-all transition hover:text-[#EC268F]"
      >
        {SITE.email}
      </a>
    </div>

    <div className="flex items-center gap-4">
      <FaClock className="shrink-0 text-[#EC268F]" />

      <span>
        Monday - Sunday: 10:00 AM - 10:00 PM
      </span>
    </div>

  </div>
</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-gray-400 md:flex-row">
            <p>
            © {new Date().getFullYear()} Crystal Spa. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#EC268F]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#EC268F]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}