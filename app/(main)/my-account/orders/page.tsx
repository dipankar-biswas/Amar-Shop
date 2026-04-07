"use client";

import Link from "next/link";
import { useState } from "react";

// interface Order {
//   id: string;
//   date: string;
//   status: "Processing" | "Completed" | "Cancelled" | "On Hold" | "Pending";
//   total: string;
//   items: number;
// }

const orders = [
  {
    id: "4200",
    date: "March 30, 2026",
    status: "Processing",
    total: "$25.00",
    items: 1,
    product: "13-inch MacBook Charger - Magsafe 2 connector",
    image: "/images/product1.jpg",
  },
  {
    id: "4185",
    date: "March 15, 2026",
    status: "Completed",
    total: "$89.00",
    items: 3,
    product: "Apple AirPods Pro 2nd Generation",
    image: null,
  },
  {
    id: "4102",
    date: "February 28, 2026",
    status: "Completed",
    total: "$45.00",
    items: 2,
    product: "Nike Air Max 270 Running Shoes",
    image: null,
  },
  {
    id: "3988",
    date: "January 10, 2026",
    status: "Shipped",
    total: "$120.00",
    items: 4,
    product: "Samsung 65\" 4K Smart TV",
    image: null,
  },
  {
    id: "3870",
    date: "December 20, 2025",
    status: "Cancelled",
    total: "$35.00",
    items: 1,
    product: "Wireless Bluetooth Speaker",
    image: null,
  },
];

const statusColors: Record<string, string> = {
  Processing: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Completed: "bg-green-100 text-green-700 border-green-200",
  Shipped: "bg-blue-100 text-blue-700 border-blue-200",
  Cancelled: "bg-red-100 text-red-700 border-red-200",
};

const OrdersPage = ({ onNavigate }) => {
  const [filter, setFilter] = useState("All");

  const filteredOrders = filter === "All" ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="flex-1 order-2 lg:order-1">
      {/* Filter Tabs */}
      <div className="bg-white rounded-lg border border-gray-200 p-1 flex gap-1 mb-6 overflow-x-auto">
        {["All", "Processing", "Shipped", "Completed", "Cancelled"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-all ${
                filter === tab
                  ? "bg-red-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
              {tab === "All" && (
                <span className="ml-1.5 px-1.5 py-0.5 text-xs rounded-full bg-white/20">
                  {orders.length}
                </span>
              )}
            </button>
          ),
        )}
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Order
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Date
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Total
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                        {order.image ? (
                          <img
                            src={order.image}
                            alt="product"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-gray-300"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={1.5}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {order.id}
                        </p>
                        <p className="text-xs text-gray-400 truncate max-w-[180px]">
                          {order.product}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${statusColors[order.status]}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          order.status === "Processing"
                            ? "bg-yellow-500"
                            : order.status === "Completed"
                              ? "bg-green-500"
                              : order.status === "Shipped"
                                ? "bg-blue-500"
                                : "bg-red-500"
                        }`}
                      ></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-800">{order.total}</p>
                    <p className="text-xs text-gray-400">
                      for {order.items} item{order.items > 1 ? "s" : ""}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/my-account/orders/${order.id}`}
                      className="px-4 py-1.5 border-2 border-red-500 text-red-500 text-xs font-semibold rounded hover:bg-red-500 hover:text-white transition-all duration-200 active:scale-95"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="w-12 h-12 text-gray-300 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              <p className="text-gray-500 text-sm">
                No orders found for this filter.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing <strong>{filteredOrders.length}</strong> of{" "}
            <strong>{orders.length}</strong> orders
          </p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 text-sm border border-gray-200 rounded hover:bg-gray-100 transition-colors text-gray-600">
              ← Prev
            </button>
            <button className="px-3 py-1.5 text-sm bg-red-500 text-white rounded font-medium">
              1
            </button>
            <button className="px-3 py-1.5 text-sm border border-gray-200 rounded hover:bg-gray-100 transition-colors text-gray-600">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
