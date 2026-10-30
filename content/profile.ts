import type { Education, Role } from "./types";

export const HEADLINE = {
  /** Three beats, adapted from Tatyana's own "identify problems, build solutions, measure". */
  beats: ["Find the problem.", "Build the fix.", "Prove it worked."],
  intro:
    "I'm an AI product builder with an engineer's toolkit. I turn messy, high-stakes problems into AI products people can trust — and I measure whether they actually worked.",
};

/** Big numbers. Each links to the evidence behind it. */
export const PROOF = [
  { value: "79%", label: "less manual case processing in a government AI workflow", href: "/work/ai-case-review" },
  { value: "Runner‑up", label: "Outstanding Impact, for the ONA assistive AI capstone", href: "/work/ona" },
  { value: "15%", label: "lift in targeted marketing from analytics work at Beats by Dre", href: "/#experience" },
  { value: "30%", label: "less manual processing from ERP automation at Upande", href: "/#experience" },
];

/** The "I am a…" strip. Only things that are true and checkable. */
export const IDENTITIES = [
  "AI product builder",
  "AI engineer",
  "Team lead",
  "Prototyper",
  "Data storyteller",
  "Writer",
  "Strathmore alum",
  "Fanshawe AI & ML",
  "Nairobi → Ontario",
];

export const CURRENTLY = [
  { label: "Building", text: "Swali-AI, a RAG interview coach", href: "/work/swali-ai" },
  { label: "Writing", text: "Lipgloss & LLMs on Substack", href: "/#writing" },
  { label: "Studying", text: "Graduate Certificate, AI & ML at Fanshawe", href: "/resume" },
  { label: "Looking for", text: "Product and AI roles", href: "/#contact" },
];

/** How she works. Each step points to a project that shows it. */
export const APPROACH = [
  {
    step: "01",
    title: "Find the real problem.",
    text: "Merchants weren't confused by shipping — they were confused by the words. I start where people actually drop off.",
    proof: { label: "Shipping Setup Assistant", href: "/work/shipping-setup-assistant" },
  },
  {
    step: "02",
    title: "Agree on what “working” means.",
    text: "Before tuning a prompt, I define success with the people who'll rely on it — so progress is measured, not debated.",
    proof: { label: "AI-Assisted Case Review", href: "/work/ai-case-review" },
  },
  {
    step: "03",
    title: "Build the smallest thing that proves it.",
    text: "A clickable prototype beats a slide. A live demo with explanations beats a benchmark table.",
    proof: { label: "Video Anomaly Detection", href: "/work/anomaly-detection" },
  },
  {
    step: "04",
    title: "Measure. Then ship.",
    text: "Validation, guardrails, and real numbers — 79% less manual work is a result, not a feature list.",
    proof: { label: "AI-Assisted Case Review", href: "/work/ai-case-review" },
  },
];

