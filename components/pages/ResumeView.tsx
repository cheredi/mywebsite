"use client";

import { experienceEntries } from "@/content/experience";
import { projects } from "@/content/projects";
import { LINKS, PERSON, SITE_URL } from "@/content/site";
import { useDict } from "@/components/prefs/Prefs";
import Specimen from "@/components/motion/Specimen";
import Reveal from "@/components/motion/Reveal";
import TLink from "@/components/motion/TLink";
import PrintButton from "@/components/ui/PrintButton";

const host = (url: string) => url.replace(/^https?:\/\//, "");

export default function ResumeView() {
  const t = useDict();
  return (
    <section className="container resume">
      <header className="resume__top">
        <div>
          <p className="mono" style={{ color: "var(--muted)", marginBottom: 16 }}>
            {t.hero.kicker}
          </p>
          <Specimen as="h1" className="resume__name" weight={[100, 500]}>
            {PERSON.name}
          </Specimen>
          <p className="resume__summary">{t.hero.summary}</p>
        </div>
        <Reveal className="resume__contact" delay={0.2}>
          <a className="u-link" href={`mailto:${PERSON.email}`}>
            {PERSON.email}
          </a>
          <a className="u-link" href={SITE_URL}>
            {host(SITE_URL)}
          </a>
          <a className="u-link" href={LINKS.linkedin}>
            {host(LINKS.linkedin)}
          </a>
          <a className="u-link" href={LINKS.github}>
            {host(LINKS.github)}
          </a>
          <span style={{ color: "var(--muted)" }}>{t.ui.city}</span>
          <div style={{ marginTop: 12 }}>
            <PrintButton label={t.ui.downloadPdf} />
          </div>
        </Reveal>
      </header>

      <Reveal as="section" className="resume__section" aria-labelledby="r-exp">
        <h2 id="r-exp" className="mono resume__h">
          {t.sections.experience}
        </h2>
        <div>
          {experienceEntries.map((e) => {
            const c = t.experience[e.id];
            return (
              <div key={e.id} className="resume__entry">
                <h3>{c.role}</h3>
                <p>{c.location}</p>
                <ul>
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal as="section" className="resume__section" aria-labelledby="r-proj">
        <h2 id="r-proj" className="mono resume__h">
          {t.sections.projects}
        </h2>
        <div>
          {projects.map((p) => {
            const c = t.projects[p.slug];
            return (
              <div key={p.slug} className="resume__entry">
                <h3>
                  <TLink href={`/work/${p.slug}`} className="u-link" transitionLabel={c.title}>
                    {c.title}
                  </TLink>
                </h3>
                <ul>
                  <li>{c.description}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal as="section" className="resume__section" aria-labelledby="r-edu">
        <h2 id="r-edu" className="mono resume__h">
          {t.sections.education}
        </h2>
        <div>
          {t.education.map((e) => (
            <div key={e.title} className="resume__entry">
              <h3>{e.title}</h3>
              <p>{e.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="resume__section" aria-labelledby="r-skills">
        <h2 id="r-skills" className="mono resume__h">
          {t.sections.skills}
        </h2>
        <div>
          {t.skills.map((c) => (
            <div key={c.title} className="resume__entry">
              <h3>{c.title}</h3>
              <ul>
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
