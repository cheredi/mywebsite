"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { EASE, SplitText, gsap, reducedMotion, useGSAP } from "@/lib/motion";
import { useWeightHover } from "@/components/motion/useWeightHover";
import { useDict } from "@/components/prefs/Prefs";

interface Props {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
  /** Weight sweep for sans titles [from, to]. Omit for serif titles. */
  weight?: [number, number];
  /** Element that shows the live weight readout, e.g. "WGHT 500". */
  readout?: React.RefObject<HTMLElement | null>;
  /** Show cap-height / baseline tags at the right edge. */
  tags?: boolean;
  hover?: boolean;
}

/**
 * A heading set like a type specimen, echoing the intro: guide lines draw
 * across, letters rise out of a mask while the weight sweeps, and (on
 * desktop) letters near the pointer get heavier.
 */
export default function Specimen({ as: Tag = "h2", id, className, children, weight, readout, tags = true, hover = true }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLElement>(null);
  const final = weight?.[1] ?? 400;
  // Letters for most scripts; whole words where letters join (Devanagari).
  const unit = useDict().splitChars ? "chars" : "words";
  const unitClass = unit === "chars" ? ".split-char" : ".split-word";
  useWeightHover(text, { base: final, max: Math.min(900, final + 300), radius: 240, selector: unitClass, enabled: hover && !!weight });

  useGSAP(
    () => {
      const el = text.current;
      const box = wrap.current;
      if (!el || !box) return;
      if (reducedMotion()) {
        gsap.set(el, { visibility: "visible" });
        return;
      }
      SplitText.create(el, {
        type: unit === "chars" ? "lines,words,chars" : "lines,words",
        mask: "lines",
        maskClass: "split-mask",
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        autoSplit: true,
        onSplit(self) {
          gsap.set(el, { visibility: "visible" });
          const parts = unit === "chars" ? self.chars : self.words;
          const tl = gsap.timeline({ scrollTrigger: { trigger: box, start: "top 88%", once: true } });
          tl.from(box.querySelectorAll(".spec__line"), { scaleX: 0, duration: 1.4, ease: EASE, stagger: 0.1 }, 0)
            .from(box.querySelectorAll(".spec__tag"), { autoAlpha: 0, duration: 0.6, stagger: 0.1 }, 0.3)
            .from(parts, { yPercent: 115, duration: 1.1, ease: EASE, stagger: 0.022 }, 0.1);
          if (weight) {
            const w = { v: weight[0] };
            const sweep = 1.3 + parts.length * 0.028;
            tl.fromTo(parts, { fontWeight: weight[0] }, { fontWeight: weight[1], duration: 1.3, ease: "power2.inOut", stagger: 0.028 }, 0.2).fromTo(
              w,
              { v: weight[0] },
              {
                v: weight[1],
                duration: sweep,
                ease: "power2.inOut",
                onUpdate: () => {
                  if (readout?.current) readout.current.textContent = `WGHT ${Math.round(w.v)}`;
                },
              },
              0.2
            );
          }
          return tl;
        },
      });
    },
    { scope: wrap }
  );

  return (
    <div ref={wrap} className={`spec ${className ?? ""}`}>
      <span className="spec__guides" aria-hidden="true">
        <i className="spec__line" />
        <i className="spec__line" />
        <i className="spec__line" />
        {tags ? (
          <>
            <b className="spec__tag">
              <span>Cap height</span>
            </b>
            <b className="spec__tag">
              <span>Baseline</span>
            </b>
          </>
        ) : null}
      </span>
      <Tag ref={text} id={id} className="spec__text" data-split="">
        {children}
      </Tag>
    </div>
  );
}
