"use client";
import {
  ChevronDown,
  ChevronRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";

export const Navbar = ({
  openCart,
  wishlistCount,
  onWishlistClick,
  compareCount,
  onCompareClick,
}) => {
  const { cart, search, setSearch } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const megaCategorySteps = [
    {
      key: "Our Store",
      groups: [
        {
          title: "Electronics",
          items: ["Accessories", "Air Conditioners", "Audio", "Cameras"],
        },
        {
          title: "Furniture",
          items: [
            "Bedroom",
            "Dining Room & Bar",
            "Home Enhancement",
            "Kids Room",
          ],
        },
        {
          title: "Fashion & Style",
          items: ["Apparel", "Boys", "Fashion Accessories", "Footwear"],
        },
        {
          title: "Beauty & Cosmetic",
          items: ["Ayush", "Fitness", "Fragrances", "Hair"],
        },
        {
          title: "Books & Music",
          items: [
            "Children's Books",
            "Exam Central",
            "Fiction Books",
            "Non Fiction Books",
          ],
        },
        {
          title: "Groceries",
          items: ["Apparel", "Beauty", "Beverages", "Books"],
        },
      ],
    },
    {
      key: "Fashion & Style",
      groups: [
        { title: "Men", items: ["T-Shirts", "Jeans", "Jackets", "Sneakers"] },
        { title: "Women", items: ["Kurtis", "Saree", "Bags", "Heels"] },
        {
          title: "Kids",
          items: ["Boys Wear", "Girls Wear", "School Bags", "Shoes"],
        },
      ],
    },
    {
      key: "Electronics",
      groups: [
        {
          title: "Computers",
          items: ["Laptops", "Accessories", "Mouse", "Monitors"],
        },
        {
          title: "Mobile",
          items: ["Smartphone", "Headphones", "Chargers", "Cases"],
        },
        {
          title: "Smart Home",
          items: ["Speakers", "Security", "Lighting", "TV"],
        },
      ],
    },
    {
      key: "Furniture",
      groups: [
        {
          title: "Living Room",
          items: ["Sofa", "Center Table", "TV Unit", "Shelf"],
        },
        { title: "Bedroom", items: ["Bed", "Mattress", "Wardrobe", "Lamp"] },
        {
          title: "Office",
          items: ["Desk", "Office Chair", "Storage", "Lighting"],
        },
      ],
    },
    {
      key: "Home & Kitchen",
      groups: [
        { title: "Kitchen", items: ["Cookware", "Knives", "Storage", "Mixer"] },
        {
          title: "Home Decor",
          items: ["Frames", "Planters", "Clock", "Curtains"],
        },
        { title: "Cleaning", items: ["Brush", "Mop", "Freshener", "Laundry"] },
      ],
    },
    {
      key: "Groceries",
      groups: [
        { title: "Fresh", items: ["Fruits", "Vegetables", "Dairy", "Meat"] },
        { title: "Daily Needs", items: ["Rice", "Oil", "Flour", "Spices"] },
        {
          title: "Beverages",
          items: ["Juice", "Tea", "Coffee", "Soft Drinks"],
        },
      ],
    },
    {
      key: "Books & Music",
      groups: [
        {
          title: "Books",
          items: ["Fiction", "Academic", "Self Help", "Children"],
        },
        {
          title: "Music",
          items: ["CDs", "Vinyl", "Headphones", "Instruments"],
        },
        {
          title: "Stationery",
          items: ["Diaries", "Pens", "Markers", "File Folder"],
        },
      ],
    },
    {
      key: "Beauty & Cosmetic",
      groups: [
        {
          title: "Makeup",
          items: ["Lipstick", "Foundation", "Eyeliner", "Palette"],
        },
        {
          title: "Skin Care",
          items: ["Face Wash", "Serum", "Sunblock", "Moisturizer"],
        },
        {
          title: "Hair Care",
          items: ["Shampoo", "Conditioner", "Oil", "Mask"],
        },
      ],
    },
    {
      key: "Sports & Luggage",
      groups: [
        { title: "Sports", items: ["Gym", "Cycling", "Running", "Yoga"] },
        {
          title: "Travel",
          items: ["Backpack", "Trolley", "Duffel", "Accessories"],
        },
        {
          title: "Outdoor",
          items: ["Tent", "Bottle", "Flashlight", "Camping Kit"],
        },
      ],
    },
    {
      key: "Accessories",
      groups: [
        {
          title: "Fashion Accessories",
          items: ["Sunglasses", "Belts", "Wallet", "Watch"],
        },
        {
          title: "Device Accessories",
          items: ["Cable", "Power Bank", "Stand", "Adapter"],
        },
        {
          title: "Home Accessories",
          items: ["Hooks", "Baskets", "Boxes", "Decor"],
        },
      ],
    },
  ];
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [elementsOpen, setElementsOpen] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState(
    megaCategorySteps[0].key,
  );

  const activeMegaContent =
    megaCategorySteps.find((item) => item.key === activeMegaCategory) ??
    megaCategorySteps[0];
 

  return (
    <nav
      className={`sticky top-0 z-40 border-y border-gray-200 bg-[#f3f3f3] transition-all ${isScrolled ? "shadow-md" : ""}`}
    >
      <div
        className={`container mx-auto flex justify-between w-full items-center gap-8 px-4 text-sm text-gray-700 transition-all ${isScrolled ? "py-2" : "py-3"}`}
      >
        <div className="flex items-center gap-8">
          <div
            onMouseEnter={() => setCategoryOpen(true)}
            onMouseLeave={() => setCategoryOpen(false)}
            className="relative"
          >
            <button className="flex items-center gap-2 text-base font-medium text-gray-800">
              <Menu className="h-4 w-4" /> Shop By Categories{" "}
              <ChevronDown className="h-4 w-4" />
            </button>

            {categoryOpen && (
              <div className="absolute left-0 top-full z-40 w-[980px] border border-gray-300 bg-white shadow-lg">
                <div className="grid grid-cols-[240px_1fr]">
                  <div className="border-r border-gray-200 bg-[#fafafa] py-1">
                    {megaCategorySteps.map((item) => {
                      const isActive = item.key === activeMegaCategory;
                      return (
                        <button
                          key={item.key}
                          onMouseEnter={() => setActiveMegaCategory(item.key)}
                          className={`flex w-full items-center justify-between border-b border-gray-200 px-4 py-3 text-left text-[16px] transition ${
                            isActive
                              ? "bg-white font-medium text-[#ef553f]"
                              : "text-gray-700 hover:bg-white"
                          }`}
                        >
                          <span>{item.key}</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-3 gap-x-10 gap-y-6 p-7">
                    {activeMegaContent.groups.map((group) => (
                      <div key={group.title}>
                        <Link
                          href={`/categories?category=${encodeURIComponent(group.title)}`}
                          className="mb-2 text-[17px] font-semibold text-gray-800"
                        >
                          {group.title}
                        </Link>
                        <div className="space-y-1">
                          {group.items.map((subItem) => (
                            <Link
                              key={subItem}
                              href={`/categories?category=${encodeURIComponent(subItem)}`}
                              className="block text-[15px] text-gray-600 transition hover:text-[#ef553f]"
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/" className="hover:text-[#ef553f]">
            Home
          </Link>
          <Link href="/shop" className="hover:text-[#ef553f]">
            Shop
          </Link>
          <Link
            href="/categories"
            className="flex items-center gap-1 hover:text-[#ef553f]"
          >
            Categories{" "}
            <span className="rounded bg-emerald-100 px-1 text-[10px] text-emerald-700">
              SALE
            </span>
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-1 hover:text-[#ef553f]"
          >
            Products{" "}
            <span className="rounded bg-pink-100 px-1 text-[10px] text-pink-600">
              HOT
            </span>
          </Link>
          <Link href="/offers" className="hover:text-[#ef553f]">
            Top deals
          </Link>
          <Link
            href="/new-arrival"
            className="flex items-center gap-1 hover:text-[#ef553f]"
          >
            New Arrival{" "}
            <span className="rounded bg-emerald-100 px-1 text-[10px] text-emerald-700">
              NEW
            </span>
          </Link>

          {/* <div
            onMouseEnter={() => setElementsOpen(true)}
            onMouseLeave={() => setElementsOpen(false)}
            className="relative"
          >
            <button className="flex items-center gap-1 hover:text-[#ef553f]">
              Elements <ChevronDown className="h-4 w-4" />
            </button>
            {elementsOpen && (
              <div className="absolute left-0 top-5 z-40 w-64 border border-gray-300 bg-white p-4 shadow-lg">
                {[
                  "Accordion",
                  "Icon box",
                  "Portfolio",
                  "FAQs",
                  "Gallery",
                  "Tabs",
                  "Blog",
                  "About us",
                  "Contact us",
                ].map((m) => (
                  <p key={m} className="py-1 text-sm text-gray-600">
                    {m}
                  </p>
                ))}
              </div>
            )}
          </div> */}
        </div>

        {isScrolled && (
          <div className={`flex items-center gap-5 text-sm text-gray-700 transition-opacity ${isScrolled ? "opacity-100" : "opacity-0"}`}>
            <button className="text-gray-600 hover:text-red-500 transition-colors">
              <Search size={22} />
            </button>
            <button className="text-gray-600 hover:text-red-500 transition-colors">
              <User size={22} />
            </button>
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
            <button onClick={openCart} className="relative text-gray-600 hover:text-red-500 transition-colors">
              <ShoppingBag size={22} />
              <span className="absolute -top-2 -right-2 bg-[#ef553f] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
