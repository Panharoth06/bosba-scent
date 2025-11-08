import HeroSection from "@/components/HeroSection";
import DisplayProducts from "@/components/DisplayProducts";
import BrandDisplay from "@/components/BrandDisplay";
import BestSellingSection from "@/components/BestSellling";
import CircularText from "@/components/CircularText";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div id="home">
          <HeroSection />
        </div>
        {/* brand display */}
        <BrandDisplay />
        <div id="best-selling">
          <BestSellingSection />
        </div>
        {/* Product Section */}
        <div id="products">
          <DisplayProducts />

        </div>
        {/* Minimal Footer */}
        <div>
          <CircularText
            text=" BOSBA ✦ SCENT ✦ "
            onHover="speedUp"
            spinDuration={20}
          />
        </div>
      </main>
      <footer className="mt-20">
        <Footer />
      </footer>
    </div>
  );
}