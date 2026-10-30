"use client";

import Image from "next/image";
import { useRef } from "react";
import { projects } from "@/content/projects";
import { PROJECT_MEDIA } from "@/content/media";
import { useDict } from "@/components/prefs/Prefs";
import type { Dict } from "@/content/i18n";
import { EASE, gsap, reducedMotion, useGSAP } from "@/lib/motion";
import SectionHead from "@/components/ui/SectionHead";
import TLink from "@/components/motion/TLink";
import Arrow from "@/components/ui/Arrow";
import type { Project } from "@/content/types";

const ALT: Record<string, keyof Dict["alt"]> = { "shipping-setup-assistant": "shipping", "ona-assistive-ai": "ona" };

function Visual({ project, t }: { project: Project; t: Dict }) {
  const media = PROJECT_MEDIA[project.slug];
  if (media) {
    const alt = ALT[project.slug] ? t.alt[ALT[project.slug]] : media.alt;
    return (
      <figure className="card__shot">
        <Image src={media.src} width={media.width} height={media.height} alt={alt} sizes="(max-width: 1024px) 90vw, 640px" />
        <figcaption className="a11y-caption" style={{ padding: "8px 12px" }}>
          {t.ui.image} {alt}
        </figcaption>
      </figure>
    );
  }
  if (project.slug === "rag-interview-prep") {
    // A question and rubric line from her Interview Arcade (ML Engineer track).
    const q = t.arcade.data.ml_engineer[0];
    return (
      <div className="qa" aria-hidden="true">
        <div className="qa__bubble">
          <span className="mono">{t.arcade.question}</span>
          {q.question}
        </div>
        <div className="qa__bubble qa__bubble--me">{q.rubric[0]}</div>
        <div className="qa__bubble">
          <span className="mono">{t.arcade.rubric}</span>
          {q.rubric[1]}
        </div>
      </div>
    );
  }
  return (
    <div className="frames" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} className={i === 6 ? "hot" : undefined} />
      ))}
    </div>
  );
}

export default function Projects() {
  const t = useDict();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (reducedMotion() || !root.current) return;
      const cards = gsap.utils.toArray<HTMLElement>(".card", root.current);
      const mm = gsap.matchMedia();

      // Desktop: each card recedes as the next one stacks on top of it.
      mm.add("(min-width: 761px)", () => {
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          gsap
            .timeline({
              scrollTrigger: {
                trigger: next,
                start: "top bottom",
                end: `top ${84 + (i + 1) * 14}px`,
                scrub: true,
              },
            })
            .to(card, { scale: 0.92, ease: "none" }, 0)
            .to(card.querySelector(".card__shade"), { opacity: 0.45, ease: "none" }, 0);
        });
      });

      cards.forEach((card) => {
        gsap.from(card.querySelectorAll(".card__copy > *"), {
          y: 40,
          autoAlpha: 0,
          duration: 1.1,
          ease: EASE,
          stagger: 0.06,
          scrollTrigger: { trigger: card, start: "top 75%", once: true },
        });
        gsap.from(card.querySelector(".card__visual > *"), {
          yPercent: 18,
          scale: 0.94,
          autoAlpha: 0,
          duration: 1.4,
          ease: EASE,
          scrollTrigger: { trigger: card, start: "top 70%", once: true },
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="projects" className="section" aria-labelledby="projects-title" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHead index="03" title={t.sections.projects} id="projects-title" />
        <div className="stack">
          {projects.map((project, i) => {
            const copy = t.projects[project.slug];
            // The long "Under the Hood" note lives on the project page; position matches the English source.
            const meta = copy.meta.filter((_, k) => project.meta?.[k]?.label !== "Under the Hood");
            const dark = i < 2;
            return (
              <article key={project.slug} className={`card card--${i % 4}`} style={{ ["--i" as string]: i }}>
                <div className="card__shade" />
                <div className="card__inner">
                  <div className="card__copy">
                    <div className="card__top mono">
                      <span>
                        {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                      </span>
                      {copy.badge ? <span>{copy.badge}</span> : null}
                    </div>
                    <h3 className="card__title">
                      <TLink href={`/work/${project.slug}`} transitionLabel={copy.title}>
                        {copy.title}
                      </TLink>
                    </h3>
                    <p className="card__desc">{copy.description}</p>
                    {meta.map((m) => (
                      <p key={m.text} className="card__meta">
                        {m.label ? <strong>{m.label}: </strong> : null}
                        {m.text}
                      </p>
                    ))}
                    <ul className="tags" aria-label={t.ui.toolsTopics}>
                      {copy.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <div className="card__actions">
                      {project.links?.map((link, j) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn ${j === 0 ? (dark ? "btn--cream" : "btn--ink") : dark ? "btn--ghost-dark" : "btn--line"}`}
                        >
                          {copy.links[j] ?? link.label}
                          <span className="btn__icon">
                            <Arrow dir="out" />
                          </span>
                        </a>
                      ))}
                      <TLink
                        href={`/work/${project.slug}`}
                        transitionLabel={copy.title}
                        className={`btn ${dark ? "btn--ghost-dark" : "btn--line"}`}
                        aria-label={`${copy.title} — ${t.ui.details}`}
                        style={{ padding: "0 8px" }}
                      >
                        <span className="btn__icon">
                          <Arrow />
                        </span>
                      </TLink>
                    </div>
                  </div>
                  <div className="card__visual">
                    <Visual project={project} t={t} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
