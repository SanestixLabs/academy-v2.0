import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function pageMetadata({ title, description, path, keywords }: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${siteConfig.name}`,
      description,
    },
  };
}
