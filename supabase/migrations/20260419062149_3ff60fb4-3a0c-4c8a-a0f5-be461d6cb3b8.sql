CREATE TABLE public.partner_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  company text NOT NULL,
  role text,
  email text NOT NULL,
  partnership_type text,
  message text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.partner_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a partnership inquiry"
ON public.partner_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) > 0
  AND length(name) <= 100
  AND length(trim(company)) > 0
  AND length(company) <= 100
  AND (role IS NULL OR length(role) <= 100)
  AND length(email) <= 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(message) > 0
  AND length(message) <= 1000
  AND (partnership_type IS NULL OR length(partnership_type) <= 50)
);