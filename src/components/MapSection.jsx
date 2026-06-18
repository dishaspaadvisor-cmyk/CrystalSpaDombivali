"use client";

export default function MapSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#EC268F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#EC268F]">
            Visit Our Spa
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Find Crystal Spa
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#EC268F]" />

          <p className="mt-6 text-lg text-gray-600">
            Conveniently located in the heart of Dombivli East.
          </p>
        </div>

        {/* Full Width Map */}
        <div className="mt-12 overflow-hidden rounded-[30px] shadow-2xl">
          <iframe
            title="Crystal Spa Dombivli Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15069.981391050547!2d73.08985399652528!3d19.21723194878154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795ce2b850ad5%3A0x5d8a7101bf500982!2sCrystal%20Spa!5e0!3m2!1sen!2sin!4v1781790551308!5m2!1sen!2sin"
            className="h-[400px] w-full md:h-[500px] lg:h-[650px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}