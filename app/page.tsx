import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product-type";

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
    <main className="min-h-screen bg-[#fff8f0] dark:bg-neutral-950 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Perfume Haven</h1>
      <div className="min-h-screen"></div>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
