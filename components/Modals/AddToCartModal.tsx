"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaTimes, FaUser, FaUserFriends, FaCalendarAlt, FaLock,
  FaStar, FaClock, FaMapMarkerAlt, FaCheckCircle,
} from "react-icons/fa";
import { HiShoppingCart, HiArrowRight } from "react-icons/hi";
import { useApp } from "@/contexts/AppContext";
import type { Tour } from "@/data/tours";

interface Props {
  isOpen: boolean;
  tour: Tour | null;
  onClose: () => void;
  onAdded?: () => void;
}

export default function AddToCartModal({ isOpen, tour, onClose, onAdded }: Props) {
  const [startDate, setStartDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [added, setAdded] = useState(false);
  const { addToCart, isInCart } = useApp();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) { setAdded(false); setAdults(2); setChildren(0); setStartDate(""); }
  }, [isOpen, tour]);

  if (!isOpen || !tour) return null;

  const adultTotal = adults * tour.price;
  const childTotal = children * tour.price * 0.5;
  const subtotal = adultTotal + childTotal;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleAddToCart = () => {
    addToCart({ tour, adults, children, startDate, total: subtotal });
    setAdded(true);
    setTimeout(() => { if (onAdded) onAdded(); else onClose(); }, 1200);
  };

  const alreadyInCart = isInCart(tour.id);

  const difficultyColors: Record<string, string> = {
    Easy: "text-emerald-600 bg-emerald-50",
    Moderate: "text-amber-600 bg-amber-50",
    Difficult: "text-red-600 bg-red-50",
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex justify-center items-center px-4 animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Tour Preview Header */}
        <div className="relative h-40 sm:h-48">
          <Image src={tour.image} alt={tour.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition"
          >
            <FaTimes className="w-3.5 h-3.5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-white font-bold text-lg leading-tight">{tour.title}</h2>
            <div className="flex items-center gap-3 mt-1">
              <span className="flex items-center gap-1 text-white/90 text-xs">
                <FaMapMarkerAlt className="w-3 h-3 text-amber-400" />
                {tour.location}
              </span>
              <span className="flex items-center gap-1 text-white/90 text-xs">
                <FaStar className="w-3 h-3 text-amber-400" />
                {tour.rating} ({tour.reviews})
              </span>
              <span className="flex items-center gap-1 text-white/90 text-xs">
                <FaClock className="w-3 h-3 text-amber-400" />
                {tour.duration}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[tour.difficulty]}`}>
                {tour.difficulty}
              </span>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-4">
          {/* What's included preview */}
          <div className="flex flex-wrap gap-2">
            {tour.included.slice(0, 3).map(item => (
              <span key={item} className="flex items-center gap-1 text-xs text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                <FaCheckCircle className="w-2.5 h-2.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>

          {/* Start Date */}
          <div>
            <label className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 mb-1.5">
              <FaCalendarAlt className="w-3.5 h-3.5 text-amber-500" />
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={e => setStartDate(e.target.value)}
              className="w-full border border-slate-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition"
            />
          </div>

          {/* Travelers */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 mb-1.5">
                <FaUser className="w-3.5 h-3.5 text-amber-500" />
                Adults
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="px-3 py-2.5 text-slate-500 hover:bg-slate-50 font-bold text-lg transition"
                >−</button>
                <span className="flex-1 text-center text-sm font-semibold text-slate-700">{adults}</span>
                <button
                  onClick={() => setAdults(Math.min(tour.maxGroupSize, adults + 1))}
                  className="px-3 py-2.5 text-slate-500 hover:bg-slate-50 font-bold text-lg transition"
                >+</button>
              </div>
            </div>
            <div className="flex-1">
              <label className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 mb-1.5">
                <FaUserFriends className="w-3.5 h-3.5 text-amber-500" />
                Children <span className="text-xs font-normal text-slate-400">(50% off)</span>
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="px-3 py-2.5 text-slate-500 hover:bg-slate-50 font-bold text-lg transition"
                >−</button>
                <span className="flex-1 text-center text-sm font-semibold text-slate-700">{children}</span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="px-3 py-2.5 text-slate-500 hover:bg-slate-50 font-bold text-lg transition"
                >+</button>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-4 space-y-2 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Adults: {adults} × ${tour.price}</span>
              <span>${adultTotal.toFixed(2)}</span>
            </div>
            {children > 0 && (
              <div className="flex justify-between text-slate-600">
                <span>Children: {children} × ${(tour.price * 0.5).toFixed(0)}</span>
                <span>${childTotal.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-500 text-xs border-t border-amber-100 pt-2">
              <span>Taxes & fees (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-slate-800 pt-1 border-t border-amber-100">
              <span>Total</span>
              <span className="text-amber-600 text-base">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {added ? (
              <div className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-50 text-emerald-600 font-semibold rounded-xl border border-emerald-200">
                <FaCheckCircle className="w-4 h-4" />
                Added to Cart!
              </div>
            ) : alreadyInCart ? (
              <div className="flex-1 py-3 text-center text-amber-600 font-semibold bg-amber-50 rounded-xl border border-amber-200 text-sm">
                Already in cart
              </div>
            ) : (
              <>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition text-sm"
                >
                  <HiShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition shadow-lg shadow-amber-500/25 text-sm"
                >
                  Book Now
                  <HiArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
            <FaLock className="w-2.5 h-2.5 text-emerald-500" />
            Secure booking · Free cancellation 48h before start
          </p>
        </div>
      </div>
    </div>
  );
}
