'use client'
import { useApp } from "../context/AppContext";

const WishlistPage = () => {
  const { wishlist, removeWishlist } = useApp();
  return (
    <div className="bg-[#f3f3f3] py-8">
      <div className="mx-auto w-full max-w-[1240px] px-4">
        <h1 className="text-4xl text-[44px] font-semibold">Wishlist</h1>
        <div className="mt-4 space-y-3">
          {wishlist.map((p) => (
            <div key={p.id} className="flex items-center justify-between rounded border border-gray-300 bg-white p-3">
              <div className="flex items-center gap-3">
                <img src={p.image} alt={p.name} className="h-14 w-14 object-cover" />
                <p>{p.name}</p>
              </div>
              <button onClick={() => removeWishlist(p.id)} className="text-red-500">Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default WishlistPage;