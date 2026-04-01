import { CreditCard, Package, RefreshCw, Truck } from "lucide-react";

export const Features = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="font-semibold text-sm">Upto 5% Reward</p>
              <p className="text-xs text-gray-500">On your shipping</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <RefreshCw className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="font-semibold text-sm">Easy to Returns</p>
              <p className="text-xs text-gray-500">Returned</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Truck className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="font-semibold text-sm">Best Delivery</p>
              <p className="text-xs text-gray-500">24*7 available</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="font-semibold text-sm">Free shipping</p>
              <p className="text-xs text-gray-500">For all products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
