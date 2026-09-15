import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { EnrollForm } from "@/components/forms/EnrollForm";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Enroll",
  description:
    "Reserve your seat in the next Sanestix Academy live weekend cohort — AI automation, AI agents, calling agents, AI websites & a freelancing/agency module. PKR 4,990 (was PKR 9,990).",
  path: "/enroll",
});

export default function EnrollPage() {
  const { pricing, schedule, cohort } = siteConfig;

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-16 md:py-20 bg-surface">
      <Container className="max-w-xl">
        <div className="text-center mb-10">
          <Badge>Enroll</Badge>
          <h1 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Reserve your seat — {cohort.label}
          </h1>
          <p className="mt-4 text-base text-ink-soft">
            {schedule.duration} of live classes, {schedule.days.toLowerCase()}. Seats are limited to keep the cohort hands-on.
          </p>
        </div>

        <Card className="flex flex-col border border-surface-border bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-ink mb-2">
              Secure your spot
            </h3>
            <p className="text-sm text-ink-soft mb-8">
              Fill out the form below and we'll send you the payment details to finalize your enrollment.
            </p>

            <EnrollForm />

            <div className="mt-8 flex items-center justify-center gap-3 border-t border-surface-border pt-6">
              <span className="text-xs text-ink-muted font-medium">Or talk to us directly:</span>
              <a 
                href="https://wa.me/923014422951" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-1.5 text-xs font-bold text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
