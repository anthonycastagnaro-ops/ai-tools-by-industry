import type { MetadataRoute } from "next";

import { industries } from "@/data/industries";
import { tools } from "@/data/tools";
import { buildAbsoluteUrl } from "@/lib/site";
import { allComparisonSlugs } from "@/lib/utils";

const lastModified = new Date("2026-03-30T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/industries",
    "/about",
    "/contact",
    "/privacy",
    "/disclosure",
  ];

  return [
    ...staticPages.map((path) => ({
      url: buildAbsoluteUrl(path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...industries.map((industry) => ({
      url: buildAbsoluteUrl(`/best-ai-tools-for-${industry.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...tools.map((tool) => ({
      url: buildAbsoluteUrl(`/tools/${tool.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...allComparisonSlugs.map((comparison) => ({
      url: buildAbsoluteUrl(`/compare/${comparison}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
