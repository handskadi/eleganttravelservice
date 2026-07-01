"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
  bookings: Booking[];
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  login: (email: string, password: string) => { success: boolean; message: string; role?: UserRole };
  register: (name: string, email: string, password: string) => { success: boolean; message: string };
  logout: () => void;
  addBooking: (booking: Omit<Booking, "id" | "bookedAt" | "userId">) => void;
  updateBookingStatus: (bookingId: string, status: Booking["status"]) => void;
  getAllBookings: () => Booking[];
  getAllUsers: () => User[];
  messages: Message[];
  sendMessage: (toId: string, subject: string, body: string, type: Message["type"]) => void;
  markMessageRead: (messageId: string) => void;
  getUnreadMessageCount: () => number;
  getUserMessages: () => Message[];
};

const DEMO_ACCOUNTS: { user: User; password: string }[] = [
  {
    user: {
      id: "user-1",
      name: "Mohamed Kadi",
      email: "user@ets.com",
      role: "user",
      phone: "+212 6 12 34 56 78",
      joinedAt: "2024-03-15",
    },
    password: "demo123",
  },
  {
    user: {
      id: "admin-1",
      name: "Admin ETS",
      email: "admin@ets.com",
      role: "admin",
      phone: "+212 5 22 00 00 01",
      joinedAt: "2023-01-10",
    },
    password: "admin123",
  },
  {
    user: {
      id: "agent-1",
      name: "Youssef Benali",
      email: "agent@ets.com",
      role: "agent",
      phone: "+212 6 55 44 33 22",
      agentCode: "AGT-001",
      joinedAt: "2023-06-20",
    },
    password: "agent123",
  },
  {
    user: {
      id: "agent-2",
      name: "Fatima Zahra",
      email: "agent2@ets.com",
      role: "agent",
      phone: "+212 6 77 88 99 00",
      agentCode: "AGT-002",
      joinedAt: "2024-01-05",
    },
    password: "agent123",
  },
];

const SAMPLE_BOOKINGS: Booking[] = [
  {
    id: "BK-001",
    tourId: "sahara-3day-marrakech",
    tourTitle: "Sahara Desert 3-Day Adventure",
    tourImage: "/destinations/sahara.webp",
    startDate: "2025-08-15",
    adults: 2,
    children: 1,
    total: 747.5,
    status: "confirmed",
    bookedAt: "2025-06-10",
    userId: "user-1",
    agentId: "agent-1",
  },
  {
    id: "BK-002",
    tourId: "hot-air-balloon-marrakech",
    tourTitle: "Hot Air Balloon Over Marrakech",
    tourImage: "/destinations/hot-air-baloon-marrakech.webp",
    startDate: "2025-07-20",
    adults: 2,
    children: 0,
    total: 378,
    status: "pending",
    bookedAt: "2025-06-18",
    userId: "user-1",
  },
  {
    id: "BK-003",
    tourId: "atlas-mountains-trek-3day",
    tourTitle: "Atlas Mountains Trekking",
    tourImage: "/destinations/atlas.webp",
    startDate: "2025-09-01",
    adults: 3,
    children: 0,
    total: 747,
    status: "confirmed",
    bookedAt: "2025-05-30",
    userId: "user-1",
    agentId: "agent-2",
  },
];

