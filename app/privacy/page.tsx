import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LegalContent } from "@/components/sections/LegalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Sanestix Academy collects, uses, and protects your data.",
  path: "/privacy",
});

const sections = [
  {
    heading: "Information we collect",
    body: "We collect the information you provide when you enroll or contact us — such as your name, email, and payment details — along with basic usage data to improve the program.",
  },
  {
    heading: "How we use your information",
    body: "We use your information to run the program, communicate with you about classes and enrollment, and improve the Academy experience.",
  },
  {
    heading: "Data sharing",
    body: "We do not sell your personal information. We share data only with service providers who help us operate the program, such as payment and email providers.",
  },
  {
    heading: "Your choices",
    body: "You can request access to, correction of, or deletion of your data at any time by contacting info@sanestix.com.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated as of the current cohort. Contact us with any questions."
      />
      <LegalContent sections={sections} />
    </>
  );
}
