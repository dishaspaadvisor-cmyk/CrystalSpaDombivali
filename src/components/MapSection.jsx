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
            src="https://maps.google.com/maps?q=Sonal%20Business%20Park%20Gharda%20Circle%20Road%20Trimurti%20Nagar%20Dombivli%20East%20421201&t=&z=15&ie=UTF8&iwloc=&output=embed"
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