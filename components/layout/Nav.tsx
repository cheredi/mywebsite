"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { LINKS, PERSON } from "@/content/site";
import { EASE, gsap, useGSAP } from "@/lib/motion";
import { useShell } from "@/components/motion/Shell";
import { usePrefs } from "@/components/prefs/Prefs";
import SettingsPanel from "@/components/prefs/SettingsPanel";
import TLink from "@/components/motion/TLink";

/** Floating pill (email · accessibility · monogram · preferences · menu) and its full-screen menu. */
export default function Nav() {
  const { lenis, introDone } = useShell();
  const { dict: t, a11y, setA11y } = usePrefs();
  const [open, setOpen] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const pill = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const prefsBtn = useRef<HTMLButtonElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const items = [
    { href: "/#projects", label: t.nav.projects },
    { href: "/#about", label: t.nav.about },
    { href: "/#experience", label: t.nav.experience },
    { href: "/#writing", label: t.nav.substack },
    { href: "/resume", label: t.nav.resume },
    { href: "/#contact", label: t.nav.contact },
  ];

  // Resume scrolling *before* a menu link navigates: restarting Lenis later
  // would cancel the scroll that link just started.
  const closeMenu = () => {
    lenis?.start();
    setOpen(false);
  };
  const closePrefs = useCallback(() => setPrefsOpen(false), []);
  const focusPrefs = useCallback(() => prefsBtn.current?.focus(), []);

  // Pill drops in once the intro has finished.
  useGSAP(
    () => {
      if (!introDone || !pill.current) return;
      gsap.fromTo(pill.current, { y: -90, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1, ease: EASE, delay: 0.35, clearProps: "transform" });
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
    { scope: menu, dependencies: [t.lang] }
  );

  useEffect(() => {
    const timeline = tl.current;
    if (!timeline) return undefined;
    if (open) {
      lenis?.stop();
      timeline.timeScale(1).play();
    } else {
      timeline.timeScale(1.6).reverse();
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
        <a className="nav__icon" href={`mailto:${PERSON.email}`} aria-label={`${t.ui.email} ${PERSON.name}`}>
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="m3 5.5 7 5.5 7-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </a>
        <button
          type="button"
          className="nav__icon nav__a11y"
          aria-pressed={a11y}
          aria-label={`${t.ui.accessibility}: ${a11y ? t.ui.on : t.ui.off}`}
          title={t.ui.accessibility}
          onClick={() => setA11y(!a11y)}
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="10" cy="5.9" r="1.3" fill="currentColor" />
            <path d="M5.8 8.2 10 9l4.2-.8M10 9v3.2m0 0-2 3.4m2-3.4 2 3.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <TLink href="/" className="nav__brand" aria-label={`${PERSON.name}, ${t.ui.home}`} onClick={closeMenu}>
          <Image src="/images/monogram-light.png" alt="" width={105} height={96} priority />
        </TLink>
        <button
          ref={prefsBtn}
          type="button"
          className="nav__icon nav__prefs"
          aria-expanded={prefsOpen}
          aria-controls="prefs-panel"
          aria-label={t.ui.settings}
          title={t.ui.settings}
          onClick={() => setPrefsOpen((v) => !v)}
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M2.5 10h15M10 2.5c2.2 2.1 3.2 4.6 3.2 7.5s-1 5.4-3.2 7.5c-2.2-2.1-3.2-4.6-3.2-7.5s1-5.4 3.2-7.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className="nav__burger"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
          onClick={() => {
            setPrefsOpen(false);
            setOpen((v) => !v);
          }}
        >
          <span />
          <span />
        </button>
      </header>

      <SettingsPanel open={prefsOpen} onClose={closePrefs} returnFocus={focusPrefs} />

      <div ref={menu} id="site-menu" className="menu" aria-hidden={!open}>
        <nav className="menu__list" aria-label="Site">
          {items.map((item, i) => (
            <div key={item.href} className="menu__item">
              <span className="mono menu__num">{String(i + 1).padStart(2, "0")}</span>
              <TLink href={item.href} className="menu__link" transitionLabel={item.label} tabIndex={open ? 0 : -1} onClick={closeMenu}>
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
          <span>
            {t.ui.role}, {t.ui.city}
          </span>
        </div>
      </div>
    </>
  );
}
