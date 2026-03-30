import { industries } from "@/data/industries";
import { tools } from "@/data/tools";
import type { Industry, IndustryFaq, Tool } from "@/lib/types";

export const formatList = (items: string[]) =>
  new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(
    items,
  );

export const toTitleCase = (value: string) =>
  value.replace(/\b\w/g, (char) => char.toUpperCase());

export const getIndustryUrl = (industrySlug: string) =>
  `/best-ai-tools-for-${industrySlug}`;

export const getToolUrl = (toolSlug: string) => `/tools/${toolSlug}`;

export const getComparisonSlug = (a: string, b: string) => {
  const firstIndex = tools.findIndex((tool) => tool.slug === a);
  const secondIndex = tools.findIndex((tool) => tool.slug === b);

  if (firstIndex === -1 || secondIndex === -1) {
    return `${a}-vs-${b}`;
  }

  return firstIndex < secondIndex ? `${a}-vs-${b}` : `${b}-vs-${a}`;
};

export const getComparisonUrl = (a: string, b: string) =>
  `/compare/${getComparisonSlug(a, b)}`;

export const getIndustryBySlug = (slug: string) =>
  industries.find((industry) => industry.slug === slug);

export const getToolBySlug = (slug: string) =>
  tools.find((tool) => tool.slug === slug);

export const getToolsForIndustry = (industry: Industry) =>
  industry.recommendedToolSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((tool): tool is Tool => Boolean(tool));

export const getBestIndustriesForTool = (toolSlug: string) =>
  industries.filter((industry) => industry.recommendedToolSlugs.includes(toolSlug));

export const getAlternativesForTool = (tool: Tool) =>
  tool.alternatives
    .map((slug) => getToolBySlug(slug))
    .filter((candidate): candidate is Tool => Boolean(candidate));

export const getComparisonPairFromSlug = (slug: string) => {
  const separator = "-vs-";
  if (!slug.includes(separator)) return null;
  const [a, b] = slug.split(separator);
  if (!a || !b || a === b) return null;
  const toolA = getToolBySlug(a);
  const toolB = getToolBySlug(b);
  if (!toolA || !toolB) return null;
  return { toolA, toolB };
};

export const getToolHighlightsForIndustry = (industry: Industry, tool: Tool) => {
  const jobs = industry.jobsToBeDone;
  const useCaseSeed = jobs[0] || `save time in ${industry.name.toLowerCase()}`;

  return {
    description: `${tool.name} helps ${industry.name.toLowerCase()} teams ${useCaseSeed.toLowerCase()} without adding another complicated system to manage.`,
    bestUseCase: `${tool.name} is strongest for ${industry.audience.toLowerCase()} teams that need to ${jobs[1]?.toLowerCase() || jobs[0].toLowerCase()} and still keep quality high.`,
    pros: [
      `Fits ${industry.name.toLowerCase()} workflows where speed and consistency both matter.`,
      `Reduces manual work around ${industry.painPoint.toLowerCase()}.`,
      `Gives lean teams a faster way to deliver polished output.`,
    ],
    cons: [
      `Still needs human review for brand voice and compliance in ${industry.name.toLowerCase()}.`,
      `The best results come from setting up prompts, templates, or automations first.`,
      `Value drops if the team does not build it into a repeatable workflow.`,
    ],
  };
};

export const getIndustryFaqs = (industry: Industry): IndustryFaq[] => [
  {
    question: `What are the best AI tools for ${industry.name.toLowerCase()} in 2026?`,
    answer: `The best stack usually combines an AI assistant for research and writing, a workflow tool for automation, and one specialist platform that solves the biggest bottleneck for ${industry.audience.toLowerCase()} teams. The tools on this page were chosen because they directly address ${industry.painPoint.toLowerCase()}.`,
  },
  {
    question: `How should a ${industry.name.toLowerCase()} business choose an AI tool?`,
    answer: `Start with the workflow that takes the most time or delays revenue. For most ${industry.name.toLowerCase()} operators, that means prioritizing tools that help with ${industry.jobsToBeDone[0].toLowerCase()}, ${industry.jobsToBeDone[1].toLowerCase()}, or ${industry.jobsToBeDone[2].toLowerCase()}.`,
  },
  {
    question: `Can small ${industry.name.toLowerCase()} teams use AI without a technical hire?`,
    answer: `Yes. Most of the tools on this site are designed for operators, marketers, and service teams. A small ${industry.name.toLowerCase()} business can start with one assistant tool and one automation tool before expanding into deeper workflows.`,
  },
  {
    question: `Which AI tool gives the fastest ROI for ${industry.name.toLowerCase()} businesses?`,
    answer: `The fastest ROI usually comes from the tool that removes repetitive admin work or improves lead conversion. For many ${industry.name.toLowerCase()} teams, that is the first tool on this list because it helps with ${industry.jobsToBeDone[0].toLowerCase()} right away.`,
  },
  {
    question: `Should ${industry.name.toLowerCase()} companies use more than one AI tool?`,
    answer: `Usually yes. One tool rarely covers research, content, design, follow-up, and workflow automation. The strongest setup pairs two or three tools that each have a clear job, then connects them with simple repeatable processes.`,
  },
];

export const getFeaturedIndustries = () => industries.slice(0, 8);

export const getFeaturedTools = () => tools.slice(0, 6);

export const allComparisonSlugs = tools.flatMap((tool, index) =>
  tools.slice(index + 1).map((otherTool) => getComparisonSlug(tool.slug, otherTool.slug)),
);
