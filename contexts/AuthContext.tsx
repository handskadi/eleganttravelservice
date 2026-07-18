"use client";

import {
  createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode,
} from "react";
import { createClient } from "@/lib/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import type { ProfileRow, BookingRow, MessageRow } from "@/lib/supabase";

// ─── Public types ─────────────────────────────────────────────────────────────

export type UserRole = "guest" | "user" | "admin" | "agent";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  agentCode?: string;
  joinedAt: string;
};

export type Booking = {
  id: string;
  tourId: string;
  tourTitle: string;
  tourImage: string;
  startDate: string;
  adults: number;
  children: number;
  total: number;
  status: "confirmed" | "pending" | "cancelled";
  bookedAt: string;
  userId: string;
  agentId?: string;
};

export type Message = {
  id: string;
  fromId: string;
  fromName: string;
  toId: string;
  subject: string;
  body: string;
  sentAt: string;
  read: boolean;
  type: "booking_confirmation" | "offer" | "reminder" | "support" | "general";
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  bookings: Booking[];
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string; role?: UserRole }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  addBooking: (booking: Omit<Booking, "id" | "bookedAt" | "userId">) => Promise<void>;
  updateBookingStatus: (bookingId: string, status: Booking["status"]) => Promise<void>;
  getAllBookings: () => Booking[];
  getAllUsers: () => User[];
  messages: Message[];
  sendMessage: (toId: string, subject: string, body: string, type: Message["type"]) => Promise<void>;
  markMessageRead: (messageId: string) => Promise<void>;
  getUnreadMessageCount: () => number;
  getUserMessages: () => Message[];
  refreshBookings: () => Promise<void>;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function profileToUser(p: ProfileRow): User {
  return {
    id: p.id,
    name: p.name,
    email: p.email,
    role: p.role as UserRole,
    phone: p.phone ?? undefined,
    agentCode: p.agent_code ?? undefined,
    joinedAt: p.created_at,
  };
}

function rowToBooking(r: BookingRow): Booking {
  return {
    id: r.id,
    tourId: r.tour_id,
    tourTitle: r.tour_title,
    tourImage: r.tour_image ?? "",
    startDate: r.start_date ?? "",
    adults: r.adults,
    children: r.children,
    total: Number(r.total),
    status: r.status,
    bookedAt: r.booked_at,
    userId: r.user_id ?? "",
    agentId: r.agent_id ?? undefined,
  };
}

