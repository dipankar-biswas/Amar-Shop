"use client";
import { useState, useRef } from "react";
import { Banner } from "./components/Banner";
import { Features } from "./components/Features";
import { ProductCard } from "./components/ProductCard";
import { Categories } from "./components/Categories";
import { PromoBanner } from "./components/PromoBanner";
import { CategoryPromo } from "./components/CategoryPromo";
import { DealOfDay } from "./components/DealOfDay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Home() {
  const swiperRef = useRef(null);
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
      hoverImage1:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop",
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

  const [activeTab, setActiveTab] = useState("All"); // Default tab
  // Define your tabs
  // const tabs = ["Best Selling", "Popular", "Special Items"];
  const tabs = ["All", "New", "Best Sellers", "Sale"];
  // Filter products based on active tab
  const filteredProducts = () => {
    if (activeTab === "All") return products;
    if (activeTab === "New") return products.filter((p) => p.isNew);
    if (activeTab === "Best Sellers")
      return products.filter((p) => p.isBestSeller);
    if (activeTab === "Sale") return products.filter((p) => p.onSale);
    return products;
  };

  const hasProducts = filteredProducts().length > 0;

  return (
    <>
      <Banner />
      <Features />

      <section className="pt-12 pb-4 position-relative">
        <div className="container mx-auto w-full px-4 relative group/pagination">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Trending Items
            </h2>
            <div className="flex gap-6 mt-4 md:mt-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    if (swiperRef.current && swiperRef.current.swiper) {
                      swiperRef.current.swiper.slideTo(0);
                      swiperRef.current.swiper.autoplay.start();
                    }
                  }}
                  className={`text-sm font-semibold transition-colors pb-2 ${
                    activeTab === tab
                      ? "text-red-500 border-b-2 border-red-500"
                      : "text-gray-500 hover:text-red-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {hasProducts ? (
            <div className="relative">
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Autoplay]}
                slidesPerView={2}
                spaceBetween={16}
                loop={true}
                speed={1500}
                grabCursor={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                navigation={{
                  nextEl: ".swiper-btn-next",
                  prevEl: ".swiper-btn-prev",
                }}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 5 },
                }}
                style={{
                  overflow: "hidden",
                  height: "380px",
                }}
                className="trending-swiper"
                onInit={(swiper) => {
                  swiper.autoplay.start();
                }}
              >
                {filteredProducts()
                  .slice(0, 6)
                  .map((product) => (
                    <SwiperSlide key={product.id}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                  ))}
              </Swiper>

              {/* Navigation Buttons - Only show when products count > slidesPerView */}
              {(() => {
                const productsCount = filteredProducts().slice(0, 6).length;
                const getCurrentSlidesPerView = () => {
                  if (typeof window !== "undefined") {
                    const width = window.innerWidth;
                    if (width >= 992) return 5;
                    if (width >= 768) return 3;
                    return 2;
                  }
                  return 2;
                };

                const shouldShowButtons =
                  productsCount > getCurrentSlidesPerView();

                return (
                  shouldShowButtons && (
                    <div className="flex gap-2 justify-end opacity-0 group-hover/pagination:opacity-100 transition-opacity duration-300 absolute w-full top-[42%] transform -translate-y-[42%] z-30 pointer-events-none">
                      <button className="swiper-btn-prev w-8 h-8 rounded-full bg-[#ef553f] text-white flex items-center justify-center hover:bg-[#333333] transition-colors duration-300 absolute -left-4 pointer-events-auto z-10">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button className="swiper-btn-next w-8 h-8 rounded-full bg-[#ef553f] text-white flex items-center justify-center hover:bg-[#333333] transition-colors duration-300 absolute -right-4 pointer-events-auto z-10">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )
                );
              })()}
            </div>
          ) : (
            <p className="text-center text-red-500 col-span-full">
              No products found for the selected category.
            </p>
          )}
        </div>
      </section>

      <Categories />
      <PromoBanner />
      <DealOfDay />
      <CategoryPromo />

      <section className="pt-12">
        <div className="container mx-auto w-full px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-gray-600">
              Regular Items
            </h2>
            <div className="flex gap-2">
              <button className="swiper-btn-prev1 w-8 h-8 rounded-full bg-[#ef553f] text-white flex items-center justify-center hover:bg-[#333333] transition-colors duration-300">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="swiper-btn-next1 w-8 h-8 rounded-full bg-[#ef553f] text-white flex items-center justify-center hover:bg-[#333333] transition-colors duration-300">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={5}
            spaceBetween={16}
            loop={true}
            speed={1500}
            grabCursor={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-btn-next1",
              prevEl: ".swiper-btn-prev1",
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 5 },
            }}
            // className=""
            style={{
              overflow: "hidden",
              height: "380px",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {products.slice(5, 11).map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard key={product.id} product={product} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>

      <div className="pt-8 pb-12">
        <div className="container mx-auto w-full px-4">
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
