"use client";

import { FaShoppingCart } from "react-icons/fa";

export default function CartPanel() {
    return (
        <div className="fixed top-20 right-4 w-80 bg-white rounded-lg shadow-2xl z-50 p-5 space-y-4 animate-slide-down">
            <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaShoppingCart className="text-emerald-500" /> Your Cart
            </h4>

            {/* Items */}
            <div className="space-y-3 max-h-60 overflow-y-auto">
                {/* Example Item */}
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-md" />
                    <div className="flex-1">
                        <h5 className="text-sm font-semibold text-gray-700">Chefchaouen Charm</h5>
                        <p className="text-xs text-gray-400">$180</p>
                    </div>
                </div>
                {/* More items... */}
            </div>

            {/* Total and Checkout */}
            <div className="flex flex-col gap-2 pt-2 border-t">
                <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>Total:</span>
                    <span>$479</span>
                </div>
                <button className="w-full py-2 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-semibold">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
