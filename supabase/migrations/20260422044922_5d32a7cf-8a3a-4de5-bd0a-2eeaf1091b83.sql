
CREATE OR REPLACE FUNCTION public.claim_first_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  caller UUID := auth.uid();
  admin_exists BOOLEAN;
BEGIN
  IF caller IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') INTO admin_exists;
  IF admin_exists THEN
    RETURN FALSE;
  END IF;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (caller, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;

  RETURN TRUE;
END;
$$;

CREATE OR REPLACE FUNCTION public.admin_exists()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin')
$$;
