import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/sections/PageHeader";
import { PricingCard } from "@/components/sections/PricingCard";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { courseModules, siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";
import { BrainCircuit, Bot, Mic, Globe, ShoppingBag, Megaphone, Trophy } from "lucide-react";

const iconMap: Record<string, { icon: any, color: string }> = {
  "ai-foundations": { icon: BrainCircuit, color: "text-[#10B981]" },
  "ai-agents": { icon: Bot, color: "text-[#10B981]" },
  "voice-agents": { icon: Mic, color: "text-blue-500" },
  "ai-websites": { icon: Globe, color: "text-blue-500" },
  "ecommerce-ai": { icon: ShoppingBag, color: "text-[#10B981]" },
  "meta-ads": { icon: Megaphone, color: "text-pink-500" },
  "client-acquisition": { icon: Trophy, color: "text-yellow-500" },
};

export const metadata: Metadata = pageMetadata({
  title: "Course Curriculum",
  description:
    "2 months, live weekend classes (Sat & Sun) — the full Sanestix Academy curriculum covering AI automation, AI agents, calling agents, AI websites and a freelancing & agency module. Enroll for PKR 4,990 (was PKR 9,990).",
  path: "/course",
});

export default function CoursePage() {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Sanestix Academy — AI Automation, Agents & Freelancing Program",
    description:
      "A 2-month, live weekend program (Saturdays & Sundays) covering AI automation, AI agents, calling agents, AI websites, and a freelancing & agency module.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "P2M",
      courseSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        byDay: ["Saturday", "Sunday"],
        repeatCount: 8,
      },
    },
    offers: {
      "@type": "Offer",
      price: siteConfig.pricing.current,
      priceCurrency: siteConfig.pricing.currency,
      availability: "https://schema.org/LimitedAvailability",
      url: `${siteConfig.url}/enroll`,
    },
  };

  return (
    <>
      <JsonLd data={courseJsonLd} />
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/50 pt-16 md:pt-24 border-b border-surface-border">
        <Container className="relative z-10 text-center">
          <Badge>The Curriculum</Badge>
          <h1 className="mt-6 mx-auto max-w-4xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Go from <span className="text-brand-cyan">Theory</span> to <span className="text-brand-cyan">Autonomous Systems</span>.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink-soft">
            Stop watching basic tutorials. Every Saturday and Sunday you'll build something real — from complex AI agents and calling bots, to modern AI websites and a freelancing system you can actually sell.
          </p>
        </Container>
        
        <div className="relative mt-12 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-[21/9] rounded-t-2xl md:rounded-t-3xl overflow-hidden shadow-[0_-8px_30px_rgb(0,0,0,0.04)] border-t border-x border-surface-border bg-white">
            <Image 
              src="/images/curriculum-hero.png"
              alt="Curriculum Masterclass"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>



      <section className="py-16 md:py-20 bg-surface">
        <Container>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courseModules.map((module) => {
              const projectTopic = module.topics.find((t) => t.startsWith("Project:"));
              const regularTopics = module.topics.filter((t) => !t.startsWith("Project:"));
              const modMeta = iconMap[module.id] || { icon: BrainCircuit, color: "text-ink" };
              const IconComponent = modMeta.icon;
              
              return (
                <div
                  key={module.id}
                  className="flex flex-col bg-white rounded-2xl shadow-[0_4px_24px_rgb(0,0,0,0.06)] border border-surface-border/40 p-6 transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
                >
                  <div className="mb-6 h-12 flex items-center justify-start">
                    <IconComponent className={`w-10 h-10 ${modMeta.color}`} strokeWidth={2} />
                  </div>
                  <div className="text-[11px] font-bold text-ink-muted mb-2 uppercase tracking-wider">{module.range}</div>
                  <h3 className="font-bold text-ink mb-2 text-sm leading-snug">{module.title}</h3>
                  <p className="text-[13px] text-ink-soft leading-relaxed mb-6">{module.summary}</p>
                  
                  <ul className="space-y-2 flex-1">
                    {regularTopics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-soft">
                        <span className="mt-0.5 flex h-3 w-3 flex-none items-center justify-center rounded-full bg-brand-50 text-[8px] font-bold text-brand-blue">
                          ✓
                        </span>
                        {topic}
                      </li>
                    ))}
                  </ul>

                  {projectTopic && (
                    <div className="mt-6 pt-4 border-t border-surface-border">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-cyan mb-1">Capstone</span>
                      <span className="text-[12px] font-semibold text-brand-deep leading-snug">
                        🏆 {projectTopic.replace("Project: ", "")}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <PricingCard className="border-t border-surface-border bg-surface-alt" />

      <CTASection />
    </>
  );
}
