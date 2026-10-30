"use client";

import Image from "next/image";
import { useRef } from "react";
import { HERO, LINKS, PERSON } from "@/content/site";
import { EASE, gsap, reducedMotion, useGSAP } from "@/lib/motion";
import { useShell } from "@/components/motion/Shell";
import TLink from "@/components/motion/TLink";
import LocalTime from "@/components/ui/LocalTime";
import Arrow from "@/components/ui/Arrow";

export default function Hero() {
  const { introDone } = useShell();
  const root = useRef<HTMLElement>(null);

  // Entrance, once the intro curtain has opened.
  useGSAP(
    () => {
      if (!introDone || !root.current) return;
      const q = gsap.utils.selector(root);
      gsap.set(q("[data-hero]"), { visibility: "visible" });
      if (reducedMotion()) return;
      gsap
        .timeline({ defaults: { ease: EASE } })
        .fromTo(q(".hero__panel"), { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5 }, 0)
        .fromTo(q(".hero__portrait"), { yPercent: 22, scale: 1.08 }, { yPercent: 0, scale: 1, duration: 1.8 }, 0.1)
        .from(q(".hero__hello .char"), { yPercent: 120, duration: 1.2, stagger: 0.05 }, 0.15)
        .from(q(".hero__wave"), { scale: 0, rotate: -40, duration: 0.9, ease: "back.out(2.2)" }, 0.65)
        .to(q(".hero__wave"), { rotate: 14, duration: 0.16, yoyo: true, repeat: 5, ease: "sine.inOut" }, 1.5)
        .from(q(".hero__name .char"), { yPercent: 115, duration: 1.15, stagger: 0.022 }, 0.3)
        .from(q(".hero__kicker"), { autoAlpha: 0, y: 12, duration: 0.9 }, 0.45)
        .from(q(".hero__summary, .hero__sub"), { autoAlpha: 0, y: 24, duration: 1.1, stagger: 0.08 }, 0.6)
        .from(q(".hero__actions > *"), { autoAlpha: 0, y: 20, duration: 1, stagger: 0.07 }, 0.75)
        .from(q(".hero__bar"), { autoAlpha: 0, duration: 1 }, 0.95);
    },
    { scope: root, dependencies: [introDone] }
  );

  // As the page slides up over the hero, the hero recedes.
  useGSAP(
    () => {
      if (reducedMotion() || !root.current) return;
      const q = gsap.utils.selector(root);
      gsap.to(q(".hero__inner"), {
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
    <section ref={root} className="hero" aria-labelledby="hero-name">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="mono hero__kicker" data-hero="">
            {HERO.kicker}
          </p>
          <p className="hero__hello" aria-hidden="true" data-hero="">
            <span className="chars">
              {HERO.hello.split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>
            <span className="hero__wave">{HERO.wave}</span>
          </p>
          <h1 id="hero-name" className="hero__name" data-hero="" aria-label={PERSON.name}>
            {nameWords.map((word, w) => (
              <span key={word} aria-hidden="true">
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
          </h1>
          <p className="hero__summary" data-hero="">
            {HERO.summary}
          </p>
          <p className="hero__sub" data-hero="">
            {HERO.sub}
          </p>
          <div className="hero__actions" data-hero="">
            <TLink href="/#projects" className="btn btn--ink">
              Projects
              <span className="btn__icon">
                <Arrow />
              </span>
            </TLink>
            <TLink href="/#contact" className="btn btn--line">
              Contact
              <span className="btn__icon">
                <Arrow />
              </span>
            </TLink>
          </div>
        </div>

        <div className="hero__visual" data-hero="">
          <div className="hero__panel">
            <div className="hero__portrait">
              <Image
                src="/images/tatyana-portrait.webp"
                alt="Tatyana Amugo"
                width={664}
                height={1037}
                priority
                sizes="(max-width: 1024px) 80vw, 520px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__bar mono" data-hero="">
        <span>
          {PERSON.city} <LocalTime />
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
          Scroll <i />
        </span>
      </div>
    </section>
  );
}
