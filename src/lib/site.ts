import type { Metadata } from "next";

export const siteConfig = {
  name: "AI Tools by Industry",
  shortName: "AI Tools",
  description:
    "Find the best AI tools for every business type with side-by-side recommendations, buyer guides, and revenue-ready comparisons.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.aitoolsbyindustry.com",
};

export const buildAbsoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Best AI Software for Growing Businesses`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  verification: {
    google: "GOOGLE_VERIFICATION_CODE_HERE",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};
