import HeroSection from "@/components/HeroSection";
import DisplayProducts from "@/components/DisplayProducts";
import BrandDisplay from "@/components/BrandDisplay";
import Footer from "@/components/Footer";
import BestSellingSection from "@/components/BestSellling";
import CircularText from "@/components/CircularText";

export default function HomePage() {
  return (
    <div>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroSection />
        {/* brand display */}
        <BrandDisplay />
        <BestSellingSection />
        {/* Product Section */}
        <DisplayProducts />
        {/* Minimal Footer */}
        <div>
        <CircularText
          text=" BOSBA ✦ SCENT ✦ "
          onHover="speedUp"
          spinDuration={20}
        />
        </div>
        <Footer />
      </main>
    </div>
  );
}