// Site-wide constants used for metadata, SEO tags, and social links.

export const SITE_NAME = "Tatyana Amugo — Product & AI Builder";
export const SITE_SHORT_NAME = "Tatyana Amugo";
export const SITE_DESCRIPTION =
  "Product & AI Builder shipping AI-forward products, prompt/retrieval pipelines, and data-driven decision tools.";

// Production domain (hosted on Netlify); used for canonical URLs, Open Graph
// tags, structured data, and sitemap/robots generation.
export const SITE_URL = "https://tatyanaamugo.com";

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/tatyana-amugo02",
  github: "https://github.com/cheredi",
  substack: "https://lipgloss2llms.substack.com",
};

export const SUBSTACK_NAME = "Lipgloss & LLMs";
export const SUBSTACK_FEED_URL = "https://lipgloss2llms.substack.com/feed";

export const CONTACT_EMAIL = "t_amugo@fanshaweonline.ca";

/** Primary navigation; ids match section anchors on the home page. */
export const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
] as const;
