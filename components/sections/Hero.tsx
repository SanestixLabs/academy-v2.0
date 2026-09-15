import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site-config";

import { RotatingText } from "@/components/ui/RotatingText";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* decorative dot grid, fades toward the edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #C7D2E0 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* decorative gradient blobs */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand-gradient opacity-[0.12] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-brand-gradient opacity-[0.08] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-8 md:gap-14 py-16 md:grid-cols-2 md:py-24">
        {/* Mobile Header (Badge + H1) */}
        <div className="flex flex-col items-center text-center md:hidden order-1 z-10">
          <div className="flex items-center justify-center gap-3">
            <Badge>{siteConfig.cohort.label}</Badge>
          </div>
          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl pb-2">
            Practical AI Skills<br />
            for <span className="text-brand-cyan"><RotatingText words={["a Real World.", "Freelancers.", "Agencies.", "Founders.", "Automators."]} /></span>
          </h1>
        </div>

        <div className="relative z-10 order-3 md:order-1 flex flex-col items-center text-center md:items-start md:text-left">
          {/* Desktop Header (Hidden on Mobile) */}
          <div className="hidden md:flex items-center justify-start gap-3">
            <Badge>{siteConfig.cohort.label}</Badge>
          </div>
          <h1 className="hidden md:block mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[4.5rem] pb-2">
            Practical AI Skills<br />
            for <span className="text-brand-cyan"><RotatingText words={["a Real World.", "Freelancers.", "Agencies.", "Founders.", "Automators."]} /></span>
          </h1>

          <p className="mt-2 md:mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            Hands-on courses to help you automate, build and deploy AI systems for real businesses — and get paid for your skills.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <ButtonLink href="/enroll" className="bg-brand-deep text-white border-0 hover:brightness-125">Reserve Your Seat →</ButtonLink>
            <ButtonLink href="#video" variant="secondary" className="border-surface-border text-ink bg-white font-medium">
              <Icon name="play" className="h-4 w-4 text-brand-deep" />
              Watch Intro Video
            </ButtonLink>
          </div>

          <p className="mt-7 text-xs font-medium text-ink-muted">
            {siteConfig.schedule.duration} &bull; {siteConfig.schedule.days} &bull; Live Classes
            <br className="md:hidden" />
            <span className="hidden md:inline"> &bull; </span>Real Projects &bull; Lifetime Access
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center order-2 md:order-2">
          <Image
            src="/images/hero-image-new.png"
            alt="Sanestix Academy"
            width={800}
            height={600}
            priority
            className="w-full h-auto object-contain scale-110 mix-blend-multiply"
          />
          {/* floating stack of topic chips, echoes the reference's book stack */}
          <div className="mt-2 flex flex-wrap justify-center gap-2 max-w-sm relative z-10">
            {["AI Automation", "AI Agents", "Calling Agents", "AI Websites", "Freelancing & Agency"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-surface-border bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm hover:border-brand-cyan hover:text-brand-cyan transition-colors cursor-default"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
