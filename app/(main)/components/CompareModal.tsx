"use client";

import { Clock, Heart, Plus, Printer, Scale, Share2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export const CompareModal = ({ compareList, onClose, onRemove, clearAll }) => {
  const [showCompareSettings, setShowCompareSettings] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-5xl mx-4 bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between bg-gray-100 px-6 py-3 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                checked={showCompareSettings}
                onChange={(e) => setShowCompareSettings(e.target.checked)}
              />
              <span className="text-sm font-medium text-gray-700">
                Settings
              </span>
            </label>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Compare Content */}
        <div className="flex-1 overflow-auto bg-white">
          {compareList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Scale className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-500">No products to compare</p>
              <button
                onClick={onClose}
                className="mt-4 text-red-500 hover:text-red-600 font-medium"
              >
                Continue Shopping
              </button>
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
                              onClick={() => onRemove(product.id)}
                              className="absolute top-0 right-0 text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => onRemove(product.id)}
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

        {/* Bottom Bar */}
        <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
              <Printer className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {compareList.map((product) => (
              <button
                key={product.id}
                onClick={() => onRemove(product.id)}
                className="relative w-10 h-10 bg-white rounded overflow-hidden border border-gray-600 hover:border-red-500 group"
                title={`Remove ${product.name}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-red-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <X className="w-4 h-4 text-white" />
                </div>
              </button>
            ))}
            {compareList.length > 0 && (
              <button
                onClick={clearAll}
                className="ml-2 px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded transition-colors"
                title="Clear all items"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <Link href="/my-account/compare" onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2.5 rounded transition-colors">
              COMPARE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
