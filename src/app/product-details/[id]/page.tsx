"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/perfume";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { scentColors } from "@/data/scent-colors";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                <div className="text-center">
                    <p className="text-lg mb-3 font-medium">Product not found.</p>
                    <Button variant="outline" onClick={() => router.back()}>
                        <ArrowLeft className="h-4 w-4 mr-2" /> Go Back
                    </Button>
                </div>
            </div>
        );
    }

    const handleBuy = () => {
        const message = encodeURIComponent(
            `Hi! I'm interested in buying "${product.name}" by ${product.brand} ($${product.price}).\nSize: ${product.size_ml}ml\nScent: ${product.scents
                .map((s) => `${s.name} ${s.intensity}%`)
                .join(", ")}\n\nImage: ${window.location.origin}${product.images[0]}`
        );
        window.open(`https://t.me/${product.seller_telegram}?text=${message}`, "_blank");
    };

    return (
        <div className="h-screen max-w-7xl mx-auto py-16 px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
                {/* Left: Product Image */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right: Product Details */}
                <div>
                    <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
                    <p className="text-sm text-gray-500 mb-4">{product.brand}</p>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Price Section */}
                    <div className="mb-4">
                        {product.is_discount ? (
                            <div>
                                <span className="text-gray-400 line-through mr-2">${product.price}</span>
                                <span className="text-primary font-bold text-xl">
                                    ${(product.price * (1 - product.discount_percentage / 100)).toFixed(2)}
                                </span>
                            </div>
                        ) : (
                            <p className="text-primary font-bold text-2xl">${product.price}</p>
                        )}
                    </div>

                    {/* Info Section */}
                    <div className="space-y-1 text-sm text-gray-500 mb-8">
                        <p><strong>Gender:</strong> {product.gender}</p>
                        <p><strong>Size:</strong> {product.size_ml}ml</p>
                        <p><strong>Longevity:</strong> {product.longevity}</p>
                        <p><strong>Sillage:</strong> {product.sillage}</p>
                    </div>

                    {/* Scent Composition - thin progress bar style */}
                    <div className="space-y-3">
                        <h2 className="text-lg font-semibold mb-2">Main Accords</h2>
                        {product.scents.map((scent, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-5 overflow-hidden">
                                    <div
                                        className="h-5 rounded-r-full transition-all"
                                        style={{
                                            width: `${scent.intensity}%`,
                                            backgroundColor: getBarColor(scent.name.toLowerCase()),
                                        }}
                                    ></div>
                                </div>
                                <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
                                    {scent.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-10 flex gap-3">
                        <Button
                            onClick={handleBuy}
                            disabled={!product.is_available}
                            className={`flex items-center gap-2 ${product.is_available
                                ? "bg-primary text-white hover:bg-primary/90"
                                : "bg-gray-300 text-gray-600 cursor-not-allowed"
                                }`}
                        >
                            <ShoppingBag size={18} />
                            {product.is_available ? "Buy on Telegram" : "Out of Stock"}
                        </Button>

                        <Button variant="outline" onClick={() => router.back()}>
                            <ArrowLeft size={18} />
                            Back
                        </Button>
                    </div>
                </div>
            </div>
            {/* Customer Feedback Section */}
            <div className="mt-12 py-10">
                <h2 className="text-2xl font-semibold mb-4">Customer Feedback 😉</h2>
                {product.customer_feedback && product.customer_feedback.length > 0 ? (
                    <div className="flex space-x-4 overflow-x-auto pb-2">
                        {product.customer_feedback.map((feedback, index) => (
                            <div
                                key={index}
                                className="shrink-0 w-64 rounded-xl p-4 shadow-sm"
                            >
                                <p className={`text-sm text-gray-700 font-medium mb-2 ${feedback.customer_name ? "" : "hidden"}`}>
                                    {feedback.customer_name}
                                </p>

                                <p className="text-sm text-gray-600 ">{feedback.feedback}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No customer feedback yet.</p>
                )}
            </div>
        </div>
    );
}

// Function to get color by scent name
function getBarColor(scent: string): string {
    return scentColors[scent] ?? "#000000"; // fallback color if scent not found
}

