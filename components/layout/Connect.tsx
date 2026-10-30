"use client";

import { useRef } from "react";
import { LINKS, PERSON } from "@/content/site";
import { useDict } from "@/components/prefs/Prefs";
import { EASE, gsap, reducedMotion, useGSAP } from "@/lib/motion";
import { useShell } from "@/components/motion/Shell";
import Specimen from "@/components/motion/Specimen";
import LocalTime from "@/components/ui/LocalTime";
import Arrow from "@/components/ui/Arrow";

// Scalloped "drape" along the top edge of the curtain.
const SWAGS = 24;
const DRAPE = `M0 0H1200V18${Array.from({ length: SWAGS }, (_, i) => {
  const w = 1200 / SWAGS;
  const x0 = 1200 - i * w;
  return `Q${x0 - w / 2} 60 ${x0 - w} 18`;
}).join("")}Z`;

export default function Connect() {
  const { lenis } = useShell();
  const t = useDict();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (reducedMotion() || !root.current) return;
      const q = gsap.utils.selector(root);
      gsap.from(q(".curtain__drape"), {
        scaleY: 0.2,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "top 40%", scrub: true },
      });
      gsap.from(q(".curtain__inner"), {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "top top", scrub: true },
      });
      gsap.from(q(".curtain__grid > *, .curtain__base"), {
        y: 40,
        autoAlpha: 0,
        duration: 1.1,
        ease: EASE,
        stagger: 0.1,
        scrollTrigger: { trigger: q(".curtain__grid")[0], start: "top bottom", once: true },
      });
    },
    { scope: root }
  );

  return (
    <footer ref={root} id="contact" className="curtain" aria-labelledby="contact-title">
      <svg className="curtain__drape" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
        <path d={DRAPE} fill="currentColor" />
      </svg>

      <div className="container curtain__inner">
        <Specimen as="h2" id="contact-title" className="curtain__title" weight={[100, 500]} tags={false}>
          {t.sections.contact}
        </Specimen>

        <div className="curtain__grid">
          <div>
            <span className="mono curtain__label">{t.ui.email}</span>
            <a className="curtain__email u-link" href={`mailto:${PERSON.email}`}>
              {PERSON.email}
            </a>
          </div>
          <div className="curtain__socials">
            <a className="btn btn--ghost-dark" href={LINKS.github} target="_blank" rel="noopener noreferrer">
              GitHub
              <span className="btn__icon">
                <Arrow dir="out" />
              </span>
            </a>
            <a className="btn btn--ghost-dark" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <span className="btn__icon">
                <Arrow dir="out" />
              </span>
            </a>
            <a className="btn btn--ghost-dark" href={LINKS.substack} target="_blank" rel="noopener noreferrer">
              Substack
              <span className="btn__icon">
                <Arrow dir="out" />
              </span>
            </a>
          </div>
        </div>

        <div className="curtain__base">
          <p>
            &copy; {new Date().getFullYear()} {PERSON.name}
          </p>
          <p className="mono">
            {t.ui.city} <LocalTime />
          </p>
          <button
            type="button"
            className="u-link"
            style={{ background: "none", border: 0, padding: 0, color: "inherit" }}
            onClick={() => (lenis ? lenis.scrollTo(0, { duration: 2, force: true }) : window.scrollTo({ top: 0, behavior: "smooth" }))}
          >
            {t.ui.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
