import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ComparisonTable } from "@/components/comparison-table";
import { Container } from "@/components/container";
import { FaqList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";
import { industries } from "@/data/industries";
import { buildAbsoluteUrl } from "@/lib/site";
import {
  getComparisonUrl,
  getIndustryBySlug,
  getIndustryFaqs,
  getIndustryUrl,
  getToolHighlightsForIndustry,
  getToolUrl,
  getToolsForIndustry,
} from "@/lib/utils";

const formatComparisonLabel = (comparisonSlug: string) =>
  comparisonSlug
    .split("-vs-")
    .map((part) =>
      part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    )
    .join(" vs ");

type Props = {
  params: Promise<{ industryPage: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({
    industryPage: `best-ai-tools-for-${industry.slug}`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industryPage } = await params;
  const slug = industryPage.replace(/^best-ai-tools-for-/, "");
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {};
  }

  const title = `Best AI Tools for ${industry.name} (2026)`;
  const description = `Explore the best AI tools for ${industry.name.toLowerCase()} with real use cases, comparison tables, FAQs, and revenue-focused recommendations.`;
  const path = getIndustryUrl(industry.slug);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: buildAbsoluteUrl(path),
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { industryPage } = await params;
  const slug = industryPage.replace(/^best-ai-tools-for-/, "");
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const tools = getToolsForIndustry(industry);
  const faqs = getIndustryFaqs(industry);
  const comparisonRows = tools.map((tool) => [
    tool.name,
    tool.bestUseCase,
    tool.category,
    tool.pricing,
  ]);

  return (
    <div className="pb-20">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/industries", label: "Industries" },
          { label: industry.name },
        ]}
      />

      <Container className="space-y-16 py-10">
        <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand)] uppercase">
              Industry Guide
            </p>
            <h1 className="font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
              Best AI Tools for {industry.name} (2026)
            </h1>
            <p className="text-lg leading-8 text-slate-600">{industry.intro}</p>
            <p className="text-base leading-8 text-slate-600">
              This guide focuses on teams dealing with {industry.painPoint}. The
              goal is to help {industry.audience.toLowerCase()} choose software
              that saves time, improves consistency, and supports revenue.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-[var(--surface-alt)] p-6">
            <p className="text-sm font-semibold text-slate-900">
              Strongest jobs to automate or accelerate
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              {industry.jobsToBeDone.map((job) => (
                <li key={job} className="rounded-2xl bg-white px-4 py-3">
                  {job}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Top Picks"
            title={`Top AI tools for ${industry.name.toLowerCase()}`}
            description="Use these recommendations as a starting stack, then visit the tool pages for pricing, alternatives, and direct comparisons."
          />
          <div className="space-y-6">
            {tools.map((tool, index) => {
              const highlights = getToolHighlightsForIndustry(industry, tool);
              return (
                <article
                  key={tool.slug}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <div className="max-w-3xl space-y-4">
                      <p className="text-xs font-semibold tracking-[0.2em] text-[var(--brand)] uppercase">
                        #{index + 1} {tool.category}
                      </p>
                      <h2 className="text-3xl font-semibold text-slate-950">
                        {tool.name}
                      </h2>
                      <p className="text-base leading-8 text-slate-600">
                        {highlights.description}
                      </p>
                      <p className="text-sm font-medium leading-7 text-slate-800">
                        Best use case: {highlights.bestUseCase}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={getToolUrl(tool.slug)}
                        className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Read review
                      </Link>
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="noreferrer noopener sponsored"
                        className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                      >
                        Try Tool
                      </a>
                    </div>
                  </div>
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase">
                        Pros
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                        {highlights.pros.map((pro) => (
                          <li key={pro}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase">
                        Cons
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                        {highlights.cons.map((con) => (
                          <li key={con}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Comparison Table"
            title={`Quick comparison for ${industry.name.toLowerCase()} buyers`}
            description="Use this table to shortlist the right mix of assistant, workflow, and specialist tools for your business."
          />
          <ComparisonTable
            headers={["Tool", "Best Use Case", "Category", "Pricing"]}
            rows={comparisonRows}
          />
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="FAQ"
            title={`${industry.name} AI tools FAQ`}
            description="Common questions buyers ask before choosing an AI stack for this niche."
          />
          <FaqList faqs={faqs} />
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Related Industries"
              title="Explore similar business types"
              description="These guides cover adjacent workflows and often surface useful alternative tools."
            />
            <div className="flex flex-wrap gap-3">
              {industry.relatedSlugs.map((relatedSlug) => {
                const relatedIndustry = getIndustryBySlug(relatedSlug);
                if (!relatedIndustry) return null;
                return (
                  <Link
                    key={relatedSlug}
                    href={getIndustryUrl(relatedSlug)}
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                  >
                    {relatedIndustry.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Compare Tools"
              title="Popular head-to-head pages"
              description="Comparison pages create deeper internal linking and help buyers make a final decision."
            />
            <div className="space-y-3">
              {industry.featuredComparisonSlugs.map((comparisonSlug) => (
                <Link
                  key={comparisonSlug}
                  href={getComparisonUrl(
                    comparisonSlug.split("-vs-")[0],
                    comparisonSlug.split("-vs-")[1],
                  )}
                  className="block rounded-2xl bg-[var(--surface-alt)] px-4 py-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {formatComparisonLabel(comparisonSlug)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
