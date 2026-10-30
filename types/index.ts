// Shared TypeScript types for the portfolio site's content model.
// Keeping these centralized avoids copy-pasted inline shapes across components.

export interface ProjectLink {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  meta?: { label: string; text: string }[];
  tags: string[];
  filterTags: string[];
  badge?: string;
  highlight?: boolean;
  links?: ProjectLink[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  location: string;
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
  detail: string;
}

export interface SubstackPost {
  title: string;
  description: string;
  canonicalUrl: string;
  postDate: string;
  imageUrl: string | null;
}
