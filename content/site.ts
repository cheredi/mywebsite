// Tatyana's own copy, verbatim from her July 2026 site. Don't reword it here;
// if something needs to change, she should write it.

export const SITE_URL = "https://tatyanaamugo.com";

export const PERSON = {
  name: "Tatyana Amugo",
  email: "tatyanaamugo@gmail.com",
  city: "Toronto",
  timeZone: "America/Toronto",
};

export const HERO = {
  hello: "Hello",
  wave: "👋🏾",
  /** After the intro says "Hello", the hero introduces her: "I'm Tatyana Amugo". */
  im: "I'm",
  kicker: "PRODUCT · AI BUILDER · CUSTOMER CENTRIC",
  summary: "Product & AI Builder — I ship things that solve real problems and measure whether they worked.",
  sub: "I'm targeting product management, strategy, and AI-forward roles where I can work on hard problems, ship fast, and keep learning.",
};

export const ABOUT = {
  heading: "About Me",
  paragraphs: [
    "I identify problems, build solutions, and measure whether they worked. My background spans AI engineering, product delivery, and data analysis — I use all three to ship things that actually move the needle. My work spans prompt engineering, retrieval pipelines, backend APIs, and enterprise-grade deployment.",
    "I enjoy converting ambiguous product and policy constraints into deployable systems that teams can trust.",
  ],
  focus: { label: "Focus:", text: "shipping reliable AI workflows that improve real operations, not just demos." },
};

export const SECTIONS = {
  proof: "Momentum & Social Proof",
  projects: "Featured Projects",
  experience: "Experience",
  skills: "Skills",
  education: "Education & Credentials",
  substack: "Lipgloss & LLMS",
  substackIntro: "Featured reads from my Substack on practical AI concepts and real-world thinking.",
  substackStatus: "Latest posts, auto-synced from Lipgloss & LLMS.",
  substackEmpty: "No posts found yet — check back soon.",
  substackError: "We couldn't load the latest Substack posts right now. Please check back soon.",
  substackCta: "Visit Lipgloss & LLMs",
  arcade: "Interview Arcade",
  arcadeIntro: "Pick role + difficulty, beat the timer, stack a streak, and train like an interview game.",
  contact: "Let's Connect",
};

export const LINKS = {
  linkedin: "https://linkedin.com/in/tatyana-amugo02",
  github: "https://github.com/cheredi",
  substack: "https://lipgloss2llms.substack.com",
  substackFeed: "https://lipgloss2llms.substack.com/feed",
};

/** Menu items: her original section names. */
export const NAV = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#writing", label: "Substack" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
] as const;

export const SEO = {
  title: "Tatyana Amugo — Product & AI Builder in Toronto",
  description:
    "Product & AI Builder shipping AI-forward products, prompt/retrieval pipelines, and data-driven decision tools. Based in Toronto, open to roles across the GTA.",
};
