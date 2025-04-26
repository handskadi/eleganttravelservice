"use client";

import { FaHeart, FaCartPlus } from "react-icons/fa";

export default function WishlistPanel() {
    return (
        <div className="fixed top-20 right-4 w-80 bg-white rounded-lg shadow-2xl z-50 p-5 space-y-4 animate-slide-down">
            <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaHeart className="text-red-500" /> Your Wishlist
            </h4>

            {/* Items */}
            <div className="space-y-3 max-h-60 overflow-y-auto">
                {/* Example Item */}
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-md" />
                    <div className="flex-1">
                        <h5 className="text-sm font-semibold text-gray-700">Sahara Adventure</h5>
                        <p className="text-xs text-gray-400">$299</p>
                    </div>
                    <button className="text-xs bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded flex items-center gap-1">
                        <FaCartPlus className="text-xs" /> Add
                    </button>
                </div>
                {/* More items... */}
            </div>

            {/* View All Button */}
            <button className="w-full py-2 text-sm bg-[#6b4eff] hover:bg-[#5533ea] text-white rounded-md font-semibold">
                View Full Wishlist
            </button>
        </div>
    );
}
