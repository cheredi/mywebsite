"use client";

import { useState, type FormEvent } from "react";
import { LINKS, OPEN_TO, PERSON } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

// Netlify detects this form from public/__forms.html; keep field names in sync.
const FORM_NAME = "contact";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

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
    <section id="contact" className="band band--blush" aria-labelledby="contact-title">
      <div className="wrap contact">
        <div>
          <span className="label">( 07 — Contact )</span>
          <h2 id="contact-title" className="contact__title" style={{ marginTop: 20 }}>
            Let&apos;s build something people <span className="serif gloss">trust.</span>
          </h2>
          <p className="section-lede" style={{ marginTop: 0 }}>
            Hiring for a product or AI role, or want to compare notes on shipping AI responsibly?
            I&apos;d love to hear from you.
          </p>
          <div className="contact__open">
            <span className="label">Open to · Toronto &amp; the GTA</span>
            <ul className="chips">
              {OPEN_TO.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
          <div className="contact__direct">
            <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>

        {status === "sent" ? (
          <div className="form form--done" role="status">
            <span className="label">( Sent )</span>
            <h3>Thank you — your message is on its way.</h3>
            <p>I&apos;ll reply to the email you shared, usually within a couple of days.</p>
            <button type="button" className="btn btn--secondary btn--sm" style={{ justifySelf: "start" }} onClick={() => setStatus("idle")}>
              Send another
            </button>
          </div>
        ) : (
          <form className="form" name={FORM_NAME} onSubmit={onSubmit}>
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="honeypot" aria-hidden="true">
              <label>
                Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <div className="form__row">
              <label className="field">
                <span>Name</span>
                <input name="name" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>
            <label className="field">
              <span>Company or team (optional)</span>
              <input name="company" autoComplete="organization" />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea name="message" required placeholder="What are you working on?" />
            </label>
            <div className="form__foot">
              <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p className="form__note">Goes straight to my inbox.</p>
            </div>
            {status === "error" ? (
              <p className="form__error" role="alert">
                That didn&apos;t go through. Please email me at{" "}
                <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>.
              </p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}
