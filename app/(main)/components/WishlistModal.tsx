'use client'

import { Clock, Heart, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const WishlistModal = ({ wishlist, onClose, onRemove }) => {
    
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
      />
      
      <div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white w-full max-w-2xl rounded-sm overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
      >
        <div className="bg-[#1c1c1c] text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-sm font-bold tracking-[2px] uppercase">Wishlist ({wishlist.length})</h2>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-200">
          {wishlist.length === 0 ? (
            <div className="py-24 text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={40} className="text-gray-200" />
              </div>
              <p className="text-gray-500 font-medium">Your wishlist is currently empty.</p>
              <button 
                onClick={onClose}
                className="mt-6 text-red-500 text-xs font-black border-b-2 border-red-500 uppercase tracking-widest pb-1 hover:text-red-600 transition-colors"
              >
                Go Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-0">
              {wishlist.map((item, index) => (
                <div 
                  key={item.id} 
                  className={cn(
                    "flex flex-col sm:flex-row items-center gap-6 py-6 group",
                    index !== wishlist.length - 1 && "border-b border-dashed border-gray-200"
                  )}
                >
                  <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                    <X size={18} />
                  </button>

                  <div className="w-24 h-24 flex-shrink-0 bg-white border border-gray-50 rounded p-2">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-[#ef5350] text-sm font-bold leading-tight mb-2 hover:underline cursor-pointer">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                       {item.originalPrice && (
                         <span className="text-gray-400 text-sm line-through">${item.originalPrice}</span>
                       )}
                       <span className="text-[#ef5350] font-black text-base">${item.price}</span>
                    </div>
                    <p className="text-gray-400 text-[11px] font-medium flex items-center justify-center sm:justify-start gap-1">
                      <Clock size={10} /> {item.dateAdded || 'Recently added'}
                    </p>
                  </div>

                  <div className="text-center sm:text-right min-w-[140px]">
                     {item.stockCount && (
                       <p className="text-gray-400 text-[11px] mb-3 font-medium uppercase tracking-wider">{item.stockCount} in stock</p>
                     )}
                     <button className="w-full sm:w-auto px-8 py-3 bg-[#ef5350] text-white rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-[#d32f2f] transition-all shadow-lg shadow-red-100 active:scale-95">
                       {item.stockCount ? 'Select Options' : 'Add To Cart'}
                     </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t p-6 flex justify-between items-center text-[10px] font-black tracking-[2px]">
          <Link 
            href="/my-account/wishlist" 
            onClick={onClose}
            className="text-[#ef5350] border-b-2 border-transparent hover:border-[#ef5350] transition-all uppercase"
          >
            OPEN WISHLIST PAGE
          </Link>
          <button 
            onClick={onClose}
            className="text-[#ef5350] border-b-2 border-transparent hover:border-[#ef5350] transition-all uppercase"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
}