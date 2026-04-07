"use client";

import { useParams } from "next/navigation";
import { useApp } from "../../context/AppContext";
import Link from "next/link";
import { Stars } from "lucide-react";
import { taka } from "@/utils/currency";
import Sidebar from "../../components/product/Sidebar";
import Breadcrumb from "../../components/product/Breadcrumb";
import ProductDetail from "../../components/product/ProductDetail";
import ProductTabs from "../../components/product/ProductTabs";
import YouMayAlsoLike from "../../components/product/YouMayAlsoLike";
import QuickComparison from "../../components/product/QuickComparison";
import RelatedProducts from "../../components/product/RelatedProducts";
import { useState } from "react";

const ProductDetailsPage = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Bass Dual EQ Bluetooth 5.0 Wireless Speaker",
      category: "Electronics",
      brand: "Bass",
      price: 160,
      originalPrice: 180,
      rating: 4,
      reviews: 120,
      color: "Black",
      highlight: "Best Seller",
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
      brand: "Bella Voste",
      price: 9,
      originalPrice: 12,
      rating: 5,
      reviews: 85,
      color: "Pink",
      highlight: "New Arrivals",
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
      brand: "Glow",
      price: 69,
      originalPrice: 89,
      rating: 4,
      reviews: 200,
      color: "White",
      highlight: "On Sale",
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
      brand: "Apple",
      price: 1199,
      originalPrice: 1299,
      rating: 5,
      reviews: 500,
      color: "Silver",
      highlight: "Premium Quality",
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
      brand: "Bodyloviz",
      price: 29,
      originalPrice: 35,
      rating: 4,
      reviews: 150,
      color: "Yellow",
      highlight: "New Arrivals",
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
      brand: "T-400",
      price: 300,
      originalPrice: 350,
      rating: 4,
      reviews: 80,
      color: "Black",
      highlight: "Best Seller",
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
      brand: "Apple",
      price: 20,
      originalPrice: 25,
      rating: 5,
      reviews: 300,
      color: "White",
      highlight: "Limited Edition",
      image:
        "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&h=300&fit=crop",
    },
    {
      id: 8,
      name: "B Natural Mixed Fruit, Rich in Vitamin C & fiber",
      category: "Groceries",
      brand: "B Natural",
      price: 18,
      originalPrice: 22,
      rating: 4,
      reviews: 90,
      color: "Orange",
      highlight: "Eco Friendly",
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Kiwi Green Imported 3 Pc (Approx 255 g - 315 g)",
      category: "Groceries",
      brand: "Fresh Farm",
      price: 40,
      originalPrice: 45,
      rating: 5,
      reviews: 110,
      color: "Green",
      highlight: "On Sale",
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
      brand: "Fresh Farm",
      price: 69,
      originalPrice: 79,
      rating: 4,
      reviews: 75,
      color: "Green",
      highlight: "New Arrivals",
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?w=300&h=300&fit=crop",
    },
    {
      id: 11,
      name: "Black Stainless Steel Kitchen Knife (Set of 3)",
      category: "Home",
      brand: "Chef's Choice",
      price: 9,
      originalPrice: 15,
      rating: 4,
      reviews: 200,
      color: "Black",
      highlight: "On Sale",
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
      brand: "Scoobies",
      price: 28,
      originalPrice: 35,
      rating: 5,
      reviews: 60,
      color: "Purple",
      highlight: "Limited Edition",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&h=300&fit=crop",
    },
  ]);

  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) ?? products[0];

  return (
    <div className="container mx-auto w-full px-4 py-5 pb-20">
      <div className="flex gap-5">
        {/* Main Area */}
        <div className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <Breadcrumb />

          {/* Product Detail Section */}
          <div className="bg-white border border-gray-200 rounded p-5">
            <ProductDetail product={product} />
          </div>

          {/* Tabs: Description, Reviews, etc. */}
          <ProductTabs />

          {/* You May Also Like */}
          <YouMayAlsoLike products={products.slice(0, 5)} />

          {/* Quick Comparison */}
          <QuickComparison products={products.slice(3, 8)} />

          {/* Related Products */}
          <RelatedProducts products={products.slice(6, 11)} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
