import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, FileText, ExternalLink, Loader2, User as UserIcon, Pencil } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { getInitials } from "@/lib/blog/types";

interface AdminUserDetail {
  user_id: string;
  email: string;
  user_created_at: string;
  last_sign_in_at: string | null;
  profile: {
    display_name: string | null;
    avatar_url: string | null;
    bio: string | null;
    updated_at: string | null;
  } | null;
  roles: { role: string; granted_at: string }[];
  author: {
    id: string;
    name: string;
    slug: string;
    role: string | null;
    avatar_url: string | null;
    bio: string | null;
  } | null;
  articles: {
    id: string;
    title: string;
    slug: string;
    status: string;
    is_featured: boolean;
    view_count: number;
    published_at: string | null;
    updated_at: string;
  }[];
  article_stats: {
    total: number;
    published: number;
    draft: number;
    total_views: number;
  } | null;
}

interface Props {
  userId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function fmt(iso?: string | null) {
  if (!iso) return "-";
  return new Date(iso).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function AdminUserDetailDrawer({ userId, open, onOpenChange }: Props) {
  const [detail, setDetail] = useState<AdminUserDetail | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open || !userId) {
      setDetail(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    (async () => {
      const { data, error } = await supabase.rpc("get_admin_user_detail", { target_user_id: userId });
      if (cancelled) return;
      if (error) {
        toast({ title: "Failed to load user", description: error.message, variant: "destructive" });
        onOpenChange(false);
      } else {
        setDetail(data as unknown as AdminUserDetail);
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [open, userId, onOpenChange]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader className="text-left">
          <SheetTitle>Admin user</SheetTitle>
          <SheetDescription>Profile and blog activity.</SheetDescription>
        </SheetHeader>

        {loading || !detail ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            {/* Profile header */}
            <div className="flex gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={detail.profile?.avatar_url ?? detail.author?.avatar_url ?? undefined} />
                <AvatarFallback>
                  {getInitials(detail.profile?.display_name ?? detail.email)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-lg font-bold text-foreground truncate">
                  {detail.profile?.display_name ?? detail.email.split("@")[0]}
                </p>
                <p className="text-sm text-muted-foreground truncate">{detail.email}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {detail.roles.map((r) => (
                    <span
                      key={r.role}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {r.role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile fields */}
            <section className="space-y-3">
              <h3 className="h3-global uppercase text-muted-foreground flex items-center gap-2">
                <UserIcon className="h-3.5 w-3.5" /> Profile
              </h3>
              <dl className="grid grid-cols-[140px_1fr] gap-y-2 gap-x-3 text-sm">
                <dt className="text-muted-foreground">Display name</dt>
                <dd className="text-foreground">{detail.profile?.display_name ?? "-"}</dd>

                <dt className="text-muted-foreground">Bio</dt>
                <dd className="text-foreground whitespace-pre-line">
                  {detail.profile?.bio ?? <span className="text-muted-foreground">-</span>}
                </dd>

                <dt className="text-muted-foreground">Avatar</dt>
                <dd className="text-foreground break-all">
                  {detail.profile?.avatar_url ? (
                    <a
                      href={detail.profile.avatar_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </dd>

                <dt className="text-muted-foreground">Account created</dt>
                <dd className="text-foreground">{fmt(detail.user_created_at)}</dd>

                <dt className="text-muted-foreground">Last sign in</dt>
                <dd className="text-foreground">{fmt(detail.last_sign_in_at)}</dd>

                <dt className="text-muted-foreground">Profile updated</dt>
                <dd className="text-foreground">{fmt(detail.profile?.updated_at)}</dd>
              </dl>
            </section>

            {/* Blog activity */}
            <section className="space-y-3">
              <h3 className="h3-global uppercase text-muted-foreground flex items-center gap-2">
                <FileText className="h-3.5 w-3.5" /> Blog Activity
              </h3>

              {!detail.author ? (
                <div className="p-4 rounded border border-dashed border-border text-sm text-muted-foreground">
                  This user isn't linked to a blog author profile, so they haven't authored any articles
                  directly.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: "Total", value: detail.article_stats?.total ?? 0 },
                      { label: "Published", value: detail.article_stats?.published ?? 0 },
                      { label: "Drafts", value: detail.article_stats?.draft ?? 0 },
                      { label: "Views", value: detail.article_stats?.total_views ?? 0 },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="bg-muted/50 border border-border rounded-md p-3 text-center"
                      >
                        <div className="text-lg font-bold text-foreground">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-muted-foreground pt-1">
                    Linked to author{" "}
                    <span className="font-medium text-foreground">{detail.author.name}</span>
                    {detail.author.role && <> · {detail.author.role}</>}
                  </div>

                  {detail.articles.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No articles yet.</p>
                  ) : (
                    <ul className="divide-y divide-border border border-border rounded-md overflow-hidden">
                      {detail.articles.map((a) => (
                        <li key={a.id} className="p-3 hover:bg-muted/30 flex gap-3 items-start">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-foreground line-clamp-1">{a.title}</p>
                            <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-2 mt-1">
                              <span
                                className={
                                  a.status === "published"
                                    ? "text-emerald-700"
                                    : a.status === "draft"
                                      ? "text-amber-700"
                                      : ""
                                }
                              >
                                {a.status}
                              </span>
                              {a.is_featured && <span className="text-primary">· featured</span>}
                              <span>· {fmt(a.published_at ?? a.updated_at)}</span>
                              <span className="inline-flex items-center gap-1">
                                · <Eye className="h-3 w-3" /> {a.view_count}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            {a.status === "published" && (
                              <Button asChild variant="ghost" size="sm">
                                <Link to={`/blog/${a.slug}`} target="_blank">
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </Link>
                              </Button>
                            )}
                            <Button asChild variant="ghost" size="sm">
                              <Link to={`/admin/blog/${a.id}`}>
                                <Pencil className="h-3.5 w-3.5" />
                              </Link>
                            </Button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </section>

            {/* Role grants */}
            <section className="space-y-3">
              <h3 className="h3-global uppercase text-muted-foreground">
                Roles
              </h3>
              <ul className="text-sm divide-y divide-border border border-border rounded-md overflow-hidden">
                {detail.roles.map((r) => (
                  <li key={r.role} className="flex justify-between p-3">
                    <span className="font-medium text-foreground">{r.role}</span>
                    <span className="text-muted-foreground">granted {fmt(r.granted_at)}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
