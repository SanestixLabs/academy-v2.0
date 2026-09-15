import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";

type VideoIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  duration?: string;
};

export function VideoIntro({
  eyebrow = "Watch first",
  title,
  description,
  duration = "2:15",
}: VideoIntroProps) {
  return (
    <section id="video" className="py-16 md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col text-center md:text-left items-center md:items-start">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-6">
            <ButtonLink href="/enroll" className="shadow-button !px-6 !py-3">Reserve Your Seat →</ButtonLink>
            <a
              href="#video-player"
              className="inline-flex items-center gap-3 text-sm font-semibold text-ink hover:text-brand-cyan transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-blue">
                <Icon name="play" className="h-4 w-4" />
              </span>
              Watch Video ({duration})
            </a>
          </div>
        </div>

        <div id="video-player" className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl shadow-card bg-brand-deep">
          <iframe
            className="absolute inset-0 w-full h-full border-0"
            src="https://www.youtube.com/embed/LzbWEi-Uq7I?si=_tmsQGBVhk1RwwW8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}
