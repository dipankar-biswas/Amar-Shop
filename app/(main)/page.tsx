"use client";
import { useState } from "react";
import { Banner } from "./components/Banner";
import { Features } from "./components/Features";
import { ProductCard } from "./components/ProductCard";
import { Categories } from "./components/Categories";
import { PromoBanner } from "./components/PromoBanner";
import { CategoryPromo } from "./components/CategoryPromo";
import { DealOfDay } from "./components/DealOfDay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
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

  const blogPosts = [
    {
      id: 1,
      title: "How to Write a Blog Post Your Readers Will Love in 5 Steps",
      excerpt: "Why the world would end without travel coupons. The...",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop",
      date: "February 9, 2024",
      author: "Editor",
    },
    {
      id: 2,
      title: "9 Content Marketing Trends and Ideas to Increase Traffic",
      excerpt: "Why do people think wholesale accessories are a good...",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      date: "February 7, 2024",
      author: "Editor",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Marketing Strategies to Improve Sales",
      excerpt: "Many things about electronic devices your kids don't want...",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      date: "February 5, 2024",
      author: "Editor",
    },
  ];

  const [activeTab, setActiveTab] = useState("Best Selling");
  const tabs = ["Best Selling", "Popular", "Special Items"];

  return (
    <>
      <Banner />
      <Features />

      <section className={`py-12 position-relative`}>
        <div
          // ref={divRef}
          className={`container mx-auto px-4 position-absolute left-0 top-0 transform translate-x-1`}
          // style={{
          //   height: divHeight ? `${divHeight}px` : "auto",
          // }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-gray-600">Trending Items</h2>
            <div className="flex gap-6 mt-4 md:mt-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium transition-colors ${activeTab === tab ? "text-red-500" : "text-gray-500 hover:text-red-500"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Categories />
      <PromoBanner />
      <DealOfDay />
      <CategoryPromo />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-gray-600">Regular Items</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#ef553f] text-white flex items-center justify-center hover:bg-red-600 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {products.slice(5, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <div className="pt-8 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-semibold text-gray-600 mb-8">Our Blog</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="block overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                <div className="p-6">
                  <p className="text-sm text-[#ef553f] mb-2">
                    {post.date} • by {post.author}
                  </p>
                  <h3 className="font-semibold text-md mb-3 text-gray-600 hover:text-[#ef553f] transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
