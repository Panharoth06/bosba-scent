"use client";

import Image from "next/image";
import { Product } from "@/types/product-type";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleBuy = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in buying "${product.name}" by ${product.brand} ($${
        product.price
      }).\nSize: ${product.size_ml}ml\nScent: ${product.scents.join(
        ", "
      )}\n\nImage: ${window.location.origin}${product.images[0]}`
    );

    const telegramLink = `https://t.me/${product.seller_telegram}?text=${message}`;
    window.open(telegramLink, "_blank");
  };

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm transition p-5 w-72">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-xl object-cover w-full h-64"
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

        {/* Scents */}

        {/* Price & Discount */}
        <div className="mt-1">
          {product.is_discount ? (
            <div>
              <span className="text-gray-400 line-through mr-2 text-sm">
                ${product.price}
              </span>
              <span className="text-primary/70 text-lg font-bold">
                $
                {(
                  product.price *
                  (1 - product.discount_percentage / 100)
                ).toFixed(2)}
              </span>
            </div>
          ) : (
            <p className="text-[#c19a6b] text-lg font-bold">${product.price}</p>
          )}
        </div>

        {/* Gender + Size */}
        <p className="text-xs text-gray-500 mt-1">
          {product.gender} • {product.size_ml}ml
        </p>

        {/* Description */}

        {/* Buy Button */}
        <button
          onClick={handleBuy}
          disabled={!product.is_available}
          className={`mt-4 w-full flex items-center justify-center gap-2 rounded-lg py-2 transition
            ${
              product.is_available
                ? "bg-primary text-white/90 hover:bg-primary/90"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          <ShoppingBag size={18} />
          {product.is_available ? "Buy on Telegram" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}
