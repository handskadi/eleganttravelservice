"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaTachometerAlt, FaCalendarCheck, FaHeart, FaUser,
  FaSignOutAlt, FaMapMarkerAlt, FaStar, FaCheck,
  FaClock, FaBan, FaPlus, FaPhone, FaEnvelope,
  FaInbox, FaBell, FaTag, FaHeadset, FaEnvelopeOpen,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { useAuth } from "@/contexts/AuthContext";
import { useApp } from "@/contexts/AppContext";
import AddToCartModal from "@/components/Modals/AddToCartModal";
import type { Tour } from "@/data/tours";
import type { Message } from "@/contexts/AuthContext";

const tabs = [
  { key: "overview", label: "Overview", icon: FaTachometerAlt },
  { key: "bookings", label: "My Bookings", icon: FaCalendarCheck },
  { key: "wishlist", label: "Wishlist", icon: FaHeart },
  { key: "inbox", label: "Inbox", icon: FaInbox },
  { key: "profile", label: "Profile", icon: FaUser },
];

const STATUS_STYLES = {
  confirmed: { label: "Confirmed", icon: FaCheck, classes: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  pending: { label: "Pending", icon: FaClock, classes: "bg-amber-50 text-amber-700 border-amber-200" },
  cancelled: { label: "Cancelled", icon: FaBan, classes: "bg-red-50 text-red-700 border-red-200" },
};

function getMessageTypeIcon(type: Message["type"]) {
  switch (type) {
    case "booking_confirmation":
      return { icon: FaCheck, classes: "text-emerald-500 bg-emerald-50" };
    case "offer":
      return { icon: FaTag, classes: "text-amber-500 bg-amber-50" };
    case "reminder":
      return { icon: FaBell, classes: "text-blue-500 bg-blue-50" };
    case "support":
      return { icon: FaHeadset, classes: "text-purple-500 bg-purple-50" };
    default:
      return { icon: FaEnvelope, classes: "text-slate-500 bg-slate-50" };
  }
}

export default function DashboardPage() {
  const { user, bookings, logout, getUserMessages, markMessageRead, getUnreadMessageCount } = useAuth();
  const { wishlist, removeFromWishlist } = useApp();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "overview");
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    if (!user) { router.replace("/login"); }
  }, [user, router]);

  if (!user) return null;

  const userBookings = bookings.filter(b => b.userId === user.id);
  const totalSpent = userBookings.reduce((s, b) => s + b.total, 0);
  const messages = getUserMessages();
  const unreadCount = getUnreadMessageCount();
  const latestUnread = messages.filter(m => !m.read).slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
              {/* Profile Header */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center text-white font-extrabold text-2xl mx-auto mb-3 shadow-xl">
                  {user.name.charAt(0)}
                </div>
                <h2 className="font-bold text-base">{user.name}</h2>
                <p className="text-slate-300 text-xs mt-0.5">{user.email}</p>
                <span className="inline-block mt-2 bg-amber-500/20 text-amber-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {user.role}
                </span>
              </div>

              {/* Nav */}
              <nav className="p-3">
                {tabs.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`admin-nav-item w-full ${activeTab === key ? "active" : ""}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="flex-1 text-left">{label}</span>
                    {key === "inbox" && unreadCount > 0 && (
                      <span className="ml-auto inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-amber-500 text-white text-[10px] font-bold rounded-full leading-none">
                        {unreadCount}
                      </span>
                    )}
                  </button>
                ))}
                {(user.role === "admin" || user.role === "agent") && (
                  <Link href="/admin" className="admin-nav-item w-full mt-2 border-t border-slate-100 pt-3 text-amber-500 hover:text-amber-600">
                    <FaTachometerAlt className="w-4 h-4" />
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={async () => { await logout(); router.push("/login"); }}
                  className="admin-nav-item w-full mt-2 text-red-400 hover:text-red-600 hover:bg-red-50"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">

            {/* Overview */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-800">Welcome back, {user.name.split(" ")[0]}!</h1>
                  <p className="text-slate-400 text-sm mt-1">Here&apos;s your travel summary</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Total Bookings", value: userBookings.length, icon: FaCalendarCheck, color: "text-amber-500 bg-amber-50" },
                    { label: "Confirmed", value: userBookings.filter(b => b.status === "confirmed").length, icon: FaCheck, color: "text-emerald-500 bg-emerald-50" },
                    { label: "Saved Trips", value: wishlist.length, icon: FaHeart, color: "text-red-500 bg-red-50" },
                    { label: "Total Spent", value: `$${totalSpent.toFixed(0)}`, icon: FaStar, color: "text-purple-500 bg-purple-50" },
                  ].map(({ label, value, icon: Icon, color }) => (
                    <div key={label} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <p className="text-2xl font-extrabold text-slate-800">{value}</p>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Messages Card */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                      <FaBell className="w-4 h-4 text-amber-500" />
                      Messages
                      {unreadCount > 0 && (
                        <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-amber-500 text-white text-[10px] font-bold rounded-full leading-none">
                          {unreadCount}
                        </span>
                      )}
                    </h3>
                    <button
                      onClick={() => setActiveTab("inbox")}
                      className="inline-flex items-center gap-1 text-xs text-amber-600 font-semibold hover:underline"
                    >
                      View Inbox <HiArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {latestUnread.length === 0 ? (
                    <div className="text-center py-6">
                      <FaEnvelopeOpen className="w-7 h-7 text-slate-200 mx-auto mb-2" />
                      <p className="text-slate-400 text-sm">No unread messages</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {latestUnread.map(msg => {
                        const typeConfig = getMessageTypeIcon(msg.type);
                        const TypeIcon = typeConfig.icon;
                        return (
                          <button
                            key={msg.id}
                            onClick={() => { setActiveTab("inbox"); setSelectedMessage(msg); markMessageRead(msg.id); }}
                            className="w-full flex items-center gap-3 p-3 bg-amber-50 border border-amber-100 rounded-xl hover:bg-amber-100 transition text-left"
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${typeConfig.classes}`}>
                              <TypeIcon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-slate-800 truncate">{msg.subject}</p>
                              <p className="text-xs text-slate-400 truncate">{msg.body.slice(0, 60)}{msg.body.length > 60 ? "…" : ""}</p>
                            </div>
                            <span className="text-[10px] text-slate-400 shrink-0">{msg.sentAt}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <h3 className="font-bold text-slate-800 mb-4">Recent Bookings</h3>
                  {userBookings.length === 0 ? (
                    <div className="text-center py-8">
                      <FaCalendarCheck className="w-8 h-8 text-slate-200 mx-auto mb-2" />
                      <p className="text-slate-400 text-sm">No bookings yet</p>
                      <Link href="/tours" className="inline-flex items-center gap-1.5 mt-3 text-sm text-amber-600 font-semibold hover:underline">
                        Browse Tours <HiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {userBookings.slice(0, 3).map(b => {
                        const status = STATUS_STYLES[b.status];
                        return (
                          <div key={b.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                            <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                              <Image src={b.tourImage} alt={b.tourTitle} fill className="object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-slate-800 text-sm line-clamp-1">{b.tourTitle}</p>
                              <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                <FaCalendarCheck className="w-2.5 h-2.5 text-amber-500" />
                                {b.startDate || "Date TBC"} · {b.adults} adult{b.adults > 1 ? "s" : ""}
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="font-bold text-amber-600 text-sm">${b.total.toFixed(0)}</p>
                              <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border mt-1 ${status.classes}`}>
                                <status.icon className="w-2.5 h-2.5" />
                                {status.label}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === "bookings" && (
              <div>
                <h2 className="text-xl font-extrabold text-slate-800 mb-5">My Bookings</h2>
                {userBookings.length === 0 ? (
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
                    <FaCalendarCheck className="w-12 h-12 text-slate-200 mx-auto mb-3" />
                    <p className="text-slate-500 font-medium">No bookings yet</p>
                    <Link href="/tours" className="inline-flex items-center gap-1.5 mt-3 px-5 py-2.5 bg-amber-500 text-white font-semibold rounded-full text-sm hover:bg-amber-600 transition">
                      <FaPlus className="w-3.5 h-3.5" /> Book Your First Tour
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userBookings.map(b => {
                      const status = STATUS_STYLES[b.status];
                      return (
                        <div key={b.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                          <div className="flex flex-col sm:flex-row">
                            <div className="relative w-full sm:w-32 h-36 sm:h-auto shrink-0">
                              <Image src={b.tourImage} alt={b.tourTitle} fill className="object-cover" />
                            </div>
                            <div className="flex-1 p-5">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-xs text-slate-400 font-medium mb-1">Booking #{b.id}</p>
                                  <h3 className="font-bold text-slate-800">{b.tourTitle}</h3>
                                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                                    <span className="flex items-center gap-1">
                                      <FaCalendarCheck className="w-3 h-3 text-amber-500" />
                                      {b.startDate || "TBC"}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <FaMapMarkerAlt className="w-3 h-3 text-amber-500" />
                                      {b.adults} adult{b.adults > 1 ? "s" : ""}{b.children > 0 ? ` · ${b.children} child${b.children > 1 ? "ren" : ""}` : ""}
                                    </span>
                                  </div>
                                </div>
                                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border shrink-0 ${status.classes}`}>
                                  <status.icon className="w-3 h-3" />
                                  {status.label}
                                </span>
                              </div>
                              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                                <div>
                                  <span className="text-xs text-slate-400">Total paid</span>
                                  <p className="font-extrabold text-amber-600 text-lg">${b.total.toFixed(2)}</p>
                                </div>
                                <div className="flex gap-2">
                                  <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition">
                                    Download PDF
                                  </button>
                                  <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-xl transition">
                                    View Details
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div>
                <h2 className="text-xl font-extrabold text-slate-800 mb-5">Saved Trips</h2>
                {wishlist.length === 0 ? (
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
                    <FaHeart className="w-12 h-12 text-slate-200 mx-auto mb-3" />
                    <p className="text-slate-500 font-medium">No saved trips yet</p>
                    <Link href="/tours" className="inline-flex items-center gap-1.5 mt-3 text-sm text-amber-600 font-semibold hover:underline">
                      Browse Tours <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {wishlist.map(tour => (
                      <div key={tour.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="relative h-36">
                          <Image src={tour.image} alt={tour.title} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-slate-800 text-sm line-clamp-1">{tour.title}</h3>
                          <p className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                            <FaMapMarkerAlt className="w-3 h-3 text-amber-500" />
                            {tour.location}
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <span className="font-extrabold text-amber-600">${tour.price}</span>
                            <div className="flex gap-2">
                              <button
                                onClick={() => removeFromWishlist(tour.id)}
                                className="px-3 py-1.5 bg-red-50 text-red-500 text-xs font-semibold rounded-xl hover:bg-red-100 transition"
                              >
                                Remove
                              </button>
                              <button
                                onClick={() => setSelectedTour(tour)}
                                className="px-3 py-1.5 bg-amber-500 text-white text-xs font-semibold rounded-xl hover:bg-amber-600 transition"
                              >
                                Book
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Inbox Tab */}
            {activeTab === "inbox" && (
              <div>
                <h2 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-2">
                  <FaInbox className="w-5 h-5 text-amber-500" />
                  Inbox
                  {unreadCount > 0 && (
                    <span className="inline-flex items-center justify-center min-w-[22px] h-5 px-1.5 bg-amber-500 text-white text-[10px] font-bold rounded-full leading-none">
                      {unreadCount}
                    </span>
                  )}
                </h2>

                {messages.length === 0 ? (
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
                    <FaInbox className="w-12 h-12 text-slate-200 mx-auto mb-3" />
                    <p className="text-slate-500 font-medium">Your inbox is empty</p>
                    <p className="text-slate-400 text-sm mt-1">Messages from our team will appear here</p>
                  </div>
                ) : (
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* Message List */}
                    <div className="w-full lg:w-1/3 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                      <div className="divide-y divide-slate-100">
                        {messages.map(msg => {
                          const typeConfig = getMessageTypeIcon(msg.type);
                          const TypeIcon = typeConfig.icon;
                          const isActive = selectedMessage?.id === msg.id;
                          return (
                            <button
                              key={msg.id}
                              onClick={() => { setSelectedMessage(msg); markMessageRead(msg.id); }}
                              className={`w-full flex items-start gap-3 p-4 text-left transition hover:bg-amber-50 ${isActive ? "bg-amber-50 border-l-2 border-l-amber-500" : ""}`}
                            >
                              <div className="relative shrink-0 mt-0.5">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${typeConfig.classes}`}>
                                  <TypeIcon className="w-3.5 h-3.5" />
                                </div>
                                {!msg.read && (
                                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-white" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm truncate ${!msg.read ? "font-bold text-slate-800" : "font-medium text-slate-600"}`}>
                                  {msg.subject}
                                </p>
                                <p className="text-xs text-slate-400 truncate mt-0.5">
                                  {msg.body.slice(0, 60)}{msg.body.length > 60 ? "…" : ""}
                                </p>
                                <p className="text-[10px] text-slate-300 mt-1">{msg.sentAt}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Detail */}
                    <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      {!selectedMessage ? (
                        <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center p-8">
                          <FaEnvelopeOpen className="w-10 h-10 text-slate-200 mb-3" />
                          <p className="text-slate-400 font-medium text-sm">Select a message to read</p>
                        </div>
                      ) : (
                        <div className="p-6">
                          {/* Detail Header */}
                          <div className="pb-4 border-b border-slate-100 mb-5">
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <h3 className="font-extrabold text-slate-800 text-lg leading-snug">{selectedMessage.subject}</h3>
                              {(() => {
                                const typeConfig = getMessageTypeIcon(selectedMessage.type);
                                return (
                                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full capitalize shrink-0 ${typeConfig.classes}`}>
                                    {selectedMessage.type}
                                  </span>
                                );
                              })()}
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                              <span className="flex items-center gap-1">
                                <FaUser className="w-3 h-3 text-amber-400" />
                                From: <span className="font-medium text-slate-600 ml-0.5">{selectedMessage.fromName}</span>
                              </span>
                              <span className="flex items-center gap-1">
                                <FaCalendarCheck className="w-3 h-3 text-amber-400" />
                                {selectedMessage.sentAt}
                              </span>
                            </div>
                          </div>
                          {/* Body */}
                          <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">
                            {selectedMessage.body}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-5">
                <h2 className="text-xl font-extrabold text-slate-800">Account Settings</h2>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                  <h3 className="font-bold text-slate-700 text-sm">Personal Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Full Name", value: user.name, icon: FaUser },
                      { label: "Email Address", value: user.email, icon: FaEnvelope },
                      { label: "Phone", value: user.phone || "Not set", icon: FaPhone },
                      { label: "Member Since", value: user.joinedAt, icon: FaCalendarCheck },
                    ].map(({ label, value, icon: Icon }) => (
                      <div key={label} className="p-3 bg-slate-50 rounded-xl">
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mb-1 flex items-center gap-1.5">
                          <Icon className="w-3 h-3 text-amber-500" />
                          {label}
                        </p>
                        <p className="text-sm font-medium text-slate-700">{value}</p>
                      </div>
                    ))}
                  </div>
                  <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-xl transition shadow-lg shadow-amber-500/20">
                    Edit Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedTour && (
        <AddToCartModal
          isOpen={!!selectedTour}
          tour={selectedTour}
          onClose={() => setSelectedTour(null)}
        />
      )}
    </div>
  );
}
