import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Read the affiliate disclosure for AI Tools by Industry and how monetization is handled on tool and comparison pages.",
  alternates: {
    canonical: "/disclosure",
  },
};

export default function DisclosurePage() {
  return (
    <Container className="space-y-8 py-16">
      <SectionHeading
        eyebrow="Disclosure"
        title="Affiliate disclosure"
        description="Some links on this site are affiliate links. If a visitor clicks through and signs up, the site may earn a commission at no additional cost to the buyer."
      />
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-sm leading-8 text-slate-600 shadow-sm">
        <p>
          Editorial recommendations are organized around product fit,
          usefulness, and business workflow alignment. Monetization does not
          guarantee a tool placement, and buyers should always validate current
          pricing, terms, and capabilities before purchasing.
        </p>
      </div>
    </Container>
  );
}
