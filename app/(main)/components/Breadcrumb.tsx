"use client";

import Link from "next/link";

export const Breadcrumb = ({ page, classname }) => {

  return (
    <div className={`py-2 ${classname}`}>
      <div className="container w-full mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-red-500 cursor-pointer">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 text-uppercase">
            {page}
          </span>
        </nav>
      </div>
    </div>
  );
};
