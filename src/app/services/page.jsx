import ServicesHeroSection from "@/components/ServicesHero";
import Services from "@/components/Services";
export default function ServicesPage() {
  return (
    <>
      <main className="overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.98),_rgba(255,255,255,1))] text-slate-950 antialiased min-h-screen">
      <ServicesHeroSection />
      <Services />
      </main>
    </>
  );
}