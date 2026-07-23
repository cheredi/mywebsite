"use client";

import { useScrollReveal } from "@/components/hooks/useScrollReveal";
import type { ReactNode } from "react";

interface RevealSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Thin client-side wrapper that renders a semantic <section> and hooks up
 * the scroll-triggered fade-in animation (`.animate` / `.visible` in
 * main.css). Server Components can render static section content and pass
 * it in as `children` while only this leaf component crosses the client
 * boundary.
 */
export default function RevealSection({ id, className, children }: RevealSectionProps) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id={id} ref={ref} className={`animate${className ? ` ${className}` : ""}`}>
      {children}
    </section>
  );
}
