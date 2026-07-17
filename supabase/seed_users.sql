-- =============================================================================
-- Elegant Travel Service — Seed Users
-- Run this ONCE in Supabase SQL Editor after schema.sql
-- Safe to re-run: ON CONFLICT DO NOTHING on auth.users inserts
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. ADMIN — handskadi@gmail.com / kadi@2023
-- ---------------------------------------------------------------------------
DO $$
DECLARE v_id uuid;
BEGIN
  INSERT INTO auth.users (
    instance_id, id, aud, role, email, encrypted_password,
    email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
    created_at, updated_at, confirmation_token,
    email_change, email_change_token_new, recovery_token
  ) VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated', 'authenticated',
    'handskadi@gmail.com',
    crypt('kadi@2023', gen_salt('bf')),
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"name":"Mohamed Kadi"}',
    now(), now(), '', '', '', ''
  )
  ON CONFLICT (email) DO NOTHING
  RETURNING id INTO v_id;

  -- If user already existed, look up the id
  IF v_id IS NULL THEN
    SELECT id INTO v_id FROM auth.users WHERE email = 'handskadi@gmail.com';
  END IF;

  -- Ensure profile exists and has admin role
  INSERT INTO public.profiles (id, name, email, role)
  VALUES (v_id, 'Mohamed Kadi', 'handskadi@gmail.com', 'admin')
  ON CONFLICT (id) DO UPDATE SET role = 'admin', name = 'Mohamed Kadi';
END $$;

-- ---------------------------------------------------------------------------
-- 2. AGENT — agent@eleganttravel.com / Agent@2024!
-- ---------------------------------------------------------------------------
DO $$
DECLARE v_id uuid;
BEGIN
  INSERT INTO auth.users (
    instance_id, id, aud, role, email, encrypted_password,
    email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
    created_at, updated_at, confirmation_token,
    email_change, email_change_token_new, recovery_token
  ) VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated', 'authenticated',
    'agent@eleganttravel.com',
    crypt('Agent@2024!', gen_salt('bf')),
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"name":"Sara Agent"}',
    now(), now(), '', '', '', ''
  )
  ON CONFLICT (email) DO NOTHING
  RETURNING id INTO v_id;

  IF v_id IS NULL THEN
    SELECT id INTO v_id FROM auth.users WHERE email = 'agent@eleganttravel.com';
  END IF;

  INSERT INTO public.profiles (id, name, email, role, agent_code)
  VALUES (v_id, 'Sara Agent', 'agent@eleganttravel.com', 'agent', 'AGT-001')
  ON CONFLICT (id) DO UPDATE SET role = 'agent', agent_code = 'AGT-001', name = 'Sara Agent';
END $$;

-- ---------------------------------------------------------------------------
-- 3. CLIENT — client@eleganttravel.com / Client@2024!
-- ---------------------------------------------------------------------------
DO $$
DECLARE v_id uuid;
BEGIN
  INSERT INTO auth.users (
    instance_id, id, aud, role, email, encrypted_password,
    email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
    created_at, updated_at, confirmation_token,
    email_change, email_change_token_new, recovery_token
  ) VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated', 'authenticated',
    'client@eleganttravel.com',
    crypt('Client@2024!', gen_salt('bf')),
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"name":"Test Client"}',
    now(), now(), '', '', '', ''
  )
  ON CONFLICT (email) DO NOTHING
  RETURNING id INTO v_id;

  IF v_id IS NULL THEN
    SELECT id INTO v_id FROM auth.users WHERE email = 'client@eleganttravel.com';
  END IF;

  INSERT INTO public.profiles (id, name, email, role)
  VALUES (v_id, 'Test Client', 'client@eleganttravel.com', 'user')
  ON CONFLICT (id) DO UPDATE SET role = 'user', name = 'Test Client';
END $$;

-- ---------------------------------------------------------------------------
-- Verify — shows all created users and their roles
-- ---------------------------------------------------------------------------
SELECT p.email, p.name, p.role, p.agent_code, p.created_at
FROM public.profiles p
ORDER BY p.created_at;
