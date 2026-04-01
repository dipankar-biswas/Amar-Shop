'use client'
import { taka } from "@/utils/currency";
import Link from "next/link";
import { useApp } from "../context/AppContext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useApp();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 5;
  return (
    <div className="bg-[#f3f3f3] py-8">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-6 px-4 lg:grid-cols-[1fr_380px]">
        <section className="rounded border border-gray-300 bg-white p-4">
          <h1 className="text-4xl text-[44px] font-semibold text-gray-800">Cart Summary</h1>
          <div className="mt-4 rounded border border-green-300 bg-green-50 p-3 text-sm text-green-700">
            Use GET20OFF coupon code to get 20% off on minimum order above $100
          </div>
          <div className="mt-4 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="grid grid-cols-[60px_1fr_auto_auto_auto] items-center gap-3 border-b border-gray-200 pb-4">
                <img src={item.image} alt={item.name} className="h-12 w-12 object-contain" />
                <p className="text-sm text-gray-700">{item.name}</p>
                <p className="font-semibold text-[#ef553f]">{taka(item.price)}</p>
                <div className="flex items-center gap-2 rounded border border-gray-300 px-2 py-1">
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">x</button>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded border border-gray-300 bg-white p-4">
          <h2 className="text-3xl text-[36px] font-semibold">Cart totals</h2>
          <div className="mt-4 space-y-4 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{taka(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{taka(shipping)}</span></div>
            <div className="flex justify-between border-t border-gray-200 pt-3 text-lg font-semibold"><span>Total</span><span className="text-[#ef553f]">{taka(subtotal + shipping)}</span></div>
          </div>
          <Link href="/checkout" className="mt-6 block rounded bg-[#ef553f] py-3 text-center font-semibold text-white">
            Proceed To Checkout
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CartPage;