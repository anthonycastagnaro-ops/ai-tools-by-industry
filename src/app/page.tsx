import Link from "next/link";

import { Container } from "@/components/container";
import { EmailCapture } from "@/components/email-capture";
import { IndustryCard } from "@/components/industry-card";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { WhyTrust } from "@/components/why-trust";
import {
  getFeaturedIndustries,
  getFeaturedTools,
  getTopToolsThisMonth,
} from "@/lib/utils";

const featuredIndustries = getFeaturedIndustries();
const featuredTools = getFeaturedTools();
const topToolsThisMonth = getTopToolsThisMonth();

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-slate-200/70">
        <Container className="grid gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div className="space-y-8">
            <p className="text-sm font-semibold tracking-[0.24em] text-[var(--brand)] uppercase">
              AI buyer guides for operators who want faster growth
            </p>
            <div className="space-y-6">
              <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight text-slate-950 sm:text-6xl">
                Find the best AI tools to save time, grow revenue, and run your business more efficiently
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Explore industry-specific buyer guides, tool reviews, and
                head-to-head comparisons built to help business owners increase
                revenue, cut manual work, and choose the right AI stack faster.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/industries"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                See Best Tools
              </Link>
              <Link
                href="/compare/chatgpt-vs-claude"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Compare Top Picks
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
            {[
              "20 tailored industry buyer guides",
              "15 editorial-style tool reviews",
              "105 comparison pages for deeper decision support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[var(--surface-alt)] px-5 py-4 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70">
                Revenue-ready structure
              </p>
              <p className="mt-3 text-lg leading-8 text-white/90">
                Pages are built to help buyers shortlist tools quickly, validate
                fit, and keep moving through the site without feeling pushed
                into a decision too early.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured Industries"
            title="High-intent AI buyer guides by niche"
            description="Each page is optimized around a specific industry pain point and links naturally into tool reviews and comparison pages."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredIndustries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="How To Use The Site"
            title="How this site works"
            description="The site is designed to move buyers from broad research to a focused shortlist without making the process feel overwhelming."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "1. Pick your industry",
                body: "Every industry page is tailored around the bottlenecks that matter most in that niche.",
                href: "/industries",
                label: "Browse industries",
              },
              {
                title: "2. Review the top tools",
                body: "Tool pages explain strengths, tradeoffs, best-fit industries, and close alternatives.",
                href: "/tools/chatgpt",
                label: "See a tool page",
              },
              {
                title: "3. Use a comparison page",
                body: "Head-to-head pages are meant to make final decisions clearer when two tools overlap.",
                href: "/compare/chatgpt-vs-claude",
                label: "Open a comparison",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                <Link
                href={item.href}
                className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                  {item.label}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <WhyTrust
            items={[
              "Pages are organized around business workflows and real buying questions, not generic software lists.",
              "Tool reviews and comparison pages are designed to help buyers understand fit, tradeoffs, and likely ROI before clicking out.",
              "The site includes clear About, Contact, Privacy, and Disclosure pages so affiliate partners and readers can evaluate the property like a real publication.",
            ]}
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Top Tools This Month"
            title="Top AI tools this month"
            description="These are the strongest all-around picks on the site right now for operators who want clear ROI, fast setup, and real workflow leverage."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {topToolsThisMonth.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured Tools"
            title="Popular AI software buyers keep comparing"
            description="These review pages anchor the site’s internal linking structure and help readers move from discovery to a stronger final decision."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <EmailCapture />
      </Container>
    </div>
  );
}
