import type { Metadata } from "next";
import Link from "next/link";

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
    <Container className="space-y-10 py-16">
      <SectionHeading
        eyebrow="Disclosure"
        title="Affiliate disclosure"
        description="Some outbound links on this site may be affiliate links. If a reader clicks through and later purchases or signs up, the site may earn a commission at no additional cost to that reader."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-sm leading-8 text-slate-600 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Editorial intent</h2>
          <p className="mt-4">
            Recommendations are organized around product fit, workflow
            usefulness, and buyer clarity. Monetization does not guarantee tool
            placement, and not every reviewed page needs to push readers toward
            an affiliate action.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-sm leading-8 text-slate-600 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Reader responsibility</h2>
          <p className="mt-4">
            Buyers should still validate current pricing, product availability,
            support terms, and policy details directly with the vendor before
            making a purchase decision.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/about"
          className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          About the site
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          Contact us
        </Link>
      </div>
    </Container>
  );
}
