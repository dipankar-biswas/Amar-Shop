"use client";

import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="flex-1">
      {/* Welcome message */}
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Hello <strong className="text-gray-800">dip</strong> (not dip?{" "}
        <a href="#" className="text-red-500 hover:underline">
          Log out
        </a>
        )
      </p>

      <p className="text-sm text-gray-600 mb-8 leading-relaxed">
        From your account dashboard you can view your{" "}
        <Link
          href="/my-account/orders"
          className="text-red-500 hover:underline"
        >
          recent orders
        </Link>
        , manage your{" "}
        <Link
          href="/my-account/addresses"
          className="text-red-500 hover:underline"
        >
          shipping and billing addresses
        </Link>
        , and{" "}
        <Link
          href="/my-account/account-details"
          className="text-red-500 hover:underline"
        >
          edit your password and account details
        </Link>
        .
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          {
            label: "Total Orders",
            value: "5",
            icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
            color: "bg-blue-50 text-blue-600",
          },
          {
            label: "Completed",
            value: "3",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            color: "bg-green-50 text-green-600",
          },
          {
            label: "Processing",
            value: "1",
            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            color: "bg-orange-50 text-orange-600",
          },
        ].map(({ label, value, icon, color }) => (
          <div
            key={label}
            className={`rounded-lg p-5 ${color.split(" ")[0]} border border-gray-100`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={icon}
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Links</h3>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {[
          {
            label: "View Orders",
            page: "orders",
            icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
          },
          {
            label: "Account Details",
            page: "account-details",
            icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
          },
          {
            label: "My Addresses",
            page: "addresses",
            icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
          },
          {
            label: "Wishlist",
            page: "wishlist",
            icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
          },
        ].map(({ label, page, icon }) => (
          <Link
            key={label}
            href={`/my-account/${page}`}
            className="flex items-center gap-3 p-4 border border-gray-200 rounded hover:border-red-300 hover:bg-red-50 transition-all group text-left"
          >
            <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors">
              <svg
                className="w-4 h-4 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={icon}
                />
              </svg>
            </div>
            <span className="text-sm text-gray-700 group-hover:text-red-500 font-medium">
              {label}
            </span>
          </Link>
        ))}
      </div>

      {/* Recent Orders Preview */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
          <Link
            href="/my-account/orders"
            className="text-sm text-red-500 hover:underline font-medium"
          >
            View All →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-gray-500 font-medium">
                  Order
                </th>
                <th className="text-left py-2 text-gray-500 font-medium">
                  Date
                </th>
                <th className="text-left py-2 text-gray-500 font-medium">
                  Status
                </th>
                <th className="text-left py-2 text-gray-500 font-medium">
                  Total
                </th>
                <th className="text-left py-2 text-gray-500 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "4200",
                  date: "March 30, 2026",
                  status: "Processing",
                  total: "$25.00",
                  items: 1,
                },
                {
                  id: "4185",
                  date: "March 15, 2026",
                  status: "Completed",
                  total: "$89.00",
                  items: 3,
                },
                {
                  id: "4102",
                  date: "February 28, 2026",
                  status: "Completed",
                  total: "$45.00",
                  items: 2,
                },
              ].map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 font-medium text-gray-800">{order.id}</td>
                  <td className="py-3 text-gray-600">{order.date}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 text-gray-800">
                    {order.total} for {order.items} item
                    {order.items > 1 ? "s" : ""}
                  </td>
                  <td className="py-3">
                    <Link
                      href={`/my-account/orders/${order.id}`}
                      className="px-3 py-1.5 border border-red-500 text-red-500 text-xs font-medium rounded hover:bg-red-500 hover:text-white transition-colors"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