const SAMPLE_MESSAGES: Message[] = [
  {
    id: "MSG-001",
    fromId: "admin-1",
    fromName: "Elegant Travel Team",
    toId: "user-1",
    subject: "Your Booking BK-001 is Confirmed!",
    body: "Dear Mohamed, we're delighted to confirm your Sahara Desert 3-Day Adventure booking (BK-001) for August 15, 2025. Your experienced guide will be Youssef Benali. Please arrive at Djemaa el-Fna by 07:15. Full itinerary PDF will be sent 48 hours before departure. Have questions? Reply here or WhatsApp +212 5 24 00 00 00.",
    sentAt: "2025-06-10",
    read: false,
    type: "booking_confirmation",
  },
  {
    id: "MSG-002",
    fromId: "admin-1",
    fromName: "Elegant Travel Team",
    toId: "user-1",
    subject: "Summer 2025 Exclusive: 20% Off Desert Camps",
    body: "As a valued Elegant Travel customer, we're giving you early access to our Summer 2025 sale. Get 20% off all desert camp experiences booked before July 31. Use code SUMMER25 at checkout. Valid on Merzouga Luxury Camp and Sahara 3-Day Adventure.",
    sentAt: "2025-06-20",
    read: false,
    type: "offer",
  },
  {
    id: "MSG-003",
    fromId: "admin-1",
    fromName: "Elegant Travel Team",
    toId: "user-1",
    subject: "Reminder: Hot Air Balloon — July 20",
    body: "Just a friendly reminder that your Hot Air Balloon Over Marrakech experience (BK-002) is coming up on July 20. Please be ready at your hotel lobby by 05:00 for pickup. Dress in layers — it can be cool at altitude. Bring your camera! Your pilot will be Ahmed Benbrahim.",
    sentAt: "2025-07-14",
    read: true,
    type: "reminder",
  },
  {
    id: "MSG-004",
    fromId: "admin-1",
    fromName: "Elegant Travel Team",
    toId: "user-1",
    subject: "Welcome to Elegant Travel Service",
    body: "Welcome to Elegant Travel, Mohamed! We are Morocco's premier luxury travel specialists. Your account is now fully activated. You can browse our 20+ tours, save favourites to your wishlist, and manage all your bookings from your dashboard. Need help planning your perfect Morocco trip? Chat with us anytime.",
    sentAt: "2025-06-05",
    read: true,
    type: "general",
  },
];

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>(SAMPLE_BOOKINGS);
  const [allUsers, setAllUsers] = useState<User[]>(DEMO_ACCOUNTS.map(a => a.user));
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return SAMPLE_MESSAGES;
    try {
      const saved = localStorage.getItem("ets_messages");
      if (saved) return JSON.parse(saved) as Message[];
    } catch { /* ignore */ }
    return SAMPLE_MESSAGES;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("ets_user");
    if (saved) {
      try { setUser(JSON.parse(saved)); } catch { /* ignore */ }
    }
    const savedBookings = localStorage.getItem("ets_bookings");
    if (savedBookings) {
      try { setBookings(JSON.parse(savedBookings)); } catch { /* ignore */ }
    }
  }, []);

  const saveBookings = (b: Booking[]) => {
    setBookings(b);
    if (typeof window !== "undefined") {
      localStorage.setItem("ets_bookings", JSON.stringify(b));
    }
  };

  const saveMessages = (m: Message[]) => {
    setMessages(m);
    if (typeof window !== "undefined") {
      localStorage.setItem("ets_messages", JSON.stringify(m));
    }
  };

  const login = (email: string, password: string) => {
    const account = DEMO_ACCOUNTS.find(
      a => a.user.email === email && a.password === password
    );
    if (account) {
      setUser(account.user);
      if (typeof window !== "undefined") {
        localStorage.setItem("ets_user", JSON.stringify(account.user));
      }
      setIsLoginOpen(false);
      return { success: true, message: `Welcome back, ${account.user.name}!`, role: account.user.role };
    }
    return { success: false, message: "Invalid email or password." };
  };

  const register = (name: string, email: string, password: string) => {
    if (DEMO_ACCOUNTS.find(a => a.user.email === email) || allUsers.find(u => u.email === email)) {
      return { success: false, message: "Email already registered." };
    }
    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      role: "user",
      joinedAt: new Date().toISOString().split("T")[0],
    };
    setAllUsers(prev => [...prev, newUser]);
    setUser(newUser);
    if (typeof window !== "undefined") {
      localStorage.setItem("ets_user", JSON.stringify(newUser));
    }
    setIsLoginOpen(false);
    return { success: true, message: `Welcome to ETS, ${name}!` };
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("ets_user");
    }
  };

  const addBooking = (booking: Omit<Booking, "id" | "bookedAt" | "userId">) => {
    if (!user) return;
    const newBooking: Booking = {
      ...booking,
      id: `BK-${String(bookings.length + 1).padStart(3, "0")}`,
      bookedAt: new Date().toISOString().split("T")[0],
      userId: user.id,
    };
    saveBookings([...bookings, newBooking]);

    const confirmationMessage: Message = {
      id: `MSG-auto-${Date.now()}`,
      fromId: "admin-1",
      fromName: "Elegant Travel Team",
      toId: user.id,
      subject: `Booking Confirmed — ${booking.tourTitle}`,
      body: `Your booking for ${booking.tourTitle} on ${booking.startDate} has been confirmed. Reference: ${newBooking.id}. Thank you for booking with Elegant Travel.`,
      sentAt: new Date().toISOString().split("T")[0],
      read: false,
      type: "booking_confirmation",
    };
    saveMessages([...messages, confirmationMessage]);
  };

  const updateBookingStatus = (bookingId: string, status: Booking["status"]) => {
    const updated = bookings.map(b => b.id === bookingId ? { ...b, status } : b);
    saveBookings(updated);
  };

  const getAllBookings = () => bookings;
  const getAllUsers = () => allUsers;

  const sendMessage = (toId: string, subject: string, body: string, type: Message["type"]) => {
    if (!user) return;
    const newMessage: Message = {
      id: `MSG-${Date.now()}`,
      fromId: user.id,
      fromName: user.name,
      toId,
      subject,
      body,
      sentAt: new Date().toISOString().split("T")[0],
      read: false,
      type,
    };
    saveMessages([...messages, newMessage]);
  };

  const markMessageRead = (messageId: string) => {
    const updated = messages.map(m => m.id === messageId ? { ...m, read: true } : m);
    saveMessages(updated);
  };

  const getUnreadMessageCount = () => {
    if (!user) return 0;
    return messages.filter(m => m.toId === user.id && !m.read).length;
  };

  const getUserMessages = () => {
    if (!user) return [];
    return messages
      .filter(m => m.toId === user.id)
      .sort((a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime());
  };

  return (
    <AuthContext.Provider value={{
      user, bookings, isLoginOpen,
      openLogin: () => setIsLoginOpen(true),
      closeLogin: () => setIsLoginOpen(false),
      login, register, logout,
      addBooking, updateBookingStatus,
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
