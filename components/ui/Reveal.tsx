"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  className?: string;
  delay?: 1 | 2 | 3;
  children: ReactNode;
  [key: string]: unknown;
}

/**
 * Fades its content up the first time it scrolls into view. Content is only
 * hidden when `.js` is on <html>, so it's always readable without scripts.
 */
export default function Reveal({ as: Tag = "div", className, delay, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal", delay ? `reveal-d${delay}` : "", className ?? ""].filter(Boolean).join(" ");
  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
