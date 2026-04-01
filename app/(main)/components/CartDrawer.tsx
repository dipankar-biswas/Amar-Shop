'use client'
import { Truck, X } from "lucide-react";
import Link from "next/link";
import { taka } from "@/utils/currency";
import { useApp } from "../context/AppContext";

export const CartDrawer = ({ open, onClose }) => {
  const { cart, removeFromCart } = useApp();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className={`fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div onClick={onClose} className={`absolute inset-0 bg-black/40 transition ${open ? "opacity-100" : "opacity-0"}`} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-[420px] bg-white shadow-2xl transition ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h2 className="text-3xl text-[34px] font-semibold">Shopping Cart</h2>
          <button onClick={onClose}><X /></button>
        </div>
        <div className="p-4">
          <div className="rounded border border-green-300 p-3 text-center text-green-700">
            <Truck className="mx-auto mb-2 h-5 w-5" />
            Congratulations! Your order is eligible for FREE Delivery.
          </div>
          <div className="mt-4 space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded border object-cover" />
                <div className="flex-1">
                  <p className="text-lg text-[20px] text-gray-700">{item.name}</p>
                  <p className="text-[#ef553f]">{item.quantity} x {taka(item.price)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">x</button>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-2xl text-[30px] font-semibold">
            <span>Subtotal:</span>
            <span className="text-[#ef553f]">{taka(subtotal)}</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link href="/cart" onClick={onClose} className="rounded bg-slate-800 py-3 text-center text-white">View Cart</Link>
            <Link href="/checkout" onClick={onClose} className="rounded bg-[#ef553f] py-3 text-center text-white">Checkout</Link>
          </div>
        </div>
      </aside>
    </div>
  );
};
