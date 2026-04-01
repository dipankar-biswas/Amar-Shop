'use client'
import { ProductCard } from "./ProductCard";

export const ProductsPage = ({ title, data }) => (
  <div className="bg-[#f3f3f3] py-8">
    <div className="mx-auto w-full max-w-[1240px] px-4">
      <h1 className="text-4xl text-[44px] font-semibold">{title}</h1>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {data.map((p) => <ProductCard key={p.id} product={p} compact />)}
      </div>
    </div>
  </div>
);