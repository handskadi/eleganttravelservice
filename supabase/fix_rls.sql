-- Fix: RLS infinite recursion on profiles table
-- All policies that used (SELECT role FROM profiles WHERE id = auth.uid()) inside
-- a policy ON profiles itself caused PostgreSQL infinite recursion → 500 errors.
-- Solution: SECURITY DEFINER function runs without RLS, breaking the cycle.

CREATE OR REPLACE FUNCTION public.get_my_role()
RETURNS TEXT
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT role::text FROM public.profiles WHERE id = auth.uid();
$$;

-- ── Profiles ────────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "profiles_select" ON profiles;
CREATE POLICY "profiles_select" ON profiles FOR SELECT USING (
  auth.uid() = id
  OR get_my_role() IN ('admin', 'agent')
);

DROP POLICY IF EXISTS "profiles_update" ON profiles;
CREATE POLICY "profiles_update" ON profiles FOR UPDATE USING (
  auth.uid() = id
  OR get_my_role() = 'admin'
);

-- ── Bookings ─────────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "bookings_select" ON bookings;
CREATE POLICY "bookings_select" ON bookings FOR SELECT USING (
  auth.uid() = user_id
  OR get_my_role() IN ('admin', 'agent')
);

DROP POLICY IF EXISTS "bookings_insert" ON bookings;
CREATE POLICY "bookings_insert" ON bookings FOR INSERT WITH CHECK (
  auth.uid() = user_id
);

DROP POLICY IF EXISTS "bookings_update" ON bookings;
CREATE POLICY "bookings_update" ON bookings FOR UPDATE USING (
  auth.uid() = user_id
  OR get_my_role() IN ('admin', 'agent')
);

DROP POLICY IF EXISTS "bookings_delete" ON bookings;
CREATE POLICY "bookings_delete" ON bookings FOR DELETE USING (
  get_my_role() = 'admin'
);

-- ── Messages ─────────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "messages_select" ON messages;
CREATE POLICY "messages_select" ON messages FOR SELECT USING (
  auth.uid() = to_id
  OR auth.uid() = from_id
  OR get_my_role() IN ('admin', 'agent')
);

DROP POLICY IF EXISTS "messages_insert" ON messages;
CREATE POLICY "messages_insert" ON messages FOR INSERT WITH CHECK (
  auth.uid() = from_id
);

DROP POLICY IF EXISTS "messages_update" ON messages;
CREATE POLICY "messages_update" ON messages FOR UPDATE USING (
  auth.uid() = to_id
  OR get_my_role() = 'admin'
);

