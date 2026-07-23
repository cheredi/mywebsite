(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/proof.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "proofStats",
    ()=>proofStats
]);
const proofStats = [
    {
        target: 3,
        label: "Core AI projects delivered",
        href: "#projects"
    },
    {
        target: 79,
        label: "Manual overhead reduced in AI workflows (%)",
        href: "#exp-ai-engineer"
    },
    {
        target: 15,
        label: "Marketing uplift from analytics work (%)",
        href: "#exp-beats-by-dre"
    },
    {
        target: 30,
        label: "ERP workflow automation impact (%)",
        href: "#exp-upande"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hooks/useScrollReveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollReveal",
    ()=>useScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useScrollReveal() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return undefined;
            const observer = new IntersectionObserver({
                "useScrollReveal.useEffect": (entries)=>{
                    entries.forEach({
                        "useScrollReveal.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add("visible");
                            }
                        }
                    }["useScrollReveal.useEffect"]);
                }
            }["useScrollReveal.useEffect"], {
                threshold: 0.1
            });
            observer.observe(el);
            return ({
                "useScrollReveal.useEffect": ()=>observer.disconnect()
            })["useScrollReveal.useEffect"];
        }
    }["useScrollReveal.useEffect"], []);
    return ref;
}
_s(useScrollReveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ProofSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProofSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$proof$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/proof.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hooks/useScrollReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProofSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])();
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProofSection.useState": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$proof$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proofStats"].map({
                "ProofSection.useState": ()=>0
            }["ProofSection.useState"])
    }["ProofSection.useState"]);
    const startedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProofSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return undefined;
            const observer = new IntersectionObserver({
                "ProofSection.useEffect": (entries)=>{
                    entries.forEach({
                        "ProofSection.useEffect": (entry)=>{
                            if (entry.isIntersecting && !startedRef.current) {
                                startedRef.current = true;
                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$proof$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proofStats"].forEach({
                                    "ProofSection.useEffect": (stat, index)=>{
                                        const target = stat.target;
                                        const increment = Math.max(1, Math.ceil(target / 45));
                                        const timer = setInterval({
                                            "ProofSection.useEffect.timer": ()=>{
                                                setCounts({
                                                    "ProofSection.useEffect.timer": (prev)=>{
                                                        const next = [
                                                            ...prev
                                                        ];
                                                        const current = Math.min(next[index] + increment, target);
                                                        next[index] = current;
                                                        if (current >= target) clearInterval(timer);
                                                        return next;
                                                    }
                                                }["ProofSection.useEffect.timer"]);
                                            }
                                        }["ProofSection.useEffect.timer"], 26);
                                    }
                                }["ProofSection.useEffect"]);
                            }
                        }
                    }["ProofSection.useEffect"]);
                }
            }["ProofSection.useEffect"], {
                threshold: 0.3
            });
            observer.observe(section);
            return ({
                "ProofSection.useEffect": ()=>observer.disconnect()
            })["ProofSection.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ProofSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "proof",
        ref: sectionRef,
        className: "animate social-proof section-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Momentum & Social Proof"
            }, void 0, false, {
                fileName: "[project]/components/sections/ProofSection.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "proof-grid",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$proof$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proofStats"].map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "proof-card",
                        href: stat.href,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "proof-number",
                                children: [
                                    counts[index],
                                    stat.target >= 10 ? "+" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/ProofSection.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "proof-label",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ProofSection.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stat.label, true, {
                        fileName: "[project]/components/sections/ProofSection.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/ProofSection.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/ProofSection.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(ProofSection, "KgBBAY5EiaWBW2MywMcRVHp253E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = ProofSection;
var _c;
__turbopack_context__.k.register(_c, "ProofSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectFilters",
    ()=>projectFilters,
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "shipping-setup-assistant",
        title: "Shipping Setup Assistant Prototype (Shopify-Style Assignment)",
        description: "A small prototype I built based on a Shopify shipping setup assignment prompt. The problem: many merchants abandon setup before finishing when they hit unfamiliar shipping terms. My solution: a guided assistant that asks two plain-English questions and configures the setup flow automatically. Built and deployed as an interactive prototype on Netlify.",
        tags: [
            "Product Management",
            "UX",
            "Prototype",
            "Live Service Thinking"
        ],
        filterTags: [
            "all"
        ],
        badge: "Featured",
        highlight: true,
        links: [
            {
                label: "View Prototype",
                href: "https://shippingsetup-tatyana.netlify.app",
                variant: "primary"
            }
        ]
    },
    {
        slug: "ona-assistive-ai",
        title: "ONA - Assistive AI System (Runner-Up: Outstanding Impact)",
        description: "Led a multidisciplinary team in designing an AI-powered assistive system supporting visually impaired individuals and dementia patients with spatial awareness and memory reinforcement.",
        meta: [
            {
                label: "Impact",
                text: "Recognized as Runner-Up for Outstanding Impact for real-world applicability and solution clarity."
            },
            {
                label: "",
                text: "Defined system architecture and user validation strategy, translating ambiguous human-centered challenges into deployable AI-enabled workflows."
            },
            {
                label: "Under the Hood",
                text: "A PyTorch-based pipeline runs YOLOv26 for real-time object and obstacle detection alongside MiDaS for monocular depth estimation, giving the system a live read on what's nearby and how far away it is. FriendNet, a custom-trained model, recognizes familiar faces to support memory reinforcement for dementia patients. Gemini turns those detections into natural-language scene descriptions and contextual guidance, Argos Translate enables fully offline multilingual output, and Piper TTS speaks the results aloud for hands-free, screen-free accessibility."
            }
        ],
        tags: [
            "YOLOv26",
            "MiDaS",
            "PyTorch",
            "Gemini",
            "Argos Translate",
            "Piper TTS",
            "FriendNet (Custom Model)"
        ],
        filterTags: [
            "agentic",
            "nlp",
            "cv"
        ],
        badge: "Capstone",
        highlight: true,
        links: [
            {
                label: "Watch Demo Video",
                href: "https://www.youtube.com/watch?v=DmDypLwYT3E",
                variant: "primary"
            },
            {
                label: "Live Demo",
                href: "https://ona-vision.netlify.app/",
                variant: "secondary"
            }
        ]
    },
    {
        slug: "rag-interview-prep",
        title: "RAG-Powered Interview Preparation System",
        description: "Building an end-to-end LLM + RAG system that dynamically retrieves role-specific knowledge and generates structured interview simulations with feedback.",
        meta: [
            {
                label: "Focus",
                text: "Prompt templates, retrieval pipelines, and response validation logic to improve output relevance and reduce hallucinations."
            }
        ],
        tags: [
            "RAG",
            "Prompt Engineering",
            "ChromaDB",
            "FastAPI",
            "Validation Logic"
        ],
        filterTags: [
            "rag",
            "nlp",
            "agentic"
        ],
        links: [
            {
                label: "View README",
                href: "https://github.com/cheredi/swali-ai#readme",
                variant: "primary"
            },
            {
                label: "GitHub Repo",
                href: "https://github.com/cheredi/swali-ai",
                variant: "secondary"
            }
        ]
    },
    {
        slug: "anomaly-detection",
        title: "Anomaly Detection System (Graduate Project)",
        description: "Engineered and benchmarked PaDiM, SPADE, and CLIP-based models using PyTorch and OpenCV for video anomaly detection.",
        meta: [
            {
                label: "",
                text: "Optimized preprocessing and inference pipelines for stronger performance on real-world datasets, and deployed an interactive demo with Grad-CAM visualizations."
            }
        ],
        tags: [
            "PyTorch",
            "OpenCV",
            "PaDiM",
            "SPADE",
            "CLIP"
        ],
        filterTags: [
            "cv"
        ],
        links: [
            {
                label: "Live Demo",
                href: "https://anomal-y-detection.streamlit.app",
                variant: "primary"
            }
        ]
    }
];
const projectFilters = [
    {
        label: "All",
        value: "all"
    },
    {
        label: "RAG",
        value: "rag"
    },
    {
        label: "NLP",
        value: "nlp"
    },
    {
        label: "Agentic AI",
        value: "agentic"
    },
    {
        label: "Computer Vision",
        value: "cv"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hooks/useTilt.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTilt",
    ()=>useTilt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useTilt() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function onMouseMove(event) {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = (event.clientY - centerY) / rect.height * -4;
        const rotateY = (event.clientX - centerX) / rect.width * 4;
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
    function onMouseLeave() {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    }
    return {
        ref,
        onMouseMove,
        onMouseLeave
    };
}
_s(useTilt, "QMBuJFIdzLIeqBcFwhMf246mjOM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hooks/useTilt.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProjectCard({ project }) {
    _s();
    const { ref, onMouseMove, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTilt"])();
    const className = [
        "project-card",
        "tilt-card",
        project.highlight ? "project-highlight" : ""
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        ref: ref,
        className: className,
        "data-tags": project.filterTags.join(","),
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        children: [
            project.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "badge",
                children: project.badge
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectCard.tsx",
                lineNumber: 26,
                columnNumber: 24
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: project.title
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: project.description
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            project.meta?.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "meta",
                    children: [
                        entry.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                entry.label,
                                ":"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ProjectCard.tsx",
                            lineNumber: 31,
                            columnNumber: 26
                        }, this) : null,
                        " ",
                        entry.text
                    ]
                }, index, true, {
                    fileName: "[project]/components/sections/ProjectCard.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skill-tags",
                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "skill-tag",
                        children: tag
                    }, tag, false, {
                        fileName: "[project]/components/sections/ProjectCard.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            project.links?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-actions",
                children: project.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `btn btn-${link.variant}`,
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/components/sections/ProjectCard.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectCard.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/ProjectCard.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "1VInTr7lmhGUOGt6rEx8hqWty2U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTilt"]
    ];
});
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/RevealSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RevealSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hooks/useScrollReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function RevealSection({ id, className, children }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        ref: ref,
        className: `animate${className ? ` ${className}` : ""}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/RevealSection.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(RevealSection, "79FN6PjZhT66fD4Cl/dmgIBwU/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = RevealSection;
var _c;
__turbopack_context__.k.register(_c, "RevealSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RevealSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/RevealSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProjectsSection() {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const visibleProjects = filter === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"] : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((project)=>project.filterTags.includes(filter));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RevealSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "projects",
        className: "section-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Featured Projects"
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectsSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filters",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectFilters"].map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `filter-btn${filter === value ? " active" : ""}`,
                        onClick: ()=>setFilter(value),
                        children: label
                    }, value, false, {
                        fileName: "[project]/components/sections/ProjectsSection.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectsSection.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "projects-list",
                children: visibleProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        project: project
                    }, project.slug, false, {
                        fileName: "[project]/components/sections/ProjectsSection.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectsSection.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/ProjectsSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(ProjectsSection, "boPJerHaELAyf+PNkR+Y8+JetQg=");
_c = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/experience.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "experienceEntries",
    ()=>experienceEntries
]);
const experienceEntries = [
    {
        id: "exp-ai-engineer",
        role: "AI Engineer Co-op - Ontario Public Service",
        location: "Toronto, Canada | Jan 2026 - Apr 2026",
        bullets: [
            "Enabled reliable, structured AI-assisted case review decisions in the SAMS enterprise case management system by validating model responses for accuracy — engineered using Jinja-based prompt templates for production LLM workflows.",
            "Reduced manual case-processing overhead in a regulated government environment by approximately 79% by building secure RESTful APIs and backend orchestration layers for agentic, AI-assisted decision workflows.",
            "Improved reliability and stakeholder alignment of LLM integrations by defining measurable success metrics and iterating on prompt/retrieval pipeline design — deployed and debugged via Azure DevOps CI/CD."
        ]
    },
    {
        id: "exp-beats-by-dre",
        role: "Extern - Consumer Insights & Data Analytics, Beats by Dre",
        location: "Nairobi, Kenya | Sep 2024 - Oct 2024",
        bullets: [
            "Improved targeted marketing effectiveness by 15% by translating ambiguous business questions into structured, metric-driven insights — analyzed customer behavior and market segmentation data using Python and Tableau.",
            "Enabled faster, clearer decision-making for cross-functional stakeholders by distilling complex data into actionable recommendations — presented through dynamic dashboards.",
            "Improved data collection efficiency and downstream analysis quality by 20% by designing and deploying customer surveys with optimized question logic."
        ]
    },
    {
        id: "exp-upande",
        role: "ERP Developer - Upande",
        location: "Nairobi, Kenya | Sep 2024 - Dec 2024",
        bullets: [
            "Streamlined cross-department operations by integrating backend services and automating workflows — implemented and configured using ERPNext modules.",
            "Improved reporting accuracy and operational efficiency by reducing manual processing by approximately 30% — achieved by building automation pipelines."
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/skills.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "skillCategories",
    ()=>skillCategories
]);
const skillCategories = [
    {
        title: "Product Management",
        items: [
            "Problem framing, opportunity sizing, and prioritization tied to measurable outcomes.",
            "Product strategy and roadmap thinking grounded in user needs and business constraints.",
            "Converts ambiguous requirements into clear plans teams can execute."
        ]
    },
    {
        title: "Agile & Delivery",
        items: [
            "User stories, backlog management, sprint planning, standups, and retrospectives.",
            "Fast iteration from prototype to tested deliverable under tight timelines.",
            "Cross-functional execution across engineering, design, and business stakeholders."
        ]
    },
    {
        title: "Data Analysis & Experimentation",
        items: [
            "SQL and Python analysis for KPI tracking, performance diagnosis, and decision support.",
            "A/B testing and experiment design with clear success metrics and tradeoff analysis.",
            "Dashboarding and metric storytelling for operational and product visibility."
        ]
    },
    {
        title: "Stakeholder Communication",
        items: [
            "Translates technical constraints into clear business language for decision-makers.",
            "Aligns teams around goals, risks, timelines, and measurable definitions of success.",
            "Drives collaboration across product, engineering, and operations partners."
        ]
    },
    {
        title: "AI & Product Systems",
        items: [
            "Designed and optimized prompt templates (Jinja) for production LLM workflows.",
            "Built and evaluated RAG pipelines with ChromaDB and sentence-transformers.",
            "Built end-to-end agentic systems with FastAPI backends and tool-calling patterns.",
            "Integrated LLM-backed APIs into enterprise systems with structured outputs and output validation."
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/TimelineItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hooks/useTilt.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TimelineItem({ entry }) {
    _s();
    const { ref, onMouseMove, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTilt"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        id: entry.id,
        className: "timeline-item tilt-card",
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: entry.role
            }, void 0, false, {
                fileName: "[project]/components/sections/TimelineItem.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "date",
                children: entry.location
            }, void 0, false, {
                fileName: "[project]/components/sections/TimelineItem.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            entry.bullets.map((bullet, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: bullet
                }, index, false, {
                    fileName: "[project]/components/sections/TimelineItem.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/TimelineItem.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(TimelineItem, "1VInTr7lmhGUOGt6rEx8hqWty2U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTilt"]
    ];
});
_c = TimelineItem;
var _c;
__turbopack_context__.k.register(_c, "TimelineItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/CompetencyCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompetencyCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hooks/useTilt.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CompetencyCard({ category }) {
    _s();
    const { ref, onMouseMove, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTilt"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "competency-card tilt-card",
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: category.title
            }, void 0, false, {
                fileName: "[project]/components/sections/CompetencyCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: category.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: item
                    }, index, false, {
                        fileName: "[project]/components/sections/CompetencyCard.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/CompetencyCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/CompetencyCard.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(CompetencyCard, "1VInTr7lmhGUOGt6rEx8hqWty2U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTilt"]
    ];
});
_c = CompetencyCard;
var _c;
__turbopack_context__.k.register(_c, "CompetencyCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ExperienceSkillsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperienceSkillsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/experience.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/skills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$TimelineItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/TimelineItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$CompetencyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/CompetencyCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hooks/useScrollReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ExperienceSkillsSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])();
    const skillsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "journey",
        ref: sectionRef,
        className: "animate section-wrap timeline",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "experience-skills-layout",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "experience-column",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Experience"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ExperienceSkillsSection.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "timeline-list",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experienceEntries"].map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$TimelineItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    entry: entry
                                }, entry.id, false, {
                                    fileName: "[project]/components/sections/ExperienceSkillsSection.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ExperienceSkillsSection.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ExperienceSkillsSection.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: skillsRef,
                    className: "skills-column section-wrap competencies animate",
                    id: "skills",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Skills"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ExperienceSkillsSection.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "competency-grid",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillCategories"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$CompetencyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    category: category
                                }, category.title, false, {
                                    fileName: "[project]/components/sections/ExperienceSkillsSection.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ExperienceSkillsSection.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ExperienceSkillsSection.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/ExperienceSkillsSection.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/ExperienceSkillsSection.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(ExperienceSkillsSection, "nsj8psuD0CBcHLBQ9HDkjVueBhE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = ExperienceSkillsSection;
var _c;
__turbopack_context__.k.register(_c, "ExperienceSkillsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/InterviewArcade.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InterviewArcade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hooks/useScrollReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ROLE_DATA = {
    data_analyst: [
        {
            question: "A churn dashboard spikes for one cohort. What is your first 30-minute investigation plan?",
            rubric: [
                "Confirms metric definition and data freshness.",
                "Splits issue by segment and funnel stage.",
                "Proposes one concrete next action for stakeholders."
            ],
            hints: [
                "Start with data reliability checks.",
                "Compare against prior weekly baseline.",
                "Isolate by acquisition channel first."
            ]
        },
        {
            question: "Design a KPI view a non-technical manager can use in 60 seconds.",
            rubric: [
                "Chooses a clear primary KPI and supporting trend.",
                "Uses thresholds or alerts for fast decisions.",
                "Adds one recommended action based on the signal."
            ],
            hints: [
                "Clarity beats dashboard complexity.",
                "Use plain language labels.",
                "One KPI, one decision."
            ]
        }
    ],
    ml_engineer: [
        {
            question: "How would you evaluate a RAG interview coach beyond model accuracy?",
            rubric: [
                "Separates retrieval quality from generation quality.",
                "Defines groundedness and hallucination checks.",
                "Includes human review loop and failure taxonomy."
            ],
            hints: [
                "Measure retrieval and response separately.",
                "Use a rubric, not just one score.",
                "Track failure types over time."
            ]
        },
        {
            question: "Your RAG latency regresses after adding features. What do you optimize first?",
            rubric: [
                "Profiles the pipeline to find true bottleneck.",
                "Balances caching and retrieval depth tradeoffs.",
                "Protects response quality with regression checks."
            ],
            hints: [
                "Profile before optimizing.",
                "Check embedding/retrieval path first.",
                "Guard quality while reducing latency."
            ]
        }
    ],
    product_analytics: [
        {
            question: "A feature increases engagement but lowers conversion. What recommendation do you ship?",
            rubric: [
                "Frames tradeoffs by user segment and funnel impact.",
                "Connects recommendation to product goals.",
                "Defines a measurable follow-up experiment."
            ],
            hints: [
                "Who gained? Who lost?",
                "Tie metrics to business goal.",
                "Ship with guardrails and test plan."
            ]
        },
        {
            question: "How do you prioritize roadmap items when interview feedback is conflicting?",
            rubric: [
                "Clusters feedback by persona and impact.",
                "Uses effort/impact reasoning transparently.",
                "Converts priorities into milestone-based plan."
            ],
            hints: [
                "Group feedback before ranking.",
                "Impact first, then effort.",
                "Define what success looks like."
            ]
        }
    ]
};
const DIFFICULTY_CONFIG = {
    easy: {
        time: 45,
        points: 8
    },
    medium: {
        time: 35,
        points: 12
    },
    hard: {
        time: 25,
        points: 18
    }
};
const ROLE_BUTTONS = [
    {
        value: "data_analyst",
        label: "Data Analyst"
    },
    {
        value: "ml_engineer",
        label: "ML Engineer"
    },
    {
        value: "product_analytics",
        label: "Product Analytics"
    }
];
const DIFFICULTY_BUTTONS = [
    {
        value: "easy",
        label: "Easy"
    },
    {
        value: "medium",
        label: "Medium"
    },
    {
        value: "hard",
        label: "Hard"
    }
];
function pickPrompt(role) {
    const prompts = ROLE_DATA[role];
    return prompts[Math.floor(Math.random() * prompts.length)];
}
function InterviewArcade() {
    _s();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("data_analyst");
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("medium");
    // Deterministic first prompt (index 0) so server and client render the same
    // markup on initial load; a random prompt is picked client-side after mount
    // and on every subsequent user-triggered round.
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ROLE_DATA.data_analyst[0]);
    const [hintIndex, setHintIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [xp, setXp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [streak, setStreak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DIFFICULTY_CONFIG.medium.time);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Start the round, answer aloud, then score yourself honestly.");
    const [burstKey, setBurstKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeLeftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(timeLeft);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterviewArcade.useEffect": ()=>{
            timeLeftRef.current = timeLeft;
        }
    }["InterviewArcade.useEffect"], [
        timeLeft
    ]);
    function runCountdown() {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=>{
            setTimeLeft((prev)=>{
                const next = prev - 1;
                if (next <= 0) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    setStreak(0);
                    setFeedback("Time up. Grab a hint, then try another challenge.");
                    return 0;
                }
                return next;
            });
        }, 1000);
    }
    function startTimer(diff) {
        setTimeLeft(DIFFICULTY_CONFIG[diff].time);
        runCountdown();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterviewArcade.useEffect": ()=>{
            // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: randomizes the prompt client-side only, after the deterministic SSR-safe initial render, to avoid a hydration mismatch.
            setPrompt(pickPrompt("data_analyst"));
            runCountdown();
            return ({
                "InterviewArcade.useEffect": ()=>{
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            })["InterviewArcade.useEffect"];
        }
    }["InterviewArcade.useEffect"], []);
    function loadNewRound(nextRole, nextDifficulty, message) {
        setPrompt(pickPrompt(nextRole));
        setHintIndex(0);
        setFeedback(message);
        setBurstKey((k)=>k + 1);
        startTimer(nextDifficulty);
    }
    function handleRoleClick(nextRole) {
        setRole(nextRole);
        loadNewRound(nextRole, difficulty, "New round loaded. Speak your answer out loud, then score yourself.");
    }
    function handleDifficultyClick(nextDifficulty) {
        setDifficulty(nextDifficulty);
        loadNewRound(role, nextDifficulty, `Difficulty set to ${nextDifficulty}.`);
    }
    function handleNewQuestion() {
        loadNewRound(role, difficulty, "New round loaded. Speak your answer out loud, then score yourself.");
    }
    function handleHint() {
        if (!prompt.hints.length) {
            setFeedback("No hints available for this prompt yet.");
            return;
        }
        const hint = prompt.hints[Math.min(hintIndex, prompt.hints.length - 1)];
        setHintIndex((i)=>i + 1);
        setFeedback(`Hint: ${hint}`);
    }
    function handleNailedIt() {
        const basePoints = DIFFICULTY_CONFIG[difficulty].points;
        const speedBonus = Math.max(0, Math.floor(timeLeftRef.current / 5));
        const streakBonus = streak * 2;
        const earned = basePoints + speedBonus + streakBonus;
        setXp((x)=>x + earned);
        setStreak((s)=>s + 1);
        setFeedback(`Strong run. +${earned} XP (${basePoints} base, ${speedBonus} speed, ${streakBonus} streak).`);
        setBurstKey((k)=>k + 1);
    }
    function handleSkip() {
        setStreak(0);
        loadNewRound(role, difficulty, "Skipped. Streak reset. New challenge loaded.");
    }
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "simulator",
        ref: sectionRef,
        className: "animate section-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Interview Arcade"
            }, void 0, false, {
                fileName: "[project]/components/sections/InterviewArcade.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "simulator-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "simulator",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                marginBottom: "1rem",
                                color: "#4d4d4d"
                            },
                            children: "Pick role + difficulty, beat the timer, stack a streak, and train like an interview game."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/InterviewArcade.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sim-meta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sim-stat",
                                    children: [
                                        "XP",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "xp-burst",
                                            children: xp
                                        }, `xp-${burstKey}`, false, {
                                            fileName: "[project]/components/sections/InterviewArcade.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sim-stat",
                                    children: [
                                        "Streak",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "xp-burst",
                                            children: streak
                                        }, `streak-${burstKey}`, false, {
                                            fileName: "[project]/components/sections/InterviewArcade.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sim-stat",
                                    children: [
                                        "Timer",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                timeLeft,
                                                "s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/InterviewArcade.tsx",
                                            lineNumber: 247,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/InterviewArcade.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "role-buttons",
                            children: ROLE_BUTTONS.map(({ value, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `role-btn${role === value ? " active" : ""}`,
                                    onClick: ()=>handleRoleClick(value),
                                    children: label
                                }, value, false, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/InterviewArcade.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "difficulty-buttons",
                            children: DIFFICULTY_BUTTONS.map(({ value, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `difficulty-btn${difficulty === value ? " active" : ""}`,
                                    onClick: ()=>handleDifficultyClick(value),
                                    children: label
                                }, value, false, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/InterviewArcade.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sim-output",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: "Question"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: prompt.question
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        marginTop: "0.8rem"
                                    },
                                    children: "Ideal Rubric"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: prompt.rubric.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: line
                                        }, index, false, {
                                            fileName: "[project]/components/sections/InterviewArcade.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/InterviewArcade.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sim-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "sim-action-btn",
                                    onClick: handleHint,
                                    children: "Need Hint"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "sim-action-btn",
                                    onClick: handleNailedIt,
                                    children: "I Nailed It"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "sim-action-btn",
                                    onClick: handleSkip,
                                    children: "Skip"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary",
                                    onClick: handleNewQuestion,
                                    children: "New Challenge"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/InterviewArcade.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sim-feedback",
                            children: feedback
                        }, void 0, false, {
                            fileName: "[project]/components/sections/InterviewArcade.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/InterviewArcade.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/InterviewArcade.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/InterviewArcade.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_s(InterviewArcade, "5MyqxoFBeIFuATHhXNHpeE8h5fM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = InterviewArcade;
var _c;
__turbopack_context__.k.register(_c, "InterviewArcade");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/SubstackPostCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubstackPostCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hooks/useTilt.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Recent post";
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}
function SubstackPostCard({ post }) {
    _s();
    const { ref, onMouseMove, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTilt"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        ref: ref,
        className: "writing-card tilt-card",
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        children: [
            post.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "writing-card-image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: post.imageUrl,
                    alt: post.title,
                    fill: true,
                    sizes: "(max-width: 620px) 100vw, 33vw"
                }, void 0, false, {
                    fileName: "[project]/components/sections/SubstackPostCard.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/SubstackPostCard.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: post.title
            }, void 0, false, {
                fileName: "[project]/components/sections/SubstackPostCard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "meta",
                children: formatDate(post.postDate)
            }, void 0, false, {
                fileName: "[project]/components/sections/SubstackPostCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: post.description
            }, void 0, false, {
                fileName: "[project]/components/sections/SubstackPostCard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: post.canonicalUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "btn btn-secondary",
                children: "Read on Substack"
            }, void 0, false, {
                fileName: "[project]/components/sections/SubstackPostCard.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/SubstackPostCard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(SubstackPostCard, "1VInTr7lmhGUOGt6rEx8hqWty2U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useTilt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTilt"]
    ];
});
_c = SubstackPostCard;
var _c;
__turbopack_context__.k.register(_c, "SubstackPostCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Site-wide constants used for metadata, SEO tags, and social links.
// Centralizing these avoids hardcoding the same URLs/strings across files.
__turbopack_context__.s([
    "CONTACT_EMAIL",
    ()=>CONTACT_EMAIL,
    "SITE_DESCRIPTION",
    ()=>SITE_DESCRIPTION,
    "SITE_NAME",
    ()=>SITE_NAME,
    "SITE_SHORT_NAME",
    ()=>SITE_SHORT_NAME,
    "SITE_URL",
    ()=>SITE_URL,
    "SOCIAL_LINKS",
    ()=>SOCIAL_LINKS,
    "SUBSTACK_FEED_URL",
    ()=>SUBSTACK_FEED_URL
]);
const SITE_NAME = "Tatyana Amugo — Product & AI Builder";
const SITE_SHORT_NAME = "Tatyana Amugo";
const SITE_DESCRIPTION = "Product & AI Builder shipping AI-forward products, prompt/retrieval pipelines, and data-driven decision tools.";
const SITE_URL = "https://www.tatyanaamugo.com";
const SOCIAL_LINKS = {
    linkedin: "https://linkedin.com/in/tatyana-amugo02",
    github: "https://github.com/cheredi",
    substack: "https://lipgloss2llms.substack.com"
};
const SUBSTACK_FEED_URL = "https://lipgloss2llms.substack.com/feed";
const CONTACT_EMAIL = "t_amugo@fanshaweonline.ca";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RevealSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/RevealSection.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function ContactSection() {
    function sendEmail(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.namedItem("name").value;
        const email = form.elements.namedItem("email").value;
        const message = form.elements.namedItem("message").value;
        const mailto = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_EMAIL"]}?subject=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(message)}%0A%0AReply to: ${email}`;
        window.location.href = mailto;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RevealSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "contact",
        className: "section-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Let's Connect"
            }, void 0, false, {
                fileName: "[project]/components/sections/ContactSection.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "social-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL_LINKS"].github,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn btn-secondary",
                                children: "GitHub"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ContactSection.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL_LINKS"].linkedin,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn btn-secondary",
                                children: "LinkedIn"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ContactSection.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL_LINKS"].substack,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn btn-secondary",
                                children: "Substack"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ContactSection.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/ContactSection.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: sendEmail,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Your Name",
                                name: "name",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ContactSection.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                placeholder: "Your Email",
                                name: "email",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ContactSection.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "Your Message",
                                name: "message",
                                rows: 5,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ContactSection.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn btn-primary",
                                style: {
                                    width: "100%"
                                },
                                children: "Send Message"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ContactSection.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/ContactSection.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/ContactSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/ContactSection.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0p8oa6l._.js.map