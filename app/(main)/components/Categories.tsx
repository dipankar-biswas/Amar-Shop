import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export const Categories = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Groceries",
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Men",
      image:
        "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=150&h=150&fit=crop",
    },
    {
      id: 4,
      name: "Women",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=150&h=150&fit=crop",
    },
    {
      id: 5,
      name: "Skin Care",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150&h=150&fit=crop",
    },
    {
      id: 6,
      name: "Stationery",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=150&h=150&fit=crop",
    },
    {
      id: 7,
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop",
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative">
          <button className="swiper-btn-prev2 absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#ef553f] text-white flex items-center justify-center hover:bg-[#333333] transition-colors duration-300 z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={6}
            spaceBetween={16}
            loop={true}
            speed={1500}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-btn-next2",
              prevEl: ".swiper-btn-prev2",
            }}
            breakpoints={{
              0: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 6 },
            }}
            // className=""
            // style={{overflow: "hidden"}}
          >
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <div
                    key={cat.id}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <Link
                      href={`/categories/${cat.name}`}
                      className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden mb-3 group-hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </Link>
                    <Link
                      href={`/categories/${cat.name}`}
                      className="text-sm text-gray-500 font-semibold hover:text-[#ef553f] transition-all duration-300"
                    >
                      {cat.name}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <button className="swiper-btn-next2 absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#ef553f] text-white flex items-center justify-center hover:bg-[#333333] transition-colors duration-300 z-10">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
