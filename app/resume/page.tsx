import type { Metadata } from "next";
import { experienceEntries } from "@/content/experience";
import { educationEntries } from "@/content/education";
import { skillCategories } from "@/content/skills";
import { projects } from "@/content/projects";
import { HERO, LINKS, PERSON, SECTIONS, SITE_URL } from "@/content/site";
import { JsonLd, PERSON_ID, absolute, breadcrumbs } from "@/lib/seo";
import Specimen from "@/components/motion/Specimen";
import Reveal from "@/components/motion/Reveal";
import TLink from "@/components/motion/TLink";
import PrintButton from "@/components/ui/PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: `${PERSON.name} — ${HERO.summary} Experience, projects, education and skills.`,
  alternates: { canonical: "/resume" },
  openGraph: { title: `Resume — ${PERSON.name}`, url: "/resume", images: ["/opengraph-image"] },
};

const host = (url: string) => url.replace(/^https?:\/\//, "");

export default function ResumePage() {
  return (
    <section className="container resume">
      <JsonLd
        data={[
          { "@type": "ProfilePage", url: absolute("/resume"), mainEntity: { "@id": PERSON_ID } },
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Resume", path: "/resume" },
          ]),
        ]}
      />
      <header className="resume__top">
        <div>
          <p className="mono" style={{ color: "var(--muted)", marginBottom: 16 }}>
            {HERO.kicker}
          </p>
          <Specimen as="h1" className="resume__name" weight={[100, 500]}>
            {PERSON.name}
          </Specimen>
          <p className="resume__summary">{HERO.summary}</p>
        </div>
        <Reveal className="resume__contact" delay={0.2}>
          <a className="u-link" href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
          <a className="u-link" href={SITE_URL}>{host(SITE_URL)}</a>
          <a className="u-link" href={LINKS.linkedin}>{host(LINKS.linkedin)}</a>
          <a className="u-link" href={LINKS.github}>{host(LINKS.github)}</a>
          <span style={{ color: "var(--muted)" }}>{PERSON.city}, Canada</span>
          <div style={{ marginTop: 12 }}>
            <PrintButton />
          </div>
        </Reveal>
      </header>

      <Reveal as="section" className="resume__section" aria-labelledby="r-exp">
        <h2 id="r-exp" className="mono resume__h">{SECTIONS.experience}</h2>
        <div>
          {experienceEntries.map((e) => (
            <div key={e.id} className="resume__entry">
              <h3>{e.role}</h3>
              <p>{e.location}</p>
              <ul>
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="resume__section" aria-labelledby="r-proj">
        <h2 id="r-proj" className="mono resume__h">{SECTIONS.projects}</h2>
        <div>
          {projects.map((p) => (
            <div key={p.slug} className="resume__entry">
              <h3>
                <TLink href={`/work/${p.slug}`} className="u-link" transitionLabel={p.title}>
                  {p.title}
                </TLink>
              </h3>
              <ul>
                <li>{p.description}</li>
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="resume__section" aria-labelledby="r-edu">
        <h2 id="r-edu" className="mono resume__h">{SECTIONS.education}</h2>
        <div>
          {educationEntries.map((e) => (
            <div key={e.title} className="resume__entry">
              <h3>{e.title}</h3>
              <p>{e.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="resume__section" aria-labelledby="r-skills">
        <h2 id="r-skills" className="mono resume__h">{SECTIONS.skills}</h2>
        <div>
          {skillCategories.map((c) => (
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
