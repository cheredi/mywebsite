"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { EASE, gsap, reducedMotion, useGSAP } from "@/lib/motion";

interface Props {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Animate direct children one after another instead of the block as a whole. */
  stagger?: number;
  y?: number;
  delay?: number;
  start?: string;
  [key: string]: unknown;
}

/** Fades and lifts content into place once, as it scrolls into view. */
export default function Reveal({ as: Tag = "div", className, children, stagger, y = 48, delay = 0, start = "top 90%", ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (reducedMotion()) {
        gsap.set(el, { visibility: "visible" });
        return;
      }
      const targets = stagger ? Array.from(el.children) : el;
      gsap.set(el, { visibility: "visible" });
      gsap.from(targets, {
        y,
        autoAlpha: 0,
        duration: 1.2,
        ease: EASE,
        stagger: stagger ?? 0,
        delay,
        scrollTrigger: { trigger: el, start, once: true },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} data-reveal="" {...rest}>
      {children}
    </Tag>
  );
}
