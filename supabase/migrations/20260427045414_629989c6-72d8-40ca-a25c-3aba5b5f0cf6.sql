-- Create private bucket for career application uploads (CVs, cover letters)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'career-applications',
  'career-applications',
  false,
  10485760, -- 10 MB
  ARRAY[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'application/rtf'
  ]
)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone (anon + authenticated) to upload to this bucket
CREATE POLICY "Anyone can upload career applications"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'career-applications');

-- Only admins can read uploaded files
CREATE POLICY "Admins can read career applications"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'career-applications'
  AND public.has_role(auth.uid(), 'admin')
);
