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
      </main>
      <footer>
                <Footer />
      </footer>
    </div>
  );
}