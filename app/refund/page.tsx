import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LegalContent } from "@/components/sections/LegalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Refund Policy",
  description: "Sanestix Academy's refund policy for cohort enrollments.",
  path: "/refund",
});

const sections = [
  {
    heading: "Eligibility window",
    body: "You may request a full refund within the first week of the cohort start date, provided you have attended no more than one live class.",
  },
  {
    heading: "How to request a refund",
    body: "Email info@sanestix.com with your enrollment details. Refunds are processed to the original payment method within 5–10 business days.",
  },
  {
    heading: "After the eligibility window",
    body: "Once the refund window has closed, enrollment fees are non-refundable, as your seat has reserved a place in a limited-capacity live cohort.",
  },
];

export default function RefundPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Refund Policy"
        description="What to expect if a cohort isn't the right fit."
      />
      <LegalContent sections={sections} />
    </>
  );
}
