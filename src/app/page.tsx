import HeroSection from "@/components/HeroSection";
import DisplayProducts from "@/components/DisplayProducts";
import BrandDisplay from "@/components/BrandDisplay";
import Footer from "@/components/Footer";
import BestSellling from "@/components/BestSellling";

export default function HomePage() {
  return (
    <div>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroSection />
        {/* brand display */}
        <BrandDisplay />
        <BestSellling />
        {/* Product Section */}
        <DisplayProducts />
        {/* Minimal Footer */}
        <Footer />
      </main>
    </div>
  );
}