import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

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
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#ef553f] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col items-center group cursor-pointer"
              >
                <Link href={`/categories/${cat.name}`} className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden mb-3 group-hover:shadow-lg transition-shadow">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </Link>
                <Link href={`/categories/${cat.name}`} className="text-sm text-gray-500 font-semibold hover:text-[#ef553f] transition-all duration-300">
                  {cat.name}
                </Link>
              </div>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#ef553f] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 z-10">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
