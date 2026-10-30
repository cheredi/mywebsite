import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "shipping-setup-assistant",
    title: "Shipping Setup Assistant Prototype (Shopify-Style Assignment)",
    description:
      "A small prototype I built based on a Shopify shipping setup assignment prompt. The problem: many merchants abandon setup before finishing when they hit unfamiliar shipping terms. My solution: a guided assistant that asks two plain-English questions and configures the setup flow automatically. Built and deployed as an interactive prototype on Netlify.",
    tags: ["Product Management", "UX", "Prototype", "Live Service Thinking"],
    filterTags: ["all"],
    badge: "Featured",
    highlight: true,
    links: [
      {
        label: "View Prototype",
        href: "https://shippingsetup-tatyana.netlify.app",
        variant: "primary",
      },
    ],
  },
  {
    slug: "ona-assistive-ai",
    title: "ONA - Assistive AI System (Runner-Up: Outstanding Impact)",
    description:
      "Led a multidisciplinary team in designing an AI-powered assistive system supporting visually impaired individuals and dementia patients with spatial awareness and memory reinforcement.",
    meta: [
      {
        label: "Impact",
        text: "Recognized as Runner-Up for Outstanding Impact for real-world applicability and solution clarity.",
      },
      {
        label: "",
        text: "Defined system architecture and user validation strategy, translating ambiguous human-centered challenges into deployable AI-enabled workflows.",
      },
      {
        label: "Under the Hood",
        text: "A PyTorch-based pipeline runs YOLOv26 for real-time object and obstacle detection alongside MiDaS for monocular depth estimation, giving the system a live read on what's nearby and how far away it is. FriendNet, a custom-trained model, recognizes familiar faces to support memory reinforcement for dementia patients. Gemini turns those detections into natural-language scene descriptions and contextual guidance, Argos Translate enables fully offline multilingual output, and Piper TTS speaks the results aloud for hands-free, screen-free accessibility.",
      },
    ],
    tags: ["YOLOv26", "MiDaS", "PyTorch", "Gemini", "Argos Translate", "Piper TTS", "FriendNet (Custom Model)"],
    filterTags: ["agentic", "nlp", "cv"],
    badge: "Capstone",
    highlight: true,
    links: [
      {
        label: "Watch Demo Video",
        href: "https://www.youtube.com/watch?v=DmDypLwYT3E",
        variant: "primary",
      },
      {
        label: "Live Demo",
        href: "https://ona-vision.netlify.app/",
        variant: "secondary",
      },
    ],
  },
  {
    slug: "rag-interview-prep",
    title: "RAG-Powered Interview Preparation System",
    description:
      "Building an end-to-end LLM + RAG system that dynamically retrieves role-specific knowledge and generates structured interview simulations with feedback.",
    meta: [
      {
        label: "Focus",
        text: "Prompt templates, retrieval pipelines, and response validation logic to improve output relevance and reduce hallucinations.",
      },
    ],
    tags: ["RAG", "Prompt Engineering", "ChromaDB", "FastAPI", "Validation Logic"],
    filterTags: ["rag", "nlp", "agentic"],
    links: [
      {
        label: "View README",
        href: "https://github.com/cheredi/swali-ai#readme",
        variant: "primary",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/cheredi/swali-ai",
        variant: "secondary",
      },
    ],
  },
  {
    slug: "anomaly-detection",
    title: "Anomaly Detection System (Graduate Project)",
    description:
      "Engineered and benchmarked PaDiM, SPADE, and CLIP-based models using PyTorch and OpenCV for video anomaly detection.",
    meta: [
      {
        label: "",
        text: "Optimized preprocessing and inference pipelines for stronger performance on real-world datasets, and deployed an interactive demo with Grad-CAM visualizations.",
      },
    ],
    tags: ["PyTorch", "OpenCV", "PaDiM", "SPADE", "CLIP"],
    filterTags: ["cv"],
    links: [
      {
        label: "Live Demo",
        href: "https://anomal-y-detection.streamlit.app",
        variant: "primary",
      },
    ],
  },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "RAG", value: "rag" },
  { label: "NLP", value: "nlp" },
  { label: "Agentic AI", value: "agentic" },
  { label: "Computer Vision", value: "cv" },
];
