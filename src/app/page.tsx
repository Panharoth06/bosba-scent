import { Product } from "@/types/product-type";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "Calming Soul",
    brand: "Bosba",
    description: "A soft floral blend that brings peace and clarity.",
    price: 65,
    images: ["/images/calming-soul.jpg"],
    scents: ["Floral", "Musk", "Woody"],
    is_discount: true,
    discount_percentage: 15,
    is_available: true,
    gender: "Unisex",
    size_ml: 100,
    longevity: "Long-lasting",
    sillage: "Moderate",
    seller_telegram: "panharoth_chheng",
  },
  {
    id: 2,
    name: "Lost Soul",
    brand: "Bosba",
    description: "A mysterious and deep scent that stays with you.",
    price: 70,
    images: ["/images/lost-soul.jpg"],
    scents: ["Amber", "Spicy", "Woody"],
    is_discount: false,
    discount_percentage: 0,
    is_available: false,
    gender: "Men",
    size_ml: 100,
    longevity: "Long-lasting",
    sillage: "Strong",
    seller_telegram: "panharoth_chheng",
  },
];

export default function HomePage() {
  return (
    <div>
      <main className="min-h-screen bg-[#FAFAF8] text-[#222222]">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Video background  */}
          <video
            src="/videos/bosba-sample-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          {/* Overlay for slight fade */}
          <div className="absolute inset-0 bg-linear-to-b from-[#FAFAF8]/60 to-[#222222]/20 mix-blend-overlay"></div>

          {/* Hero content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="font-sans font-medium text-5xl md:text-7xl leading-tight text-balance text-[#222222]">
              Scents that whisper, not shout.
            </h1>
            <p className="text-lg md:text-xl text-[#222222]/70 max-w-2xl mx-auto text-pretty">
              Crafted quietly from nature’s calm.
            </p>
            <Button
              size="lg"
              className="bg-[#222222] hover:bg-[#2E2E2E] text-[#FAFAF8] px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              Shop the Collection
            </Button>
          </div>
        </section>

        {/* Product Section */}
        <section
          id="collection"
          className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAFAF8] flex flex-wrap justify-center gap-10"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        {/* Minimal Footer */}
        <footer className="text-center py-10 text-sm text-[#222222]/70 border-t border-[#222222]/10">
          <p>© {new Date().getFullYear()} Bosba Scent — Crafted in Phnom Penh, Cambodia.</p>
        </footer>
      </main>
    </div>
  );
}