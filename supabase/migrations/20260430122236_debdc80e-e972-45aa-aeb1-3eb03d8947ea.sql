CREATE TABLE public.supplier_engine_waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  agency_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  oid TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.supplier_engine_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit waitlist"
ON public.supplier_engine_waitlist
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) > 0 AND length(name) <= 200
  AND length(trim(agency_name)) > 0 AND length(agency_name) <= 200
  AND length(trim(phone_number)) > 0 AND length(phone_number) <= 50
  AND (oid IS NULL OR length(oid) <= 50)
);

CREATE POLICY "Admins can view waitlist"
ON public.supplier_engine_waitlist
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));