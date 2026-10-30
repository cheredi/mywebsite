import type { ArcadePrompt, RoleKey } from "./i18n/types";

// Tatyana's Interview Arcade prompts, verbatim (English source).
export const ARCADE_EN: Record<RoleKey, ArcadePrompt[]> = {
  data_analyst: [
    {
      question:
        "A churn dashboard spikes for one cohort. What is your first 30-minute investigation plan?",
      rubric: [
        "Confirms metric definition and data freshness.",
        "Splits issue by segment and funnel stage.",
        "Proposes one concrete next action for stakeholders.",
      ],
      hints: [
        "Start with data reliability checks.",
        "Compare against prior weekly baseline.",
        "Isolate by acquisition channel first.",
      ],
    },
    {
      question: "Design a KPI view a non-technical manager can use in 60 seconds.",
      rubric: [
        "Chooses a clear primary KPI and supporting trend.",
        "Uses thresholds or alerts for fast decisions.",
        "Adds one recommended action based on the signal.",
      ],
      hints: ["Clarity beats dashboard complexity.", "Use plain language labels.", "One KPI, one decision."],
    },
  ],
  ml_engineer: [
    {
      question: "How would you evaluate a RAG interview coach beyond model accuracy?",
      rubric: [
        "Separates retrieval quality from generation quality.",
        "Defines groundedness and hallucination checks.",
        "Includes human review loop and failure taxonomy.",
      ],
      hints: [
        "Measure retrieval and response separately.",
        "Use a rubric, not just one score.",
        "Track failure types over time.",
      ],
    },
    {
      question: "Your RAG latency regresses after adding features. What do you optimize first?",
      rubric: [
        "Profiles the pipeline to find true bottleneck.",
        "Balances caching and retrieval depth tradeoffs.",
        "Protects response quality with regression checks.",
      ],
      hints: [
        "Profile before optimizing.",
        "Check embedding/retrieval path first.",
        "Guard quality while reducing latency.",
      ],
    },
  ],
  product_analytics: [
    {
      question:
        "A feature increases engagement but lowers conversion. What recommendation do you ship?",
      rubric: [
        "Frames tradeoffs by user segment and funnel impact.",
        "Connects recommendation to product goals.",
        "Defines a measurable follow-up experiment.",
      ],
      hints: ["Who gained? Who lost?", "Tie metrics to business goal.", "Ship with guardrails and test plan."],
    },
    {
      question: "How do you prioritize roadmap items when interview feedback is conflicting?",
      rubric: [
        "Clusters feedback by persona and impact.",
        "Uses effort/impact reasoning transparently.",
        "Converts priorities into milestone-based plan.",
      ],
      hints: ["Group feedback before ranking.", "Impact first, then effort.", "Define what success looks like."],
    },
  ],
};
