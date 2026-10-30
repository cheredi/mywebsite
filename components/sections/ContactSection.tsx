"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants";
import RevealSection from "@/components/ui/RevealSection";

type Status = "idle" | "sending" | "sent" | "error";

// Netlify detects this form from the static copy in public/__forms.html;
// submissions are posted there and show up under Forms in Netlify.
const FORM_NAME = "contact";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <RevealSection id="contact" labelledBy="contact-title" className="section--tinted">
      <div className="container contact-grid">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s talk.</h2>
          <p className="section-intro">
            Hiring for product, strategy, or AI roles — or just want to compare notes? Send a
            message and I&apos;ll get back to you.
          </p>
          <ul className="contact-links">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {status === "sent" ? (
          <div className="card form-success" role="status">
            <h3>Thanks — your message is on its way.</h3>
            <p>I&apos;ll reply to the email you shared.</p>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setStatus("idle")}>
              Send another message
            </button>
          </div>
        ) : (
          <form className="card contact-form" name={FORM_NAME} onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="honeypot" aria-hidden="true">
              <label>
                Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <div className="field-row">
              <label className="field">
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>
            <label className="field">
              <span>Message</span>
              <textarea name="message" rows={5} required />
            </label>
            <div className="form-footer">
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "error" ? (
                <p className="form-error" role="alert">
                  That didn&apos;t go through. Please email me at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
              ) : null}
            </div>
          </form>
        )}
      </div>
    </RevealSection>
  );
}
