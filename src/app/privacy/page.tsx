import type { Metadata } from "next";

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
    <Container className="space-y-8 py-16">
      <SectionHeading
        eyebrow="Privacy"
        title="Privacy policy"
        description="AI Tools by Industry may use standard website analytics, referral links, and basic contact information when users reach out. The site is designed as an informational publishing property and does not require account creation."
      />
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-sm leading-8 text-slate-600 shadow-sm">
        <p>
          We may collect anonymous usage data such as page views, referral
          sources, and device information to understand which content helps
          visitors most. If you contact us directly, we may store your email and
          message so we can respond.
        </p>
        <p className="mt-5">
          External links may direct you to third-party websites with their own
          privacy practices. Review those policies before sharing personal or
          business information.
        </p>
      </div>
    </Container>
  );
}
