import { Container } from "@/components/ui/Container";

export type LegalSection = {
  heading: string;
  body: string;
};

export function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="py-16 md:py-20">
      <Container className="max-w-2xl">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold text-ink">{section.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{section.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
