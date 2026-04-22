-- Grant admin role to a user by email
CREATE OR REPLACE FUNCTION public.grant_admin_by_email(target_email text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  target_user_id uuid;
  already_admin boolean;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Forbidden: admin role required';
  END IF;

  IF target_email IS NULL OR length(trim(target_email)) = 0 THEN
    RAISE EXCEPTION 'Email is required';
  END IF;

  SELECT id INTO target_user_id
  FROM auth.users
  WHERE lower(email) = lower(trim(target_email))
  LIMIT 1;

  IF target_user_id IS NULL THEN
    RAISE EXCEPTION 'No user found with email %', target_email;
  END IF;

  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = target_user_id AND role = 'admin'
  ) INTO already_admin;

  IF already_admin THEN
    RETURN jsonb_build_object(
      'success', false,
      'already_admin', true,
      'user_id', target_user_id,
      'message', 'User is already an admin'
    );
  END IF;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (target_user_id, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;

  RETURN jsonb_build_object(
    'success', true,
    'already_admin', false,
    'user_id', target_user_id,
    'message', 'Admin role granted'
  );
END;
$$;

-- Revoke admin role from a user (cannot remove the last admin)
CREATE OR REPLACE FUNCTION public.revoke_admin(target_user_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  admin_count integer;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Forbidden: admin role required';
  END IF;

  IF target_user_id IS NULL THEN
    RAISE EXCEPTION 'User id is required';
  END IF;

  SELECT COUNT(*) INTO admin_count FROM public.user_roles WHERE role = 'admin';

  IF admin_count <= 1 THEN
    RAISE EXCEPTION 'Cannot revoke the last remaining admin';
  END IF;

  DELETE FROM public.user_roles
  WHERE user_id = target_user_id AND role = 'admin';

  RETURN jsonb_build_object(
    'success', true,
    'user_id', target_user_id,
    'message', 'Admin role revoked'
  );
END;
$$;