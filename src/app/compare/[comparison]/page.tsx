import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ComparisonTable } from "@/components/comparison-table";
import { Container } from "@/components/container";
import { EmailCapture } from "@/components/email-capture";
import { AffiliateLink } from "@/components/affiliate-link";
import { SectionHeading } from "@/components/section-heading";
import { affiliateLinks } from "@/data/affiliate-links";
import { buildAbsoluteUrl } from "@/lib/site";
import {
  allComparisonSlugs,
  getBestIndustriesForTool,
  getComparisonQuickPicks,
  getComparisonRecommendation,
  getComparisonPairFromSlug,
  getPrimaryToolCtaUrl,
  getIndustryUrl,
  getToolPricingHref,
  getToolUrl,
} from "@/lib/utils";

type Props = {
  params: Promise<{ comparison: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return allComparisonSlugs.map((comparison) => ({ comparison }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { comparison } = await params;
  const pair = getComparisonPairFromSlug(comparison);

  if (!pair) {
    return {};
  }

  const title = `${pair.toolA.name} vs ${pair.toolB.name}`;
  const description = `Compare ${pair.toolA.name} vs ${pair.toolB.name} across features, pricing, use cases, and ideal buyer fit.`;
  const path = `/compare/${comparison}`;

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

export default async function ComparisonPage({ params }: Props) {
  const { comparison } = await params;
  const pair = getComparisonPairFromSlug(comparison);

  if (!pair) {
    notFound();
  }

  const { toolA, toolB } = pair;
  const recommendation = getComparisonRecommendation(toolA, toolB);
  const pairKey = [toolA.slug, toolB.slug].sort().join(":");
  const sameCategory = toolA.category === toolB.category;
  const verdict =
    pairKey === "chatgpt:claude"
      ? `${recommendation.winner.name} is the better starting point for most businesses because it covers more day-to-day tasks well. ${toolA.slug === "claude" || toolB.slug === "claude" ? "Claude becomes the better choice when polished long-form writing, document synthesis, and calmer first drafts matter more than breadth." : ""}`
      : sameCategory
        ? `If you want the safer all-around recommendation, start with ${recommendation.winner.name}. If your workflow leans more heavily toward ${toolA.name === recommendation.winner.name ? toolB.bestUseCase.toLowerCase() : toolA.bestUseCase.toLowerCase()}, the other tool deserves a serious look.`
        : `${toolA.name} and ${toolB.name} are not really substitutes in the purest sense. The better choice depends on whether you need broader day-to-day leverage or a tool built around a narrower, more specific workflow.`;
  const quickPicks = getComparisonQuickPicks(toolA, toolB);
  const linkedIndustries = Array.from(
    new Map(
      [...getBestIndustriesForTool(toolA.slug), ...getBestIndustriesForTool(toolB.slug)].map(
        (industry) => [industry.slug, industry],
      ),
    ).values(),
  ).slice(0, 6);

  return (
    <div className="pb-20">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/industries", label: "Industries" },
          { label: `${toolA.name} vs ${toolB.name}` },
        ]}
      />

      <Container className="space-y-14 py-10">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand)] uppercase">
            Comparison
          </p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            {toolA.name} vs {toolB.name}
          </h1>
          <div className="mt-4 inline-flex rounded-full bg-[var(--surface-alt)] px-4 py-2 text-sm font-semibold text-slate-900">
            Clear Winner: {recommendation.winner.name}
          </div>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Compare these tools across features, pricing posture, and buyer fit
            so you can choose the right platform faster, save time on research,
            and move toward the tool that best supports revenue.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
            {recommendation.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AffiliateLink
              href={getPrimaryToolCtaUrl(recommendation.winner)}
              toolSlug={recommendation.winner.slug}
              toolName={recommendation.winner.name}
              placement="comparison_hero"
              pageType="comparison"
              ctaType="internal"
              ctaLocation="top"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start Free Trial
            </AffiliateLink>
            <Link
              href={getToolUrl(recommendation.winner.slug)}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              See Why It&apos;s #1
            </Link>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Quick Picks"
            title="Fastest way to decide"
            description="If you do not need a full feature-by-feature breakdown, start with these buyer shortcuts."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {quickPicks.map(({ label, tool }) => (
              <div
                key={label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
                  {label}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                  {tool.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {tool.tagline}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Best for {tool.bestUseCase.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <AffiliateLink
              href={getPrimaryToolCtaUrl(recommendation.winner)}
              toolSlug={recommendation.winner.slug}
              toolName={recommendation.winner.name}
              placement="comparison_quick_picks"
              pageType="comparison"
              ctaType="internal"
              ctaLocation="top"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Try This Tool
            </AffiliateLink>
            <Link
              href={getToolUrl(toolA.slug)}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Read both reviews
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">
              Choose {toolA.name} if...
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Choose {toolA.name} if your team needs {toolA.bestUseCase.toLowerCase()} and that matters more than {toolB.bestUseCase.toLowerCase()}.
            </p>
          </article>
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">
              Choose {toolB.name} if...
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Choose {toolB.name} if cost, simplicity, or focus around {toolB.bestUseCase.toLowerCase()} matters more than the broader upside of {toolA.name}.
            </p>
          </article>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Feature Comparison"
            title="What each tool does best"
            description="The biggest difference usually comes down to the core workflow each product is designed to support."
          />
          <ComparisonTable
            headers={["Area", toolA.name, toolB.name]}
            rows={[
              ["Category", toolA.category, toolB.category],
              ["Best for", toolA.bestUseCase, toolB.bestUseCase],
              ["Ideal buyer", toolA.tagline, toolB.tagline],
              ["Key strength", toolA.features[0], toolB.features[0]],
              ["Workflow depth", toolA.features[1], toolB.features[1]],
            ]}
          />
          <div className="flex flex-wrap gap-3">
            <AffiliateLink
              href={getPrimaryToolCtaUrl(toolA)}
              toolSlug={toolA.slug}
              toolName={toolA.name}
              placement="comparison_feature_table"
              pageType="comparison"
              ctaType="internal"
              ctaLocation="mid"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Try This Tool
            </AffiliateLink>
            <AffiliateLink
              href={getPrimaryToolCtaUrl(toolB)}
              toolSlug={toolB.slug}
              toolName={toolB.name}
              placement="comparison_feature_table"
              pageType="comparison"
              ctaType="internal"
              ctaLocation="mid"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Try This Tool
            </AffiliateLink>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Pricing Comparison"
            title="Pricing snapshot"
            description="Pricing changes often, so use this section as a quick buying snapshot and confirm the latest plan details on each vendor site before you choose."
          />
          <ComparisonTable
            headers={["Tool", "Pricing", "Tradeoff"]}
            rows={[
              [toolA.name, toolA.pricing, toolA.cons[0]],
              [toolB.name, toolB.pricing, toolB.cons[0]],
            ]}
          />
          <div className="flex flex-wrap gap-3">
            <Link
              href={getToolPricingHref(toolA)}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              View {toolA.name} Pricing
            </Link>
            <Link
              href={getToolPricingHref(toolB)}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              View {toolB.name} Pricing
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Verdict"
            title={`Should you choose ${toolA.name} or ${toolB.name}?`}
            description={verdict}
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={getToolUrl(toolA.slug)}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Read {toolA.name} review
            </Link>
            <Link
              href={getToolUrl(toolB.slug)}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Read {toolB.name} review
            </Link>
            <AffiliateLink
              href={getPrimaryToolCtaUrl(recommendation.winner)}
              toolSlug={recommendation.winner.slug}
              toolName={recommendation.winner.name}
              placement="comparison_verdict"
              pageType="comparison"
              ctaType="internal"
              ctaLocation="bottom"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Start Free Trial
            </AffiliateLink>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Done-For-You Help"
            title="Don&apos;t want to do this yourself?"
            description="Hire a freelancer on Fiverr to set this up for you."
          />
          <div className="mt-8">
            <AffiliateLink
              href={affiliateLinks.fiverr}
              toolSlug="fiverr"
              toolName="Fiverr"
              placement="comparison_fiverr"
              pageType="comparison"
              ctaType="fiverr"
              ctaLocation="bottom"
              className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Hire an Expert on Fiverr
            </AffiliateLink>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="All-In-One Platform"
            title="Need an all-in-one business platform?"
            description="Systeme.io combines funnels, email marketing, automations, and online business tools in one place, with a simple setup path and a free way to get started."
          />
          <div className="mt-8">
            <AffiliateLink
              href={affiliateLinks.systeme}
              toolSlug="systeme"
              toolName="Systeme.io"
              placement="comparison_systeme"
              pageType="comparison"
              ctaType="systeme"
              ctaLocation="bottom"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Start Free with Systeme.io
            </AffiliateLink>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {[toolA, toolB].map((tool) => (
            <article
              key={tool.slug}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-950">{tool.name}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{tool.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getToolUrl(tool.slug)}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  Full review
                </Link>
                <AffiliateLink
                  href={getPrimaryToolCtaUrl(tool)}
                  toolSlug={tool.slug}
                  toolName={tool.name}
                  placement="comparison_tool_card"
                  pageType="comparison"
                  ctaType="internal"
                  ctaLocation="bottom"
                  className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Try This Tool
                </AffiliateLink>
                <Link
                  href={getToolPricingHref(tool)}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  View Pricing
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Where These Tools Fit"
            title="Industry pages that link back to this decision"
            description="These guides recommend one or both of these tools and provide more context on how they fit into specific business workflows."
          />
          <div className="flex flex-wrap gap-3">
            {linkedIndustries.map((industry) => (
              <Link
                key={industry.slug}
                href={getIndustryUrl(industry.slug)}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </section>

        <EmailCapture
          description="Get curated comparison pages and buyer guides so you can choose faster and put AI tools to work sooner."
        />
      </Container>
    </div>
  );
}
