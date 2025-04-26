"use client";

import { FaBell } from "react-icons/fa";

export default function NotificationsPanel() {
    return (
        <div className="fixed top-20 right-4 w-80 bg-white rounded-lg shadow-2xl z-50 p-5 space-y-4 animate-slide-down">
            <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaBell className="text-indigo-500" /> Notifications
            </h4>

            {/* Notifications List */}
            <div className="space-y-3 max-h-60 overflow-y-auto">
                {/* Example Notification */}
                <div className="text-sm text-gray-600">
                    🎉 Your Sahara booking has been confirmed!
                </div>
                <div className="text-sm text-gray-600">
                    💬 New message from Elegant Travel Support.
                </div>
                <div className="text-sm text-gray-600">
                    ✈️ 20% discount on Atlas tours this weekend.
                </div>
                {/* More notifications... */}
            </div>

            {/* View All Button */}
            <button className="w-full py-2 text-sm bg-[#6b4eff] hover:bg-[#5533ea] text-white rounded-md font-semibold">
                View All Notifications
            </button>
        </div>
    );
}
