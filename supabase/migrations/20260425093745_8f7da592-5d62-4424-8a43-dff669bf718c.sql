CREATE TABLE public.independents_interest (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  details TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.independents_interest ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit interest"
ON public.independents_interest
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(first_name)) > 0 AND length(first_name) <= 100
  AND length(trim(last_name)) > 0 AND length(last_name) <= 100
  AND length(trim(phone_number)) > 0 AND length(phone_number) <= 50
  AND length(trim(details)) > 0 AND length(details) <= 2000
);

CREATE POLICY "Admins can view interest submissions"
ON public.independents_interest
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));