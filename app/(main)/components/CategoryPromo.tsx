export const CategoryPromo = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative h-64 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800"
              alt="Laptops"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent flex items-center p-8">
              <div>
                <p className="text-[#ef553f] text-sm mb-2">Trending's</p>
                <h3 className="text-xl font-bold text-gray-600 mb-4">
                  Shop Shos
                </h3>
                <button className="rounded bg-[#ef553f] hover:bg-[#d4382c] transition-all duration-300 px-7 py-2 text-sm font-semibold text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="group relative h-64 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
              alt="Laptops"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent flex items-center p-8">
              <div>
                <p className="text-[#ef553f] text-sm mb-2">Trending's</p>
                <h3 className="text-xl font-bold text-gray-600 mb-4">
                  Shop Laptop's
                </h3>
                <button className="rounded bg-[#ef553f] hover:bg-[#d4382c] transition-all duration-300 px-7 py-2 text-sm font-semibold text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="group relative h-64 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800"
              alt="Sandals"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent flex items-center p-8">
              <div>
                <p className="text-[#ef553f] text-sm mb-2">Trending's</p>
                <h3 className="text-xl font-bold text-gray-600 mb-4">
                  Casual Sandal's
                </h3>
                <button className="rounded bg-[#ef553f] hover:bg-[#d4382c] transition-all duration-300 px-7 py-2 text-sm font-semibold text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
