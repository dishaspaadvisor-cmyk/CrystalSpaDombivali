"use client";

import { SITE } from "../lib/siteConfig";

export default function FloatingButton() {
  const waNumber = SITE.phoneWhatsApp.replace(/\D/g, "");
  const callNumber = SITE.phoneCall;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* Call Button */}
      <a
        href={`tel:${callNumber}`}
        aria-label={SITE.callLabel}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#EC268F] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.32.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.3 21 3 13.7 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
        </svg>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={SITE.whatsappLabel}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M16.002 3C8.82 3 3 8.82 3 16c0 2.817.93 5.567 2.64 7.81L4 29l5.36-1.6A13.02 13.02 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16.002 3zm0 23.636a10.56 10.56 0 01-5.382-1.47l-.386-.228-3.182.95.97-3.103-.25-.4A10.59 10.59 0 015.455 16c0-5.817 4.73-10.545 10.547-10.545 2.817 0 5.466 1.097 7.458 3.088A10.49 10.49 0 0126.545 16c0 5.816-4.73 10.636-10.543 10.636zm5.79-7.91c-.316-.158-1.87-.924-2.16-1.03-.29-.105-.5-.158-.71.158-.21.316-.815 1.03-.998 1.24-.184.21-.368.237-.684.079-.316-.158-1.334-.492-2.54-1.57-.938-.836-1.57-1.87-1.754-2.186-.184-.316-.02-.486.138-.644.142-.142.316-.368.474-.553.158-.184.21-.316.316-.526.105-.21.052-.395-.026-.553-.079-.158-.71-1.71-.973-2.34-.256-.614-.516-.53-.71-.54h-.605c-.21 0-.553.079-.842.395-.29.316-1.106 1.08-1.106 2.633s1.132 3.053 1.29 3.263c.158.21 2.21 3.37 5.355 4.726.748.323 1.33.516 1.784.66.75.238 1.434.204 1.974.124.603-.09 1.87-.764 2.134-1.502.263-.738.263-1.37.184-1.502-.079-.132-.29-.21-.605-.368z" />
        </svg>
      </a>
    </div>
  );
}