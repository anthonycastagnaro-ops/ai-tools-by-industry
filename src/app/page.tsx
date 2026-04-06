import Link from "next/link";

import { AffiliateLink } from "@/components/affiliate-link";
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
const featuredComparisons = [
  {
    href: "/compare/chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    body: "Best for buyers choosing between a broad AI assistant and a more writing-first option.",
  },
  {
    href: "/compare/zapier-vs-make",
    title: "Zapier vs Make",
    body: "Best for teams deciding whether they need quick no-code automation or more workflow depth.",
  },
  {
    href: "/compare/jasper-vs-copy-ai",
    title: "Jasper vs Copy.ai",
    body: "Best for marketing teams comparing brand control against faster go-to-market execution.",
  },
];
const quickStartRoutes = [
  {
    href: "/best-ai-tools-for-restaurants",
    label: "Most popular industry",
    title: "Best AI tools for restaurants",
    body: "Start here if you want a fast example of how the site helps a real business pick tools.",
  },
  {
    href: "/tools/chatgpt",
    label: "Top tool review",
    title: "Why ChatGPT makes so many shortlists",
    body: "Best next click if you want one broad-use tool that helps across writing, research, and execution.",
  },
  {
    href: "/compare/chatgpt-vs-claude",
    label: "Fastest comparison",
    title: "ChatGPT vs Claude",
    body: "Best next click if you already know the category and want help choosing between two strong options.",
  },
];
const curatedTopToolNotes: Record<string, string> = {
  chatgpt: "Best broad-use pick for businesses that want one tool to cover content, research, and internal execution.",
  canva: "Best design-side pick for teams that need fast visual output without hiring extra help.",
  zapier: "Best quick-win automation choice for businesses trying to remove repetitive admin first.",
  claude: "Best for buyers who care more about polished long-form output than fast, rough drafts.",
  make: "Best value automation option for teams that need more logic than simple trigger tools allow.",
  grammarly: "Best lightweight upgrade for teams that want stronger client-facing communication immediately.",
};
const defaultTopToolNote =
  "Worth reviewing early if you want a credible, high-utility tool that shows up often in real buyer shortlists.";

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-slate-200/70">
        <Container className="grid gap-10 py-14 sm:gap-12 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm font-semibold tracking-[0.24em] text-[var(--brand)] uppercase">
              Best AI tools for real businesses
            </p>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Find the best AI tools for your business before you waste time testing the wrong ones
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                This site helps business owners, operators, freelancers, and
                agencies go from curiosity to shortlist fast. Start with your
                industry, open the strongest tool review, and use comparison
                pages when you are deciding between finalists.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                {[
                  "Researched and curated",
                  "Built around real use cases",
                  "Made to help you choose faster",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--surface-alt)] px-3 py-2 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-500">
                Recommendations are compared across similar tools and written to
                help buyers take the next click with more confidence, not keep
                reading generic software content.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <AffiliateLink
                href="/industries"
                toolSlug="industries"
                toolName="Industries"
                placement="home_hero_industries"
                pageType="home"
                ctaType="primary"
                ctaLocation="top"
                className="w-full rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
              >
                See Best Tools
              </AffiliateLink>
              <AffiliateLink
                href="/compare/chatgpt-vs-claude"
                toolSlug="chatgpt-vs-claude"
                toolName="ChatGPT vs Claude"
                placement="home_hero_compare"
                pageType="home"
                ctaType="compare"
                ctaLocation="top"
                className="w-full rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 sm:w-auto"
              >
                Compare Top Picks
              </AffiliateLink>
            </div>
            <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
                  Start Here
                </p>
                <p className="text-sm leading-7 text-slate-600">
                  If you are new here, these are the fastest paths into the
                  site.
                </p>
              </div>
              <div className="grid gap-3">
                {quickStartRoutes.map((item, index) => (
                  <AffiliateLink
                    key={item.href}
                    href={item.href}
                    toolSlug={item.title}
                    toolName={item.title}
                    placement={`home_quick_start_${index + 1}`}
                    pageType="home"
                    ctaType={item.href.startsWith("/compare/") ? "compare" : "primary"}
                    ctaLocation="top"
                    className="rounded-2xl border border-slate-200 bg-[var(--surface-alt)] px-4 py-4 text-left transition hover:border-slate-300 hover:bg-white"
                  >
                    <span className="block text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                      {item.label}
                    </span>
                    <span className="mt-2 block text-base font-semibold text-slate-950">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-slate-600">
                      {item.body}
                    </span>
                  </AffiliateLink>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-6">
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

      <section className="py-12 sm:py-16">
        <Container className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Who this is for",
              body: "Business owners, operators, service firms, and lean teams that want clear software recommendations without sorting through generic AI hype.",
            },
            {
              title: "How tools are evaluated",
              body: "Tools are judged on workflow fit, decision-stage usefulness, likely tradeoffs, and whether they deserve a place on a serious shortlist.",
            },
            {
              title: "Where to start",
              body: "Most buyers should start with their industry page, open one tool review, then use a comparison page to pressure-test the final choice.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured Industries"
            title="Start with the industry that matches your business"
            description="The fastest way to use the site is to open the guide that matches how you actually make money. Each one is built around the bottlenecks, tools, and buying questions that matter in that niche."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredIndustries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="How To Use The Site"
            title="How this site works"
            description="The site is designed to help real buyers move from broad research to a confident shortlist without getting lost in generic AI recommendations."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "1. Pick your industry",
                body: "Open the page closest to how you actually make money so the recommendations match your bottlenecks, team setup, and buying priorities.",
                href: "/industries",
                label: "See best tools by industry",
              },
              {
                title: "2. Review the top tools",
                body: "Tool pages explain who each product is best for, where it earns a place on a shortlist, and when you should move to an alternative instead.",
                href: "/tools/chatgpt",
                label: "Review a top tool",
              },
              {
                title: "3. Use a comparison page",
                body: "Comparison pages are built for buyers who are close to choosing and need a direct recommendation, not another vague feature list.",
                href: "/compare/chatgpt-vs-claude",
                label: "Compare top picks",
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

      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <WhyTrust
            description="This site is built like an editorial buyer guide, not a generic tool directory. Recommendations are researched, curated, and updated regularly so buyers can compare serious options with more confidence."
            items={[
              "Recommendations are organized around workflow fit, real-world use cases, and practical tradeoffs instead of broad list-post filler.",
              "Tool and comparison pages are written to help buyers choose between credible options, not just skim features and bounce.",
              "Trust pages, editorial context, and clear next steps are visible site-wide so readers and partners can evaluate the site like a real publication.",
            ]}
          />
        </Container>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Top Tools This Month"
            title="Top AI tools this month"
            description="This shortlist is curated, not exhaustive. These are the tools most buyers should review first when they want proven utility, cleaner workflow fit, and a realistic path to ROI."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {topToolsThisMonth.map((tool) => (
              <div key={tool.slug} className="space-y-4">
                <ToolCard tool={tool} />
                <p className="px-2 text-sm leading-7 text-slate-600">
                  {curatedTopToolNotes[tool.slug] ?? defaultTopToolNote}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured Comparisons"
            title="Comparison pages readers use before making a decision"
            description="These pages tend to be the best next click when you already know the category and want help choosing between two strong options."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredComparisons.map((item) => (
              <article
                key={item.href}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                <AffiliateLink
                  href={item.href}
                  toolSlug={item.title.toLowerCase().replaceAll(" ", "-")}
                  toolName={item.title}
                  placement="home_featured_comparison"
                  pageType="home"
                  ctaType="compare"
                  ctaLocation="mid"
                  className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  Open comparison
                </AffiliateLink>
              </article>
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
