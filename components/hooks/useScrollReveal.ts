"use client";

import { useEffect, useRef } from "react";

/**
 * Observes an element and adds the `visible` class once it scrolls into
 * view, driving the fade/slide-up CSS transition defined on `.animate` in
 * main.css. Kept as a hook (rather than a wrapper div) so section elements
 * can apply it directly without adding extra markup around them.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
