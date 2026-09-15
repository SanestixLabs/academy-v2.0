import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { FomoTimer } from "@/components/ui/FomoTimer";
import { siteConfig } from "@/lib/site-config";

const included = [
  "5 modules: AI Automation, AI Agents, Calling Agents, AI Websites & Agency",
  "16+ live weekend classes (Saturdays & Sundays)",
  "Real, client-style projects in every module",
  "Direct guidance from Sanestix operators",
  "Lifetime access to recordings & resources",
  "Freelancing & agency playbook to land your first clients",
];

type PricingCardProps = {
  id?: string;
  className?: string;
};

export function PricingCard({ id, className = "" }: PricingCardProps) {
  const { pricing, schedule, cohort } = siteConfig;

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-surface-alt px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-gradient opacity-10 blur-[80px]"
            aria-hidden="true"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
            <div>
              <Badge>{cohort.label} pricing</Badge>
              <h2 className="mt-5 text-balance font-display text-3xl font-bold text-ink sm:text-4xl leading-tight">
                {schedule.duration} of live, weekend AI training
              </h2>
              <p className="mt-4 text-base text-ink-soft font-medium">
                {schedule.days} &bull; {schedule.classesPerWeek} classes a week &bull;{" "}
                {schedule.totalClasses} live classes &bull; {schedule.format}
              </p>

              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-cyan/10 text-sm font-bold text-brand-cyan">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-surface-border/50 sm:text-center lg:w-[340px] xl:w-[380px]">
              <div className="inline-flex mx-auto items-center justify-center rounded-full bg-brand-50 px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-brand-cyan">
                {pricing.discountPercent}% OFF — LIMITED SEATS
              </div>
              
              <FomoTimer />

              <div className="flex flex-col items-center justify-center gap-1 mb-3">
                <span className="text-base font-semibold text-ink-muted line-through decoration-brand-cyan/40 decoration-2">
                  {pricing.currencySymbol} {pricing.original.toLocaleString()}
                </span>
                <span className="font-display text-5xl font-extrabold tracking-tight text-ink">
                  {pricing.currencySymbol}{pricing.current.toLocaleString()}
                </span>
              </div>
              <p className="text-sm font-medium text-ink-muted leading-relaxed mb-8 px-2">{pricing.note}</p>
              <ButtonLink href="/enroll" className="w-full !py-4 text-base shadow-button hover:-translate-y-1 transition-transform">
                Reserve Your Seat →
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