export const EXPERIENCE: Role[] = [
  {
    id: "ontario-public-service",
    title: "AI Engineer Co-op",
    org: "Ontario Public Service",
    location: "Toronto, Canada",
    dates: "Jan 2026 – Apr 2026",
    summary: "AI-assisted case review in a regulated government case management system.",
    highlights: [
      "Enabled reliable, structured AI-assisted case review decisions in the SAMS enterprise case management system by validating model responses for accuracy, using Jinja-based prompt templates for production LLM workflows.",
      "Reduced manual case-processing overhead by approximately 79% by building secure RESTful APIs and backend orchestration layers for agentic, AI-assisted decision workflows.",
      "Improved reliability and stakeholder alignment of LLM integrations by defining measurable success metrics and iterating on prompt and retrieval pipeline design; deployed and debugged via Azure DevOps CI/CD.",
    ],
    caseStudy: "ai-case-review",
  },
  {
    id: "upande",
    title: "ERP Developer",
    org: "Upande",
    location: "Nairobi, Kenya",
    dates: "Sep 2024 – Dec 2024",
    summary: "ERPNext implementation and workflow automation.",
    highlights: [
      "Streamlined cross-department operations by integrating backend services and automating workflows with ERPNext modules.",
      "Improved reporting accuracy and operational efficiency by reducing manual processing by approximately 30% through automation pipelines.",
    ],
  },
  {
    id: "beats-by-dre",
    title: "Extern, Consumer Insights & Data Analytics",
    org: "Beats by Dre",
    location: "Nairobi, Kenya",
    dates: "Sep 2024 – Oct 2024",
    summary: "Customer behaviour and segmentation analysis for marketing decisions.",
    highlights: [
      "Improved targeted marketing effectiveness by 15% by turning ambiguous business questions into structured, metric-driven insights, analysing customer behaviour and segmentation with Python and Tableau.",
      "Enabled faster decisions for cross-functional stakeholders by distilling complex data into recommendations, presented through dynamic dashboards.",
      "Improved data collection efficiency and downstream analysis quality by 20% by designing customer surveys with optimized question logic.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    credential: "Graduate Certificate, Artificial Intelligence & Machine Learning (Co-op)",
    institution: "Fanshawe College",
    location: "London, Canada",
    dates: "Jan 2025 – Present",
  },
  {
    credential: "Bachelor's Degree, Informatics & Computer Science",
    institution: "Strathmore University",
    location: "Nairobi, Kenya",
    dates: "Apr 2020 – Jul 2023",
  },
  {
    credential: "Diploma, Business Information Technology",
    institution: "Strathmore University",
    location: "Nairobi, Kenya",
    dates: "Jan 2019 – Sep 2021",
  },
];

export const CREDENTIALS = [{ name: "Data Analyst with Python and SQL", issuer: "DataCamp", year: "2024" }];

export const TOOLKIT = [
  {
    title: "Product",
    lead: "Framing the problem and getting a team to a measurable outcome.",
    items: [
      "Problem framing & opportunity sizing",
      "Prioritization & roadmaps",
      "User stories, backlog & sprint rituals",
      "Experiment design & A/B testing",
      "Stakeholder alignment",
    ],
  },
  {
    title: "AI engineering",
    lead: "Making LLM and vision systems reliable enough to depend on.",
    items: [
      "Prompt templates for production LLMs (Jinja)",
      "RAG pipelines: ChromaDB, sentence-transformers",
      "Agentic systems: FastAPI, tool calling",
      "Structured outputs & response validation",
      "Computer vision: PyTorch, OpenCV, YOLO, MiDaS",
    ],
  },
  {
    title: "Data",
    lead: "Turning ambiguous questions into numbers people act on.",
    items: [
      "SQL & Python analysis",
      "KPI design & dashboards (Tableau)",
      "Segmentation & customer insight",
      "Survey design",
      "Metric storytelling",
    ],
  },
];

export const TOOLS = [
  "Python",
  "SQL",
  "FastAPI",
  "PyTorch",
  "OpenCV",
  "ChromaDB",
  "Jinja",
  "Gemini",
  "Azure DevOps",
  "Tableau",
  "Streamlit",
  "ERPNext",
];

export const ABOUT = {
  title: "From Nairobi to Ontario, with a soft spot for elegant solutions.",
  paragraphs: [
    "I studied Informatics and Computer Science at Strathmore University in Nairobi, then put it to work: automating ERP workflows at Upande and turning customer data into marketing decisions for Beats by Dre.",
    "I moved to Canada for a Graduate Certificate in AI and Machine Learning at Fanshawe College, led the team behind ONA, and spent a co-op term at the Ontario Public Service building AI workflows where accuracy isn't optional.",
    "What ties it together: I identify problems, build solutions, and measure whether they worked. I care about the people on the other end of the system as much as the system itself.",
  ],
  /** Tatyana's own words, from her original site. Keep this a verbatim quote. */
  aside: "I love simplifying the complex — because elegant code is the best kind of magic.",
};
