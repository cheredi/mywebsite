import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Product Management",
    items: [
      "Problem framing, opportunity sizing, and prioritization tied to measurable outcomes.",
      "Product strategy and roadmap thinking grounded in user needs and business constraints.",
      "Converts ambiguous requirements into clear plans teams can execute.",
    ],
  },
  {
    title: "Agile & Delivery",
    items: [
      "User stories, backlog management, sprint planning, standups, and retrospectives.",
      "Fast iteration from prototype to tested deliverable under tight timelines.",
      "Cross-functional execution across engineering, design, and business stakeholders.",
    ],
  },
  {
    title: "Data Analysis & Experimentation",
    items: [
      "SQL and Python analysis for KPI tracking, performance diagnosis, and decision support.",
      "A/B testing and experiment design with clear success metrics and tradeoff analysis.",
      "Dashboarding and metric storytelling for operational and product visibility.",
    ],
  },
  {
    title: "Stakeholder Communication",
    items: [
      "Translates technical constraints into clear business language for decision-makers.",
      "Aligns teams around goals, risks, timelines, and measurable definitions of success.",
      "Drives collaboration across product, engineering, and operations partners.",
    ],
  },
  {
    title: "AI & Product Systems",
    items: [
      "Designed and optimized prompt templates (Jinja) for production LLM workflows.",
      "Built and evaluated RAG pipelines with ChromaDB and sentence-transformers.",
      "Built end-to-end agentic systems with FastAPI backends and tool-calling patterns.",
      "Integrated LLM-backed APIs into enterprise systems with structured outputs and output validation.",
    ],
  },
];
