export interface Product {
  id: number; 
  // Unique ID for the product (used for identifying each perfume)

  name: string; 
  // The name of the perfume (e.g., "Calming Soul, Lost Soul")

  brand: string; 
  // The brand or company that makes the perfume (e.g., "Bosba")

  description: string; 
  // A short paragraph describing the scent, feeling, or inspiration behind the perfume

  price: number; 
  // The selling price of the perfume (in USD, or KHR currency)

  images: string[]; 
  // Array of image URLs for displaying the product (main image + gallery)

  scents: string[]; 
  // List of scent types or notes (e.g., ["Woody", "Citrus", "Spicy"])

  is_discount: boolean; 
  // Whether the product currently has a discount or not

  discount_percentage: number; 
  // How much discount (in %) the product has (e.g., 15 means 15% off)

  is_available: boolean; 
  // Whether the product is available for purchase (true = in stock, false = out of stock)

  gender: "Men" | "Women" | "Unisex"; 
  // Target audience for the perfume

  size_ml: number; 
  // Bottle size in milliliters (e.g., 100 ml, 50 ml)

  longevity: string; 
  // How long the scent lasts on skin (e.g., "Long-lasting", "Moderate", "Short")

  sillage: string; 
  // How far the scent projects or leaves a trail in the air (e.g., "Soft", "Moderate", "Strong")

  seller_telegram: string; 
  // Telegram username or link for buyers to contact the seller directly
}