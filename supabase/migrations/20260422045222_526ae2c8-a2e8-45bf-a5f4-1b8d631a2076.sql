
CREATE OR REPLACE FUNCTION public.list_admin_users()
RETURNS TABLE (
  user_id UUID,
  email TEXT,
  granted_at TIMESTAMPTZ,
  user_created_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Forbidden: admin role required';
  END IF;

  RETURN QUERY
  SELECT
    ur.user_id,
    u.email::TEXT,
    ur.created_at AS granted_at,
    u.created_at AS user_created_at
  FROM public.user_roles ur
  JOIN auth.users u ON u.id = ur.user_id
  WHERE ur.role = 'admin'
  ORDER BY ur.created_at ASC;
END;
$$;
