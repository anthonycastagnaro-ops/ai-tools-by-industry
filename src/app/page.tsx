import Link from "next/link";

import { Container } from "@/components/container";
import { IndustryCard } from "@/components/industry-card";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { getFeaturedIndustries, getFeaturedTools } from "@/lib/utils";

const featuredIndustries = getFeaturedIndustries();
const featuredTools = getFeaturedTools();

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-slate-200/70">
        <Container className="grid gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div className="space-y-8">
            <p className="text-sm font-semibold tracking-[0.24em] text-[var(--brand)] uppercase">
              Programmatic SEO for AI software buyers
            </p>
            <div className="space-y-6">
              <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight text-slate-950 sm:text-6xl">
                Find the Best AI Tools for Any Business
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Explore industry-specific buyer guides, tool reviews, and
                head-to-head comparisons built to help business owners choose the
                right AI stack faster.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/industries"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Browse industries
              </Link>
              <Link
                href="/tools/chatgpt"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Explore featured tools
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
            {[
              "20 launch-ready industry pages",
              "15 tool pages with pricing, pros, and alternatives",
              "105 comparison pages for internal-link growth",
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
                Every template includes internal links, comparison hooks, and
                affiliate CTAs so the site can scale without redesigning the
                content model later.
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
            eyebrow="Featured Tools"
            title="Popular AI software buyers keep comparing"
            description="These tool pages anchor the site’s internal linking structure and make it easy to expand into new verticals."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
