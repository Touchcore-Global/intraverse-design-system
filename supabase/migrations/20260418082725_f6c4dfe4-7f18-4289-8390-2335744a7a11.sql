CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  reason TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a contact form (public website form)
CREATE POLICY "Anyone can submit a contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) > 0
  AND length(name) <= 100
  AND length(email) <= 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(message) > 0
  AND length(message) <= 5000
  AND length(reason) <= 100
  AND (company IS NULL OR length(company) <= 200)
  AND (phone IS NULL OR length(phone) <= 50)
);

-- No SELECT/UPDATE/DELETE policies — submissions are reviewed via email
-- notifications and the database dashboard only.

CREATE INDEX idx_contact_submissions_created_at
  ON public.contact_submissions (created_at DESC);
