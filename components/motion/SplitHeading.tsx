"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { EASE, SplitText, gsap, reducedMotion, useGSAP } from "@/lib/motion";

interface Props {
  as?: ElementType;
  className?: string;
  id?: string;
  children: ReactNode;
  delay?: number;
  /** Split into lines (default), words or chars. */
  by?: "lines" | "words" | "chars";
}

/** Text that rises line by line out of a mask when it scrolls into view. */
export default function SplitHeading({ as: Tag = "h2", className, id, children, delay = 0, by = "lines" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (reducedMotion()) {
        gsap.set(el, { visibility: "visible" });
        return;
      }
      SplitText.create(el, {
        type: by === "chars" ? "words,chars" : by,
        mask: by,
        maskClass: "split-mask",
        autoSplit: true,
        onSplit(self) {
          gsap.set(el, { visibility: "visible" });
          const parts = by === "chars" ? self.chars : by === "words" ? self.words : self.lines;
          return gsap.from(parts, {
            yPercent: 115,
            duration: 1.2,
            ease: EASE,
            stagger: by === "chars" ? 0.025 : 0.09,
            delay,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} id={id} className={className} data-split="">
      {children}
    </Tag>
  );
}
