-- News categories enum
CREATE TYPE public.news_category AS ENUM (
  'press-releases',
  'media-coverage',
  'events',
  'milestones',
  'announcements'
);

-- News items table
CREATE TABLE public.news_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  body TEXT NOT NULL DEFAULT '',
  category public.news_category NOT NULL,
  published_at TIMESTAMPTZ,
  source TEXT,
  source_url TEXT,
  featured_image TEXT,
  tags TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  is_featured BOOLEAN NOT NULL DEFAULT false,
  press_kit_relevant BOOLEAN NOT NULL DEFAULT false,
  view_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_news_items_status_published ON public.news_items (status, published_at DESC);
CREATE INDEX idx_news_items_category ON public.news_items (category);
CREATE INDEX idx_news_items_slug ON public.news_items (slug);

ALTER TABLE public.news_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published news"
  ON public.news_items FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

CREATE POLICY "Admins can view all news"
  ON public.news_items FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage news"
  ON public.news_items FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_news_items_updated_at
  BEFORE UPDATE ON public.news_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- News events table (for sidebar "Where to find us")
CREATE TABLE public.news_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  location TEXT,
  event_date TIMESTAMPTZ NOT NULL,
  details_url TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_news_events_active_date ON public.news_events (is_active, event_date);

ALTER TABLE public.news_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active events"
  ON public.news_events FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Admins can manage events"
  ON public.news_events FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_news_events_updated_at
  BEFORE UPDATE ON public.news_events
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- View increment function
CREATE OR REPLACE FUNCTION public.increment_news_views(news_slug TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.news_items
  SET view_count = view_count + 1
  WHERE slug = news_slug AND status = 'published';
END;
$$;