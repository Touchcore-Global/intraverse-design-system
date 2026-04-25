ALTER TABLE public.independents_interest ADD COLUMN email TEXT;

-- Update insert policy to validate email when provided
DROP POLICY IF EXISTS "Anyone can submit interest" ON public.independents_interest;

CREATE POLICY "Anyone can submit interest"
ON public.independents_interest
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(TRIM(BOTH FROM first_name)) > 0
  AND length(first_name) <= 100
  AND length(TRIM(BOTH FROM last_name)) > 0
  AND length(last_name) <= 100
  AND length(TRIM(BOTH FROM phone_number)) > 0
  AND length(phone_number) <= 50
  AND length(TRIM(BOTH FROM details)) > 0
  AND length(details) <= 2000
  AND (email IS NULL OR (length(email) <= 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'))
);