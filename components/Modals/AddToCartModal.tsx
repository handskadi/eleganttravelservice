"use client";

import { useEffect, useState } from "react";
import { FaTimes, FaUser, FaUserFriends, FaCalendarAlt, FaLock } from "react-icons/fa";

interface Tour {
    title: string;
    price: number;
}

interface Props {
    isOpen: boolean;
    tour: Tour | null;
    onClose: () => void;
}

export default function AddToCartModal({ isOpen, tour, onClose }: Props) {
    const [startDate, setStartDate] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !tour) return null;

    const total = (adults + children * 0.5) * tour.price;

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center px-4">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
                    <FaTimes />
                </button>

                {/* Title */}
                <h2 className="text-xl font-bold mb-2 text-gray-800">Book: {tour.title}</h2>
                <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                    <FaLock className="text-green-500" />
                    Secure Booking – 100% Trusted & Safe
                </p>

                {/* Booking Inputs */}
                <div className="space-y-4 text-sm">
                    {/* Start Date */}
                    <div>
                        <label className="font-medium text-gray-700 flex items-center gap-2 mb-1">
                            <FaCalendarAlt />
                            Start Date
                        </label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                        />
                    </div>

                    {/* Adults + Children */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                                <FaUser />
                                Adults
                            </label>
                            <div className="flex items-center border rounded overflow-hidden">
                                <button onClick={() => setAdults(Math.max(1, adults - 1))} className="px-3 py-1 text-lg">−</button>
                                <input
                                    type="number"
                                    value={adults}
                                    onChange={(e) => setAdults(Math.max(1, Number(e.target.value)))}
                                    className="w-full text-center outline-none"
                                />
                                <button onClick={() => setAdults(adults + 1)} className="px-3 py-1 text-lg">+</button>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                                <FaUserFriends />
                                Children
                            </label>
                            <div className="flex items-center border rounded overflow-hidden">
                                <button onClick={() => setChildren(Math.max(0, children - 1))} className="px-3 py-1 text-lg">−</button>
                                <input
                                    type="number"
                                    value={children}
                                    onChange={(e) => setChildren(Math.max(0, Number(e.target.value)))}
                                    className="w-full text-center outline-none"
                                />
                                <button onClick={() => setChildren(children + 1)} className="px-3 py-1 text-lg">+</button>
                            </div>
                        </div>
                    </div>

                    {/* Price Summary */}
                    <div className="text-right font-semibold text-gray-800 mt-4">
                        Total Price: <span className="text-yellow-600">${total.toFixed(2)}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-between gap-3">
                        <button className="w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm py-2 rounded font-medium border border-gray-300 shadow-sm">
                            Add to Cart
                        </button>
                        <button className="w-1/2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-2 rounded font-medium shadow">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
