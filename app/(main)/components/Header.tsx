"use client";

import { taka } from "@/utils/currency";
import { Heart, Phone, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Changed from useNavigate
import { useApp } from "../context/AppContext";

export const Header = ({ openCart, wishlistCount, onWishlistClick }) => {
  const { cart, search, setSearch } = useApp();
  const router = useRouter(); // Changed from useNavigate

  const categories = [
    "All",
    "Electronics",
    "Beauty",
    "Fashion",
    "Groceries",
    "Stationery",
    "Home & Kitchen",
  ];

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const onSearch = (e) => {
    e.preventDefault();
    router.push(`/products?search=${encodeURIComponent(search)}`); // Changed from navigate to router.push
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto flex w-full flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-[44px] font-bold leading-none text-[#ef553f]"
        >
          SM<span className="text-[30px] text-gray-700">Craft</span>
        </Link>

        <form
          onSubmit={onSearch}
          className="flex w-full max-w-[560px] items-center overflow-hidden rounded border border-gray-300 bg-white"
        >
          <select className="border-r border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-600 outline-none">
            <option>All Categories</option>
            {categories.slice(1).map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Uncommented this line
            placeholder="Search products..."
            className="min-w-0 flex-1 px-4 py-2.5 text-sm outline-none"
          />
          <button
            type="submit"
            className="bg-[#ef553f] px-6 py-2.5 text-sm font-semibold text-white"
          >
            Search
          </button>
        </form>

        <div className="flex items-center gap-5 text-sm text-gray-700">
          <div className="hidden items-center gap-2 sm:flex">
            <Phone className="h-4 w-4 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Need Help?</p>
              <p className="font-semibold">0123456789</p>
            </div>
          </div>
          <Link href="/login" className="flex items-center gap-1">
            <User className="h-4 w-4 text-gray-400" />
            Login/Register
          </Link>
          <button
            onClick={onWishlistClick}
            className="relative text-gray-600 hover:text-red-500 transition-colors"
          >
            <Heart size={22} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ef553f] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </button>
          <button onClick={openCart} className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4 text-gray-400" />
            <span>{taka(total)}</span>
            <span className="rounded-full bg-[#ef553f] px-2 text-xs text-white">
              {cart.length}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
