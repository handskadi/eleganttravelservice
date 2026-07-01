"use client";

import { FaBell, FaCheckDouble } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useApp } from "@/contexts/AppContext";

interface Props {
  onClose: () => void;
}

const typeColors: Record<string, string> = {
  booking: "bg-emerald-50 text-emerald-600",
  offer: "bg-amber-50 text-amber-600",
  message: "bg-blue-50 text-blue-600",
  review: "bg-purple-50 text-purple-600",
};

export default function NotificationsPanel({ onClose }: Props) {
  const { notifications, unreadNotifications, markAllRead, markOneRead } = useApp();

  return (
    <div
      className="fixed top-[68px] right-4 w-96 max-h-[85vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-slide-down border border-slate-100"
      onClick={e => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-50 rounded-full flex items-center justify-center">
            <FaBell className="text-amber-500 w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">Notifications</h4>
            <p className="text-xs text-slate-400">
              {unreadNotifications > 0 ? `${unreadNotifications} unread` : "All caught up"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {unreadNotifications > 0 && (
            <button
              onClick={markAllRead}
              className="flex items-center gap-1 text-xs text-amber-600 hover:text-amber-700 font-medium"
            >
              <FaCheckDouble className="w-3 h-3" />
              Mark all read
            </button>
          )}
          <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-full transition text-slate-400 hover:text-slate-600">
            <HiX className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="flex-1 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="text-center py-10">
            <FaBell className="text-slate-200 w-8 h-8 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">No notifications yet</p>
          </div>
        ) : (
          notifications.map(n => (
            <button
              key={n.id}
              onClick={() => markOneRead(n.id)}
              className={`w-full flex items-start gap-3 px-5 py-3.5 hover:bg-slate-50 transition text-left border-b border-slate-50 ${!n.read ? "bg-amber-50/40" : ""}`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0 ${typeColors[n.type] || "bg-slate-50 text-slate-600"}`}>
                {n.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold text-slate-800 ${!n.read ? "text-slate-900" : ""}`}>{n.title}</p>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{n.message}</p>
                <p className="text-xs text-slate-400 mt-1">{n.time}</p>
              </div>
              {!n.read && (
                <div className="w-2 h-2 bg-amber-500 rounded-full shrink-0 mt-1.5" />
              )}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
