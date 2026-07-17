-- =============================================================================
-- Elegant Travel Service — Morocco Travel Agency
-- Supabase Database Schema
-- =============================================================================

-- =============================================================================
-- ENUM TYPES  (idempotent — safe to re-run)
-- =============================================================================

DO $$ BEGIN
  CREATE TYPE user_role AS ENUM ('user', 'admin', 'agent');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE booking_status AS ENUM ('confirmed', 'pending', 'cancelled');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE message_type AS ENUM (
    'booking_confirmation', 'offer', 'reminder', 'support', 'general'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE difficulty_level AS ENUM ('Easy', 'Moderate', 'Difficult');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE tour_category AS ENUM (
    'Desert', 'Mountains', 'Cities', 'Coastal', 'Activities', 'Luxury'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- =============================================================================
-- TABLE: profiles
-- Extends Supabase auth.users with application-level user data.
-- A row is created automatically via trigger when a user signs up.
-- =============================================================================

CREATE TABLE IF NOT EXISTS profiles (
  id          uuid        REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name        text        NOT NULL,
  email       text        UNIQUE NOT NULL,
  role        user_role   NOT NULL DEFAULT 'user',
  phone       text,
  agent_code  text        UNIQUE,           -- only populated for agents
  avatar_url  text,
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE profiles IS 'Application-level user profiles linked to Supabase auth.users.';
COMMENT ON COLUMN profiles.agent_code IS 'Unique code assigned to agent accounts; NULL for regular users.';

-- =============================================================================
-- TABLE: bookings
-- Stores all tour booking records created by users or on their behalf.
-- =============================================================================

CREATE TABLE IF NOT EXISTS bookings (
  id          text              PRIMARY KEY,             -- human-readable, e.g. BK-001
  user_id     uuid              REFERENCES profiles(id),
  tour_id     text              NOT NULL,
  tour_title  text              NOT NULL,
  tour_image  text,
  start_date  date,
  adults      int               NOT NULL DEFAULT 1,
  children    int               NOT NULL DEFAULT 0,
  total       decimal(10, 2)    NOT NULL,
  status      booking_status    NOT NULL DEFAULT 'pending',
  agent_id    uuid              REFERENCES profiles(id), -- NULL if self-booked
  booked_at   timestamptz       NOT NULL DEFAULT now()
);

COMMENT ON TABLE bookings IS 'Tour booking records for all users.';
COMMENT ON COLUMN bookings.id IS 'Human-readable booking reference, e.g. BK-001.';
COMMENT ON COLUMN bookings.agent_id IS 'The agent who handled this booking; NULL if user booked directly.';

-- =============================================================================
-- TABLE: messages
-- In-app messaging between users, agents, and admins.
-- =============================================================================

CREATE TABLE IF NOT EXISTS messages (
  id        text          PRIMARY KEY,
  from_id   uuid          REFERENCES profiles(id),
  from_name text          NOT NULL,                  -- denormalised for display speed
  to_id     uuid          REFERENCES profiles(id),
  subject   text          NOT NULL,
  body      text          NOT NULL,
  sent_at   timestamptz   NOT NULL DEFAULT now(),
  read      boolean       NOT NULL DEFAULT false,
  type      message_type  NOT NULL DEFAULT 'general'
);

COMMENT ON TABLE messages IS 'In-app messages sent between users, agents, and admins.';
COMMENT ON COLUMN messages.from_name IS 'Denormalised sender name cached at send-time for display.';

-- =============================================================================
-- TABLE: tour_reviews
-- User-submitted ratings and comments for tours.
-- =============================================================================

CREATE TABLE IF NOT EXISTS tour_reviews (
  id         uuid          DEFAULT gen_random_uuid() PRIMARY KEY,
  tour_id    text          NOT NULL,
  user_id    uuid          REFERENCES profiles(id),
  rating     int           CHECK (rating BETWEEN 1 AND 5),
  comment    text,
  created_at timestamptz   NOT NULL DEFAULT now()
);

COMMENT ON TABLE tour_reviews IS 'Star ratings and text reviews submitted by users for specific tours.';

-- =============================================================================
-- INDEXES
-- Improves query performance for the most common access patterns.
-- =============================================================================

-- Bookings — look up by user, filter by tour or status
CREATE INDEX IF NOT EXISTS idx_bookings_user_id  ON bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_tour_id  ON bookings(tour_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status   ON bookings(status);

-- Messages — inbox queries and unread-count queries
CREATE INDEX IF NOT EXISTS idx_messages_to_id    ON messages(to_id);
CREATE INDEX IF NOT EXISTS idx_messages_from_id  ON messages(from_id);
CREATE INDEX IF NOT EXISTS idx_messages_read     ON messages(read);

-- =============================================================================
-- ROW LEVEL SECURITY (RLS)
-- Enables per-row access control enforced at the database level.
-- =============================================================================

ALTER TABLE profiles    ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings    ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages    ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_reviews ENABLE ROW LEVEL SECURITY;

-- ---------------------------------------------------------------------------
-- profiles policies
-- ---------------------------------------------------------------------------

DROP POLICY IF EXISTS "profiles: users can read own"    ON profiles;
DROP POLICY IF EXISTS "profiles: admin can read all"    ON profiles;
DROP POLICY IF EXISTS "profiles: users can update own"  ON profiles;
DROP POLICY IF EXISTS "profiles: admin can update all"  ON profiles;

CREATE POLICY "profiles: users can read own"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "profiles: admin can read all"
  ON profiles FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'admin')
  );

CREATE POLICY "profiles: users can update own"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "profiles: admin can update all"
  ON profiles FOR UPDATE
  USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'admin')
  );

