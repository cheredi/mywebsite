// Site-wide facts: identity, contact, links, navigation. Edit here first.

export const SITE_URL = "https://tatyanaamugo.com";

export const PERSON = {
  name: "Tatyana Amugo",
  firstName: "Tatyana",
  role: "AI Product Builder",
  /** City she lives in; shown across the site. */
  location: "Toronto, Canada",
  /** Where she's looking for work. */
  workArea: "Toronto & the GTA",
  timeZone: "America/Toronto",
  email: "t_amugo@fanshaweonline.ca",
};

export const SITE = {
  title: "Tatyana Amugo — AI Product Builder",
  description:
    "Tatyana Amugo is a Toronto-based AI product builder: government AI that cut manual case processing ~79%, and an award-winning assistive vision system. Open to roles across the GTA.",
  locale: "en_CA",
};

export const LINKS = {
  linkedin: "https://linkedin.com/in/tatyana-amugo02",
  github: "https://github.com/cheredi",
  substack: "https://lipgloss2llms.substack.com",
  substackFeed: "https://lipgloss2llms.substack.com/feed",
};

export const SUBSTACK_NAME = "Lipgloss & LLMs";

export const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/#about", label: "About" },
  { href: "/#writing", label: "Writing" },
  { href: "/resume", label: "Résumé" },
] as const;

/** What she is looking for — keep in sync with LinkedIn. */
export const OPEN_TO = [
  "Product Manager, AI",
  "Technical Product Manager",
  "AI Product & Solutions",
  "Product Strategy",
];
