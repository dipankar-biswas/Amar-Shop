'use client'
import { SimplePage } from "../components/SimplePage";

const OrderTrackingPage = () => (
  <SimplePage title="Order Tracking">
    <div className="grid gap-3 md:grid-cols-2">
      <input placeholder="Order ID" className="rounded border border-gray-300 px-3 py-2" />
      <input placeholder="Billing Email" className="rounded border border-gray-300 px-3 py-2" />
    </div>
    <button className="mt-4 rounded bg-[#ef553f] px-6 py-2 text-white">Track Order</button>
    <div className="mt-6 space-y-3 text-sm text-gray-700">
      <p>Order #4200: Processing</p>
      <p>Picked up by courier</p>
      <p>Expected delivery in 2 business days</p>
    </div>
  </SimplePage>
);


export default OrderTrackingPage;