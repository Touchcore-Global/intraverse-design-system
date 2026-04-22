
CREATE OR REPLACE FUNCTION public.get_admin_user_detail(target_user_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  result JSONB;
  author_record RECORD;
  author_articles JSONB;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Forbidden: admin role required';
  END IF;

  -- Base user + profile + roles
  SELECT jsonb_build_object(
    'user_id', u.id,
    'email', u.email,
    'user_created_at', u.created_at,
    'last_sign_in_at', u.last_sign_in_at,
    'profile', (
      SELECT jsonb_build_object(
        'display_name', p.display_name,
        'avatar_url', p.avatar_url,
        'bio', p.bio,
        'updated_at', p.updated_at
      )
      FROM public.profiles p WHERE p.user_id = u.id
    ),
    'roles', (
      SELECT COALESCE(jsonb_agg(jsonb_build_object('role', ur.role, 'granted_at', ur.created_at) ORDER BY ur.created_at), '[]'::jsonb)
      FROM public.user_roles ur WHERE ur.user_id = u.id
    )
  )
  INTO result
  FROM auth.users u
  WHERE u.id = target_user_id;

  IF result IS NULL THEN
    RAISE EXCEPTION 'User not found';
  END IF;

  -- Linked blog author (if any)
  SELECT * INTO author_record
  FROM public.blog_authors WHERE user_id = target_user_id LIMIT 1;

  IF author_record.id IS NOT NULL THEN
    SELECT COALESCE(jsonb_agg(jsonb_build_object(
      'id', a.id,
      'title', a.title,
      'slug', a.slug,
      'status', a.status,
      'is_featured', a.is_featured,
      'view_count', a.view_count,
      'published_at', a.published_at,
      'updated_at', a.updated_at
    ) ORDER BY a.updated_at DESC), '[]'::jsonb)
    INTO author_articles
    FROM public.blog_articles a
    WHERE a.author_id = author_record.id;

    result := result || jsonb_build_object(
      'author', jsonb_build_object(
        'id', author_record.id,
        'name', author_record.name,
        'slug', author_record.slug,
        'role', author_record.role,
        'avatar_url', author_record.avatar_url,
        'bio', author_record.bio
      ),
      'articles', author_articles,
      'article_stats', jsonb_build_object(
        'total', (SELECT COUNT(*) FROM public.blog_articles WHERE author_id = author_record.id),
        'published', (SELECT COUNT(*) FROM public.blog_articles WHERE author_id = author_record.id AND status = 'published'),
        'draft', (SELECT COUNT(*) FROM public.blog_articles WHERE author_id = author_record.id AND status = 'draft'),
        'total_views', (SELECT COALESCE(SUM(view_count), 0) FROM public.blog_articles WHERE author_id = author_record.id)
      )
    );
  ELSE
    result := result || jsonb_build_object('author', NULL, 'articles', '[]'::jsonb, 'article_stats', NULL);
  END IF;

  RETURN result;
END;
$$;
