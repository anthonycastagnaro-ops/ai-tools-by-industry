export type Tool = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  overview: string;
  bestUseCase: string;
  pricing: string;
  affiliateUrl: string;
  website: string;
  features: string[];
  pros: string[];
  cons: string[];
  alternatives: string[];
};

export type Industry = {
  slug: string;
  name: string;
  audience: string;
  intro: string;
  painPoint: string;
  jobsToBeDone: string[];
  recommendedToolSlugs: string[];
  relatedSlugs: string[];
  featuredComparisonSlugs: string[];
};

export type IndustryFaq = {
  question: string;
  answer: string;
};
