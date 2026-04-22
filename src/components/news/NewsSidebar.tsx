import { Link } from "react-router-dom";
import { Calendar, Linkedin, Twitter, Mail, MessageCircle } from "lucide-react";
import { formatNewsDate, type NewsEvent, type NewsItem } from "@/lib/news/types";
import { WHATSAPP_URL } from "@/lib/constants";

interface Props {
  latest: NewsItem[];
  events: NewsEvent[];
}

export function NewsSidebar({ latest, events }: Props) {
  return (
    <aside className="space-y-8 sticky top-24">
      {/* Latest */}
      <section>
        <h3 className="text-base font-bold text-foreground mb-4">Latest</h3>
        <ol className="space-y-3">
          {latest.map((n, i) => (
            <li key={n.id} className="flex gap-3">
              <span className="text-xs font-bold text-muted-foreground w-5 shrink-0 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-0.5">{formatNewsDate(n.published_at)}</p>
                <Link
                  to={`/news/${n.slug}`}
                  className="text-sm text-foreground hover:text-primary line-clamp-2 leading-snug"
                >
                  {n.title}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Events */}
      <section>
        <h3 className="text-base font-bold text-foreground mb-4">Where to Find Us</h3>
        {events.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No upcoming events.{" "}
            <a
              href="https://www.linkedin.com/company/intraversehq/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us on LinkedIn.
            </a>
          </p>
        ) : (
          <ul className="space-y-4">
            {events.map((e) => (
              <li key={e.id} className="border border-border rounded-md p-3">
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">{formatNewsDate(e.event_date)}</p>
                    <p className="text-sm font-semibold text-foreground">{e.name}</p>
                    {e.location && <p className="text-xs text-muted-foreground mb-1">{e.location}</p>}
                    {e.details_url && (
                      <Link
                        to={e.details_url}
                        className="text-xs text-primary font-medium hover:underline"
                      >
                        Details →
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Press contact */}
      <section className="bg-muted/40 border border-border rounded-md p-4">
        <h3 className="text-base font-bold text-foreground mb-2">Press &amp; Media</h3>
        <p className="text-xs text-muted-foreground mb-3">
          For interviews, comments, and media kits:
        </p>
        <div className="space-y-2 text-sm">
          <a
            href="mailto:press@intraverse.com"
            className="flex items-center gap-2 text-foreground hover:text-primary"
          >
            <Mail className="h-4 w-4" /> press@intraverse.com
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <p className="text-xs text-muted-foreground mt-3">We respond within 24 hours.</p>
      </section>

      {/* Follow */}
      <section>
        <h3 className="text-base font-bold text-foreground mb-3">Follow</h3>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/company/intraversehq/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-9 w-9 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/IntraverseHQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="h-9 w-9 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </section>
    </aside>
  );
}
