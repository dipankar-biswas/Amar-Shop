"use client";
import { Heart, X } from "lucide-react";
import { useApp } from "../../context/AppContext";
import Link from "next/link";
import { cn } from "@/lib/utils";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useApp();

  return (
    <div className="flex-1">
      {/* <h1 className="text-xl text-[22px] font-semibold">Wishlist</h1> */}
      <div className="mt-4 space-y-3">
        {wishlist.length === 0 ? (
          <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-2xl">
            <Heart size={60} className="mx-auto mb-6 text-gray-200" />
            <h2 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Looks like you haven't added anything to your wishlist yet.
              Explore our products and save your favorites!
            </p>
            <Link
              href="/"
              className="bg-[#ef553f] text-white px-10 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-red-600 transition-all inline-block"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="border border-gray-100 rounded-sm overflow-hidden">
              <div className="space-y-0">
                {wishlist.map((item, index) => (
                  <div
                    key={item.id}
                    className={cn(
                      "flex flex-col md:flex-row items-center gap-6 p-6 hover:bg-gray-50 transition-colors",
                      index !== wishlist.length - 1 && "border-b",
                    )}
                  >
                    <div className="flex items-center gap-6 flex-1 w-full">
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <X size={18} />
                      </button>

                      <div className="w-24 h-24 flex-shrink-0 bg-white border border-gray-100 rounded-sm p-1">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-[#ef5350] text-sm md:text-base font-bold leading-tight mb-2 hover:underline cursor-pointer">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[#ef5350] font-black text-lg">
                            ${item.price.toFixed(2)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-gray-400 text-sm line-through">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-xs flex items-center gap-2">
                          {item.dateAdded || "April 1, 2026"}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-3 min-w-[200px] w-full md:w-auto mt-4 md:mt-0">
                      {item.stockCount ? (
                        <>
                          <span className="text-gray-400 text-xs font-medium">
                            {item.stockCount} in stock
                          </span>
                          <button className="bg-[#ef5350] text-white px-8 py-3 rounded-sm text-[10px] font-black uppercase tracking-[2px] hover:bg-[#d32f2f] transition-all w-full md:w-auto shadow-md">
                            Select Options
                          </button>
                        </>
                      ) : (
                        <button className="bg-[#ef5350] text-white px-8 py-3 rounded-sm text-[10px] font-black uppercase tracking-[2px] hover:bg-[#d32f2f] transition-all w-full md:w-auto shadow-md">
                          Add To Cart
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
