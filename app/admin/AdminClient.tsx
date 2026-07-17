"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaTachometerAlt, FaCalendarCheck, FaMapMarkedAlt, FaUsers,
  FaUserShield, FaSignOutAlt, FaStar, FaCheck, FaClock,
  FaBan, FaSearch, FaPhone, FaEnvelope, FaUserPlus,
  FaRegClock, FaChartLine, FaBriefcase,
} from "react-icons/fa";
import { HiArrowRight, HiTrendingUp } from "react-icons/hi";
import { useAuth } from "@/contexts/AuthContext";
import { createClient } from "@/lib/supabase/client";
import { tours } from "@/data/tours";
import type { User } from "@/contexts/AuthContext";

const ADMIN_TABS = [
  { key: "dashboard", label: "Dashboard",   icon: FaTachometerAlt },
  { key: "bookings",  label: "Bookings",    icon: FaCalendarCheck },
  { key: "tours",     label: "Tours",       icon: FaMapMarkedAlt  },
  { key: "users",     label: "Users",       icon: FaUsers         },
  { key: "agents",    label: "Agents",      icon: FaUserShield    },
];

const AGENT_TABS = [
  { key: "dashboard", label: "Dashboard",      icon: FaTachometerAlt },
  { key: "bookings",  label: "My Bookings",    icon: FaCalendarCheck },
  { key: "tours",     label: "Tours",          icon: FaMapMarkedAlt  },
];

