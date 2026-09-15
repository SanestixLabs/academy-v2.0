import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to Architect the Future?",
  description = "Join an elite live cohort. Stop watching basic tutorials and start building real, profitable autonomous AI systems.",
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-brand-deep px-8 py-14 text-center sm:px-16 sm:py-20 lg:py-24">
          <Image
            src="/images/cta-bg.png"
            alt="CTA Background"
            fill
            className="object-cover object-center pointer-events-none"
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/80 via-transparent to-brand-deep/80 pointer-events-none" />
          
          <h2 className="relative z-10 mx-auto max-w-xl text-balance font-display text-2xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-md text-sm text-white/90">{description}</p>
          <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/enroll" className="!bg-brand-mint !text-brand-deep font-bold shadow-[0_4px_20px_rgba(134,239,172,0.4)] hover:brightness-110 !border-0 px-8 py-3">Reserve Your Seat →</ButtonLink>
            <ButtonLink href="/faq" variant="secondary" className="!bg-transparent !text-white !border-white/20 hover:!border-white/40 hover:!bg-white/10 px-8 py-3">
              Read FAQ
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
