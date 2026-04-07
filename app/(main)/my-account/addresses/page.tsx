'use client'

const AddressesPage = () => {
  return (
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-6">The following addresses will be used on the checkout page by default.</p>
      <div className="grid grid-cols-2 gap-8">
        {/* Billing */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-700">Billing address</h3>
            <button className="text-xs text-red-500 hover:underline">Edit</button>
          </div>
          <div className="border border-gray-200 p-4 rounded text-sm text-gray-600 space-y-1">
            <p className="font-medium text-gray-800">Dipankar Biswas</p>
            <p>99 New Theme St. XY</p>
            <p>USA 12345</p>
            <p>+00 123-456-789</p>
            <p>dip@gmail.com</p>
          </div>
        </div>
        {/* Shipping */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-700">Shipping address</h3>
            <button className="text-xs text-red-500 hover:underline">Edit</button>
          </div>
          <div className="border border-dashed border-gray-200 p-4 rounded text-sm text-gray-400 flex items-center justify-center h-28">
            No shipping address set.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressesPage;