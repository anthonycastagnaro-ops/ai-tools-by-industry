import type { Metadata } from "next";

import { Container } from "@/components/container";
import { IndustryCard } from "@/components/industry-card";
import { SectionHeading } from "@/components/section-heading";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Browse industry-specific guides covering the best AI tools for service businesses, agencies, and local operators.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <Container className="space-y-10 py-16">
      <SectionHeading
        eyebrow="All Industries"
        title="Best AI tools for 20 business categories"
        description="Start with the industry that matches your business model, then use the linked tool and comparison pages to narrow your shortlist."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry) => (
          <IndustryCard key={industry.slug} industry={industry} />
        ))}
      </div>
    </Container>
  );
}
