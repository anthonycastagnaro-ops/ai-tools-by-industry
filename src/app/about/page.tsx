import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { WhyTrust } from "@/components/why-trust";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how AI Tools by Industry researches software and structures industry-specific buyer guides.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <Container className="space-y-10 py-16">
      <SectionHeading
        eyebrow="About"
        title="An editorial-style site for AI software buyers"
        description="AI Tools by Industry is designed to help business owners, operators, and service teams research AI software with more confidence. The site is organized around business models and workflows instead of generic top-10 lists."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Mission</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            The mission is to make AI software research clearer for business
            owners and operators who do not have time to sort through generic
            roundups, unclear vendor claims, or scattered recommendations.
          </p>
        </article>
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Editorial buyer guide positioning</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            Recommendations are framed around likely use cases, operational fit,
            and workflow impact. Pages are written to be clear enough for
            readers and credible enough for affiliate partners reviewing the
            site before approval.
          </p>
        </article>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">How we test tools</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            The site evaluates tools by looking at workflow fit, buyer intent,
            clarity of use case, pricing posture, and how often a tool appears
            in real-world shortlists for specific industries. The aim is not to
            publish a lab-style benchmark, but to help buyers understand which
            products deserve serious consideration.
          </p>
        </article>
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Editorial standards</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            Pages are meant to be commercially useful without becoming thin or
            overly promotional. The standard is simple: every page should help a
            real buyer move toward a better decision with clearer reasoning,
            stronger context, and obvious next steps.
          </p>
        </article>
      </div>
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-950">How the site is structured</h2>
        <p className="mt-4 text-sm leading-8 text-slate-600">
          Industry pages identify common bottlenecks, tool pages explain fit and
          tradeoffs, and comparison pages help buyers decide between overlapping
          options. That structure is meant to support real buying journeys, not
          just search traffic.
        </p>
      </div>
      <WhyTrust
        items={[
          "Content is organized around decision support and internal clarity, not thin filler pages.",
          "Core trust pages are visible and written in a professional, publication-style format.",
          "The site is structured to be maintainable as more industries, tools, and comparisons are added over time.",
        ]}
      />
      <div className="flex flex-wrap gap-3">
        <Link
          href="/industries"
          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Browse industries
        </Link>
        <Link
          href="/disclosure"
          className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          Read disclosure
        </Link>
      </div>
    </Container>
  );
}
