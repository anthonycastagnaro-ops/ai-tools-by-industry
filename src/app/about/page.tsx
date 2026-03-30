import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

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
    <Container className="space-y-8 py-16">
      <SectionHeading
        eyebrow="About"
        title="Built to help business buyers choose AI tools faster"
        description="This site organizes AI recommendations around industry workflows instead of generic lists. The goal is to make software research easier for operators, marketers, and service teams with real revenue pressure."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          "Every industry page is built around practical jobs-to-be-done, not empty feature lists.",
          "Tool pages explain where a product fits, where it falls short, and which alternatives buyers should compare.",
          "Comparison pages turn high-intent search traffic into clearer decisions and stronger internal linking.",
        ].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </Container>
  );
}
