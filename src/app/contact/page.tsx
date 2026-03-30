import type { Metadata } from "next";

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
    <Container className="space-y-8 py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Editorial feedback, partnerships, and corrections"
        description="Use the contact details below if you want to suggest a tool, request an update, or discuss a sponsorship or affiliate relationship."
      />
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
      </div>
    </Container>
  );
}
