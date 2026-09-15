import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LegalContent } from "@/components/sections/LegalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms governing enrollment in and use of Sanestix Academy.",
  path: "/terms",
});

const sections = [
  {
    heading: "Enrollment",
    body: "By enrolling, you agree to attend classes in good faith and use provided materials for personal, non-commercial redistribution purposes.",
  },
  {
    heading: "Program changes",
    body: "Sanestix Academy may adjust class schedules, instructors, or curriculum details between cohorts to improve the program.",
  },
  {
    heading: "Intellectual property",
    body: "Course materials remain the property of Sanestix. You retain ownership of the projects you build during the program.",
  },
  {
    heading: "Limitation of liability",
    body: "The Academy provides education and guidance; outcomes such as client acquisition or income depend on individual effort and are not guaranteed.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that apply when you join Sanestix Academy."
      />
      <LegalContent sections={sections} />
    </>
  );
}
