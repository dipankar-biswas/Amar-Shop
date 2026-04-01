'use client'

import { Minus } from "lucide-react";
import { ProductCard } from "../components/ProductCard";

const ShopPage = () => {

  const products = [
    {
      id: 1,
      name: "Bass Dual EQ Bluetooth 5.0 Wireless Speaker",
      category: "Electronics",
      price: 160,
      originalPrice: 180,
      rating: 4,
      reviews: 120,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=300&fit=crop",
      isSale: true,
      discount: 15,
      countdown: { days: 269, hours: 11, mins: 26, secs: 22 },
    },
    {
      id: 2,
      name: "Bella Voste Metallic Nail Paints(15) 9 Ml",
      category: "Skin Care",
      price: 9,
      originalPrice: 12,
      rating: 5,
      reviews: 85,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
      isNew: true,
    },
    {
      id: 3,
      name: "Glow Oil Control Compact SPF 30 with Vitamin C",
      category: "Skin Care",
      price: 69,
      originalPrice: 89,
      rating: 4,
      reviews: 200,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop",
      isSale: true,
    },
    {
      id: 4,
      name: "Apple MacBook Air MGNA3HNA 13.3 inch",
      category: "Electronics",
      price: 1199,
      originalPrice: 1299,
      rating: 5,
      reviews: 500,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&h=300&fit=crop",
      isSale: true,
    },
    {
      id: 5,
      name: "Bodyloviz Trippin Mimosas Shower Gel 240 Ml",
      category: "Skin Care",
      price: 29,
      originalPrice: 35,
      rating: 4,
      reviews: 150,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop",
      isNew: true,
    },
    {
      id: 6,
      name: "T-400 Motorized Running Indoor Treadmill",
      category: "Sports",
      price: 300,
      originalPrice: 350,
      rating: 4,
      reviews: 80,
      image:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=300&fit=crop",
      isSale: true,
      countdown: { days: 246, hours: 11, mins: 26, secs: 21 },
    },
    {
      id: 7,
      name: "13-inch MacBook Charger - Magsafe 2 connector",
      category: "Electronics",
      price: 20,
      originalPrice: 25,
      rating: 5,
      reviews: 300,
      image:
        "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&h=300&fit=crop",
    },
    {
      id: 8,
      name: "B Natural Mixed Fruit, Rich in Vitamin C & fiber",
      category: "Groceries",
      price: 18,
      originalPrice: 22,
      rating: 4,
      reviews: 90,
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Kiwi Green Imported 3 Pc (Approx 255 g - 315 g)",
      category: "Groceries",
      price: 40,
      originalPrice: 45,
      rating: 5,
      reviews: 110,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop",
      isSale: true,
    },
    {
      id: 10,
      name: "Avocado 3 Pc (Approx 0.82 kg - 1.2 kg)",
      category: "Groceries",
      price: 69,
      originalPrice: 79,
      rating: 4,
      reviews: 75,
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?w=300&h=300&fit=crop",
    },
    {
      id: 11,
      name: "Black Stainless Steel Kitchen Knife (Set of 3)",
      category: "Home",
      price: 9,
      originalPrice: 15,
      rating: 4,
      reviews: 200,
      image:
        "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1563823251941-b9989d1e8d97?w=300&h=300&fit=crop",
      isSale: true,
    },
    {
      id: 12,
      name: "Scoobies Unicorn Glow-in-the-Dark Bag",
      category: "Stationery",
      price: 28,
      originalPrice: 35,
      rating: 5,
      reviews: 60,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&h=300&fit=crop",
    },
  ];


  return (
    <div className="bg-[#f3f3f3] pb-12 pt-6">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-6 px-4 lg:grid-cols-[250px_1fr]">
        <aside className="space-y-4">
          {[
            "Shop By Categories",
            "Brands",
            "Highlight",
            "Filter by Color",
            "Filter by stone",
            "Filter by fragrances",
            "Price Filter",
            "Average rating",
          ].map((box) => (
            <div key={box} className="rounded border border-gray-300 bg-white p-4">
              <h3 className="mb-3 flex items-center justify-between font-semibold text-gray-700">
                {box} <Minus className="h-4 w-4" />
              </h3>
              <div className="space-y-2 text-sm text-gray-500">
                <p>All Products</p>
                <p>Best Seller</p>
                <p>New Arrivals</p>
                <p>Sale</p>
              </div>
            </div>
          ))}
        </aside>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-4xl text-[44px] font-semibold text-gray-800">Shop</h1>
            <select className="rounded border border-gray-300 bg-white px-3 py-2 text-sm">
              <option>Default sorting</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} compact />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};


export default ShopPage;