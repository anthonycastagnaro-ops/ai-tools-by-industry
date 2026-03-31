import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for AI Tools by Industry, including analytics, links, and communication practices.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <Container className="space-y-10 py-16">
      <SectionHeading
        eyebrow="Privacy"
        title="Privacy policy"
        description="AI Tools by Industry is an informational publishing site. This page explains how basic analytics, email communication, and outbound links are handled."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-sm leading-8 text-slate-600 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Data we may collect</h2>
          <p className="mt-4">
            The site may collect anonymous usage information such as page views,
            referral sources, device type, and broad engagement patterns. If
            you contact the site directly, your email address and message may be
            stored so a response can be provided.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-sm leading-8 text-slate-600 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Third-party links</h2>
          <p className="mt-4">
            Some pages link to third-party software vendors, affiliate programs,
            or partner sites. Those destinations have their own privacy
            practices, terms, and tracking policies, which should be reviewed
            independently before sharing personal or business information.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/disclosure"
          className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          View disclosure
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
