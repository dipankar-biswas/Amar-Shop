"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Stars } from "@/utils/helpers";
import { useState } from "react";

export const QuickViewModal = ({ onClose, activeProduct }) => {

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Early return if no active product
  if (!activeProduct) {
    return null;
  }
  

  const goSlide = (direction: "prev" | "next") => {
    if (!activeProduct.images || activeProduct.images.length === 0) return;
    
    setActiveImageIndex((prev) => {
      if (direction === "prev") {
        return (prev - 1 + activeProduct.images.length) % activeProduct.images.length;
      }
      return (prev + 1) % activeProduct.images.length;
    });
  };

  // If no images, don't render navigation
  const hasImages = activeProduct.images && activeProduct.images.length > 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/60">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1280px] items-start justify-center px-4 pt-18 sm:px-6 lg:px-8">
        <div className="relative mt-10 grid w-full max-w-[920px] overflow-hidden bg-white shadow-[0_20px_80px_rgba(0,0,0,0.35)] lg:grid-cols-[1.08fr_0.92fr]">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-20 inline-flex h-8 w-8 items-center justify-center border border-[#d9d9d9] bg-white text-[#404040] transition hover:text-[#ea553b]"
            aria-label="Close quick view"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                d="M18 6 6 18M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="relative flex min-h-[460px] items-center justify-center bg-white px-10 py-10">
            {hasImages && (
              <>
                <button
                  onClick={() => goSlide("prev")}
                  className="absolute left-4 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#f2654a] text-white shadow-md transition hover:bg-[#e55337]"
                  aria-label="Previous image"
                >
                  <ArrowLeftIcon />
                </button>

                <img
                  src={activeProduct.images[activeImageIndex]}
                  alt={activeProduct.name}
                  className="max-h-[330px] w-full object-contain"
                />

                <button
                  onClick={() => goSlide("next")}
                  className="absolute right-4 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#f2654a] text-white shadow-md transition hover:bg-[#e55337]"
                  aria-label="Next image"
                >
                  <ArrowRightIcon />
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                  {activeProduct.images.map((image, index) => (
                    <button
                      key={`${activeProduct.id}-${image}-${index}`}
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${index === activeImageIndex ? "bg-[#2f2f2f]" : "bg-[#b8b8b8]"}`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
            
            {!hasImages && (
              <div className="text-center text-gray-400">No image available</div>
            )}
          </div>

          <div className="px-7 py-6 sm:px-8 sm:py-7">
            <h3 className="max-w-[420px] text-[22px] font-medium leading-[1.35] text-[#3a3a3a]">
              {activeProduct.name}
            </h3>

            <div className="mt-3 flex items-center gap-2">
              <Stars rating={activeProduct.rating || 0} />
              <span className="text-[15px] text-[#ff613d]">
                {activeProduct.reviewText || "No reviews"}
              </span>
            </div>

            <div className="mt-5 text-[31px] font-medium text-[#f05a40]">
              ${activeProduct.price || "0.00"}
            </div>

            <p className="mt-4 text-[15px] leading-8 text-[#7a7a7a]">
              {activeProduct.description || "No description available"}
            </p>

            <div className="mt-5 flex gap-3">
              <div className="flex h-[40px] w-[52px] items-center justify-center border border-[#dadada] bg-white text-[24px] text-[#7a7a7a]">
                {quantity}
              </div>
              <button className="flex-1 bg-[#f0533a] px-5 text-[15px] font-semibold text-white transition hover:bg-[#de452d]">
                Add To Cart
              </button>
            </div>

            <button className="mt-5 h-[41px] w-full bg-[#f0533a] text-[15px] font-semibold text-white transition hover:bg-[#de452d]">
              Buy Now
            </button>

            <div className="mt-4 flex items-center gap-3 text-sm text-[#7b7b7b]">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e3e3e3] text-lg transition hover:border-[#f0533a] hover:text-[#f0533a]"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e3e3e3] text-lg transition hover:border-[#f0533a] hover:text-[#f0533a]"
                aria-label="Increase quantity"
              >
                +
              </button>
              <span>Adjust quantity</span>
            </div>

            <p className="mt-4 text-[15px] leading-8 text-[#7a7a7a]">
              Categories: {activeProduct.category || "Uncategorized"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};