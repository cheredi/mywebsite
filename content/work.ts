import type { CaseStudy } from "./types";

// Case studies, in the order they appear on the home page.
// Keep every claim here something Tatyana can speak to in an interview.

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-case-review",
    tagline: "Government-grade AI, with the guardrails built in.",
    title: "AI-Assisted Case Review",
    category: "Enterprise AI · Ontario Public Service",
    summary:
      "Built the APIs, orchestration, and prompt templates behind AI-assisted case review in a regulated government case management system.",
    seoDescription:
      "How Tatyana Amugo built validated, agentic AI workflows for case review at the Ontario Public Service, cutting manual case-processing overhead by ~79%.",
    role: "AI Engineer Co-op",
    when: "Jan – Apr 2026",
    context:
      "SAMS, an enterprise case management system used in a regulated government environment, where every AI-assisted decision has to be accurate, structured, and reviewable.",
    metric: { value: "~79%", label: "less manual case-processing overhead" },
    problem:
      "Case review relied on heavy manual processing. Bringing an LLM into that workflow only helps if its output is reliable enough for a regulated setting — a fluent but wrong answer is worse than no answer.",
    approach: [
      "Engineered Jinja-based prompt templates for production LLM workflows, so responses come back in a predictable, structured shape.",
      "Validated model responses for accuracy before they reach a decision, rather than trusting raw model output.",
      "Built secure RESTful APIs and backend orchestration layers for agentic, AI-assisted decision workflows.",
      "Defined measurable success metrics with stakeholders and iterated on the prompt and retrieval pipeline against them.",
      "Deployed and debugged through Azure DevOps CI/CD.",
    ],
    outcome: [
      "Reduced manual case-processing overhead by approximately 79%.",
      "More reliable LLM integrations, with stakeholders aligned on what “working” means.",
    ],
    stack: ["LLMs", "Jinja", "REST APIs", "Agentic workflows", "Retrieval", "Azure DevOps"],
    links: [],
    note: "Government work: details are limited to what can be shared publicly.",
    theme: "espresso",
  },
  {
    slug: "ona",
    tagline: "It sees the room. Then it tells you about it.",
    title: "ONA — Assistive AI",
    category: "Capstone · Computer vision",
    badge: "Runner-up, Outstanding Impact",
    summary:
      "Led a multidisciplinary team building an assistive AI system that gives visually impaired people and dementia patients spatial awareness and memory support.",
    seoDescription:
      "ONA, an assistive AI system led by Tatyana Amugo: real-time object detection, depth estimation, face recognition and offline speech. Runner-up for Outstanding Impact.",
    role: "Team lead",
    context:
      "A capstone project for people with visual impairments and people living with dementia — two groups for whom knowing what's around them, and who, makes daily life safer.",
    metric: { value: "Runner-up", label: "Outstanding Impact award" },
    problem:
      "Visually impaired people need to know what's nearby and how far away it is. People living with dementia benefit from help recognizing familiar faces. Both need it hands-free, in plain language, and without depending on a connection.",
    approach: [
      "Led the multidisciplinary team from problem definition through to a working system.",
      "Defined the system architecture and the user validation strategy.",
      "Translated ambiguous, human-centered needs into AI workflows that could actually be deployed.",
    ],
    howItWorks: [
      { title: "Detect", text: "YOLO26 finds objects and obstacles in real time." },
      { title: "Measure", text: "MiDaS estimates depth from a single camera, so the system knows how far away things are." },
      { title: "Recognize", text: "FriendNet, a custom-trained model, recognizes familiar faces to support memory." },
      { title: "Describe", text: "Gemini turns detections into natural-language scene descriptions and guidance." },
      { title: "Speak", text: "Argos Translate gives offline multilingual output and Piper TTS reads it aloud." },
    ],
    outcome: [
      "Runner-up for Outstanding Impact, recognized for real-world applicability and clarity of the solution.",
      "A hands-free, screen-free experience that works offline and in multiple languages.",
    ],
    stack: ["PyTorch", "YOLO26", "MiDaS", "FriendNet (custom)", "Gemini", "Argos Translate", "Piper TTS"],
    links: [
      { label: "Watch the demo", href: "https://www.youtube.com/watch?v=DmDypLwYT3E" },
      { label: "Try the live demo", href: "https://ona-vision.netlify.app/" },
    ],
    image: {
      src: "/images/work/ona.webp",
      width: 1600,
      height: 1000,
      alt: "The ONA web app: “Spatial awareness reimagined for the visually impaired.”",
    },
    theme: "navy",
  },
  {
    slug: "shipping-setup-assistant",
    tagline: "Two questions. Shipping, set up.",
    title: "Shipping Setup Assistant",
    category: "Product prototype",
    summary:
      "A guided assistant that replaces confusing shipping jargon with two plain-English questions, then configures the setup flow for the merchant.",
    seoDescription:
      "A product prototype by Tatyana Amugo: a guided assistant that reduces merchant drop-off in shipping setup by replacing jargon with two plain-English questions.",
    role: "Product & build",
    context:
      "Built in response to a Shopify-style product assignment about shipping setup for online merchants.",
    problem:
      "Many merchants abandon shipping setup before they finish. The drop-off happens when they hit unfamiliar shipping terms they don't know how to answer.",
    approach: [
      "Framed the problem around where merchants actually drop off, not around the settings screen.",
      "Designed a guided flow that asks two plain-English questions instead of exposing every option.",
      "Used the answers to configure the setup flow automatically.",
      "Built and deployed it as an interactive prototype on Netlify, so it can be tested rather than described.",
    ],
    outcome: [
      "A working, clickable prototype that turns a jargon-heavy form into a two-step conversation.",
    ],
    stack: ["Product discovery", "UX", "Prototyping", "Netlify"],
    links: [{ label: "Open the prototype", href: "https://shippingsetup-tatyana.netlify.app" }],
    image: {
      src: "/images/work/shipping.webp",
      width: 1600,
      height: 925,
      alt: "Step one of the shipping assistant: “What are you selling?” with four plain-language options.",
    },
    theme: "blush",
  },
  {
    slug: "swali-ai",
    tagline: "Interview prep that knows the role.",
    title: "Swali-AI",
    category: "LLM + RAG · In progress",
    summary:
      "An end-to-end LLM and retrieval system that pulls role-specific knowledge and runs structured interview simulations with feedback.",
    seoDescription:
      "Swali-AI by Tatyana Amugo: an LLM + RAG interview preparation system with role-specific retrieval, structured simulations, and validated feedback.",
    role: "Builder",
    context:
      "Generic interview prep gives everyone the same questions. Swali-AI grounds practice in knowledge specific to the role a candidate is going for.",
    problem:
      "LLMs make it easy to generate interview questions, but hard to make them relevant and trustworthy. Without grounding, answers drift and feedback hallucinates.",
    approach: [
      "Retrieves role-specific knowledge dynamically before generating anything.",
      "Uses prompt templates to produce structured interview simulations and feedback.",
      "Adds response validation logic to keep output relevant and reduce hallucinations.",
    ],
    outcome: [
      "In active development. The Interview Arcade on this site is a small taste of the experience.",
    ],
    stack: ["RAG", "Prompt engineering", "ChromaDB", "FastAPI", "Validation logic"],
    links: [
      { label: "Read the README", href: "https://github.com/cheredi/swali-ai#readme" },
      { label: "Play the Interview Arcade", href: "/arcade" },
    ],
    theme: "gold",
  },
  {
    slug: "anomaly-detection",
    tagline: "Spots what doesn't belong.",
    title: "Video Anomaly Detection",
    category: "Graduate project · Computer vision",
    summary:
      "Benchmarked PaDiM, SPADE, and CLIP-based models for video anomaly detection, then shipped an interactive demo with Grad-CAM explanations.",
    seoDescription:
      "Tatyana Amugo's video anomaly detection project: benchmarking PaDiM, SPADE and CLIP models in PyTorch and OpenCV, with an interactive Grad-CAM demo.",
    role: "Engineer",
    context: "A graduate project comparing approaches to detecting unusual events in video.",
    problem:
      "There are several credible approaches to anomaly detection, and they behave differently on real-world footage. Picking one needs evidence, and trusting one needs explanations.",
    approach: [
      "Engineered and benchmarked PaDiM, SPADE, and CLIP-based models in PyTorch and OpenCV.",
      "Optimized the preprocessing and inference pipelines for stronger performance on real-world datasets.",
      "Deployed an interactive demo with Grad-CAM visualizations, so people can see why a frame was flagged.",
    ],
    outcome: ["A side-by-side comparison of three approaches and a live demo that explains its own decisions."],
    stack: ["PyTorch", "OpenCV", "PaDiM", "SPADE", "CLIP", "Grad-CAM", "Streamlit"],
    links: [{ label: "Try the live demo", href: "https://anomal-y-detection.streamlit.app" }],
    theme: "ivory",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