function rowToMessage(r: MessageRow): Message {
  return {
    id: r.id,
    fromId: r.from_id ?? "",
    fromName: r.from_name,
    toId: r.to_id ?? "",
    subject: r.subject,
    body: r.body,
    sentAt: r.sent_at,
    read: r.read,
    type: r.type,
  };
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const supabaseRef = useRef(createClient());
  const supabase = supabaseRef.current;

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // ── Fetch profile via server-side API (bypasses RLS) ─────────────────────
  const fetchProfile = useCallback(async (_sbUser: SupabaseUser) => {
    const res = await fetch("/api/profile", { credentials: "include" });
    if (!res.ok) return null;
    const profile = await res.json() as ProfileRow;
    setUser(profileToUser(profile));
    return profile;
  }, []);

  // ── Fetch bookings via server route (bypasses RLS) ────────────────────────
  const fetchBookings = useCallback(async (_profile: ProfileRow) => {
    const res = await fetch("/api/bookings", { credentials: "include" });
    if (!res.ok) return;
    const data = await res.json();
    if (Array.isArray(data)) setBookings(data.map(rowToBooking));
  }, []);

  // ── Fetch messages via server route (bypasses RLS) ────────────────────────
  const fetchMessages = useCallback(async (_profileId: string) => {
    const res = await fetch("/api/messages", { credentials: "include" });
    if (!res.ok) return;
    const data = await res.json();
    if (Array.isArray(data)) setMessages(data.map(rowToMessage));
  }, []);

  // ── Fetch all users via server route (admin/agent only) ───────────────────
  const fetchAllUsers = useCallback(async () => {
    const res = await fetch("/api/users", { credentials: "include" });
    if (!res.ok) return;
    const data = await res.json();
    if (Array.isArray(data)) setAllUsers(data.map(r => profileToUser(r as ProfileRow)));
  }, []);

  // ── Bootstrap on mount ────────────────────────────────────────────────────
  useEffect(() => {
    const initAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const profile = await fetchProfile(session.user);
        if (profile) {
          await Promise.all([
            fetchBookings(profile),
            fetchMessages(profile.id),
            ...(["admin", "agent"].includes(profile.role) ? [fetchAllUsers()] : []),
          ]);
        }
      }
      setLoading(false);
    };

    initAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      // INITIAL_SESSION fires on mount before initAuth() finishes — ignore it to
      // avoid setting loading=false/user=null before the real session is loaded.
      if (event === "INITIAL_SESSION") return;

      if (event === "SIGNED_OUT" || !session?.user) {
        setUser(null);
        setBookings([]);
        setMessages([]);
        setAllUsers([]);
        setLoading(false);
        return;
      }
      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        const profile = await fetchProfile(session.user);
        if (profile) {
          await Promise.all([
            fetchBookings(profile),
            fetchMessages(profile.id),
            ...(["admin", "agent"].includes(profile.role) ? [fetchAllUsers()] : []),
          ]);
        }
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Auth actions ──────────────────────────────────────────────────────────

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) {
      return { success: false, message: error?.message ?? "Invalid email or password." };
    }
    const profile = await fetchProfile(data.user);
    if (profile) {
      await Promise.all([
        fetchBookings(profile),
        fetchMessages(profile.id),
        ...(["admin", "agent"].includes(profile.role) ? [fetchAllUsers()] : []),
      ]);
    }
    setIsLoginOpen(false);
    return { success: true, message: `Welcome back!`, role: (profile?.role ?? "user") as UserRole };
  };

  const register = async (name: string, email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error || !data.user) {
      return { success: false, message: error?.message ?? "Registration failed." };
    }
    // If email confirmation is disabled, profile is created via trigger; fetch it
    if (data.session) {
      const profile = await fetchProfile(data.user);
      if (profile) {
        await Promise.all([fetchBookings(profile), fetchMessages(profile.id)]);
      }
    }
    setIsLoginOpen(false);
    return { success: true, message: `Welcome to Elegant Travel, ${name}!` };
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  // ── Booking actions ───────────────────────────────────────────────────────

  const addBooking = async (booking: Omit<Booking, "id" | "bookedAt" | "userId">) => {
    if (!user) return;
    const bookingId = `BK-${Date.now()}`;
    const { error } = await supabase.from("bookings").insert({
      id: bookingId,
      user_id: user.id,
      tour_id: booking.tourId,
      tour_title: booking.tourTitle,
      tour_image: booking.tourImage,
      start_date: booking.startDate,
      adults: booking.adults,
      children: booking.children,
      total: booking.total,
      status: booking.status ?? "pending",
      agent_id: booking.agentId ?? null,
    });
    if (!error) {
      const newBooking: Booking = { ...booking, id: bookingId, bookedAt: new Date().toISOString(), userId: user.id };
      setBookings(prev => [newBooking, ...prev]);

      // Send confirmation message
      const msgId = `MSG-${Date.now()}`;
      await supabase.from("messages").insert({
        id: msgId,
        from_id: user.id,
        from_name: "Elegant Travel Team",
        to_id: user.id,
        subject: `Booking Confirmed — ${booking.tourTitle}`,
        body: `Your booking for ${booking.tourTitle} on ${booking.startDate} has been received. Reference: ${bookingId}. Our team will confirm within 24 hours.`,
        type: "booking_confirmation",
      });
      await fetchMessages(user.id);
    }
  };

  const updateBookingStatus = async (bookingId: string, status: Booking["status"]) => {
    const res = await fetch("/api/bookings", {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: bookingId, status }),
    });
    if (res.ok) {
      setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status } : b));
    }
  };

  const refreshBookings = async () => {
    if (!user) return;
    await fetchBookings({} as ProfileRow);
  };

  // ── Message actions ───────────────────────────────────────────────────────

  const sendMessage = async (toId: string, subject: string, body: string, type: Message["type"]) => {
    if (!user) return;
    const msgId = `MSG-${Date.now()}`;
    const { error } = await supabase.from("messages").insert({
      id: msgId,
      from_id: user.id,
      from_name: user.name,
      to_id: toId,
      subject,
      body,
      type,
    });
    if (!error) {
      const newMsg: Message = {
        id: msgId, fromId: user.id, fromName: user.name,
        toId, subject, body, type,
        sentAt: new Date().toISOString(), read: false,
      };
      setMessages(prev => [newMsg, ...prev]);
    }
  };

  const markMessageRead = async (messageId: string) => {
    await fetch("/api/messages", {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: messageId }),
    });
    setMessages(prev => prev.map(m => m.id === messageId ? { ...m, read: true } : m));
  };

  // ── Derived getters ───────────────────────────────────────────────────────

  const getAllBookings = () => bookings;
  const getAllUsers = () => allUsers;

  const getUnreadMessageCount = () => {
    if (!user) return 0;
    return messages.filter(m => m.toId === user.id && !m.read).length;
  };

  const getUserMessages = () => {
    if (!user) return [];
    return messages
      .filter(m => m.toId === user.id || m.fromId === user.id)
      .sort((a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime());
  };

  return (
    <AuthContext.Provider value={{
      user, loading, bookings, isLoginOpen,
      openLogin: () => setIsLoginOpen(true),
      closeLogin: () => setIsLoginOpen(false),
      login, register, logout,
      addBooking, updateBookingStatus, refreshBookings,
      getAllBookings, getAllUsers,
      messages, sendMessage, markMessageRead,
      getUnreadMessageCount, getUserMessages,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
