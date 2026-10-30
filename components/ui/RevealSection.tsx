"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealSectionProps {
  id?: string;
  className?: string;
  labelledBy?: string;
  children: ReactNode;
}

/**
 * A <section> that fades in the first time it scrolls into view. Content is
 * only hidden when the `js` class is on <html> (see app/layout.tsx), so it
 * stays readable for crawlers and if scripts fail.
 */
export default function RevealSection({ id, className, labelledBy, children }: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={labelledBy}
      className={`section reveal${className ? ` ${className}` : ""}`}
    >
      {children}
    </section>
  );
}
