"use client";

import Link from "next/link";
import { useState } from "react";

const orderData: Record<
  string,
  {
    id: string;
    date: string;
    status: string;
    product: string;
    qty: number;
    price: number;
    shipping: number;
    paymentMethod: string;
    image: string | null;
  }
> = {
  "#4200": {
    id: "#4200",
    date: "March 30, 2026",
    status: "Processing",
    product: "13-inch MacBook Charger - Magsafe 2 connector",
    qty: 1,
    price: 20,
    shipping: 5,
    paymentMethod: "Cash on delivery",
    image: "/images/product1.jpg",
  },
  "#4185": {
    id: "#4185",
    date: "March 15, 2026",
    status: "Completed",
    product: "Apple AirPods Pro 2nd Generation",
    qty: 3,
    price: 89,
    shipping: 0,
    paymentMethod: "Credit Card",
    image: null,
  },
  "#4102": {
    id: "#4102",
    date: "February 28, 2026",
    status: "Completed",
    product: "Nike Air Max 270 Running Shoes",
    qty: 2,
    price: 45,
    shipping: 0,
    paymentMethod: "PayPal",
    image: null,
  },
};

const OrderDetailPage = ({ orderId }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const order = orderData[orderId] || orderData["#4200"];

  const subtotal = order.price;
  const total = subtotal + order.shipping;

  const statusColors: Record<string, string> = {
    Processing: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Completed: "bg-green-100 text-green-700 border-green-200",
    Shipped: "bg-blue-100 text-blue-700 border-blue-200",
    Cancelled: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <div className="flex-1 order-2 lg:order-1 space-y-6">
      {/* Order Status Banner */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <p className="text-gray-700 text-sm">
          Order <strong className="text-gray-900">{order.id}</strong> was placed
          on <strong className="text-gray-900">{order.date}</strong> and is
          currently <strong className="text-gray-900">{order.status}</strong>.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[order.status]}`}
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
          <Link
            href="/my-account/orders"
            className="text-sm text-red-500 hover:underline"
          >
            ← Back to Orders
          </Link>
        </div>
      </div>

      {/* Order Progress */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Order Progress</h3>
        <div className="flex items-center gap-0">
          {["Order Placed", "Processing", "Shipped", "Delivered"].map(
            (step, i) => {
              const steps = [
                "Order Placed",
                "Processing",
                "Shipped",
                "Delivered",
              ];
              const currentIdx =
                order.status === "Processing"
                  ? 1
                  : order.status === "Shipped"
                    ? 2
                    : order.status === "Completed"
                      ? 3
                      : 0;
              const isCompleted = i <= currentIdx;
              const isLast = i === steps.length - 1;

              return (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                        isCompleted
                          ? "bg-red-500 border-red-500 text-white"
                          : "bg-white border-gray-300 text-gray-400"
                      }`}
                    >
                      {isCompleted ? (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span
                      className={`text-xs mt-1 text-center whitespace-nowrap ${isCompleted ? "text-red-500 font-medium" : "text-gray-400"}`}
                    >
                      {step}
                    </span>
                  </div>
                  {!isLast && (
                    <div
                      className={`flex-1 h-0.5 mx-1 mb-4 ${i < currentIdx ? "bg-red-500" : "bg-gray-200"}`}
                    ></div>
                  )}
                </div>
              );
            },
          )}
        </div>
      </div>

      {/* Order Details Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Order details</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="text-left px-6 py-3 font-medium text-gray-600">
                  Product
                </th>
                <th className="text-right px-6 py-3 font-medium text-gray-600">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {/* Product Image - Clickable */}
                    <div
                      className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 cursor-pointer hover:ring-2 hover:ring-red-400 transition-all relative group"
                      onClick={() => order.image && setShowImageModal(true)}
                    >
                      {order.image ? (
                        <>
                          <img
                            src={order.image}
                            alt="product"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-gray-300"
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
                      <button className="text-red-500 hover:underline text-left font-medium">
                        {order.product}
                      </button>
                      <span className="text-gray-500 ml-1">× {order.qty}</span>
                      {order.image && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          Click image to preview
                        </p>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right font-semibold text-red-500">
                  ${order.price.toFixed(2)}
                </td>
              </tr>
            </tbody>
            <tfoot className="border-t-2 border-gray-200">
              <tr className="border-b border-gray-100">
                <td className="px-6 py-3 font-semibold text-gray-700">
                  Subtotal:
                </td>
                <td className="px-6 py-3 text-right font-bold text-red-500">
                  ${subtotal.toFixed(2)}
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-3 font-semibold text-gray-700">
                  Shipping:
                </td>
                <td className="px-6 py-3 text-right font-bold text-red-500">
                  {order.shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    <>
                      <span className="text-red-500">
                        ${order.shipping.toFixed(2)}
                      </span>
                      <span className="text-gray-400 text-xs ml-1">
                        via Flat rate
                      </span>
                    </>
                  )}
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-3 font-semibold text-gray-700">
                  Payment method:
                </td>
                <td className="px-6 py-3 text-right font-bold text-gray-800">
                  {order.paymentMethod}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-gray-900 text-base">
                  Total:
                </td>
                <td className="px-6 py-4 text-right font-bold text-red-500 text-lg">
                  ${total.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Addresses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Address */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4 text-base">
            Billing address
          </h3>
          <div className="border border-gray-200 rounded p-4 space-y-1 text-sm text-gray-600">
            <p className="text-red-500 font-medium">Dipankar Biswas</p>
            <p>153 West Fabien Boulevard</p>
            <p>781001</p>
            <p>Assam, India</p>
            <p>+17712547909</p>
            <p className="text-red-500">dip@gmail.com</p>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4 text-base">
            Shipping address
          </h3>
          <div className="border border-gray-200 rounded p-4 space-y-1 text-sm text-gray-600">
            <p className="font-medium text-gray-800">Dipankar Biswas</p>
            <p>153 West Fabien Boulevard</p>
            <p>781001</p>
            <p>Assam, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
