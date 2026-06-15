import ContactHero from "@/components/ContactHero";
import ContactUs from "@/components/ContactUs";
import MapSection from "@/components/MapSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <ContactHero />
      <ContactUs />
      <MapSection />
    </main>
  );
}
