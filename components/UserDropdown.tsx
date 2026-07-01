"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaTachometerAlt, FaCalendarCheck, FaHeart, FaUser, FaSignOutAlt, FaUserShield,
} from "react-icons/fa";
import { useAuth } from "@/contexts/AuthContext";

interface Props {
  open: boolean;
  onClose?: () => void;
}

export default function UserDropdown({ open, onClose }: Props) {
  const { user, logout } = useAuth();
  const router = useRouter();
  if (!open || !user) return null;

  const isAdminOrAgent = user.role === "admin" || user.role === "agent";

  const menuItems = [
    { label: "My Dashboard", icon: FaTachometerAlt, href: "/dashboard" },
    { label: "My Bookings", icon: FaCalendarCheck, href: "/dashboard?tab=bookings" },
    { label: "Saved Trips", icon: FaHeart, href: "/dashboard?tab=wishlist" },
    { label: "Account Settings", icon: FaUser, href: "/dashboard?tab=profile" },
    ...(isAdminOrAgent
      ? [{ label: "Admin Panel", icon: FaUserShield, href: "/admin" }]
      : []),
  ];

  return (
    <div
      className="absolute right-0 top-14 z-50 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-slide-down"
      role="menu"
    >
      {/* Profile */}
      <div className="px-5 py-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            {user.name.charAt(0)}
          </div>
          <div>
            <p className="font-bold leading-tight">{user.name}</p>
            <p className="text-slate-300 text-xs">{user.email}</p>
            <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide ${
              user.role === "admin" ? "bg-red-500/20 text-red-300" :
              user.role === "agent" ? "bg-blue-500/20 text-blue-300" :
              "bg-amber-500/20 text-amber-300"
            }`}>
              {user.role}
            </span>
          </div>
        </div>
      </div>

      <div className="p-2">
        {menuItems.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-amber-50 hover:text-amber-700 transition font-medium"
          >
            <Icon className="w-4 h-4 opacity-70" />
            {label}
          </Link>
        ))}

        <div className="border-t border-slate-100 mt-1 pt-1">
          <button
            onClick={() => { logout(); onClose?.(); router.push("/login"); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 transition font-medium"
          >
            <FaSignOutAlt className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