const STATUS_STYLES = {
  confirmed: { label: "Confirmed", classes: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  pending:   { label: "Pending",   classes: "bg-amber-50 text-amber-700 border-amber-200"       },
  cancelled: { label: "Cancelled", classes: "bg-red-50 text-red-700 border-red-200"             },
};

const ROLE_STYLES: Record<string, string> = {
  admin: "bg-red-500/10 text-red-400 border-red-500/20",
  agent: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  user:  "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function AdminPage() {
  const { user, loading, logout, getAllBookings, getAllUsers, updateBookingStatus } = useAuth();
  const supabase = createClient();
  const router   = useRouter();

  const [activeTab, setActiveTab]     = useState("dashboard");
  const [search, setSearch]           = useState("");
  const [promotingId, setPromotingId] = useState<string | null>(null);
  const [roleMsg, setRoleMsg]         = useState("");

  useEffect(() => {
    if (!loading && (!user || (user.role !== "admin" && user.role !== "agent"))) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (user.role !== "admin" && user.role !== "agent") return null;

  const isAdmin      = user.role === "admin";
  const TABS         = isAdmin ? ADMIN_TABS : AGENT_TABS;
  const allBookings  = getAllBookings();
  const allUsers     = getAllUsers();
  const agentUsers   = allUsers.filter(u => u.role === "agent");

  const myBookings        = isAdmin ? allBookings : allBookings.filter(b => b.agentId === user.id);
  const totalRevenue      = myBookings.reduce((s, b) => s + b.total, 0);
  const confirmedCount    = myBookings.filter(b => b.status === "confirmed").length;
  const pendingCount      = myBookings.filter(b => b.status === "pending").length;

  const filteredBookings = myBookings.filter(b =>
    b.tourTitle.toLowerCase().includes(search.toLowerCase()) ||
    b.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleRoleChange = async (targetUser: User, newRole: "user" | "agent" | "admin") => {
    setPromotingId(targetUser.id);
    const { error } = await supabase
      .from("profiles")
      .update({ role: newRole })
      .eq("id", targetUser.id);
    setPromotingId(null);
    if (!error) {
      setRoleMsg(`${targetUser.name} is now ${newRole}`);
      setTimeout(() => setRoleMsg(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex pt-16">

      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 bg-slate-900 border-r border-white/5 flex-col z-20 hidden lg:flex">
        <div className="px-4 py-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white font-extrabold">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="text-white font-bold text-sm truncate max-w-36">{user.name}</p>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${ROLE_STYLES[user.role]}`}>
                {user.role.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`admin-nav-item w-full ${activeTab === key ? "active" : ""}`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/5 space-y-1">
          <Link href="/dashboard" className="admin-nav-item w-full">
            <FaUsers className="w-4 h-4" /> My Dashboard
          </Link>
          <button
            onClick={async () => { await logout(); router.push("/login"); }}
            className="admin-nav-item w-full text-red-400 hover:text-red-500 hover:bg-red-500/10"
          >
            <FaSignOutAlt className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* ── Main ────────────────────────────────────────────────────────────── */}
      <main className="flex-1 lg:ml-64 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-6">

          {roleMsg && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm px-4 py-3 rounded-xl">
              {roleMsg}
            </div>
          )}

          {/* ── Dashboard ─────────────────────────────────────────────────── */}
          {activeTab === "dashboard" && (
            <>
              <div>
                <h1 className="text-2xl font-extrabold text-white">
                  {isAdmin ? "Admin Dashboard" : "Agent Dashboard"}
                </h1>
                <p className="text-slate-400 text-sm mt-1">Welcome back, {user.name.split(" ")[0]}</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Total Revenue",   value: `£${totalRevenue.toFixed(0)}`,  icon: HiTrendingUp,    color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
                  { label: "Total Bookings",  value: myBookings.length,              icon: FaCalendarCheck, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                  { label: "Confirmed",       value: confirmedCount,                 icon: FaCheck,         color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
                  { label: "Pending Review",  value: pendingCount,                   icon: FaClock,         color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
                ].map(({ label, value, icon: Icon, color }) => (
                  <div key={label} className={`bg-slate-900 rounded-2xl border p-5 ${color.split(" ").slice(2).join(" ")}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-2xl font-extrabold text-white">{value}</p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              {/* Recent bookings */}
              <div className="bg-slate-900 rounded-2xl border border-white/5 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                  <h3 className="font-bold text-white">Recent Bookings</h3>
                  <button onClick={() => setActiveTab("bookings")} className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-medium">
                    View All <HiArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {myBookings.length === 0 ? (
                  <div className="py-12 text-center text-slate-500 text-sm">No bookings yet</div>
                ) : (
                  <div className="divide-y divide-white/5">
                    {myBookings.slice(0, 5).map(b => {
                      const status = STATUS_STYLES[b.status];
                      return (
                        <div key={b.id} className="flex items-center gap-3 px-5 py-3">
                          <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-slate-800">
                            {b.tourImage && <Image src={b.tourImage} alt={b.tourTitle} fill className="object-cover" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium line-clamp-1">{b.tourTitle}</p>
                            <p className="text-slate-400 text-xs">{b.id} · {b.startDate || "TBC"}</p>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-full border shrink-0 ${status.classes}`}>
                            {status.label}
                          </span>
                          <span className="text-amber-400 font-bold text-sm shrink-0">£{b.total.toFixed(0)}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Admin-only: user + agent summary */}
              {isAdmin && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900 rounded-2xl border border-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <FaUsers className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Registered Users</p>
                        <p className="text-slate-400 text-xs">Total accounts</p>
                      </div>
                    </div>
                    <p className="text-3xl font-extrabold text-white">{allUsers.filter(u => u.role === "user").length}</p>
                    <p className="text-xs text-slate-500 mt-1">{agentUsers.length} agents · {allUsers.filter(u => u.role === "admin").length} admins</p>
                  </div>
                  <div className="bg-slate-900 rounded-2xl border border-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <FaChartLine className="w-4 h-4 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Total Tours</p>
                        <p className="text-slate-400 text-xs">Active listings</p>
                      </div>
                    </div>
                    <p className="text-3xl font-extrabold text-white">{tours.length}</p>
                    <p className="text-xs text-slate-500 mt-1">{tours.filter(t => t.featured).length} featured</p>
                  </div>
                </div>
              )}
            </>
          )}

          {/* ── Bookings ──────────────────────────────────────────────────── */}
          {activeTab === "bookings" && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-extrabold text-white">
                  {isAdmin ? "All Bookings" : "My Assigned Bookings"}
                </h2>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-3.5 h-3.5" />
                  <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search by tour or ID..."
                    className="pl-9 pr-4 py-2.5 bg-slate-900 border border-white/10 text-white placeholder-slate-500 rounded-xl text-sm focus:outline-none focus:border-amber-500/50 w-64"
                  />
                </div>
              </div>

              {filteredBookings.length === 0 ? (
                <div className="bg-slate-900 rounded-2xl border border-white/5 py-16 text-center text-slate-500">
                  No bookings found.
                </div>
              ) : (
                <div className="bg-slate-900 rounded-2xl border border-white/5 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="border-b border-white/5">
                        <tr className="text-slate-400 text-xs uppercase tracking-wider">
                          {["ID", "Tour", "Date", "Travelers", "Amount", "Status", "Actions"].map(h => (
                            <th key={h} className="text-left px-4 py-3 font-semibold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredBookings.map(b => {
                          const status = STATUS_STYLES[b.status];
                          return (
                            <tr key={b.id} className="text-slate-300 hover:bg-white/3 transition">
                              <td className="px-4 py-3 font-mono text-xs text-slate-400">{b.id}</td>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-slate-800">
                                    {b.tourImage && <Image src={b.tourImage} alt="" fill className="object-cover" />}
                                  </div>
                                  <span className="text-xs font-medium text-white line-clamp-1 max-w-36">{b.tourTitle}</span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-xs">{b.startDate || "TBC"}</td>
                              <td className="px-4 py-3 text-xs">{b.adults}A{b.children > 0 ? ` +${b.children}C` : ""}</td>
                              <td className="px-4 py-3 text-amber-400 font-bold text-xs">£{b.total.toFixed(0)}</td>
                              <td className="px-4 py-3">
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${status.classes}`}>
                                  {status.label}
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-1">
                                  {b.status === "pending" && (
                                    <button
                                      onClick={() => updateBookingStatus(b.id, "confirmed")}
                                      className="p-1.5 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 rounded-lg transition"
                                      title="Confirm"
                                    >
                                      <FaCheck className="w-3 h-3" />
                                    </button>
                                  )}
                                  {b.status !== "cancelled" && isAdmin && (
                                    <button
                                      onClick={() => updateBookingStatus(b.id, "cancelled")}
                                      className="p-1.5 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg transition"
                                      title="Cancel"
                                    >
                                      <FaBan className="w-3 h-3" />
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Tours ─────────────────────────────────────────────────────── */}
          {activeTab === "tours" && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-extrabold text-white">Tour Listings</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tours.slice(0, 18).map(tour => (
                  <div key={tour.id} className="bg-slate-900 rounded-2xl border border-white/5 overflow-hidden group">
                    <div className="relative h-36">
                      <Image src={tour.image} alt={tour.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                        <span className="text-[10px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded-full">{tour.category}</span>
                        <span className="text-white font-bold text-sm">£{tour.price}</span>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="text-white font-semibold text-sm line-clamp-1">{tour.title}</h3>
                      <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-400">
                        <span className="flex items-center gap-0.5">
                          <FaStar className="w-3 h-3 text-amber-400" />
                          {tour.rating}
                        </span>
                        <span>·</span>
                        <span>{tour.duration}</span>
                        <span>·</span>
                        <span>{tour.difficulty}</span>
                      </div>
                      <Link
                        href={`/tours/${tour.id}`}
                        className="mt-3 flex items-center justify-center gap-1.5 w-full py-2 bg-white/5 text-slate-300 text-xs font-semibold rounded-lg hover:bg-white/10 transition"
                      >
                        View Tour <HiArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Users — Admin only ─────────────────────────────────────────── */}
          {activeTab === "users" && isAdmin && (
            <div>
              <h2 className="text-xl font-extrabold text-white mb-5">
                User Management
                <span className="ml-2 text-sm text-slate-400 font-normal">({allUsers.length} total)</span>
              </h2>
              <div className="bg-slate-900 rounded-2xl border border-white/5 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-white/5">
                      <tr className="text-slate-400 text-xs uppercase tracking-wider">
                        {["User", "Email", "Role", "Joined", "Change Role"].map(h => (
                          <th key={h} className="text-left px-4 py-3 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {allUsers.map(u => (
                        <tr key={u.id} className="text-slate-300 hover:bg-white/3 transition">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                                {u.name.charAt(0)}
                              </div>
                              <span className="font-medium text-white text-xs">{u.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-400">{u.email}</td>
                          <td className="px-4 py-3">
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${ROLE_STYLES[u.role]}`}>
                              {u.role}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-400">
                            {new Date(u.joinedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                          </td>
                          <td className="px-4 py-3">
                            {u.id !== user.id && (
                              <div className="flex gap-1">
                                {u.role !== "agent" && (
                                  <button
                                    onClick={() => handleRoleChange(u, "agent")}
                                    disabled={promotingId === u.id}
                                    className="flex items-center gap-1 px-2.5 py-1.5 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-lg text-[10px] font-semibold transition disabled:opacity-40"
                                  >
                                    <FaBriefcase className="w-3 h-3" />
                                    Make Agent
                                  </button>
                                )}
                                {u.role !== "user" && (
                                  <button
                                    onClick={() => handleRoleChange(u, "user")}
                                    disabled={promotingId === u.id}
                                    className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-700 text-slate-300 hover:bg-slate-600 rounded-lg text-[10px] font-semibold transition disabled:opacity-40"
                                  >
                                    Revoke
                                  </button>
                                )}
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── Agents — Admin only ─────────────────────────────────────────── */}
          {activeTab === "agents" && isAdmin && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-extrabold text-white">
                  Agents
                  <span className="ml-2 text-sm text-slate-400 font-normal">({agentUsers.length} active)</span>
                </h2>
                <button
                  onClick={() => setActiveTab("users")}
                  className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-xl transition"
                >
                  <FaUserPlus className="w-3.5 h-3.5" /> Promote User
                </button>
              </div>

              {agentUsers.length === 0 ? (
                <div className="bg-slate-900 rounded-2xl border border-white/5 py-16 text-center">
                  <FaUserShield className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm">No agents yet.</p>
                  <p className="text-slate-500 text-xs mt-1">Go to Users and promote a user to Agent.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {agentUsers.map(agent => {
                    const agentBookings = allBookings.filter(b => b.agentId === agent.id);
                    const agentRevenue  = agentBookings.reduce((s, b) => s + b.total, 0);
                    return (
                      <div key={agent.id} className="bg-slate-900 rounded-2xl border border-white/5 p-5">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg">
                            {agent.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-white font-bold text-sm">{agent.name}</h3>
                            {agent.agentCode && (
                              <span className="text-amber-400 text-xs font-mono font-medium">{agent.agentCode}</span>
                            )}
                          </div>
                          <span className="text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded-full font-semibold shrink-0">
                            Active
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {[
                            { label: "Bookings", value: agentBookings.length },
                            { label: "Confirmed", value: agentBookings.filter(b => b.status === "confirmed").length },
                            { label: "Revenue", value: `£${(agentRevenue / 1000).toFixed(1)}k` },
                          ].map(({ label, value }) => (
                            <div key={label} className="bg-slate-800/50 rounded-xl p-2.5 text-center">
                              <p className="text-white font-extrabold text-sm">{value}</p>
                              <p className="text-slate-400 text-[10px] font-medium">{label}</p>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-1.5 text-xs text-slate-400 mb-4">
                          <p className="flex items-center gap-2">
                            <FaEnvelope className="w-3 h-3 text-amber-500 shrink-0" />
                            {agent.email}
                          </p>
                          {agent.phone && (
                            <p className="flex items-center gap-2">
                              <FaPhone className="w-3 h-3 text-amber-500 shrink-0" />
                              {agent.phone}
                            </p>
                          )}
                          <p className="flex items-center gap-2">
                            <FaRegClock className="w-3 h-3 text-amber-500 shrink-0" />
                            Joined {new Date(agent.joinedAt).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                          </p>
                        </div>

                        <button
                          onClick={() => handleRoleChange(agent, "user")}
                          disabled={promotingId === agent.id}
                          className="w-full py-2 bg-red-500/10 text-red-400 text-xs font-semibold rounded-xl hover:bg-red-500/20 transition disabled:opacity-40"
                        >
                          {promotingId === agent.id ? "Updating..." : "Revoke Agent Role"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
