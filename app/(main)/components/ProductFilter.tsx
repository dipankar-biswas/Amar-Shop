"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";

export const ProductFilter = ({ onFilterChange }) => {
  const [openSections, setOpenSections] = useState({
    categories: true,
    brands: true,
    highlight: true,
    colors: true,
    stones: false,
    fragrances: false,
    price: true,
    rating: true
  });

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    highlight: [],
    colors: [],
    stones: [],
    fragrances: [],
    priceRange: { min: 0, max: 1000 },
    rating: null
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleMultiSelect = (section, value) => {
    setSelectedFilters(prev => {
      const current = prev[section];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      
      const newFilters = { ...prev, [section]: updated };
      if (onFilterChange) onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleRatingSelect = (rating) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev, rating };
      if (onFilterChange) onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handlePriceChange = (min, max) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev, priceRange: { min, max } };
      if (onFilterChange) onFilterChange(newFilters);
      return newFilters;
    });
  };

  // Filter Sections Data
  const filterSections = [
    {
      id: "categories",
      title: "Shop By Categories",
      options: ["All Products", "Best Seller", "New Arrivals", "Sale", "Featured"]
    },
    {
      id: "brands",
      title: "Brands",
      options: ["Nike", "Adidas", "Puma", "Zara", "H&M", "Gucci", "Louis Vuitton"]
    },
    {
      id: "highlight",
      title: "Highlight",
      options: ["Best Seller", "New Arrivals", "On Sale", "Limited Edition", "Eco Friendly", "Premium Quality"]
    },
    {
      id: "colors",
      title: "Filter by Color",
      options: [
        { name: "Red", class: "bg-red-500", code: "#ef4444" },
        { name: "Blue", class: "bg-blue-500", code: "#3b82f6" },
        { name: "Green", class: "bg-green-500", code: "#22c55e" },
        { name: "Black", class: "bg-black", code: "#000000" },
        { name: "White", class: "bg-white border border-gray-300", code: "#ffffff" },
        { name: "Yellow", class: "bg-yellow-500", code: "#eab308" },
        { name: "Purple", class: "bg-purple-500", code: "#a855f7" },
        { name: "Pink", class: "bg-pink-500", code: "#ec4899" },
        { name: "Orange", class: "bg-orange-500", code: "#f97316" },
        { name: "Brown", class: "bg-amber-800", code: "#92400e" }
      ],
      isColor: true
    },
    {
      id: "stones",
      title: "Filter by Stone",
      options: ["Diamond", "Ruby", "Emerald", "Sapphire", "Pearl", "Opal", "Amethyst", "Topaz"]
    },
    {
      id: "fragrances",
      title: "Filter by Fragrances",
      options: ["Floral", "Woody", "Citrus", "Oriental", "Fresh", "Sweet", "Spicy", "Aquatic"]
    },
    {
      id: "price",
      title: "Price Filter",
      isPrice: true
    },
    {
      id: "rating",
      title: "Average Rating",
      isRating: true
    }
  ];

  // Rating Stars Component
  const RatingOption = ({ rating, selected, onSelect }) => {
    return (
      <button
        onClick={() => onSelect(rating)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
          selected === rating
            ? "bg-red-500 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              className={`${
                star <= rating
                  ? selected === rating
                    ? "fill-white text-white"
                    : "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-medium">& Up</span>
      </button>
    );
  };

  // Slide Animation Component
  const SlideWrapper = ({ children, isOpen }) => {
    return (
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2">{children}</div>
      </div>
    );
  };

  return (
    <aside className="space-y-4">
      {filterSections.map((section) => (
        <div
          key={section.id}
          className="rounded-lg border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
        >
          {/* Section Header */}
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
          >
            <h3 className="font-semibold text-gray-700 group-hover:text-red-500 transition-colors">
              {section.title}
            </h3>
            <div className="text-gray-400 group-hover:text-red-500 transition-colors">
              {openSections[section.id] ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </div>
          </button>

          {/* Section Content with Slide Animation */}
          <SlideWrapper isOpen={openSections[section.id]}>
            {/* Categories, Brands, Highlight, Stones, Fragrances */}
            {!section.isColor && !section.isPrice && !section.isRating && (
              <div className="space-y-2">
                {section.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition-colors group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters[section.id]?.includes(option)}
                      onChange={() => handleMultiSelect(section.id, option)}
                      className="rounded border-gray-300 text-red-500 focus:ring-red-500 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-sm text-gray-600 group-hover:text-red-500 transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {/* Colors Section */}
            {section.isColor && (
              <div className="grid grid-cols-5 gap-3">
                {section.options.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleMultiSelect("colors", color.name)}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div
                      className={`w-6 h-6 rounded-full ${color.class} ${
                        selectedFilters.colors?.includes(color.name)
                          ? "ring-1 ring-offset-2 ring-red-500 scale-110"
                          : "ring-1 ring-gray-200"
                      } transition-all duration-200 group-hover:scale-110 shadow-md`}
                      style={{ backgroundColor: color.code }}
                    />
                    <span className="text-xs text-gray-500 group-hover:text-red-500 transition-colors">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Price Filter */}
            {section.isPrice && (
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 block mb-1">Min Price</label>
                    <input
                      type="number"
                      value={selectedFilters.priceRange.min}
                      onChange={(e) => handlePriceChange(Number(e.target.value), selectedFilters.priceRange.max)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                      placeholder="$0"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 block mb-1">Max Price</label>
                    <input
                      type="number"
                      value={selectedFilters.priceRange.max}
                      onChange={(e) => handlePriceChange(selectedFilters.priceRange.min, Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                      placeholder="$1000"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  value={selectedFilters.priceRange.max}
                  onChange={(e) => handlePriceChange(selectedFilters.priceRange.min, Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">${selectedFilters.priceRange.min}</span>
                  <span className="text-gray-600">${selectedFilters.priceRange.max}</span>
                </div>
              </div>
            )}

            {/* Rating Filter */}
            {section.isRating && (
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <RatingOption
                    key={rating}
                    rating={rating}
                    selected={selectedFilters.rating}
                    onSelect={handleRatingSelect}
                  />
                ))}
              </div>
            )}
          </SlideWrapper>
        </div>
      ))}

      {/* Selected Filters Summary */}
      {(selectedFilters.categories.length > 0 ||
        selectedFilters.brands.length > 0 ||
        selectedFilters.highlight.length > 0 ||
        selectedFilters.colors.length > 0 ||
        selectedFilters.stones.length > 0 ||
        selectedFilters.fragrances.length > 0 ||
        selectedFilters.rating !== null ||
        selectedFilters.priceRange.min > 0 ||
        selectedFilters.priceRange.max < 1000) && (
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="font-semibold text-gray-700 mb-3">Applied Filters</h3>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.categories.map(cat => (
              <span key={cat} className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 text-red-600 text-sm rounded">
                {cat}
                <button onClick={() => handleMultiSelect("categories", cat)}>×</button>
              </span>
            ))}
            {selectedFilters.highlight.map(h => (
              <span key={h} className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 text-red-600 text-sm rounded">
                {h}
                <button onClick={() => handleMultiSelect("highlight", h)}>×</button>
              </span>
            ))}
            {selectedFilters.colors.map(c => (
              <span key={c} className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 text-red-600 text-sm rounded">
                {c}
                <button onClick={() => handleMultiSelect("colors", c)}>×</button>
              </span>
            ))}
            {selectedFilters.rating && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 text-red-600 text-sm rounded">
                {selectedFilters.rating}★ & Up
                <button onClick={() => handleRatingSelect(null)}>×</button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Clear All Button */}
      <button
        onClick={() => {
          setSelectedFilters({
            categories: [],
            brands: [],
            highlight: [],
            colors: [],
            stones: [],
            fragrances: [],
            priceRange: { min: 0, max: 1000 },
            rating: null
          });
          if (onFilterChange) {
            onFilterChange({
              categories: [],
              brands: [],
              highlight: [],
              colors: [],
              stones: [],
              fragrances: [],
              priceRange: { min: 0, max: 1000 },
              rating: null
            });
          }
        }}
        className="w-full mt-4 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 font-medium transform hover:scale-[1.02] active:scale-95"
      >
        Clear All Filters
      </button>
    </aside>
  );
};