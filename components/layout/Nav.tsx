"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LINKS, NAV, PERSON } from "@/content/site";
import { EASE, gsap, useGSAP } from "@/lib/motion";
import { useShell } from "@/components/motion/Shell";
import TLink from "@/components/motion/TLink";

/** Floating pill (email · monogram · menu) and the full-screen menu it opens. */
export default function Nav() {
  const { lenis, introDone } = useShell();
  const [open, setOpen] = useState(false);
  const pill = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Resume scrolling *before* a menu link navigates: restarting Lenis later
  // would cancel the scroll that link just started.
  const closeMenu = () => {
    lenis?.start();
    setOpen(false);
  };

  // Pill drops in once the intro has finished.
  useGSAP(
    () => {
      if (!introDone || !pill.current) return;
      gsap.fromTo(
        pill.current,
        { y: -90, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1.1, ease: EASE, delay: 0.35, clearProps: "transform" }
      );
    },
    { dependencies: [introDone] }
  );

  // Menu open/close timeline, built once and played forwards or backwards.
  useGSAP(
    () => {
      const el = menu.current;
      if (!el) return;
      const q = gsap.utils.selector(el);
      tl.current = gsap
        .timeline({ paused: true, defaults: { ease: EASE } })
        .set(el, { visibility: "visible" })
        .fromTo(el, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9 })
        .fromTo(q(".menu__link"), { yPercent: 110 }, { yPercent: 0, duration: 1, stagger: 0.06 }, 0.25)
        .fromTo(q(".menu__num"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, stagger: 0.06 }, 0.45)
        .fromTo(q(".menu__foot"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.55);
    },
    { scope: menu }
  );

  useEffect(() => {
    const t = tl.current;
    if (!t) return undefined;
    if (open) {
      lenis?.stop();
      t.timeScale(1).play();
    } else {
      t.timeScale(1.6).reverse();
      lenis?.start();
    }
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  return (
    <>
      <header ref={pill} className="nav">
        <a className="nav__icon" href={`mailto:${PERSON.email}`} aria-label={`Email ${PERSON.name}`}>
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="m3 5.5 7 5.5 7-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </a>
        <TLink href="/" className="nav__brand" aria-label={`${PERSON.name}, home`} onClick={closeMenu}>
          <Image src="/images/monogram-light.png" alt="" width={105} height={96} priority />
        </TLink>
        <button
          type="button"
          className="nav__burger"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <div ref={menu} id="site-menu" className="menu" aria-hidden={!open}>
        <nav className="menu__list" aria-label="Site">
          {NAV.map((item, i) => (
            <div key={item.href} className="menu__item">
              <span className="mono menu__num">{String(i + 1).padStart(2, "0")}</span>
              <TLink
                href={item.href}
                className="menu__link"
                transitionLabel={item.label}
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
              >
                {item.label}
              </TLink>
            </div>
          ))}
        </nav>
        <div className="menu__foot">
          <a href={`mailto:${PERSON.email}`} tabIndex={open ? 0 : -1}>
            {PERSON.email}
          </a>
          <div className="menu__socials">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              LinkedIn
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              GitHub
            </a>
            <a href={LINKS.substack} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              Substack
            </a>
          </div>
          <span>Product &amp; AI Builder, {PERSON.city}</span>
        </div>
      </div>
    </>
  );
}
