"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { key: "dashboard", label: "Dashboard" },
  { key: "orders", label: "Orders" },
  { key: "downloads", label: "Downloads" },
  { key: "addresses", label: "Addresses" },
  { key: "account-details", label: "Account details" },
  { key: "compare", label: "Compare" },
  { key: "wishlist", label: "Wishlist" },
  { key: "logout", label: "Log out" },
];

export default function AccountSidebar() {
  const pathname = usePathname();
  const activePage = pathname.split("/").pop();
  
  return (
    <div className="w-64 flex-shrink-0">
      {/* Avatar */}
      <div className="flex items-center gap-3 mb-4 pb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
        <span className="text-sm text-gray-600 font-bold">dip</span>
      </div>

      {/* Menu */}
      <nav className="border border-gray-200 divide-y divide-gray-100">
        {menuItems.map((item) => (
          <Link
            key={item.key}
            href={`/my-account/${item.key}`}
            className={`w-full flex items-center text-left px-4 py-3 text-sm transition-colors ${
              activePage === item.key
                ? "text-gray-800 font-medium border-l-4 border-red-500 bg-gray-50"
                : "text-gray-600 hover:text-red-500 hover:bg-gray-50 border-l-4 border-transparent"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
