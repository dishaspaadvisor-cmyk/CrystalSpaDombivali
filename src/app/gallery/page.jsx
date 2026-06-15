import OurGallery from "@/components/OurGallery";
import GalleryHero from "@/components/GallaryHero";
export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
        <GalleryHero />
         <OurGallery />
    </main>
  );
}
