// Shared TypeScript types for the portfolio site's content model.

export interface ProjectLink {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface Project {
  slug: string;
  title: string;
  /** Short context line shown above the title, e.g. "Capstone · Runner-up". */
  eyebrow?: string;
  description: string;
  /** Extra labelled lines shown under the description. */
  meta?: { label?: string; text: string }[];
  /** Longer technical write-up, collapsed by default. */
  details?: { summary: string; text: string };
  tags: string[];
  featured?: boolean;
  links?: ProjectLink[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ProofStat {
  target: number;
  /** Rendered after the number, e.g. "%". */
  suffix?: string;
  label: string;
  href: string;
}

export interface EducationEntry {
  title: string;
  institution: string;
  dates: string;
}

export interface SubstackPost {
  title: string;
  description: string;
  canonicalUrl: string;
  postDate: string;
  imageUrl: string | null;
}
