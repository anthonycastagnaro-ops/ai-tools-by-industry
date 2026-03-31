import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AI Tools by Industry about partnerships, corrections, or editorial feedback.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Container className="space-y-10 py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Editorial feedback, corrections, and partnership inquiries"
        description="Use this page if you need to suggest a correction, recommend a tool for review, or reach out about a legitimate partnership or affiliate program relationship."
      />
      <p className="text-sm font-medium text-slate-500">
        Editorial inbox reviewed monthly. Last updated March 2026.
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm leading-8 text-slate-600">
            Email:{" "}
            <a
              href="mailto:hello@aitoolsbyindustry.com"
              className="font-semibold text-slate-950"
            >
              hello@aitoolsbyindustry.com
            </a>
          </p>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            Response goal: within two business days for editorial corrections,
            partnership inquiries, and site feedback.
          </p>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            Please use a business email for vendor, media, and affiliate
            outreach so requests can be reviewed and routed faster.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">What to include</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            For corrections, include the page URL and the specific change
            needed. For partnerships, include your program details, commission
            structure, and the product pages that best explain your offer.
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
          href="/privacy"
          className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          Privacy policy
        </Link>
        <Link
          href="/industries"
          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Browse industry guides
        </Link>
      </div>
    </Container>
  );
}
