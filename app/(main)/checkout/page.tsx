'use client'
import { taka } from "@/utils/currency";
import { useApp } from "../context/AppContext";

const CheckoutPage = () => {
  const { cart } = useApp();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto grid w-full grid-cols-1 gap-6 px-4 lg:grid-cols-[1fr_430px]">
        <section className="rounded border border-gray-200 bg-white p-4">
          <h1 className="text-4xl text-[22px] font-semibold">Checkout</h1>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input placeholder="Full name" className="rounded border border-gray-300 px-3 py-2" />
            <input placeholder="Phone" className="rounded border border-gray-300 px-3 py-2 " />
            <input placeholder="Address" className="rounded border border-gray-300 px-3 py-2 md:col-span-2" />
          </div>
        </section>
        <section className="rounded border border-gray-200 bg-white p-4">
          <h2 className="text-3xl text-[22px] font-semibold">Your order</h2>
          <div className="mt-4 space-y-3 border-b border-gray-200 pb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-sm">
                <span>{item.name} x {item.quantity}</span>
                <span className="text-[#ef553f]">{taka(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-md font-semibold flex items-center justify-between">Total: <span className="text-[#ef553f] text-[16px]">{taka(subtotal)}</span></p>
          <button className="mt-5 w-full rounded bg-[#ef553f] py-2 font-semibold text-white">Place Order</button>
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;