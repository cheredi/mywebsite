"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

// One easing curve for the whole site: a long, soft ease-out.
export const EASE = "silk";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, useGSAP);
  if (!CustomEase.get(EASE)) CustomEase.create(EASE, "0.22,1,0.36,1");
}

/** True when motion should be off: the OS setting, or the site's accessibility mode. */
export function reducedMotion() {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("a11y") || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
