import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { formatSalary, type JobPosting } from "@/lib/jobs/types";

export default function JobDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [job, setJob] = useState<JobPosting | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      const { data } = await supabase
        .from("job_postings")
        .select("*")
        .eq("slug", slug)
        .eq("status", "open")
        .maybeSingle();
      setJob((data ?? null) as JobPosting | null);
      setLoading(false);
    })();
  }, [slug]);

  const renderList = (text: string) =>
    text
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => l.replace(/^[-*•]\s*/, ""));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/careers" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Careers
          </Link>

          {loading ? (
            <div className="py-20 text-center text-muted-foreground">Loading...</div>
          ) : !job ? (
            <div className="py-20 text-center">
              <h1 className="text-2xl font-bold text-foreground mb-2">Job not found</h1>
              <p className="text-muted-foreground mb-6">This role may have been filled or is no longer available.</p>
              <Button asChild>
                <Link to="/careers">View open roles</Link>
              </Button>
            </div>
          ) : (
            <>
              <SEO
                title={`${job.title} · Careers`}
                description={job.description.slice(0, 160) || `${job.title} - ${job.team} - ${job.location}`}
                canonicalPath={`/careers/${job.slug}`}
                type="article"
                jsonLd={{
                  "@context": "https://schema.org",
                  "@type": "JobPosting",
                  title: job.title,
                  description: job.description,
                  datePosted: job.published_at ?? job.created_at,
                  employmentType: job.employment_type,
                  hiringOrganization: {
                    "@type": "Organization",
                    name: "Intraverse",
                    sameAs: "https://intraverse.africa",
                  },
                  jobLocation: {
                    "@type": "Place",
                    address: { "@type": "PostalAddress", addressLocality: job.location },
                  },
                  ...(job.salary_min && job.salary_max
                    ? {
                        baseSalary: {
                          "@type": "MonetaryAmount",
                          currency: job.salary_currency ?? "USD",
                          value: {
                            "@type": "QuantitativeValue",
                            minValue: Number(job.salary_min),
                            maxValue: Number(job.salary_max),
                            unitText: "YEAR",
                          },
                        },
                      }
                    : {}),
                }}
              />

              <div className="mb-8">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
                  {job.team}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{job.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {job.employment_type}</span>
                  <span className="inline-flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {job.team}</span>
                  {formatSalary(job.salary_min, job.salary_max, job.salary_currency) && (
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4" /> {formatSalary(job.salary_min, job.salary_max, job.salary_currency)}
                    </span>
                  )}
                </div>
              </div>

              {job.description && (
                <section className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-3">About the role</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{job.description}</p>
                </section>
              )}

              {job.responsibilities && (
                <section className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-3">Responsibilities</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    {renderList(job.responsibilities).map((l, i) => (
                      <li key={i} className="flex gap-2"><span className="text-primary mt-1">•</span><span>{l}</span></li>
                    ))}
                  </ul>
                </section>
              )}

              {job.requirements && (
                <section className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-3">Requirements</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    {renderList(job.requirements).map((l, i) => (
                      <li key={i} className="flex gap-2"><span className="text-primary mt-1">•</span><span>{l}</span></li>
                    ))}
                  </ul>
                </section>
              )}

              <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row gap-3">
                {job.apply_url ? (
                  <a href={job.apply_url} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Apply for this role
                    </Button>
                  </a>
                ) : (
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Apply via Contact
                    </Button>
                  </Link>
                )}
                <Link to="/careers">
                  <Button variant="outline" size="lg">View other roles</Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
