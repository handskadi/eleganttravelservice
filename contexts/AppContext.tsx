"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Tour } from "@/data/tours";

export type CartItem = {
  tour: Tour;
  adults: number;
  children: number;
  startDate: string;
  total: number;
};

export type Notification = {
  id: string;
  icon: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "booking" | "offer" | "message" | "review";
};

type AppContextType = {
  cart: CartItem[];
  wishlist: Tour[];
  notifications: Notification[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (tourId: string) => void;
  updateCartItem: (tourId: string, adults: number, children: number, startDate: string) => void;
  clearCart: () => void;
  addToWishlist: (tour: Tour) => void;
  removeFromWishlist: (tourId: string) => void;
  toggleWishlist: (tour: Tour) => void;
  isWishlisted: (tourId: string) => boolean;
  isInCart: (tourId: string) => boolean;
  moveToCart: (tourId: string) => void;
  cartTotal: number;
  cartCount: number;
  wishlistCount: number;
  unreadNotifications: number;
  markAllRead: () => void;
  markOneRead: (id: string) => void;
};

const DEFAULT_NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    icon: "✈️",
    title: "Booking Confirmed",
    message: "Your Sahara Desert adventure is confirmed for Aug 15!",
    time: "2 min ago",
    read: false,
    type: "booking",
  },
  {
    id: "n2",
    icon: "🎉",
    title: "Flash Sale — 20% Off",
    message: "Atlas Mountain tours are 20% off this weekend only.",
    time: "1 hour ago",
    read: false,
    type: "offer",
  },
  {
    id: "n3",
    icon: "💬",
    title: "Support Replied",
    message: "Your query about the Chefchaouen tour has been answered.",
    time: "3 hours ago",
    read: false,
    type: "message",
  },
  {
    id: "n4",
    icon: "⭐",
    title: "Review Request",
    message: "How was your Marrakech Food Tour? Share your experience!",
    time: "Yesterday",
    read: true,
    type: "review",
  },
  {
    id: "n5",
    icon: "🏷️",
    title: "Price Drop Alert",
    message: "Hot Air Balloon tour dropped to $189 — book before it fills up.",
    time: "2 days ago",
    read: true,
    type: "offer",
  },
];

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Tour[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>(DEFAULT_NOTIFICATIONS);

  const addToCart = useCallback((item: CartItem) => {
    setCart(prev => {
      const exists = prev.find(i => i.tour.id === item.tour.id);
      if (exists) return prev.map(i => i.tour.id === item.tour.id ? item : i);
      return [...prev, item];
    });
  }, []);

  const removeFromCart = useCallback((tourId: string) => {
    setCart(prev => prev.filter(i => i.tour.id !== tourId));
  }, []);

  const updateCartItem = useCallback((tourId: string, adults: number, children: number, startDate: string) => {
    setCart(prev => prev.map(i => {
      if (i.tour.id !== tourId) return i;
      const total = (adults + children * 0.5) * i.tour.price;
      return { ...i, adults, children, startDate, total };
    }));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const addToWishlist = useCallback((tour: Tour) => {
    setWishlist(prev => prev.find(i => i.id === tour.id) ? prev : [...prev, tour]);
  }, []);

  const removeFromWishlist = useCallback((tourId: string) => {
    setWishlist(prev => prev.filter(i => i.id !== tourId));
  }, []);

  const toggleWishlist = useCallback((tour: Tour) => {
    setWishlist(prev =>
      prev.find(i => i.id === tour.id) ? prev.filter(i => i.id !== tour.id) : [...prev, tour]
    );
  }, []);

  const isWishlisted = useCallback((tourId: string) => wishlist.some(i => i.id === tourId), [wishlist]);
  const isInCart = useCallback((tourId: string) => cart.some(i => i.tour.id === tourId), [cart]);

  const moveToCart = useCallback((tourId: string) => {
    const tour = wishlist.find(i => i.id === tourId);
    if (!tour) return;
    addToCart({ tour, adults: 2, children: 0, startDate: "", total: tour.price * 2 });
  }, [wishlist, addToCart]);

  const unreadNotifications = notifications.filter(n => !n.read).length;

  const markAllRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, []);

  const markOneRead = useCallback((id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }, []);

  return (
    <AppContext.Provider value={{
      cart, wishlist, notifications,
      addToCart, removeFromCart, updateCartItem, clearCart,
      addToWishlist, removeFromWishlist, toggleWishlist,
      isWishlisted, isInCart, moveToCart,
      cartTotal: cart.reduce((sum, i) => sum + i.total, 0),
      cartCount: cart.length,
      wishlistCount: wishlist.length,
      unreadNotifications, markAllRead, markOneRead,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
