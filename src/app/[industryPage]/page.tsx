import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ComparisonTable } from "@/components/comparison-table";
import { Container } from "@/components/container";
import { EmailCapture } from "@/components/email-capture";
import { FaqList } from "@/components/faq-list";
import { AffiliateLink } from "@/components/affiliate-link";
import { SectionHeading } from "@/components/section-heading";
import { WhyTrust } from "@/components/why-trust";
import { affiliateLinks } from "@/data/affiliate-links";
import { industries } from "@/data/industries";
import { buildAbsoluteUrl } from "@/lib/site";
import {
  getComparisonUrl,
  getIndustryBySlug,
  getIndustryFaqs,
  getIndustryQuickPicks,
  getIndustryPainPoints,
  getIndustryUrl,
  getToolPricingUrl,
  getToolRecommendationReason,
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
  const painPoints = getIndustryPainPoints(industry);
  const quickPicks = getIndustryQuickPicks(industry);
  const comparisonRows = tools.map((tool) => [
    tool.name,
    tool.bestUseCase,
    tool.category,
    tool.pricing,
  ]);
  const primaryRecommendation = quickPicks[0]?.tool;

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
              This guide is written for {industry.audience.toLowerCase()} dealing
              with {industry.painPoint}. The aim is to help you identify which
              tools are actually worth trying first, not just add one more tool
              to evaluate.
            </p>
            <div className="flex flex-wrap gap-3">
              {primaryRecommendation ? (
                <>
                  <Link
                    href={getToolUrl(primaryRecommendation.slug)}
                    className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Most Businesses Should Start Here
                  </Link>
                  <Link
                    href={getToolPricingUrl(primaryRecommendation.slug)}
                    className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                  >
                    View Pricing
                  </Link>
                </>
              ) : null}
            </div>
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
            eyebrow="Quick Picks"
            title={`Best AI Tools for ${industry.name} (Quick Picks)`}
            description="If you want the fastest shortlist, start with these labeled picks before reading the full recommendations."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {quickPicks.map(({ label, tool }) => (
              <article
                key={`${label}-${tool.slug}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="inline-flex rounded-full bg-[var(--brand)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-white uppercase">
                  {label}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950">{tool.name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {getToolRecommendationReason(industry, tool)}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={getToolUrl(tool.slug)}
                    className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    See Why It&apos;s #1
                  </Link>
                  <Link
                    href={getToolPricingUrl(tool.slug)}
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                  >
                    View Pricing
                  </Link>
                  <AffiliateLink
                    href={tool.affiliateUrl}
                    toolSlug={tool.slug}
                    toolName={tool.name}
                    placement="industry_quick_picks"
                    pageType="industry"
                    ctaType="internal"
                    ctaLocation="top"
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                  >
                    Try This Tool
                  </AffiliateLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Pain Points"
            title={`What ${industry.name.toLowerCase()} teams usually need help with`}
            description="These are the recurring problems this guide is designed to solve."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {painPoints.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="How To Choose"
            title={`How to choose an AI tool for ${industry.name.toLowerCase()}`}
            description="Most teams do better by buying for the first bottleneck they need to fix, not by trying to cover everything at once."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              `Start with the task that slows down revenue or delivery the most, such as ${industry.jobsToBeDone[0].toLowerCase()}.`,
              `If your team is small, favor tools that are easy to adopt and fit the way ${industry.audience.toLowerCase()} teams already work.`,
              `Use comparison pages after you shortlist two options. That is usually where the final decision gets clearer.`,
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Top Picks"
            title={`Top AI tools for ${industry.name.toLowerCase()}`}
            description="Use these recommendations as a starting stack, then open the linked reviews and comparisons to narrow your shortlist."
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
                      <p className="text-sm leading-7 text-slate-600">
                        {getToolRecommendationReason(industry, tool)}
                      </p>
                      <p className="text-sm font-medium leading-7 text-slate-800">
                        Best use case: {highlights.bestUseCase}
                      </p>
                      <p className="text-sm font-semibold leading-7 text-slate-900">
                        Popular right now for {industry.name.toLowerCase()} teams that need faster execution.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={getToolUrl(tool.slug)}
                        className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        See Why It&apos;s #1
                      </Link>
                      <AffiliateLink
                        href={tool.affiliateUrl}
                        toolSlug={tool.slug}
                        toolName={tool.name}
                        placement="industry_top_picks"
                        pageType="industry"
                        ctaType="internal"
                        ctaLocation="mid"
                        className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                      >
                        Start Free Trial
                      </AffiliateLink>
                      <Link
                        href={getToolPricingUrl(tool.slug)}
                        className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                      >
                        View Pricing
                      </Link>
                      <AffiliateLink
                        href={tool.affiliateUrl}
                        toolSlug={tool.slug}
                        toolName={tool.name}
                        placement="industry_top_picks"
                        pageType="industry"
                        ctaType="internal"
                        ctaLocation="mid"
                        className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                      >
                        Try This Tool
                      </AffiliateLink>
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

        <WhyTrust
          title="Why trust this guide"
          description={`This ${industry.name.toLowerCase()} page is built around actual workflow friction, buyer intent, and how well a tool fits the way ${industry.audience.toLowerCase()} teams operate.`}
          items={[
            `Recommendations are tied to the work ${industry.audience.toLowerCase()} teams actually need to improve, such as ${industry.jobsToBeDone[0].toLowerCase()}.`,
            "Every featured tool connects to dedicated review pages and comparison pages so you can validate tradeoffs before making a shortlist.",
            "The content is designed to be useful for a real purchase process, not just to rank for a broad keyword.",
          ]}
        />

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Comparison Table"
            title={`Quick comparison for ${industry.name.toLowerCase()} buyers`}
            description="Use this table to shortlist the right mix of assistant, workflow, and specialist tools so your team can save time and move faster."
          />
          <ComparisonTable
            headers={["Tool", "Best Use Case", "Category", "Pricing"]}
            rows={comparisonRows}
          />
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Implementation Help"
            title="Need someone to set this up for you?"
            description="Many businesses hire freelancers to implement these tools. Fiverr is a fast way to get this done for you."
          />
          <div className="mt-8">
            <AffiliateLink
              href={affiliateLinks.fiverr}
              toolSlug="fiverr"
              toolName="Fiverr"
              placement="industry_fiverr"
              pageType="industry"
              ctaType="fiverr"
              ctaLocation="mid"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Browse Experts on Fiverr
            </AffiliateLink>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="All-In-One Option"
            title="Prefer one platform instead of stitching tools together?"
            description="Many businesses prefer using one platform for funnels, email marketing, and automations. Systeme.io is a simple all-in-one option with a free starting point and less setup friction."
          />
          <div className="mt-8">
            <AffiliateLink
              href={affiliateLinks.systeme}
              toolSlug="systeme"
              toolName="Systeme.io"
              placement="industry_systeme"
              pageType="industry"
              ctaType="systeme"
              ctaLocation="mid"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Start Free with Systeme.io
            </AffiliateLink>
          </div>
        </section>

        {primaryRecommendation ? (
          <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Final Recommendation"
              title={`If most ${industry.name.toLowerCase()} businesses only try one tool first, start with ${primaryRecommendation.name}`}
              description={`${primaryRecommendation.name} is the best place to start for most ${industry.name.toLowerCase()} teams because it offers the broadest upside without forcing a heavy implementation process on day one.`}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={getToolUrl(primaryRecommendation.slug)}
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                If You Only Pick One Tool, Pick This
              </Link>
              <Link
                href={getToolPricingUrl(primaryRecommendation.slug)}
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                View Pricing
              </Link>
              <AffiliateLink
                href={primaryRecommendation.affiliateUrl}
                toolSlug={primaryRecommendation.slug}
                toolName={primaryRecommendation.name}
                placement="industry_final_recommendation"
                pageType="industry"
                ctaType="internal"
                ctaLocation="bottom"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Start Free Trial
              </AffiliateLink>
            </div>
          </section>
        ) : null}

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Next Step"
            title={`What most ${industry.name.toLowerCase()} buyers should do next`}
            description="The best next move is usually to open one full review and one comparison page before cutting the shortlist to two tools."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryRecommendation ? (
              <Link
                href={getToolUrl(primaryRecommendation.slug)}
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Read the top recommendation
              </Link>
            ) : null}
            {industry.featuredComparisonSlugs[0] ? (
              <Link
                href={getComparisonUrl(
                  industry.featuredComparisonSlugs[0].split("-vs-")[0],
                  industry.featuredComparisonSlugs[0].split("-vs-")[1],
                )}
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Open the top comparison
              </Link>
            ) : null}
            <Link
              href="/industries"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Browse more industries
            </Link>
          </div>
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
            <Link
              href="/industries"
              className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Explore more industries
            </Link>
          </div>
        </section>

        <EmailCapture
          description={`Get curated AI tool picks for ${industry.name.toLowerCase()} teams that want to automate more work, improve follow-up, and increase revenue.`}
        />
      </Container>
    </div>
  );
}
