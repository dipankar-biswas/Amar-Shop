"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { ChevronRight, Home } from "lucide-react";

// Custom mapping for specific routes
const routeNames = {
  "account": "My Account",
  "orders": "My Orders",
  "order-history": "Order History",
  "wishlist": "Wishlist",
  "settings": "Settings",
  "profile": "Profile Settings",
  "address": "Shipping Address",
  "payment": "Payment Methods",
  "change-password": "Change Password",
  "reviews": "My Reviews",
  "returns": "Returns & Refunds"
};

export const AccountBreadcrumb = ({ 
  customTitle, 
  showHomeIcon = true,
  separator = "/"
}) => {
  const pathname = usePathname();

  const breadcrumbItems = useMemo(() => {
    if (!pathname) return [];
    
    // Remove 'account' from path if it's the base
    let paths = pathname.split("/").filter(Boolean);
    
    // If the first segment is 'account' and there are more segments, remove it for display
    if (paths[0] === "account" && paths.length > 1) {
      paths = paths.slice(1);
    }
    
    if (paths.length === 0) {
      return [{ name: "My Account", path: "/my-account/dashboard", isLast: true }];
    }
    
    const items = [];
    let currentPath = "/my-account/dashboard"; // Start from dashboard for account section
    
    paths.forEach((segment, index) => {
      // currentPath += `/${segment}`;
      
      // Get custom name from mapping or format the segment
      let name = routeNames[segment] || segment.replace(/-/g, " ").replace(/_/g, " ");
      name = name.charAt(0).toUpperCase() + name.slice(1);
      
      items.push({
        name,
        path: currentPath,
        isLast: index === paths.length - 1
      });
    });
    
    return items;
  }, [pathname]);

  const pageTitle = useMemo(() => {
    if (customTitle) return customTitle;
    
    if (!pathname) return "My Account";
    
    let paths = pathname.split("/").filter(Boolean);
    if (paths[0] === "account" && paths.length > 1) {
      paths = paths.slice(1);
    }
    
    if (paths.length === 0) return "My Account";
    
    const lastSegment = paths[paths.length - 1];
    const title = routeNames[lastSegment] || lastSegment.replace(/-/g, " ").replace(/_/g, " ");
    return title.charAt(0).toUpperCase() + title.slice(1);
  }, [pathname, customTitle]);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white border-b border-gray-100 py-8">
      <div className="container w-full mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="mb-3" aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap justify-center gap-1 text-sm">
            <li className="flex items-center">
              <Link 
                href="/" 
                className="text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1"
              >
                {showHomeIcon && <Home className="w-4 h-4" />}
                {!showHomeIcon && "Home"}
              </Link>
            </li>
            
            {breadcrumbItems.map((item, index) => (
              <li key={item.path} className="flex items-center">
                <span className="mx-2 text-gray-400">
                  {separator === "/" ? "/" : <ChevronRight className="w-3 h-3" />}
                </span>
                {item.isLast ? (
                  <span className="text-gray-700 font-medium">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    href={item.path} 
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        
        {/* Page Title */}
        <h1 className="text-md md:text-xl lg:text-2xl font-semibold text-gray-800 text-center capitalize">
          {pageTitle}
        </h1>
        
        {/* Optional: Description or subtitle */}
        {pageTitle === "My Orders" && (
          <p className="text-center text-gray-500 text-sm mt-2">
            Track and manage all your orders in one place
          </p>
        )}
      </div>
    </div>
  );
};