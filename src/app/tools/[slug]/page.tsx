import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AffiliateLink } from "@/components/affiliate-link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { EmailCapture } from "@/components/email-capture";
import { SectionHeading } from "@/components/section-heading";
import { affiliateLinks } from "@/data/affiliate-links";
import { tools } from "@/data/tools";
import { buildAbsoluteUrl } from "@/lib/site";
import {
  getAlternativesForTool,
  getBestIndustriesForTool,
  getComparisonUrl,
  getDefaultComparisonUrl,
  getIndustryUrl,
  getPrimaryToolCtaUrl,
  getToolBySlug,
  getToolPricingHref,
  getToolUrl,
} from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {};
  }

  const title = `${tool.name} Review`;
  const description = `${tool.name} overview, best use cases, pricing, pros and cons, best industries, and alternatives.`;
  const path = getToolUrl(tool.slug);

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

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const bestIndustries = getBestIndustriesForTool(tool.slug);
  const alternatives = getAlternativesForTool(tool);
  const comparisonCandidates = alternatives.slice(0, 3);
  const pricingHref = getToolPricingHref(tool);
  const cleanBestUseCase = tool.bestUseCase.replace(/[.]+$/, "");
  const compareHref = comparisonCandidates[0]
    ? getComparisonUrl(tool.slug, comparisonCandidates[0].slug)
    : getDefaultComparisonUrl(tool);

  return (
    <div className="pb-20">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/industries", label: "Industries" },
          { label: tool.name },
        ]}
      />

      <Container className="space-y-14 py-10">
        <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand)] uppercase">
              {tool.category}
            </p>
            <h1 className="font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
              {tool.name}
            </h1>
            <p className="text-lg leading-8 text-slate-600">{tool.overview}</p>
            <p className="text-base leading-8 text-slate-600">
              Best for: {cleanBestUseCase} when your priority is faster output,
              less repetitive work, and a tool your team will actually keep
              using after the trial period.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-[var(--surface-alt)] px-4 py-2">
                {tool.businessUsage}
              </span>
              <span className="rounded-full bg-[var(--surface-alt)] px-4 py-2">
                {tool.popularityNote}
              </span>
              <span className="rounded-full bg-[var(--surface-alt)] px-4 py-2">
                Popular right now
              </span>
              <span className="rounded-full bg-[var(--surface-alt)] px-4 py-2">
                Compared across similar tools
              </span>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[var(--surface-alt)] p-6">
            <p className="text-sm font-semibold text-slate-900">Quick take</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              {tool.tagline}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Most teams should shortlist {tool.name} when they want one of the
              stronger options in this category, not just the most familiar
              name.
            </p>
            <p className="mt-6 text-sm font-semibold text-slate-900">Pricing</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">{tool.pricing}</p>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              Reviewed against similar tools and refreshed regularly as the
              market changes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <AffiliateLink
                href={getPrimaryToolCtaUrl(tool)}
                toolSlug={tool.slug}
                toolName={tool.name}
                placement="tool_hero"
                pageType="tool"
                ctaType="primary"
                ctaLocation="top"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Start Free Trial
              </AffiliateLink>
              <AffiliateLink
                href={pricingHref}
                toolSlug={tool.slug}
                toolName={tool.name}
                placement="tool_hero_pricing"
                pageType="tool"
                ctaType="pricing"
                ctaLocation="top"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                View Pricing
              </AffiliateLink>
              <AffiliateLink
                href={compareHref}
                toolSlug={tool.slug}
                toolName={tool.name}
                placement="tool_hero_compare"
                pageType="tool"
                ctaType="compare"
                ctaLocation="top"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Compare Top Picks
              </AffiliateLink>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Why We Recommend It"
            title={`Why we recommend ${tool.name}`}
            description={`${tool.name} stays on the site because it solves a real workflow problem, holds up against close alternatives, and still makes sense once buyers move past the hype and look at fit.`}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              tool.businessUsage,
              tool.popularityNote,
              `It stands out most when buyers need ${cleanBestUseCase.toLowerCase()}.`,
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-[var(--surface-alt)] p-6 text-sm leading-7 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <AffiliateLink
              href={getPrimaryToolCtaUrl(tool)}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_recommendation"
              pageType="tool"
              ctaType="primary"
              ctaLocation="mid"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Try This Tool
            </AffiliateLink>
            <AffiliateLink
              href={pricingHref}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_recommendation_pricing"
              pageType="tool"
              ctaType="pricing"
              ctaLocation="mid"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              View Pricing
            </AffiliateLink>
          </div>
          <div className="mt-8 rounded-3xl bg-[var(--surface-alt)] p-6">
            <p className="text-sm leading-7 text-slate-700">
              Need help setting this up? Hire an expert on Fiverr.
            </p>
            <div className="mt-4">
              <AffiliateLink
                href={affiliateLinks.fiverr}
                toolSlug="fiverr"
                toolName="Fiverr"
                placement="tool_page_fiverr"
                pageType="tool"
                ctaType="fiverr"
                ctaLocation="mid"
                className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Find an Expert on Fiverr
              </AffiliateLink>
            </div>
          </div>
          <div className="mt-4 rounded-3xl bg-[var(--surface-alt)] p-6">
            <p className="text-sm leading-7 text-slate-700">
              Want an all-in-one platform for funnels, email marketing, and
              automation with a low-friction way to start? Systeme.io combines
              landing pages, email campaigns, and automations in one place, and
              you can start free.
            </p>
            <div className="mt-4">
              <AffiliateLink
                href={affiliateLinks.systeme}
                toolSlug="systeme"
                toolName="Systeme.io"
                placement="tool_page_systeme"
                pageType="tool"
                ctaType="systeme"
                ctaLocation="mid"
                className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Start Free with Systeme.io
              </AffiliateLink>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Choose this if...</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Choose {tool.name} if your team mainly needs{" "}
              {tool.bestUseCase.toLowerCase()} and you want one of the strongest
              all-around options in this category, not a disposable test tool
              that gets abandoned after a week.
            </p>
          </article>
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Skip this if...</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Skip {tool.name} if your main problem is closer to{" "}
              {alternatives[0]?.bestUseCase.toLowerCase() || "a different workflow"}{" "}
              or if you already know you need a narrower specialist instead of
              a broader platform-style fit.
            </p>
          </article>
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">What to click next</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              If you are ready, use the primary CTA above. If you are not fully
              convinced yet, the smartest next click is a head-to-head
              comparison or the industry page where this tool shows the
              strongest fit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {comparisonCandidates[0] ? (
                <AffiliateLink
                  href={getComparisonUrl(tool.slug, comparisonCandidates[0].slug)}
                  toolSlug={tool.slug}
                  toolName={tool.name}
                  placement="tool_decision_compare"
                  pageType="tool"
                  ctaType="compare"
                  ctaLocation="mid"
                  className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Compare top alternative
                </AffiliateLink>
              ) : null}
              {bestIndustries[0] ? (
                <Link
                  href={getIndustryUrl(bestIndustries[0].slug)}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  View best-fit industry
                </Link>
              ) : null}
            </div>
          </article>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Features"
            title={`${tool.name} core features`}
            description="These are the capabilities most buyers care about when comparing this tool against alternatives."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {tool.features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <AffiliateLink
              href={getPrimaryToolCtaUrl(tool)}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_features"
              pageType="tool"
              ctaType="primary"
              ctaLocation="mid"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start Free Trial
            </AffiliateLink>
            <AffiliateLink
              href={pricingHref}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_features_pricing"
              pageType="tool"
              ctaType="pricing"
              ctaLocation="mid"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              View Pricing
            </AffiliateLink>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Pros</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              {tool.pros.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Cons</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              {tool.cons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Best Industries"
              title={`Where ${tool.name} fits best`}
              description="These industry pages recommend this tool because the workflow fit is strong, not just because it is popular."
            />
            <div className="flex flex-wrap gap-3">
              {bestIndustries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/best-ai-tools-for-${industry.slug}`}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Alternatives"
              title={`Alternatives to ${tool.name}`}
              description="These are the tools most likely to come up when a buyer likes the category but is not fully convinced this is the right fit."
            />
            <div className="space-y-3">
              {alternatives.map((alternative) => (
                <Link
                  key={alternative.slug}
                  href={getToolUrl(alternative.slug)}
                  className="block rounded-2xl bg-[var(--surface-alt)] px-4 py-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {alternative.name}: {alternative.tagline}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {comparisonCandidates.map((candidate) => (
                <AffiliateLink
                  key={`alt-${candidate.slug}`}
                  href={getComparisonUrl(tool.slug, candidate.slug)}
                  toolSlug={tool.slug}
                  toolName={`${tool.name} vs ${candidate.name}`}
                  placement="tool_alternatives_compare"
                  pageType="tool"
                  ctaType="compare"
                  ctaLocation="bottom"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  {tool.name} vs {candidate.name}
                </AffiliateLink>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Bottom Line"
            title={`Should you seriously consider ${tool.name}?`}
            description={`${tool.name} is a strong choice if your team needs ${cleanBestUseCase.toLowerCase()} and wants a tool that already earns a place on real business shortlists. If you want a lighter, cheaper, or more specialized option, use the comparison paths above before you commit.`}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <AffiliateLink
              href={getPrimaryToolCtaUrl(tool)}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_bottom_line"
              pageType="tool"
              ctaType="primary"
              ctaLocation="bottom"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start Free Trial
            </AffiliateLink>
            <AffiliateLink
              href={pricingHref}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_bottom_line_pricing"
              pageType="tool"
              ctaType="pricing"
              ctaLocation="bottom"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              View Pricing
            </AffiliateLink>
          </div>
        </section>

        <section
          id="compare"
          className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
        >
          <SectionHeading
            eyebrow="Compare"
            title={`Head-to-head pages for ${tool.name}`}
            description="These comparison pages support deeper buying intent and make internal navigation stronger."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {comparisonCandidates.map((candidate) => (
              <Link
                key={candidate.slug}
                href={getComparisonUrl(tool.slug, candidate.slug)}
                className="rounded-3xl bg-[var(--surface-alt)] p-5 text-sm font-medium leading-7 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {tool.name} vs {candidate.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <AffiliateLink
              href={getPrimaryToolCtaUrl(tool)}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_compare"
              pageType="tool"
              ctaType="primary"
              ctaLocation="bottom"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Try {tool.name}
            </AffiliateLink>
            <AffiliateLink
              href={pricingHref}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_compare_pricing"
              pageType="tool"
              ctaType="pricing"
              ctaLocation="bottom"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              View Pricing
            </AffiliateLink>
          </div>
        </section>

        <EmailCapture
          description={`If you want future buyer guides, tool updates, or comparison pages like this one, request updates here. The form routes through the editorial contact flow for now so you know exactly where your message goes.`}
        />
      </Container>
    </div>
  );
}
