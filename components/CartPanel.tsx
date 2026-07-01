"use client";

import Image from "next/image";
import { FaShoppingCart, FaTrash, FaCalendarAlt, FaUsers, FaArrowRight } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useApp } from "@/contexts/AppContext";
import { useAuth } from "@/contexts/AuthContext";

interface Props {
  onClose: () => void;
}

export default function CartPanel({ onClose }: Props) {
  const { cart, removeFromCart, cartTotal } = useApp();
  const { user, openLogin, addBooking } = useAuth();

  const subtotal = cartTotal;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (!user) {
      openLogin();
      onClose();
      return;
    }
    cart.forEach(item => {
      addBooking({
        tourId: item.tour.id,
        tourTitle: item.tour.title,
        tourImage: item.tour.image,
        startDate: item.startDate,
        adults: item.adults,
        children: item.children,
        total: item.total * 1.1,
        status: "confirmed",
      });
    });
    alert("Booking confirmed! Check your dashboard.");
    onClose();
  };

  return (
    <div
      className="fixed top-[68px] right-4 w-96 max-h-[85vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-slide-down border border-slate-100"
      onClick={e => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
            <FaShoppingCart className="text-emerald-500 w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">Your Cart</h4>
            <p className="text-xs text-slate-400">{cart.length} {cart.length === 1 ? "item" : "items"}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-full transition text-slate-400 hover:text-slate-600">
          <HiX className="w-4 h-4" />
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {cart.length === 0 ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaShoppingCart className="text-slate-300 w-7 h-7" />
            </div>
            <p className="text-slate-500 font-medium text-sm">Your cart is empty</p>
            <p className="text-slate-400 text-xs mt-1">Add tours to get started</p>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.tour.id} className="flex gap-3 p-3 bg-slate-50 rounded-xl group">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <Image src={item.tour.image} alt={item.tour.title} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-semibold text-slate-800 text-xs leading-tight line-clamp-2">{item.tour.title}</h5>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                  {item.startDate && (
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-2.5 h-2.5" />
                      {new Date(item.startDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <FaUsers className="w-2.5 h-2.5" />
                    {item.adults}A{item.children > 0 ? ` + ${item.children}C` : ""}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-amber-600 font-bold text-sm">${item.total.toFixed(0)}</span>
                  <button
                    onClick={() => removeFromCart(item.tour.id)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    <FaTrash className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50 space-y-3">
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between text-slate-500">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Taxes & fees (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-slate-800 pt-1.5 border-t border-slate-200">
              <span>Total</span>
              <span className="text-amber-600 text-base">${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition shadow-lg shadow-amber-500/25 text-sm"
          >
            Confirm Booking
            <FaArrowRight className="w-3 h-3" />
          </button>
          <p className="text-center text-xs text-slate-400">🔒 Secure booking · Free cancellation 48h before</p>
        </div>
      )}
    </div>
  );
}
