"use client";

import { useEffect, useRef } from "react";
import { HERO, PERSON } from "@/content/site";
import { EASE, gsap, useGSAP } from "@/lib/motion";
import { useShell } from "@/components/motion/Shell";

const GUIDES = ["Ascender", "x-height", "Baseline", "Descender"];

/**
 * First-visit intro: a type-specimen "Hello", then the screen splits open
 * onto the hero. Plays once per session; click anywhere to skip.
 */
export default function Loader() {
  const { lenis, finishIntro } = useShell();
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const active = useRef(false);

  useGSAP(
    () => {
      const html = document.documentElement;
      if (html.classList.contains("no-intro") || !root.current) return;
      active.current = true;
      html.classList.add("is-loading");
      const q = gsap.utils.selector(root);
      const count = q(".ld-count")[0];
      const progress = { v: 0 };

      const done = () => {
        active.current = false;
        html.classList.remove("is-loading");
        try {
          sessionStorage.setItem("ta-intro", "1");
        } catch {
          /* private mode: the intro just plays again next time */
        }
        if (root.current) root.current.dataset.done = "true";
      };

      tl.current = gsap
        .timeline({ defaults: { ease: EASE }, onComplete: done })
        .from(q(".ld-line"), { scaleX: 0, transformOrigin: "left center", duration: 1.2, stagger: 0.08 }, 0)
        .from(q(".ld-label"), { autoAlpha: 0, y: 10, duration: 0.8, stagger: 0.06 }, 0.15)
        .to(
          progress,
          {
            v: 100,
            duration: 2.1,
            ease: "power2.inOut",
            onUpdate: () => {
              if (count) count.textContent = String(Math.round(progress.v)).padStart(3, "0");
            },
          },
          0
        )
        .from(q(".ld-char"), { yPercent: 120, duration: 1.1, stagger: 0.06 }, 0.3)
        .from(q(".ld-wave"), { scale: 0, rotate: -40, duration: 0.9, ease: "back.out(2.2)" }, 0.95)
        .to(q(".ld-wave"), { rotate: 16, duration: 0.16, yoyo: true, repeat: 3, ease: "sine.inOut" }, 1.6)
        .to(q(".ld-char"), { yPercent: -120, duration: 0.6, stagger: 0.035, ease: "power3.in" }, 2.35)
        .to(q(".ld-wave"), { scale: 0, duration: 0.45, ease: "power3.in" }, 2.45)
        .to(q(".ld-label, .ld-line"), { autoAlpha: 0, duration: 0.4 }, 2.4)
        .to(q(".ld-slit"), { scaleX: 1, duration: 0.7 }, 2.55)
        .call(finishIntro, [], 3.05)
        .to(q(".ld-top"), { yPercent: -100, duration: 1.25 }, 3.1)
        .to(q(".ld-bottom"), { yPercent: 100, duration: 1.25 }, 3.1)
        .to(q(".ld-slit"), { autoAlpha: 0, duration: 0.3 }, 3.1);

      // Starting states are applied above; only now show the stage.
      gsap.set(q(".ld-stage"), { visibility: "visible" });
    },
    { scope: root }
  );

  // Hold page scroll while the intro plays.
  useEffect(() => {
    if (!lenis || !active.current) return undefined;
    lenis.stop();
    const id = window.setInterval(() => {
      if (!active.current) {
        lenis.start();
        window.clearInterval(id);
      }
    }, 100);
    return () => window.clearInterval(id);
  }, [lenis]);

  function skip() {
    tl.current?.timeScale(4);
  }

  return (
    <div ref={root} className="loader" aria-hidden="true" onClick={skip}>
      <div className="ld-half ld-top" />
      <div className="ld-half ld-bottom" />
      <div className="ld-stage">
        <p className="mono ld-label ld-label--tl">{PERSON.name}</p>
        <p className="mono ld-label ld-label--tr">Instrument Serif — Italic</p>
        <div className="ld-guides">
          {GUIDES.map((g) => (
            <div key={g} className="ld-line">
              <span>{g}</span>
            </div>
          ))}
        </div>
        <p className="ld-word">
          <span className="ld-chars">
            {HERO.hello.split("").map((c, i) => (
              <span key={i} className="ld-char">
                {c}
              </span>
            ))}
          </span>
          <span className="ld-wave">{HERO.wave}</span>
        </p>
        <p className="mono ld-label ld-label--bl">{HERO.kicker}</p>
        <p className="mono ld-label ld-label--br">
          <span className="ld-count">000</span>
        </p>
      </div>
      <div className="ld-slit" />
    </div>
  );
}
