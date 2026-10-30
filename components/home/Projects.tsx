"use client";

import Image from "next/image";
import { useRef } from "react";
import { projects } from "@/content/projects";
import { PROJECT_MEDIA } from "@/content/media";
import { SECTIONS } from "@/content/site";
import { EASE, gsap, reducedMotion, useGSAP } from "@/lib/motion";
import SectionHead from "@/components/ui/SectionHead";
import TLink from "@/components/motion/TLink";
import Arrow from "@/components/ui/Arrow";
import type { Project } from "@/content/types";

function Visual({ project }: { project: Project }) {
  const media = PROJECT_MEDIA[project.slug];
  if (media) {
    return (
      <div className="card__shot">
        <Image src={media.src} width={media.width} height={media.height} alt={media.alt} sizes="(max-width: 1024px) 90vw, 640px" />
      </div>
    );
  }
  if (project.slug === "rag-interview-prep") {
    // A question and rubric line from her Interview Arcade (ML Engineer track).
    return (
      <div className="qa" aria-hidden="true">
        <div className="qa__bubble">
          <span className="mono">Question</span>
          How would you evaluate a RAG interview coach beyond model accuracy?
        </div>
        <div className="qa__bubble qa__bubble--me">Separates retrieval quality from generation quality.</div>
        <div className="qa__bubble">
          <span className="mono">Ideal Rubric</span>
          Defines groundedness and hallucination checks.
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
        <SectionHead index="03" title={SECTIONS.projects} id="projects-title" />
        <div className="stack">
          {projects.map((project, i) => {
            const meta = project.meta?.filter((m) => m.label !== "Under the Hood") ?? [];
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
                      {project.badge ? <span>{project.badge}</span> : null}
                    </div>
                    <h3 className="card__title">
                      <TLink href={`/work/${project.slug}`} transitionLabel={project.title}>
                        {project.title}
                      </TLink>
                    </h3>
                    <p className="card__desc">{project.description}</p>
                    {meta.map((m) => (
                      <p key={m.text} className="card__meta">
                        {m.label ? <strong>{m.label}: </strong> : null}
                        {m.text}
                      </p>
                    ))}
                    <ul className="tags" aria-label="Tools and topics">
                      {project.tags.map((tag) => (
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
                          {link.label}
                          <span className="btn__icon">
                            <Arrow dir="out" />
                          </span>
                        </a>
                      ))}
                      <TLink
                        href={`/work/${project.slug}`}
                        transitionLabel={project.title}
                        className={`btn ${dark ? "btn--ghost-dark" : "btn--line"}`}
                        aria-label={`${project.title} — details`}
                        style={{ padding: "0 8px" }}
                      >
                        <span className="btn__icon">
                          <Arrow />
                        </span>
                      </TLink>
                    </div>
                  </div>
                  <div className="card__visual">
                    <Visual project={project} />
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
