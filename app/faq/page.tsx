import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { FAQAccordion, type FAQItem } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about Sanestix Academy — price, weekend schedule, modules covered (AI automation, AI agents, calling agents, AI websites, freelancing & agency), and refunds.",
  path: "/faq",
});

const faqs: FAQItem[] = [
  {
    question: "How much does Sanestix Academy cost?",
    answer: `Sanestix Academy is ${siteConfig.pricing.currencySymbol} ${siteConfig.pricing.current.toLocaleString()} for the full 2-month program, down from ${siteConfig.pricing.currencySymbol} ${siteConfig.pricing.original.toLocaleString()} — a ${siteConfig.pricing.discountPercent}% early-bird discount for a limited number of seats each cohort.`,
  },
  {
    question: "What is the class schedule?",
    answer: `Classes are live and held every ${siteConfig.schedule.days}, ${siteConfig.schedule.classesPerWeek} classes a week, for ${siteConfig.schedule.duration} — ${siteConfig.schedule.totalClasses} classes in total. Every class is recorded if you need to catch up.`,
  },
  {
    question: "What topics does the course cover?",
    answer:
      "Five modules: AI Automation, AI Agents, Calling Agents (voice AI), AI Websites, and a Freelancing & Agency module that teaches you how to package and sell what you've built.",
  },
  {
    question: "Do I need coding experience to join?",
    answer:
      "No. The program is designed for beginners to AI automation. Some comfort with computers and a willingness to learn is enough — we build from the fundamentals up.",
  },
  {
    question: "What will I have built by the end?",
    answer:
      "A portfolio of real, deployable AI automation, agent, calling agent, and website projects modeled on client work, plus the pricing and outreach skills to start acquiring your first clients as a freelancer or agency.",
  },
  {
    question: "Is there support after the cohort ends?",
    answer:
      "Yes — enrollment includes lifetime access to recordings and resources, so you can revisit material as you keep building.",
  },
  {
    question: "What's the refund policy?",
    answer:
      "Details are on our refund policy page. In short, we want you to enroll with confidence and outline the terms clearly before you join.",
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered."
        description="Everything you need to know before joining Cohort 04."
      />

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <FAQAccordion items={faqs} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
