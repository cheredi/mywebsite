"use client";

import Link from "next/link";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants";
import RevealSection from "@/components/ui/RevealSection";

export default function ContactSection() {
  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Message from ${name}`
    )}&body=${encodeURIComponent(message)}%0A%0AReply to: ${email}`;
    window.location.href = mailto;
  }

  return (
    <RevealSection id="contact" className="section-wrap">
      <h2>Let&apos;s Connect</h2>
      <div className="contact-panel">
        <div className="social-actions">
          <Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            GitHub
          </Link>
          <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            LinkedIn
          </Link>
          <Link href={SOCIAL_LINKS.substack} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Substack
          </Link>
        </div>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea placeholder="Your Message" name="message" rows={5} required />
          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Send Message
          </button>
        </form>
      </div>
    </RevealSection>
  );
}
