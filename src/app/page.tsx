import HeroSection from "@/components/HeroSection";
import DisplayProducts from "@/components/DisplayProducts";
import BrandDisplay from "@/components/BrandDisplay";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <main className="min-h-screen bg-[#FAFAF8] text-primary">
        {/* Hero Section */}
        <HeroSection />
        <BrandDisplay />
        {/* Product Section */}
        <DisplayProducts />
        {/* Minimal Footer */}
        <Footer />
      </main>
    </div>
  );
}