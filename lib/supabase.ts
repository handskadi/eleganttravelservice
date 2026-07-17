// Service role key is for server-side only. Never expose to client.

import { createClient } from "@supabase/supabase-js";

// ---------------------------------------------------------------------------
// Row types
// ---------------------------------------------------------------------------

export type ProfileRow = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin" | "agent";
  phone: string | null;
  agent_code: string | null;
  created_at: string;
};

export type ProfileInsert = {
  id?: string;
  name: string;
  email: string;
  role?: "user" | "admin" | "agent";
  phone?: string | null;
  agent_code?: string | null;
  created_at?: string;
};

export type ProfileUpdate = {
  id?: string;
  name?: string;
  email?: string;
  role?: "user" | "admin" | "agent";
  phone?: string | null;
  agent_code?: string | null;
  created_at?: string;
};

export type BookingRow = {
  id: string;
  user_id: string;
  tour_id: string;
  tour_title: string;
  tour_image: string;
  start_date: string;
  adults: number;
  children: number;
  total: number;
  status: "confirmed" | "pending" | "cancelled";
  booked_at: string;
  agent_id: string | null;
};

export type BookingInsert = {
  id?: string;
  user_id: string;
  tour_id: string;
  tour_title: string;
  tour_image: string;
  start_date: string;
  adults: number;
  children: number;
  total: number;
  status?: "confirmed" | "pending" | "cancelled";
  booked_at?: string;
  agent_id?: string | null;
};

export type BookingUpdate = {
  id?: string;
  user_id?: string;
  tour_id?: string;
  tour_title?: string;
  tour_image?: string;
  start_date?: string;
  adults?: number;
  children?: number;
  total?: number;
  status?: "confirmed" | "pending" | "cancelled";
  booked_at?: string;
  agent_id?: string | null;
};

export type MessageRow = {
  id: string;
  from_id: string;
  from_name: string;
  to_id: string;
  subject: string;
  body: string;
  sent_at: string;
  read: boolean;
  type:
    | "booking_confirmation"
    | "offer"
    | "reminder"
    | "support"
    | "general";
};

export type MessageInsert = {
  id?: string;
  from_id: string;
  from_name: string;
  to_id: string;
  subject: string;
  body: string;
  sent_at?: string;
  read?: boolean;
  type:
    | "booking_confirmation"
    | "offer"
    | "reminder"
    | "support"
    | "general";
};

export type MessageUpdate = {
  id?: string;
  from_id?: string;
  from_name?: string;
  to_id?: string;
  subject?: string;
  body?: string;
  sent_at?: string;
  read?: boolean;
  type?:
    | "booking_confirmation"
    | "offer"
    | "reminder"
    | "support"
    | "general";
};

export type TourRow = {
  id: string;
  title: string;
  price: number;
  category: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  duration: string;
  difficulty: string;
  featured: boolean;
};

export type TourInsert = {
  id?: string;
  title: string;
  price: number;
  category: string;
  location: string;
  image: string;
  rating?: number;
  reviews?: number;
  duration: string;
  difficulty: string;
  featured?: boolean;
};

export type TourUpdate = {
  id?: string;
  title?: string;
  price?: number;
  category?: string;
  location?: string;
  image?: string;
  rating?: number;
  reviews?: number;
  duration?: string;
  difficulty?: string;
  featured?: boolean;
};

// ---------------------------------------------------------------------------
// Database type (Supabase generic format)
// ---------------------------------------------------------------------------

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: ProfileInsert;
        Update: ProfileUpdate;
        Relationships: [];
      };
      bookings: {
        Row: BookingRow;
        Insert: BookingInsert;
        Update: BookingUpdate;
        Relationships: [];
      };
      messages: {
        Row: MessageRow;
        Insert: MessageInsert;
        Update: MessageUpdate;
        Relationships: [];
      };
      tours: {
        Row: TourRow;
        Insert: TourInsert;
        Update: TourUpdate;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

// ---------------------------------------------------------------------------
// Supabase admin client (server-side only)
// ---------------------------------------------------------------------------

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseAdmin = createClient<Database>(supabaseUrl, serviceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
