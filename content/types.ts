export interface LinkItem {
  label: string;
  href: string;
}

export interface CaseStudy {
  slug: string;
  /** Product-launch style one-liner. */
  tagline: string;
  title: string;
  category: string;
  /** Short award/status label, e.g. "Runner-up, Outstanding Impact". */
  badge?: string;
  summary: string;
  /** SEO description for the case study page (~150 chars). */
  seoDescription: string;
  role: string;
  when?: string;
  context: string;
  /** Headline number for tiles, e.g. { value: "79%", label: "..." }. */
  metric?: { value: string; label: string };
  problem: string;
  approach: string[];
  /** Optional technical walkthrough as ordered steps. */
  howItWorks?: { title: string; text: string }[];
  outcome: string[];
  stack: string[];
  links: LinkItem[];
  note?: string;
  /** Product screenshot for the tile and case study hero. */
  image?: { src: string; width: number; height: number; alt: string };
  /** Visual theme for the tile. */
  theme: "espresso" | "blush" | "ivory" | "navy" | "gold";
}

export interface Role {
  id: string;
  title: string;
  org: string;
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
  caseStudy?: string;
}

export interface Education {
  credential: string;
  institution: string;
  location: string;
  dates: string;
}
