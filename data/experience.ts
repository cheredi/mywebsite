import { ExperienceEntry } from "@/types";

// Each entry's `id` matches a stat deep link (see data/proof.ts).
export const experienceEntries: ExperienceEntry[] = [
  {
    id: "exp-ai-engineer",
    role: "AI Engineer Co-op",
    org: "Ontario Public Service",
    location: "Toronto, Canada",
    dates: "Jan 2026 – Apr 2026",
    bullets: [
      "Enabled reliable, structured AI-assisted case review decisions in the SAMS enterprise case management system by validating model responses for accuracy — engineered using Jinja-based prompt templates for production LLM workflows.",
      "Reduced manual case-processing overhead in a regulated government environment by approximately 79% by building secure RESTful APIs and backend orchestration layers for agentic, AI-assisted decision workflows.",
      "Improved reliability and stakeholder alignment of LLM integrations by defining measurable success metrics and iterating on prompt/retrieval pipeline design — deployed and debugged via Azure DevOps CI/CD.",
    ],
  },
  {
    id: "exp-upande",
    role: "ERP Developer",
    org: "Upande",
    location: "Nairobi, Kenya",
    dates: "Sep 2024 – Dec 2024",
    bullets: [
      "Streamlined cross-department operations by integrating backend services and automating workflows — implemented and configured using ERPNext modules.",
      "Improved reporting accuracy and operational efficiency by reducing manual processing by approximately 30% — achieved by building automation pipelines.",
    ],
  },
  {
    id: "exp-beats-by-dre",
    role: "Extern, Consumer Insights & Data Analytics",
    org: "Beats by Dre",
    location: "Nairobi, Kenya",
    dates: "Sep 2024 – Oct 2024",
    bullets: [
      "Improved targeted marketing effectiveness by 15% by translating ambiguous business questions into structured, metric-driven insights — analyzed customer behavior and market segmentation data using Python and Tableau.",
      "Enabled faster, clearer decision-making for cross-functional stakeholders by distilling complex data into actionable recommendations — presented through dynamic dashboards.",
      "Improved data collection efficiency and downstream analysis quality by 20% by designing and deploying customer surveys with optimized question logic.",
    ],
  },
];
