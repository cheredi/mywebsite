import Link from "next/link";
import { EDUCATION, EXPERIENCE } from "@/content/profile";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="band band--paper" aria-labelledby="experience-title">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="label">( 03 — Experience )</span>
          <h2 id="experience-title" className="section-title">
            Where I&apos;ve <span className="serif">done it.</span>
          </h2>
          <p className="section-lede">
            Government AI, enterprise systems, and consumer analytics — on two continents.
          </p>
        </Reveal>

        <ol className="roles">
          {EXPERIENCE.map((role) => (
            <Reveal as="li" key={role.id} id={role.id} className="role">
              <p className="role__dates">
                {role.dates}
                <br />
                {role.location}
              </p>
              <div>
                <h3 className="role__title">
                  {role.title} <span className="role__org">· {role.org}</span>
                </h3>
                <p className="role__summary">{role.summary}</p>
                <ul className="role__highlights">
                  {role.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
              {role.caseStudy ? (
                <Link href={`/work/${role.caseStudy}`} className="more role__link">
                  Case study
                </Link>
              ) : (
                <span />
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal as="ul" className="edu" aria-label="Education">
          {EDUCATION.map((e) => (
            <li key={e.credential}>
              <p className="edu__school">{e.institution}</p>
              <p className="edu__credential">{e.credential}</p>
              <p className="edu__meta">
                {e.location} · {e.dates}
              </p>
            </li>
          ))}
        </Reveal>

        <p style={{ marginTop: 40 }}>
          <Link href="/resume" className="more">
            See the full résumé
          </Link>
        </p>
      </div>
    </section>
  );
}
