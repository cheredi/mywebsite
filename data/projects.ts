import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "shipping-setup-assistant",
    eyebrow: "Product prototype",
    title: "Shipping Setup Assistant",
    description:
      "A small prototype I built based on a Shopify shipping setup assignment prompt. The problem: many merchants abandon setup before finishing when they hit unfamiliar shipping terms. My solution: a guided assistant that asks two plain-English questions and configures the setup flow automatically. Built and deployed as an interactive prototype on Netlify.",
    tags: ["Product Management", "UX", "Prototype", "Live Service Thinking"],
    featured: true,
    links: [
      {
        label: "View prototype",
        href: "https://shippingsetup-tatyana.netlify.app",
        variant: "primary",
      },
    ],
  },
  {
    slug: "ona-assistive-ai",
    eyebrow: "Capstone · Runner-up, Outstanding Impact",
    title: "ONA — Assistive AI System",
    description:
      "Led a multidisciplinary team in designing an AI-powered assistive system supporting visually impaired individuals and dementia patients with spatial awareness and memory reinforcement.",
    meta: [
      {
        label: "Impact",
        text: "Recognized as Runner-Up for Outstanding Impact for real-world applicability and solution clarity.",
      },
      {
        text: "Defined system architecture and user validation strategy, translating ambiguous human-centered challenges into deployable AI-enabled workflows.",
      },
    ],
    details: {
      summary: "How it works",
      text: "A PyTorch-based pipeline runs YOLO26 for real-time object and obstacle detection alongside MiDaS for monocular depth estimation, giving the system a live read on what's nearby and how far away it is. FriendNet, a custom-trained model, recognizes familiar faces to support memory reinforcement for dementia patients. Gemini turns those detections into natural-language scene descriptions and contextual guidance, Argos Translate enables fully offline multilingual output, and Piper TTS speaks the results aloud for hands-free, screen-free accessibility.",
    },
    tags: ["YOLO26", "MiDaS", "PyTorch", "Gemini", "Argos Translate", "Piper TTS", "FriendNet (custom model)"],
    featured: true,
    links: [
      {
        label: "Watch demo video",
        href: "https://www.youtube.com/watch?v=DmDypLwYT3E",
        variant: "primary",
      },
      {
        label: "Live demo",
        href: "https://ona-vision.netlify.app/",
        variant: "secondary",
      },
    ],
  },
  {
    slug: "rag-interview-prep",
    eyebrow: "In progress",
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
    links: [
      {
        label: "Read the README",
        href: "https://github.com/cheredi/swali-ai#readme",
        variant: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/cheredi/swali-ai",
        variant: "secondary",
      },
    ],
  },
  {
    slug: "anomaly-detection",
    eyebrow: "Graduate project",
    title: "Anomaly Detection System",
    description:
      "Engineered and benchmarked PaDiM, SPADE, and CLIP-based models using PyTorch and OpenCV for video anomaly detection.",
    meta: [
      {
        text: "Optimized preprocessing and inference pipelines for stronger performance on real-world datasets, and deployed an interactive demo with Grad-CAM visualizations.",
      },
    ],
    tags: ["PyTorch", "OpenCV", "PaDiM", "SPADE", "CLIP"],
    links: [
      {
        label: "Live demo",
        href: "https://anomal-y-detection.streamlit.app",
        variant: "primary",
      },
    ],
  },
];
