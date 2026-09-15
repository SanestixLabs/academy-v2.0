import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { programPillars, stats } from "@/lib/site-config";

export function FeatureGrid() {
  return (
    <section className="border-t border-surface-border bg-white py-16 md:py-24">
      <Container>
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            A New Standard in AI Education
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-ink sm:text-4xl">
            From Theory to Autonomous Systems
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
            We move beyond standard chatbot tutorials. Learn to architect complex agentic workflows, deploy real-world automation, and build highly scalable AI systems.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programPillars.map((pillar) => (
            <div key={pillar.title} className="group flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-blue transition-colors duration-150 group-hover:bg-brand-gradient group-hover:text-white">
                <Icon name={pillar.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl border border-surface-border bg-surface-alt p-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-brand-blue sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <ButtonLink href="/enroll" className="shadow-button !px-8 !py-4 text-base">
            Join the Next Cohort →
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
