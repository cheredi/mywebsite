import type { Metadata } from "next";
import Link from "next/link";
import { CREDENTIALS, EDUCATION, EXPERIENCE, TOOLKIT, TOOLS } from "@/content/profile";
import { caseStudies } from "@/content/work";
import { LINKS, OPEN_TO, PERSON, SITE_URL } from "@/content/site";
import { JsonLd, PERSON_ID, absolute, breadcrumbs } from "@/lib/seo";
import PrintButton from "@/components/ui/PrintButton";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${PERSON.name}, AI product builder: AI engineering at the Ontario Public Service, an award-winning assistive AI capstone, and product, data and ERP experience.`,
  alternates: { canonical: "/resume" },
  openGraph: { title: `Résumé · ${PERSON.name}`, url: "/resume" },
};

const SUMMARY =
  "AI product builder with an engineer's toolkit. I frame messy, high-stakes problems, build the smallest thing that proves the solution, and measure whether it worked — most recently cutting manual case-processing overhead by ~79% with validated, agentic AI workflows at the Ontario Public Service.";

const host = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function ResumePage() {
  return (
    <section className="resume">
      <JsonLd
        data={[
          { "@type": "ProfilePage", url: absolute("/resume"), name: `Résumé · ${PERSON.name}`, mainEntity: { "@id": PERSON_ID } },
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Résumé", path: "/resume" },
          ]),
        ]}
      />
      <div className="wrap wrap--narrow">
        <div className="resume__actions">
          <p className="label">( Résumé )</p>
          <PrintButton />
        </div>

        <div className="resume__sheet">
          <header className="resume__top">
            <div>
              <h1 className="resume__name">{PERSON.name}</h1>
              <p className="resume__role">{PERSON.role} · {PERSON.location}</p>
            </div>
            <address className="resume__contact" style={{ fontStyle: "normal" }}>
              <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
              <a href={SITE_URL}>{host(SITE_URL)}</a>
              <a href={LINKS.linkedin}>{host(LINKS.linkedin)}</a>
              <a href={LINKS.github}>{host(LINKS.github)}</a>
            </address>
          </header>

          <section className="resume__section" aria-labelledby="r-summary">
            <h2 id="r-summary" className="label resume__h">Summary</h2>
            <div>
              <p className="resume__summary">{SUMMARY}</p>
              <p className="resume__summary" style={{ marginTop: 10, color: "var(--muted)", fontSize: 15 }}>
                Open to: {OPEN_TO.join(" · ")}
              </p>
            </div>
          </section>

          <section className="resume__section" aria-labelledby="r-exp">
            <h2 id="r-exp" className="label resume__h">Experience</h2>
            <div>
              {EXPERIENCE.map((role) => (
                <div key={role.id} className="resume__entry">
                  <div className="resume__entry-head">
                    <h3>
                      {role.title} <span>· {role.org}, {role.location}</span>
                    </h3>
                    <p className="resume__when">{role.dates}</p>
                  </div>
                  <ul>
                    {role.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="resume__section" aria-labelledby="r-projects">
            <h2 id="r-projects" className="label resume__h">Selected projects</h2>
            <div>
              {caseStudies
                .filter((s) => s.slug !== "ai-case-review")
                .map((s) => (
                  <div key={s.slug} className="resume__entry">
                    <div className="resume__entry-head">
                      <h3>
                        <Link href={`/work/${s.slug}`}>{s.title}</Link> <span>· {s.category}</span>
                      </h3>
                      {s.badge ? <p className="resume__when">{s.badge}</p> : null}
                    </div>
                    <ul>
                      <li>{s.summary}</li>
                    </ul>
                  </div>
                ))}
            </div>
          </section>

          <section className="resume__section" aria-labelledby="r-edu">
            <h2 id="r-edu" className="label resume__h">Education</h2>
            <div>
              {EDUCATION.map((e) => (
                <div key={e.credential} className="resume__entry">
                  <div className="resume__entry-head">
                    <h3>
                      {e.credential} <span>· {e.institution}, {e.location}</span>
                    </h3>
                    <p className="resume__when">{e.dates}</p>
                  </div>
                </div>
              ))}
              {CREDENTIALS.map((c) => (
                <div key={c.name} className="resume__entry">
                  <div className="resume__entry-head">
                    <h3>
                      {c.name} <span>· {c.issuer}</span>
                    </h3>
                    <p className="resume__when">{c.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume__section" aria-labelledby="r-skills">
            <h2 id="r-skills" className="label resume__h">Skills</h2>
            <div className="resume__skills">
              {TOOLKIT.map((kit) => (
                <p key={kit.title}>
                  <b>{kit.title}:</b> {kit.items.join(", ")}.
                </p>
              ))}
              <p>
                <b>Tools:</b> {TOOLS.join(", ")}.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
