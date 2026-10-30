"use client";

import { useEffect, type RefObject } from "react";
import { gsap, reducedMotion } from "@/lib/motion";

/**
 * Variable-font "specimen" hover: characters near the pointer get heavier,
 * like the weight sweep in the intro. Desktop pointers only.
 */
export function useWeightHover(
  ref: RefObject<HTMLElement | null>,
  { base = 500, max = 800, radius = 220, selector = ".char, .split-char", enabled = true } = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el || reducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return undefined;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.querySelectorAll<HTMLElement>(selector).forEach((char) => {
          const r = char.getBoundingClientRect();
          const d = Math.hypot(event.clientX - (r.left + r.width / 2), event.clientY - (r.top + r.height / 2));
          const t = Math.max(0, 1 - d / radius);
          gsap.to(char, { fontWeight: Math.round(base + (max - base) * t * t), duration: 0.45, ease: "power2.out", overwrite: "auto" });
        });
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      gsap.to(el.querySelectorAll(selector), { fontWeight: base, duration: 0.8, ease: "power3.out", overwrite: "auto" });
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ref, base, max, radius, selector, enabled]);
}
