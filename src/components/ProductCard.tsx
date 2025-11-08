"use client";

import Image from "next/image";
import { Product } from "@/types/product-type";
import { ShoppingBag, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  const handleBuy = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in buying "${product.name}" by ${product.brand} ($${product.price
      }).\nSize: ${product.size_ml}ml\nScent: ${product.scents.join(
        ", "
      )}\n\nImage: ${window.location.origin}${product.images[0]}`
    );

    const telegramLink = `https://t.me/${product.seller_telegram}?text=${message}`;
    window.open(telegramLink, "_blank");
  };

  const router = useRouter()

  const handleViewDetails = (product_id: number) => {
    router.push(`product-details/${product_id}`)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm transition p-5 w-72">
      {/* Image Section */}
      <div className="relative">
        <Image
          onClick={() => handleViewDetails(product.id)}
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-xl object-cover w-full h-64 hover:scale-[1.02] cursor-pointer transition-all duration-300"
        />

        {/* Discount Badge */}
        {product.is_discount && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
            -{product.discount_percentage}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold">{product.name}</h2>

        {/* Price & Discount */}
        <div className="mt-1">
          {product.is_discount ? (
            <div>
              <span className="text-gray-500 line-through mr-2 text-sm">
                ${product.price}
              </span>
              <span className="text-primary/90 text-lg font-bold">
                $
                {(
                  product.price *
                  (1 - product.discount_percentage / 100)
                ).toFixed(2)}
              </span>
            </div>
          ) : (
            <p className="text-primary/90 text-lg font-bold">${product.price}</p>
          )}
        </div>

        {/* Gender + Size */}
        <p className="text-xs text-gray-500 mt-1">
          {product.gender} • {product.size_ml}ml
        </p>

        {/* Buy Button */}
        <div className="grid grid-cols-1">
          <Button
            onClick={handleBuy}
            disabled={!product.is_available}
            className={`mt-4 flex items-center justify-center gap-2 rounded-lg py-2 transition
            ${product.is_available
                ? "bg-primary text-white/90 hover:bg-primary/90 cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            <ShoppingBag size={18} />
            {product.is_available ? "Buy on Telegram" : "Out of Stock"}
          </Button>
          <Button
            variant={"outline"}
            onClick={() => handleViewDetails(product.id)}
            className="mt-2 rounded-lg flex items-center justify-center gap-2 py-2 hover:cursor-pointer"
          >
            <Eye />
            View Details
          </Button>

        </div>
      </div>
    </div>
  );
}
