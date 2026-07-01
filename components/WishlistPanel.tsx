"use client";

import { useState } from "react";
import Image from "next/image";
import { FaHeart, FaTrash, FaCartPlus, FaMapMarkerAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useApp } from "@/contexts/AppContext";
import AddToCartModal from "./Modals/AddToCartModal";
import type { Tour } from "@/data/tours";

interface Props {
  onClose: () => void;
}

export default function WishlistPanel({ onClose }: Props) {
  const { wishlist, removeFromWishlist } = useApp();
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  return (
    <>
      <div
        className="fixed top-[68px] right-4 w-96 max-h-[85vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-slide-down border border-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
              <FaHeart className="text-red-500 w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Wishlist</h4>
              <p className="text-xs text-slate-400">{wishlist.length} saved {wishlist.length === 1 ? "tour" : "tours"}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-full transition text-slate-400 hover:text-slate-600">
            <HiX className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {wishlist.length === 0 ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaHeart className="text-slate-300 w-7 h-7" />
              </div>
              <p className="text-slate-500 font-medium text-sm">Your wishlist is empty</p>
              <p className="text-slate-400 text-xs mt-1">Save tours you love to book later</p>
            </div>
          ) : (
            wishlist.map(tour => (
              <div key={tour.id} className="flex gap-3 p-3 bg-slate-50 rounded-xl group">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                  <Image src={tour.image} alt={tour.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-slate-800 text-xs leading-tight line-clamp-2">{tour.title}</h5>
                  <p className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                    <FaMapMarkerAlt className="w-2.5 h-2.5 text-amber-500 shrink-0" />
                    {tour.location}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-amber-600 font-bold text-sm">${tour.price}</span>
                    <span className="text-slate-400 text-xs">/ person</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 shrink-0">
                  <button
                    onClick={() => setSelectedTour(tour)}
                    className="p-1.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg transition"
                    title="Book this tour"
                  >
                    <FaCartPlus className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => removeFromWishlist(tour.id)}
                    className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg transition"
                    title="Remove from wishlist"
                  >
                    <FaTrash className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50">
            <p className="text-center text-xs text-slate-400">
              {wishlist.length} tour{wishlist.length > 1 ? "s" : ""} saved — tap the cart icon to book
            </p>
          </div>
        )}
      </div>

      {selectedTour && (
        <AddToCartModal
          isOpen={!!selectedTour}
          tour={selectedTour}
          onClose={() => setSelectedTour(null)}
          onAdded={() => {
            removeFromWishlist(selectedTour.id);
            setSelectedTour(null);
            onClose();
          }}
        />
      )}
    </>
  );
}
