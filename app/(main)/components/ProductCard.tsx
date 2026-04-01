import { BarChart2, BarChart3, Eye, Heart } from "lucide-react";
import { taka } from "../../../utils/currency";
import { Stars } from "../../../utils/helpers";
import Link from "next/link";
import { useState } from "react";
import { CountdownTimer } from "./CountdownTimer";
import { useApp } from "../context/AppContext";

export const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useApp();
  
  const isWishlisted = isInWishlist(product?.id);

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleCompare = (e) => {
    e.stopPropagation();
    // Add compare functionality here
    console.log("Compare product:", product.id);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    // Add quick view functionality here
    console.log("Quick view product:", product.id);
  };

  return (
    <div 
      className="relative h-[322px] overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group absolute inset-x-0 top-0 z-10 h-[322px] rounded border border-gray-200 bg-white transition-all duration-300 hover:z-30 hover:h-[365px] hover:shadow-lg">
        {/* Badge */}
        {(product.isSale || product.discount) && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
            -{product.discount || Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
        {product.isNew && !product.isSale && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded z-10">
            NEW
          </span>
        )}

        {/* Hover Actions - Top Right */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} z-20`}>
          <button 
            onClick={handleWishlistToggle}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'}`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
          <button 
            onClick={handleCompare} 
            className="w-9 h-9 rounded-full bg-white text-gray-600 hover:bg-red-500 hover:text-white flex items-center justify-center shadow-md transition-colors"
          >
            <BarChart2 className="w-4 h-4" />
          </button>
          <button 
            onClick={handleQuickView} 
            className="w-9 h-9 rounded-full bg-white text-gray-600 hover:bg-red-500 hover:text-white flex items-center justify-center shadow-md transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        <div className="relative mx-3 mt-3 h-[165px] overflow-hidden bg-[#fafafa]">
          <Link href={`/product/${product.id}`} className="absolute inset-0 h-full w-full">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:opacity-0"
            />
            <img
              src={product.hoverImage || product.image}
              alt={`${product.name} alt`}
              className="absolute inset-0 h-full w-full object-contain opacity-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
            />
          </Link>

          {/* Countdown Timer */}
          {product.countdown && (
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <CountdownTimer {...product.countdown} />
            </div>
          )}

          {/* <div className="absolute right-2 top-2 flex translate-x-3 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <button 
              onClick={handleWishlistToggle} 
              className="rounded-full bg-[#ef553f] p-2 text-white shadow"
            >
              <Heart className={`h-3.5 w-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            <button 
              onClick={handleCompare} 
              className="rounded-full bg-[#ef553f] p-2 text-white shadow"
            >
              <BarChart3 className="h-3.5 w-3.5" />
            </button>
            <button 
              onClick={handleQuickView} 
              className="rounded-full bg-[#ef553f] p-2 text-white shadow"
            >
              <Eye className="h-3.5 w-3.5" />
            </button>
          </div> */}
        </div>

        <div className="px-3 pb-3 pt-3 text-center">
          <Link href={`/product/${product.id}`} className="mx-auto min-h-[48px] max-w-[182px] text-[13px] hover:text-[#ef553f] transition-all duration-300 leading-5 text-slate-700">
            {product.name}
          </Link>
          <div className="mt-1">
            <Stars rating={product.rating} />
          </div>
          <div className="mt-2 flex items-center justify-center gap-1.5">
            {product.originalPrice && (
              <span className="text-[12px] text-gray-400 line-through">
                {taka(product.originalPrice)}
              </span>
            )}
            <p className="text-[22px] font-semibold leading-none text-[#ef553f]">
              {taka(product.price)}
            </p>
          </div>

          <div className="mt-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:mt-4 group-hover:max-h-16">
            <button 
              onClick={handleAddToCart} 
              className="rounded bg-[#ef553f] hover:bg-[#d4382c] transition-all duration-300 px-7 py-2 text-sm font-semibold text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};