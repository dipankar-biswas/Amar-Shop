import { useState } from 'react';
import { Star } from 'lucide-react';

const tabs = ['Description', 'Additional information', 'Reviews(2)', 'Size Chart', 'Shipping & Return'];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className={i < rating ? 'text-orange-400 fill-orange-400' : 'text-gray-300 fill-gray-200'} />
      ))}
    </div>
  );
}

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <div className="mt-8 bg-white border border-gray-200 rounded">
      {/* Tab nav */}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab
                ? 'border-orange-500 text-orange-600 bg-orange-50'
                : 'border-transparent text-gray-600 hover:text-orange-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-5">
        {activeTab === 'Description' && (
          <div className="text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">
              Furniture refers to objects intended to support various human activities such as seating (e.g., stools, chairs, and sofas), eating
              (tables), storing items, working, and sleeping (e.g., beds and hammocks). Furniture is also used to hold objects at a convenient
              height for work (as horizontal surfaces above the ground, such as tables and desks), or to store things (e.g., cupboards, shelves,
              and drawers). Furniture can be a product of design and can be considered a form of decorative art. In addition to furniture's
              functional role, it can serve a symbolic or religious purpose. It can be made from a vast multitude of materials, including metal,
              plastic, and wood. Furniture can be made using a variety of woodworking joints which often reflects the local culture.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">Size & fit:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Oversized, Dropped shoulder, Below seat length.</li>
                <li>Size down if you prefer a smaller fit. The model is 176 cm and is wearing a size S/36. View size guide</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'Additional information' && (
          <div className="text-sm text-gray-600">
            <table className="w-full border-collapse">
              <tbody>
                {[
                  ['Color', 'Dark Taupe, Navy, Black'],
                  ['Size', 'L, M, S, XL, XS'],
                  ['Material', '100% Wool'],
                  ['Style', 'Oversized, Wrap'],
                  ['Brand', 'Calvin Klein'],
                  ['Care', 'Dry Clean Only'],
                ].map(([key, val]) => (
                  <tr key={key} className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium text-gray-700 w-40">{key}</td>
                    <td className="py-2 text-gray-600">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Reviews(2)' && (
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 text-base">Customer Reviews (2)</h3>
            {[
              { name: 'Sarah M.', rating: 5, date: 'March 12, 2024', comment: 'Absolutely love this coat! The quality is exceptional and the fit is perfect. Worth every penny.' },
              { name: 'James K.', rating: 4, date: 'February 28, 2024', comment: 'Great coat, very warm and stylish. The color is exactly as shown. Only minor issue is the belt could be a bit longer.' },
            ].map((review) => (
              <div key={review.name} className="border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-gray-600 pl-11">{review.comment}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Size Chart' && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {['Size', 'Chest (in)', 'Waist (in)', 'Hip (in)', 'Length (in)'].map((h) => (
                    <th key={h} className="border border-gray-200 px-4 py-2 text-gray-700 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['XS', '31-32', '24-25', '34-35', '44'],
                  ['S', '33-34', '26-27', '36-37', '45'],
                  ['M', '35-37', '28-30', '38-40', '46'],
                  ['L', '38-40', '31-33', '41-43', '47'],
                  ['XL', '41-43', '34-36', '44-46', '48'],
                ].map(([size, ...vals]) => (
                  <tr key={size} className="hover:bg-orange-50">
                    <td className="border border-gray-200 px-4 py-2 font-semibold text-orange-500">{size}</td>
                    {vals.map((v, i) => (
                      <td key={i} className="border border-gray-200 px-4 py-2 text-gray-600 text-center">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Shipping & Return' && (
          <div className="text-sm text-gray-600 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Shipping Policy</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Free standard shipping on orders over $200</li>
                <li>Standard shipping: 4-7 business days</li>
                <li>Express shipping: 1-2 business days (additional fee)</li>
                <li>International shipping available to select countries</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Return Policy</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>30-day hassle-free returns</li>
                <li>Items must be in original condition with tags</li>
                <li>Free returns on all orders</li>
                <li>Refund processed within 5-7 business days</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