-- ---------------------------------------------------------------------------
-- bookings policies
-- ---------------------------------------------------------------------------

DROP POLICY IF EXISTS "bookings: users can read own"              ON bookings;
DROP POLICY IF EXISTS "bookings: admin and agent can read all"    ON bookings;
DROP POLICY IF EXISTS "bookings: users can insert own"            ON bookings;
DROP POLICY IF EXISTS "bookings: admin and agent can insert any"  ON bookings;
DROP POLICY IF EXISTS "bookings: admin can update all"            ON bookings;

CREATE POLICY "bookings: users can read own"
  ON bookings FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "bookings: admin and agent can read all"
  ON bookings FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('admin', 'agent'))
  );

CREATE POLICY "bookings: users can insert own"
  ON bookings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "bookings: admin and agent can insert any"
  ON bookings FOR INSERT
  WITH CHECK (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('admin', 'agent'))
  );

CREATE POLICY "bookings: admin can update all"
  ON bookings FOR UPDATE
  USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'admin')
  );

-- ---------------------------------------------------------------------------
-- messages policies
-- ---------------------------------------------------------------------------

DROP POLICY IF EXISTS "messages: users can read own inbox"          ON messages;
DROP POLICY IF EXISTS "messages: users can read own sent"           ON messages;
DROP POLICY IF EXISTS "messages: admin can read all"                ON messages;
DROP POLICY IF EXISTS "messages: authenticated users can insert"    ON messages;
DROP POLICY IF EXISTS "messages: recipients can mark read"          ON messages;

CREATE POLICY "messages: users can read own inbox"
  ON messages FOR SELECT
  USING (auth.uid() = to_id);

CREATE POLICY "messages: users can read own sent"
  ON messages FOR SELECT
  USING (auth.uid() = from_id);

CREATE POLICY "messages: admin can read all"
  ON messages FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'admin')
  );

CREATE POLICY "messages: authenticated users can insert"
  ON messages FOR INSERT
  WITH CHECK (auth.uid() = from_id);

CREATE POLICY "messages: recipients can mark read"
  ON messages FOR UPDATE
  USING (auth.uid() = to_id);

-- ---------------------------------------------------------------------------
-- tour_reviews policies
-- ---------------------------------------------------------------------------

DROP POLICY IF EXISTS "tour_reviews: public read"                        ON tour_reviews;
DROP POLICY IF EXISTS "tour_reviews: authenticated users can insert own" ON tour_reviews;
DROP POLICY IF EXISTS "tour_reviews: users can update own"               ON tour_reviews;
DROP POLICY IF EXISTS "tour_reviews: users can delete own"               ON tour_reviews;

CREATE POLICY "tour_reviews: public read"
  ON tour_reviews FOR SELECT
  USING (true);

CREATE POLICY "tour_reviews: authenticated users can insert own"
  ON tour_reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "tour_reviews: users can update own"
  ON tour_reviews FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "tour_reviews: users can delete own"
  ON tour_reviews FOR DELETE
  USING (auth.uid() = user_id);

-- =============================================================================
-- FUNCTIONS & TRIGGERS
-- =============================================================================

-- ---------------------------------------------------------------------------
-- handle_new_user()
-- Fires after a new row is inserted into auth.users.
-- Creates a corresponding profiles row using the metadata from the sign-up.
-- ---------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    NEW.email,
    'user'
  );
  RETURN NEW;
END;
$$;

-- Drop the trigger first to allow re-running this script (idempotent)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- ---------------------------------------------------------------------------
-- set_updated_at()
-- Generic trigger function that stamps updated_at with the current time
-- whenever a row is modified.
-- ---------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Apply updated_at trigger to profiles
DROP TRIGGER IF EXISTS profiles_set_updated_at ON profiles;

CREATE TRIGGER profiles_set_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at();

-- =============================================================================
-- REALTIME
-- Enable realtime subscriptions on key tables (idempotent).
-- =============================================================================

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND tablename = 'messages'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE messages;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND tablename = 'bookings'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE bookings;
  END IF;
END $$;
