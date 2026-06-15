import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import OurGallary from "@/components/OurGallery";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/F&QSection";
import OfferCards from "@/components/OfferCards";
export default function Home() {
  return (
    <>
      <main className="overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.98),_rgba(255,255,255,1))] text-slate-950 antialiased min-h-screen">
       <Hero />
       <AboutUs />
       <Services /> 
       <OurGallary />
       <OfferCards />
       <Testimonials />
       <FaqSection />
      </main>
    </>
  );
}