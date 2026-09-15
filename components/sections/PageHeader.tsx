import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-surface-border bg-surface-alt py-16 md:py-20">
      <Container>
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">{description}</p>
      </Container>
    </section>
  );
}
