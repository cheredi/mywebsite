"use client";

import Lenis from "lenis";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { EASE, ScrollTrigger, gsap, reducedMotion } from "@/lib/motion";

interface ShellValue {
  lenis: Lenis | null;
  introDone: boolean;
  finishIntro: () => void;
  /** Navigate with the page-transition curtain (or smooth-scroll for same-page anchors). */
  navigate: (href: string, label?: string) => void;
}

const ShellContext = createContext<ShellValue | null>(null);

export function useShell() {
  const value = useContext(ShellContext);
  if (!value) throw new Error("useShell must be used inside <Shell>");
  return value;
}

const NAV_OFFSET = -88;

export default function Shell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [introDone, setIntroDone] = useState(false);
  const [label, setLabel] = useState("");
  const overlay = useRef<HTMLDivElement>(null);
  const pending = useRef<{ hash: string } | null>(null);

  // Smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
  useEffect(() => {
    if (reducedMotion()) return undefined;
    const instance = new Lenis({ duration: 1.3, smoothWheel: true });
    instance.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the instance is created on the client only.
    setLenis(instance);
    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
    };
  }, []);

  // Skip the intro entirely when it already played this session (or motion is reduced).
  useEffect(() => {
    if (document.documentElement.classList.contains("no-intro")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- read once from the class set before paint.
      setIntroDone(true);
    }
  }, []);

  const finishIntro = useCallback(() => setIntroDone(true), []);

  const scrollToHash = useCallback(
    (hash: string, immediate = false) => {
      const el = hash ? document.querySelector<HTMLElement>(hash) : null;
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: NAV_OFFSET, immediate, duration: 1.6 });
      else el.scrollIntoView({ behavior: immediate ? "auto" : "smooth" });
    },
    [lenis]
  );

  const navigate = useCallback(
    (href: string, nextLabel = "") => {
      const url = new URL(href, window.location.href);
      if (url.pathname === window.location.pathname) {
        if (url.hash) scrollToHash(url.hash);
        else if (lenis) lenis.scrollTo(0, { duration: 1.6 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = overlay.current;
      if (!el || reducedMotion()) {
        router.push(url.pathname + url.hash);
        return;
      }
      pending.current = { hash: url.hash };
      setLabel(nextLabel);
      lenis?.stop();
      gsap
        .timeline()
        .set(el, { visibility: "visible", y: 0 })
        .fromTo(el, { yPercent: 100 }, { yPercent: 0, duration: 0.75, ease: EASE })
        .fromTo(el.querySelectorAll(".pt__label span"), { yPercent: 110 }, { yPercent: 0, duration: 0.6, ease: EASE }, "-=0.45")
        .call(() => router.push(url.pathname, { scroll: false }));
    },
    [lenis, router, scrollToHash]
  );

  // After the route changes under the curtain: reset scroll, then lift the curtain.
  useEffect(() => {
    const el = overlay.current;
    const job = pending.current;
    if (!el || !job) return;
    pending.current = null;
    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true, force: true });
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      if (job.hash) scrollToHash(job.hash, true);
      gsap
        .timeline({
          delay: 0.15,
          onComplete: () => {
            gsap.set(el, { visibility: "hidden" });
            lenis?.start();
          },
        })
        .to(el.querySelectorAll(".pt__label span"), { yPercent: -110, duration: 0.5, ease: "power3.in" })
        .to(el, { yPercent: -100, duration: 0.85, ease: EASE }, "-=0.2");
    });
  }, [pathname, lenis, scrollToHash]);

  return (
    <ShellContext.Provider value={{ lenis, introDone, finishIntro, navigate }}>
      {children}
      <div ref={overlay} className="pt" aria-hidden="true">
        <p className="pt__label">
          <span>{label}</span>
        </p>
      </div>
    </ShellContext.Provider>
  );
}
