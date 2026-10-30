"use client";

import { useRef } from "react";
import { proofStats } from "@/content/proof";
import { SECTIONS } from "@/content/site";
import { EASE, gsap, reducedMotion, useGSAP } from "@/lib/motion";
import SectionHead from "@/components/ui/SectionHead";
import TLink from "@/components/motion/TLink";

// Her labels mark percentages with "(%)"; the number shows the unit instead.
const parse = (label: string) => {
  const pct = /\s*\(%\)\s*$/.test(label);
  return { pct, text: label.replace(/\s*\(%\)\s*$/, "") };
};

// Her stat links point at the old section ids; map them to this page.
const HREFS: Record<string, string> = {
  "#projects": "/#projects",
  "#exp-ai-engineer": "/#experience",
  "#exp-beats-by-dre": "/#experience",
  "#exp-upande": "/#experience",
};

export default function Momentum() {
  const list = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const el = list.current;
      if (!el || reducedMotion()) return;
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => {
        const target = Number(node.dataset.count);
        const value = { v: 0 };
        node.textContent = "0";
        gsap.to(value, {
          v: target,
          duration: 2,
          ease: "power3.out",
          onUpdate: () => {
            node.textContent = String(Math.round(value.v));
          },
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
        // Weight sweeps up with the count, like the intro specimen.
        gsap.fromTo(
          node.parentElement,
          { fontWeight: 100 },
          { fontWeight: 500, duration: 2.2, ease: "power2.inOut", scrollTrigger: { trigger: el, start: "top 82%", once: true } }
        );
      });
      gsap.from(el.children, {
        y: 60,
        autoAlpha: 0,
        duration: 1.2,
        ease: EASE,
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    },
    { scope: list }
  );

  return (
    <section className="section" aria-labelledby="proof-title" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHead index="02" title={SECTIONS.proof} id="proof-title" />
        <ul ref={list} className="proof">
          {proofStats.map((stat) => {
            const { pct, text } = parse(stat.label);
            return (
              <li key={stat.label}>
                <TLink href={HREFS[stat.href] ?? stat.href}>
                  <span className="proof__num">
                    <span data-count={stat.target}>{stat.target}</span>
                    {pct ? <sup>%</sup> : null}
                  </span>
                  <span className="proof__label">{text}</span>
                </TLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
