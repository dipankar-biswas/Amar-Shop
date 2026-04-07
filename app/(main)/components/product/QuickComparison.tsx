"use client";

import { Stars } from "@/utils/helpers";
import { ProductCard } from "../ProductCard";


export default function QuickComparison({ products }) {
  return (
    <div className="mt-10 bg-white border border-gray-200 rounded p-5">
      <h2 className="text-lg font-bold text-gray-800 mb-5 text-center">Quick Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <td className="w-28 py-2 text-gray-500 font-medium"></td>
              {products.map((p) => (
                <th key={p.id} className="px-3 py-2 text-center text-gray-700 font-semibold text-xs w-1/4">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Image row */}
            <tr className="border-t border-gray-100">
              <td className="py-3 text-gray-600 font-medium">Image</td>
              {products.map((p) => (
                <td key={p.id} className="px-3 py-3 text-center">
                  <div className="flex justify-center">
                    <img src={p.image} alt={p.name} className="w-20 h-24 object-cover rounded border border-gray-200" />
                  </div>
                </td>
              ))}
            </tr>

            {/* Rating row */}
            <tr className="border-t border-gray-100 bg-gray-50">
              <td className="py-3 text-gray-600 font-medium">Rating</td>
              {products.map((p) => (
                <td key={p.id} className="px-3 py-3 text-center">
                  <Stars rating={p.rating} />
                </td>
              ))}
            </tr>

            {/* Price row */}
            <tr className="border-t border-gray-100">
              <td className="py-3 text-gray-600 font-medium">Price</td>
              {products.map((p) => (
                <td key={p.id} className="px-3 py-3 text-center">
                  <span className="text-orange-500 font-bold">{p.price}</span>
                </td>
              ))}
            </tr>

            {/* Add to cart row */}
            <tr className="border-t border-gray-100 bg-gray-50">
              <td className="py-3 text-gray-600 font-medium">Add to cart</td>
              {products.map((p) => (
                <td key={p.id} className="px-3 py-3 text-center">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-4 py-1.5 rounded transition-colors font-medium">
                    Select Options
                  </button>
                </td>
              ))}
            </tr>

            {/* Additional info row */}
            <tr className="border-t border-gray-100">
              <td className="py-3 text-gray-600 font-medium align-top">Additional<br />information</td>
              {products.map((p) => (
                <td key={p.id} className="px-3 py-3 text-xs text-gray-600">
                  <div className="mb-1">
                    <span className="font-medium text-gray-700">Color </span>
                    <span className="text-blue-500">{p.color}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Size </span>
                    <span className="text-blue-500">{p.size}</span>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
