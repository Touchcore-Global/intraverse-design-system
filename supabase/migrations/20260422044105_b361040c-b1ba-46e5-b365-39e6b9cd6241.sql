
-- =========================================
-- ROLES & PROFILES
-- =========================================
CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'user');

CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- user_roles policies
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Updated_at trigger fn
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)));
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =========================================
-- BLOG TABLES
-- =========================================
CREATE TABLE public.blog_authors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  avatar_url TEXT,
  bio TEXT,
  role TEXT,
  twitter_url TEXT,
  linkedin_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.blog_authors ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.blog_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.blog_articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image_url TEXT,
  category_id UUID REFERENCES public.blog_categories(id) ON DELETE SET NULL,
  author_id UUID REFERENCES public.blog_authors(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  is_featured BOOLEAN NOT NULL DEFAULT false,
  read_time_minutes INTEGER NOT NULL DEFAULT 5,
  view_count INTEGER NOT NULL DEFAULT 0,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;

CREATE INDEX idx_blog_articles_status ON public.blog_articles(status);
CREATE INDEX idx_blog_articles_published_at ON public.blog_articles(published_at DESC);
CREATE INDEX idx_blog_articles_category ON public.blog_articles(category_id);
CREATE INDEX idx_blog_articles_slug ON public.blog_articles(slug);

CREATE TRIGGER update_blog_authors_updated_at
  BEFORE UPDATE ON public.blog_authors
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_blog_articles_updated_at
  BEFORE UPDATE ON public.blog_articles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Public read of published content
CREATE POLICY "Anyone can view authors"
  ON public.blog_authors FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can view categories"
  ON public.blog_categories FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can view published articles"
  ON public.blog_articles FOR SELECT TO anon, authenticated
  USING (status = 'published');
CREATE POLICY "Admins can view all articles"
  ON public.blog_articles FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Admin writes
CREATE POLICY "Admins can manage authors"
  ON public.blog_authors FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage categories"
  ON public.blog_categories FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage articles"
  ON public.blog_articles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- View count increment (public)
CREATE OR REPLACE FUNCTION public.increment_article_views(article_slug TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.blog_articles
  SET view_count = view_count + 1
  WHERE slug = article_slug AND status = 'published';
END;
$$;

-- =========================================
-- SEED DATA
-- =========================================
INSERT INTO public.blog_categories (name, slug, description, display_order) VALUES
  ('Product Updates', 'product-updates', 'New features and product launches', 1),
  ('Industry Insights', 'industry-insights', 'Analysis of African travel industry trends', 2),
  ('Growth Strategies', 'growth-strategies', 'Tactics for scaling travel businesses', 3),
  ('Engineering', 'engineering', 'Behind the tech we build', 4),
  ('Company News', 'company-news', 'Updates from the Intraverse team', 5),
  ('Guides & Tutorials', 'guides-tutorials', 'How-to content for travel operators', 6);

INSERT INTO public.blog_authors (name, slug, bio, role, avatar_url) VALUES
  ('Intraverse Team', 'intraverse-team', 'The team building Africa''s travel infrastructure from Lagos.', 'Editorial', NULL),
  ('Ada Okonkwo', 'ada-okonkwo', 'Product lead at Intraverse. Writes about building tools African travel businesses actually use.', 'Head of Product', NULL);

WITH cat AS (
  SELECT id, slug FROM public.blog_categories
), auth_t AS (
  SELECT id, slug FROM public.blog_authors
)
INSERT INTO public.blog_articles (title, slug, excerpt, content, category_id, author_id, status, is_featured, read_time_minutes, published_at, cover_image_url)
SELECT * FROM (VALUES
  (
    'Introducing Travel Links: Sell Trips Through a Single URL',
    'introducing-travel-links',
    'Travel Links lets independent agents and small operators sell packages, accept payments, and share itineraries through one branded link.',
    E'## Why we built Travel Links\n\nMost African travel agents work out of WhatsApp. They send PDFs, screenshot prices, and chase payments across three apps. Travel Links collapses that into a single, branded URL you can share anywhere.\n\n## What you can do\n\n- Build packages with flights, hotels, and tours in minutes\n- Accept payments in NGN, USD, GHS, KES, and ZAR\n- Track who clicked, who booked, and who dropped off\n- Embed on Instagram, WhatsApp status, or your site\n\n## Getting started\n\nHead to the dashboard, create your first link, and share it. That''s it.',
    (SELECT id FROM cat WHERE slug='product-updates'),
    (SELECT id FROM auth_t WHERE slug='ada-okonkwo'),
    'published', true, 4, now() - interval '2 days', NULL
  ),
  (
    'The State of African Travel Tech in 2026',
    'state-of-african-travel-tech-2026',
    'African outbound travel grew 18% YoY, but the tooling stack hasn''t caught up. Here''s what operators told us in our annual survey.',
    E'## The headline\n\nWe surveyed 412 travel businesses across Nigeria, Ghana, Kenya, and South Africa. The picture is clear: demand is up, margins are thin, and tooling is the bottleneck.\n\n## Top three pain points\n\n1. **Payments** — multi-currency reconciliation eats 6 hours/week\n2. **Suppliers** — most agents still source flights manually\n3. **Trust** — clients want receipts, contracts, and proof before paying\n\n## What''s working\n\nOperators who adopted digital booking tools grew 2.3x faster than those still on PDFs and WhatsApp.',
    (SELECT id FROM cat WHERE slug='industry-insights'),
    (SELECT id FROM auth_t WHERE slug='intraverse-team'),
    'published', false, 7, now() - interval '5 days', NULL
  ),
  (
    'How to Grow a Travel Agency from 0 to ₦10M in Monthly Bookings',
    'grow-travel-agency-0-to-10m',
    'A practical playbook from three Lagos-based agents who scaled past ₦10M in monthly gross bookings within their first year.',
    E'## Step 1: Pick a niche\n\nGeneralists lose to Google. Pick one corridor (Lagos–Dubai, Accra–London) and own it.\n\n## Step 2: Productize\n\nStop quoting one trip at a time. Build 5 repeatable packages with fixed margins.\n\n## Step 3: Build a referral loop\n\nEvery happy client should bring you two more. Make it explicit, not implicit.',
    (SELECT id FROM cat WHERE slug='growth-strategies'),
    (SELECT id FROM auth_t WHERE slug='ada-okonkwo'),
    'published', false, 6, now() - interval '8 days', NULL
  ),
  (
    'Why We Built Our Own Multi-Currency Payment Engine',
    'why-we-built-multi-currency-payments',
    'Stripe doesn''t cover most of Africa. Flutterwave doesn''t cover everything outside it. Here''s how we route payments across both worlds.',
    E'## The problem\n\nA Lagos agent selling a Dubai package collects NGN, pays the supplier in USD, and owes commissions in GHS. No single PSP handles that.\n\n## Our approach\n\nWe built a routing layer on top of three providers, with FX locked at quote time so margins don''t evaporate during settlement.',
    (SELECT id FROM cat WHERE slug='engineering'),
    (SELECT id FROM auth_t WHERE slug='intraverse-team'),
    'published', false, 8, now() - interval '12 days', NULL
  ),
  (
    'Intraverse Raises Seed Round to Power African Travel',
    'intraverse-seed-round',
    'We''re excited to announce our seed round and welcome new investors who believe in building infrastructure for African travel businesses.',
    E'## Today''s news\n\nWe''ve closed our seed round to accelerate building the operating system for African travel.\n\n## What''s next\n\n- Expanding our supplier network across East Africa\n- Hiring engineers and product designers in Lagos\n- Launching Travel Links to all markets',
    (SELECT id FROM cat WHERE slug='company-news'),
    (SELECT id FROM auth_t WHERE slug='intraverse-team'),
    'published', false, 3, now() - interval '15 days', NULL
  ),
  (
    'A Step-by-Step Guide to Building Your First Tour Package',
    'guide-first-tour-package',
    'From sourcing components to pricing margins to publishing — a complete walkthrough of building a sellable package in Intraverse.',
    E'## Before you start\n\nDecide your destination, duration, and target traveler. Everything else flows from there.\n\n## Building the package\n\n1. Add flights from our supplier search\n2. Pick a hotel tier and lock the rate\n3. Add tours and transfers\n4. Set your margin and publish\n\n## Sharing\n\nGenerate a Travel Link and post it.',
    (SELECT id FROM cat WHERE slug='guides-tutorials'),
    (SELECT id FROM auth_t WHERE slug='ada-okonkwo'),
    'published', false, 9, now() - interval '20 days', NULL
  ),
  (
    'Odiopay BNPL: Travel Now, Pay Later for African Travelers',
    'odiopay-bnpl-launch',
    'Our partnership with Odiopay lets your customers split travel payments into installments — no credit card required.',
    E'## How it works\n\nAt checkout, customers choose Odiopay and split into 3 or 6 monthly payments. You get paid upfront. Odiopay handles the rest.\n\n## Why it matters\n\nAfrican travelers often can''t commit to full upfront payment for big trips. BNPL unlocks demand you''re currently losing.',
    (SELECT id FROM cat WHERE slug='product-updates'),
    (SELECT id FROM auth_t WHERE slug='intraverse-team'),
    'published', false, 5, now() - interval '25 days', NULL
  )
) AS v(title, slug, excerpt, content, category_id, author_id, status, is_featured, read_time_minutes, published_at, cover_image_url);
