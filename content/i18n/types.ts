export type Lang = "en" | "es" | "fr" | "hi" | "sw" | "zh";
export type RoleKey = "data_analyst" | "ml_engineer" | "product_analytics";
export type DifficultyKey = "easy" | "medium" | "hard";

export interface ArcadePrompt {
  question: string;
  rubric: string[];
  hints: string[];
}

export interface ProjectCopy {
  title: string;
  description: string;
  meta: { label: string; text: string }[];
  tags: string[];
  badge?: string;
  /** Labels for project.links, in the same order. */
  links: string[];
}

/** Everything the site says, in one language. */
export interface Dict {
  lang: Lang;
  /** BCP 47 tag for <html lang>. */
  htmlLang: string;
  /** Voice to request for read-aloud. */
  speechLang: string;
  /** Language name, written in that language. */
  nativeName: string;
  /** Split headline letters for animation (false for scripts with conjuncts). */
  splitChars: boolean;

  hero: { hello: string; im: string; kicker: string; summary: string; sub: string };
  about: { heading: string; paragraphs: [string, string]; focusLabel: string; focusText: string; imageAnchors: [string, string] };
  sections: {
    proof: string;
    projects: string;
    experience: string;
    skills: string;
    education: string;
    substack: string;
    substackIntro: string;
    substackStatus: string;
    substackEmpty: string;
    substackError: string;
    substackCta: string;
    arcade: string;
    arcadeIntro: string;
    contact: string;
  };
  nav: { projects: string; about: string; experience: string; substack: string; resume: string; contact: string };
  ui: {
    role: string;
    city: string;
    scroll: string;
    email: string;
    backToTop: string;
    downloadPdf: string;
    home: string;
    next: string;
    openMenu: string;
    closeMenu: string;
    previousPosts: string;
    nextPosts: string;
    details: string;
    toolsTopics: string;
    skip: string;
    settings: string;
    language: string;
    theme: string;
    system: string;
    light: string;
    dark: string;
    accessibility: string;
    accessibilityHint: string;
    on: string;
    off: string;
    readAloud: string;
    pause: string;
    resume: string;
    stop: string;
    noVoice: string;
    noSpeech: string;
    image: string;
    noTimeLimit: string;
  };
  alt: { portrait: string; ona: string; shipping: string };
  proof: [string, string, string, string];
  projects: Record<string, ProjectCopy>;
  experience: Record<string, { role: string; location: string; bullets: string[] }>;
  skills: { title: string; items: string[] }[];
  education: { title: string; detail: string }[];
  arcade: {
    roles: Record<RoleKey, string>;
    difficulties: Record<DifficultyKey, string>;
    xp: string;
    streak: string;
    timer: string;
    question: string;
    rubric: string;
    needHint: string;
    nailedIt: string;
    skip: string;
    newChallenge: string;
    start: string;
    timeUp: string;
    noHints: string;
    hint: (hint: string) => string;
    strongRun: (earned: number, base: number, speed: number, streak: number) => string;
    skipped: string;
    newRound: string;
    difficultySet: (key: DifficultyKey, label: string) => string;
    data: Record<RoleKey, ArcadePrompt[]>;
  };
}
