"use client";

import Image from "next/image";
import { useRef } from "react";
import { LINKS, PERSON } from "@/content/site";
import { useDict } from "@/components/prefs/Prefs";
import { EASE, gsap, reducedMotion, useGSAP } from "@/lib/motion";
import { useShell } from "@/components/motion/Shell";
import { useWeightHover } from "@/components/motion/useWeightHover";
import TLink from "@/components/motion/TLink";
import LocalTime from "@/components/ui/LocalTime";
import Arrow from "@/components/ui/Arrow";

// Shared with the intro curtain so both request the identical image.
export const PORTRAIT = { src: "/images/tatyana-portrait.webp", width: 664, height: 1037, sizes: "(max-width: 1024px) 80vw, 560px" };

export default function Hero() {
  const { introDone } = useShell();
  const t = useDict();
  const root = useRef<HTMLElement>(null);
  const name = useRef<HTMLSpanElement>(null);
  useWeightHover(name, { base: 600, max: 900, radius: 260 });

  // Copy enters as the intro curtain slides into the panel.
  useGSAP(
    () => {
      if (!introDone || !root.current) return;
      const q = gsap.utils.selector(root);
      gsap.set(q("[data-hero]"), { visibility: "visible" });
      if (reducedMotion()) return;
      gsap
        .timeline({ defaults: { ease: EASE } })
        .from(q(".hero__im .char"), { yPercent: 120, duration: 1.2, stagger: 0.06 }, 0.1)
        .from(q(".hero__name .char"), { yPercent: 115, duration: 1.15, stagger: 0.025 }, 0.2)
        .fromTo(q(".hero__name .char"), { fontWeight: 100 }, { fontWeight: 600, duration: 1.6, ease: "power2.inOut", stagger: 0.035 }, 0.25)
        .from(q(".hero__kicker"), { autoAlpha: 0, y: 12, duration: 0.9 }, 0.35)
        .from(q(".hero__summary, .hero__sub"), { autoAlpha: 0, y: 24, duration: 1.1, stagger: 0.08 }, 0.55)
        .from(q(".hero__actions > *"), { autoAlpha: 0, y: 20, duration: 1, stagger: 0.07 }, 0.7)
        .from(q(".hero__bar"), { autoAlpha: 0, duration: 1 }, 0.9);
    },
    { scope: root, dependencies: [introDone] }
  );

  // As the page slides up over the hero, the hero recedes.
  useGSAP(
    () => {
      if (reducedMotion() || !root.current) return;
      gsap.to(root.current.querySelector(".hero__inner"), {
        scale: 0.94,
        yPercent: -4,
        ease: "none",
        scrollTrigger: { start: 0, end: () => window.innerHeight, scrub: true },
      });
    },
    { scope: root }
  );

  const nameWords = PERSON.name.split(" ");

  return (
    <section ref={root} className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="mono hero__kicker" data-hero="">
            {t.hero.kicker}
          </p>
          <h1 id="hero-title" className="hero__title" data-hero="" aria-label={`${t.hero.im} ${PERSON.name}`}>
            <span className="hero__im" aria-hidden="true">
              <span className="chars">
                {(t.splitChars ? Array.from(t.hero.im) : [t.hero.im]).map((c, i) => (
                  <span key={i} className="char">
                    {c}
                  </span>
                ))}
              </span>
            </span>
            <span ref={name} className="hero__name" aria-hidden="true">
              {nameWords.map((word, w) => (
                <span key={word}>
                  <span className="word">
                    {word.split("").map((c, i) => (
                      <span key={i} className="char">
                        {c}
                      </span>
                    ))}
                  </span>
                  {w < nameWords.length - 1 ? " " : null}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero__summary" data-hero="">
            {t.hero.summary}
          </p>
          <p className="hero__sub" data-hero="">
            {t.hero.sub}
          </p>
          <div className="hero__actions" data-hero="">
            <TLink href="/#projects" className="btn btn--ink">
              {t.nav.projects}
              <span className="btn__icon">
                <Arrow />
              </span>
            </TLink>
            <TLink href="/#contact" className="btn btn--line">
              {t.nav.contact}
              <span className="btn__icon">
                <Arrow />
              </span>
            </TLink>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__panel">
            <div className="hero__portrait">
              <Image src={PORTRAIT.src} alt={t.alt.portrait} width={PORTRAIT.width} height={PORTRAIT.height} priority sizes={PORTRAIT.sizes} />
            </div>
            <p className="a11y-caption hero__caption">
              {t.ui.image} {t.alt.portrait}
            </p>
          </div>
        </div>
      </div>

      <div className="hero__bar mono" data-hero="">
        <span>
          {t.ui.city} <LocalTime />
        </span>
        <span className="hide-sm">
          <a className="u-link" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {"  ·  "}
          <a className="u-link" href={LINKS.substack} target="_blank" rel="noopener noreferrer">
            Substack
          </a>
        </span>
        <span className="hero__scroll">
          {t.ui.scroll} <i />
        </span>
      </div>
    </section>
  );
}
