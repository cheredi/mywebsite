"use client";

import { useRef, useState, type FormEvent } from "react";
import { LINKS, PERSON, SECTIONS } from "@/content/site";
import { EASE, gsap, reducedMotion, useGSAP } from "@/lib/motion";
import { useShell } from "@/components/motion/Shell";
import SplitHeading from "@/components/motion/SplitHeading";
import LocalTime from "@/components/ui/LocalTime";
import Arrow from "@/components/ui/Arrow";

type Status = "idle" | "sending" | "sent" | "error";

// Netlify detects this form from public/__forms.html; keep the field names in sync.
const FORM_NAME = "contact";

// Scalloped "drape" along the top edge of the curtain.
const SWAGS = 24;
const DRAPE = `M0 0H1200V18${Array.from({ length: SWAGS }, (_, i) => {
  const w = 1200 / SWAGS;
  const x0 = 1200 - i * w;
  return `Q${x0 - w / 2} 60 ${x0 - w} 18`;
}).join("")}Z`;

export default function Connect() {
  const { lenis } = useShell();
  const [status, setStatus] = useState<Status>("idle");
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

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <footer ref={root} id="contact" className="curtain" aria-labelledby="contact-title">
      <svg className="curtain__drape" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
        <path d={DRAPE} fill="currentColor" />
      </svg>

      <div className="container curtain__inner">
        <SplitHeading as="h2" id="contact-title" className="curtain__title" by="chars">
          {SECTIONS.contact}
        </SplitHeading>

        <div className="curtain__grid">
          <div>
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
            <a className="curtain__email u-link" href={`mailto:${PERSON.email}`}>
              {PERSON.email}
            </a>
          </div>

          {status === "sent" ? (
            <p className="form__msg" role="status" style={{ fontSize: 22, color: "var(--cream)" }}>
              Thank you — your message has been sent.
            </p>
          ) : (
            <form className="form" name={FORM_NAME} onSubmit={onSubmit}>
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="honeypot" aria-hidden="true">
                <label>
                  Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              <label className="sr-only" htmlFor="c-name">
                Your Name
              </label>
              <input id="c-name" type="text" placeholder="Your Name" name="name" autoComplete="name" required />
              <label className="sr-only" htmlFor="c-email">
                Your Email
              </label>
              <input id="c-email" type="email" placeholder="Your Email" name="email" autoComplete="email" required />
              <label className="sr-only" htmlFor="c-message">
                Your Message
              </label>
              <textarea id="c-message" placeholder="Your Message" name="message" rows={4} required />
              <div className="form__foot">
                <button type="submit" className="btn btn--cream" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <span className="btn__icon">
                    <Arrow />
                  </span>
                </button>
                {status === "error" ? (
                  <p className="form__msg" role="alert">
                    That didn&apos;t send. Please email <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>.
                  </p>
                ) : null}
              </div>
            </form>
          )}
        </div>

        <div className="curtain__base">
          <p>
            &copy; {new Date().getFullYear()} {PERSON.name}. {SECTIONS.footer}
          </p>
          <p className="mono">
            {PERSON.city} <LocalTime />
          </p>
          <button
            type="button"
            className="u-link"
            style={{ background: "none", border: 0, padding: 0, color: "inherit" }}
            onClick={() => (lenis ? lenis.scrollTo(0, { duration: 2 }) : window.scrollTo({ top: 0, behavior: "smooth" }))}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
