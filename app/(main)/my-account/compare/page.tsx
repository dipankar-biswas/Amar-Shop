"use client";
import { BarChart2, Heart, Scale, X } from "lucide-react";
import { useApp } from "../../context/AppContext";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ComparePage = () => {
  const {
    compareList,
    removeFromCompare,
    isCompareOpen,
    setIsCompareOpen,
    clearAllCompare,
  } = useApp();

  return (
    <div className="flex-1">
      {/* <h1 className="text-xl text-[22px] font-semibold">Compare</h1> */}
      <div className="mt-4 space-y-3">
        <div className="flex-1 overflow-auto bg-white">
          {compareList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <BarChart2 className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-500">No products to compare</p>
              <Link
                href={"/"}
                onClick={() => setIsCompareOpen(false)}
                className="mt-4 text-red-500 hover:text-red-600 font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="p-6">
              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {/* Product Names Row */}
                    <tr>
                      <td className="p-4 border-b border-gray-200 w-32"></td>
                      {compareList.map((product) => (
                        <td
                          key={product.id}
                          className="p-4 border-b border-gray-200 min-w-[200px] align-top"
                        >
                          <div className="relative pr-6">
                            <h3 className="text-sm text-red-500 font-medium line-clamp-2">
                              {product.name}
                            </h3>
                            <button
                              onClick={() => removeFromCompare(product.id)}
                              className="absolute top-0 right-0 text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => removeFromCompare(product.id)}
                              className="text-xs text-red-500 hover:text-red-600 underline mt-1 block"
                            >
                              remove
                            </button>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Product Images Row */}
                    <tr>
                      <td className="p-4 border-b border-gray-200 bg-gray-50 text-sm text-gray-600 font-medium">
                        Image
                      </td>
                      {compareList.map((product) => (
                        <td
                          key={product.id}
                          className="p-4 border-b border-gray-200"
                        >
                          <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden max-w-[180px]">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain p-4"
                            />
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Rating Row */}
                    <tr>
                      <td className="p-4 border-b border-gray-200 bg-gray-50 text-sm text-gray-600 font-medium">
                        Rating
                      </td>
                      {compareList.map((product) => (
                        <td
                          key={product.id}
                          className="p-4 border-b border-gray-200"
                        >
                          <span className="text-sm text-gray-900">
                            {product.rating.toFixed(2)} out of 5
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* Price Row */}
                    <tr>
                      <td className="p-4 border-b border-gray-200 bg-gray-50 text-sm text-gray-600 font-medium">
                        Price
                      </td>
                      {compareList.map((product) => (
                        <td
                          key={product.id}
                          className="p-4 border-b border-gray-200"
                        >
                          <div>
                            <span className="text-sm font-semibold text-red-500">
                              ${product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-gray-400 line-through ml-2">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Category Row */}
                    <tr>
                      <td className="p-4 border-b border-gray-200 bg-gray-50 text-sm text-gray-600 font-medium">
                        Category
                      </td>
                      {compareList.map((product) => (
                        <td
                          key={product.id}
                          className="p-4 border-b border-gray-200"
                        >
                          <span className="text-sm text-gray-900">
                            {product.category}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* Availability Row */}
                    <tr>
                      <td className="p-4 border-b border-gray-200 bg-gray-50 text-sm text-gray-600 font-medium">
                        Availability
                      </td>
                      {compareList.map((product) => (
                        <td
                          key={product.id}
                          className="p-4 border-b border-gray-200"
                        >
                          <span
                            className={cn(
                              "text-sm font-medium",
                              product.inStock
                                ? "text-green-600"
                                : "text-red-500",
                            )}
                          >
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* Add to Cart Row */}
                    <tr>
                      <td className="p-4 bg-gray-50 text-sm text-gray-600 font-medium">
                        Add to cart
                      </td>
                      {compareList.map((product) => (
                        <td key={product.id} className="p-4">
                          <button
                            onClick={() => addToCart(product)}
                            className="w-full bg-[#ef553f] hover:bg-red-600 text-white font-medium py-2 rounded transition-colors"
                          >
                            Add To Cart
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
