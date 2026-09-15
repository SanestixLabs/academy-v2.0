import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Real, deployable AI automation projects students build during the Sanestix Academy program — lead qualification agents, support bots, voice AI and more.",
  path: "/projects",
});

const projects = [
  {
    tag: "Client CRM",
    title: "AI Lead Qualification Agent",
    detail: "An automated pipeline that scores and routes inbound leads to the right sales rep.",
  },
  {
    tag: "E-commerce",
    title: "Order Support Automation",
    detail: "A support agent that resolves order-status and returns questions without a human in the loop.",
  },
  {
    tag: "Real estate",
    title: "Property Inquiry Assistant",
    detail: "Qualifies buyers, schedules viewings, and syncs conversations back to the CRM.",
  },
  {
    tag: "Content",
    title: "Social Content Pipeline",
    detail: "Researches, drafts, and schedules multi-platform posts on a recurring cadence.",
  },
  {
    tag: "Ops",
    title: "Internal Reporting Bot",
    detail: "Pulls data from multiple tools and delivers a daily summary to a team channel.",
  },
  {
    tag: "Voice",
    title: "AI Phone Receptionist",
    detail: "Answers calls, qualifies callers, and books appointments around the clock.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Systems built during the program, not toy demos."
        description="Every project is scoped like real client work — so your portfolio is proof, not theory."
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title}>
                <Badge tone="neutral">{project.tag}</Badge>
                <h3 className="mt-4 text-lg font-semibold text-ink">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Build a portfolio you can put in front of real clients."
        description="Join Cohort 04 and ship projects like these over 2 months of weekend classes."
      />
    </>
  );
}
