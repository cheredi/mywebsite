"use client";

import { projects } from "@/content/projects";
import { PROJECT_MEDIA } from "@/content/media";
import { useDict } from "@/components/prefs/Prefs";
import type { Dict } from "@/content/i18n";
import Specimen from "@/components/motion/Specimen";
import SplitHeading from "@/components/motion/SplitHeading";
import Reveal from "@/components/motion/Reveal";
import TLink from "@/components/motion/TLink";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Arrow from "@/components/ui/Arrow";

const ALT: Record<string, keyof Dict["alt"]> = { "shipping-setup-assistant": "shipping", "ona-assistive-ai": "ona" };

export default function ProjectView({ slug }: { slug: string }) {
  const t = useDict();
  const project = projects.find((p) => p.slug === slug)!;
  const copy = t.projects[slug];
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const nextCopy = t.projects[next.slug];
  const media = PROJECT_MEDIA[slug];
  const alt = media ? (ALT[slug] ? t.alt[ALT[slug]] : media.alt) : "";

  return (
    <article>
      <header className="container ph">
        <nav className="mono ph__crumbs" aria-label="Breadcrumb">
          <TLink href="/" transitionLabel={t.ui.home}>
            {t.ui.home}
          </TLink>
          <span aria-hidden="true">/</span>
          <TLink href="/#projects">{t.sections.projects}</TLink>
        </nav>
        <Specimen as="h1" className="ph__title" weight={[100, 500]}>
          {copy.title}
        </Specimen>
        {copy.badge ? (
          <Reveal as="p" delay={0.3}>
            <span className="mono ph__badge">{copy.badge}</span>
          </Reveal>
        ) : null}
        {media ? (
          <figure>
            <ParallaxImage {...media} alt={alt} />
            <figcaption className="a11y-caption">
              {t.ui.image} {alt}
            </figcaption>
          </figure>
        ) : null}
      </header>

      <div className="container ph__body">
        <p className="mono" style={{ color: "var(--muted)" }}>
          ({String(index + 1).padStart(2, "0")})
        </p>
        <div>
          <SplitHeading as="p" className="ph__desc">
            {copy.description}
          </SplitHeading>
          {copy.meta.length ? (
            <Reveal className="ph__meta" stagger={0.1}>
              {copy.meta.map((m) => (
                <p key={m.text}>
                  {m.label ? <strong>{m.label}</strong> : null}
                  {m.text}
                </p>
              ))}
            </Reveal>
          ) : null}
          <Reveal className="ph__side" stagger={0.1}>
            <ul className="tags" aria-label={t.ui.toolsTopics}>
              {copy.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {project.links?.length ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.links.map((link, i) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={`btn ${i === 0 ? "btn--ink" : "btn--line"}`}>
                    {copy.links[i] ?? link.label}
                    <span className="btn__icon">
                      <Arrow dir="out" />
                    </span>
                  </a>
                ))}
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>

      <div className="container">
        <TLink href={`/work/${next.slug}`} className="ph__next" transitionLabel={nextCopy.title}>
          <span className="mono" style={{ color: "var(--muted)" }}>
            {t.ui.next} — {String(projects.indexOf(next) + 1).padStart(2, "0")}
          </span>
          <p className="ph__next-title">{nextCopy.title}</p>
        </TLink>
      </div>
    </article>
  );
}
