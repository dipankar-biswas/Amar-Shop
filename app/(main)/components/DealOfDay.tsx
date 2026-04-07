import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { CountdownTimer } from "./CountdownTimer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export const DealOfDay = () => {
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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto w-full px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-gray-800">Deal Of The Day</h2>
            <CountdownTimer days={126} hours={21} mins={39} secs={23} />
          </div>
          <div className="flex gap-2">
            <button className="swiper-btn-prev3 w-8 h-8 rounded-full bg-[#ef553f] text-white flex items-center justify-center hover:bg-[#333333] transition-colors duration-300">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="swiper-btn-next3 w-8 h-8 rounded-full bg-[#ef553f] text-white flex items-center justify-center hover:bg-[#333333] transition-colors duration-300">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          spaceBetween={16}
          loop={true}
          speed={1500}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-btn-next3",
            prevEl: ".swiper-btn-prev3",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          // className=""
          // style={{overflow: "hidden"}}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.slice(8, 12).map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  key={product.id}
                  className="bg-white rounded-lg p-4 flex gap-4 items-center"
                >
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-contain"
                    />
                  </Link>
                  <div>
                    <Link
                      href={`/product/${product.id}`}
                      className="font-medium text-sm text-gray-800 line-clamp-2 hover:text-[#ef553f] transition-all duration-300"
                    >
                      {product.name}
                    </Link>
                    <div className="flex items-center gap-1 my-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-[#ef553f] font-bold">${product.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
