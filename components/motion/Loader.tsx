"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { HERO, PERSON } from "@/content/site";
import { usePrefs } from "@/components/prefs/Prefs";
import { EASE, gsap, useGSAP } from "@/lib/motion";
import { useShell } from "@/components/motion/Shell";
import { PORTRAIT } from "@/components/home/Hero";

const GUIDES = ["Ascender", "x-height", "Baseline", "Descender"];

/**
 * Intro, chosen before paint by the boot script in app/layout.tsx:
 *  - full:  type-specimen "Hello", a berry slit opens into a full-screen
 *           portrait, which slides into the hero panel like a curtain.
 *  - short: (home page, already seen this session) just the curtain slide.
 * On pages without a hero, the full intro ends by splitting the screen open.
 * Click anywhere to speed it up.
 */
export default function Loader() {
  const { lenis, finishIntro } = useShell();
  const { dict: t, ready } = usePrefs();
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const active = useRef(false);

  useGSAP(
    () => {
      const html = document.documentElement;
      const el = root.current;
      // Wait for saved preferences so "Hello" appears in the visitor's language.
      if (!ready || !el || html.classList.contains("no-intro") || active.current) return;
      const short = html.classList.contains("intro-short");
      const panel = document.querySelector<HTMLElement>(".hero__panel");
      active.current = true;
      html.classList.add("is-loading");

      const q = gsap.utils.selector(root);
      const curtain = q(".ld-curtain")[0];
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
        el.dataset.done = "true";
      };

      // The full-screen portrait slides into the hero panel's exact position.
      const slideIntoHero = () => {
        if (!panel) return;
        const r = panel.getBoundingClientRect();
        finishIntro();
        gsap.to(curtain, {
          left: r.left,
          top: r.top,
          width: r.width,
          height: r.height,
          borderRadius: 6,
          duration: short ? 1.35 : 1.5,
          ease: EASE,
          onComplete: done,
        });
      };

      const timeline = gsap.timeline({ defaults: { ease: EASE } });
      tl.current = timeline;

      if (short) {
        if (!panel) {
          done();
          finishIntro();
          return;
        }
        timeline.fromTo(q(".ld-curtain__portrait"), { scale: 1.06 }, { scale: 1, duration: 1.2 }, 0).call(slideIntoHero, [], 0.3);
        return;
      }

      timeline
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
        .to(q(".ld-slit"), { scaleX: 1, duration: 0.7 }, 2.55);

      if (panel) {
        // The slit opens into the full-screen portrait, then curtains right.
        timeline
          .set(curtain, { visibility: "visible", clipPath: "inset(50% 0% 50% 0%)" }, 3.15)
          .to(curtain, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.05 }, 3.15)
          .fromTo(q(".ld-curtain__portrait"), { yPercent: 14, scale: 1.12 }, { yPercent: 0, scale: 1, duration: 1.5 }, 3.15)
          .set(q(".ld-half, .ld-stage, .ld-slit"), { autoAlpha: 0 }, 4.15)
          .call(slideIntoHero, [], 4.45);
      } else {
        timeline
          .call(finishIntro, [], 3.05)
          .to(q(".ld-top"), { yPercent: -100, duration: 1.25 }, 3.1)
          .to(q(".ld-bottom"), { yPercent: 100, duration: 1.25 }, 3.1)
          .to(q(".ld-slit"), { autoAlpha: 0, duration: 0.3 }, 3.1)
          .call(done, [], 4.4);
      }

      // Starting states are applied above; only now show the stage.
      gsap.set(q(".ld-stage"), { visibility: "visible" });
    },
    { scope: root, dependencies: [ready] }
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

  return (
    <div ref={root} className="loader" aria-hidden="true" onClick={() => tl.current?.timeScale(4)}>
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
            {(t.splitChars ? Array.from(t.hero.hello) : [t.hero.hello]).map((c, i) => (
              <span key={i} className="ld-char">
                {c}
              </span>
            ))}
          </span>
          <span className="ld-wave">{HERO.wave}</span>
        </p>
        <p className="mono ld-label ld-label--bl">{t.hero.kicker}</p>
        <p className="mono ld-label ld-label--br">
          <span className="ld-count">000</span>
        </p>
      </div>
      <div className="ld-slit" />
      <div className="ld-curtain">
        <div className="ld-curtain__portrait">
          <Image src={PORTRAIT.src} alt="" width={PORTRAIT.width} height={PORTRAIT.height} priority sizes={PORTRAIT.sizes} />
        </div>
      </div>
    </div>
  );
}
