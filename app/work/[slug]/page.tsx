import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/work";
import { PERSON } from "@/content/site";
import { JsonLd, PERSON_ID, absolute, breadcrumbs } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const title = `${study.title} — Case study`;
  return {
    title,
    description: study.seoDescription,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { type: "article", title: `${title} · ${PERSON.name}`, description: study.seoDescription, url: `/work/${study.slug}` },
  };
}

const DARK = new Set(["espresso", "navy"]);

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((s) => s.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const dark = DARK.has(study.theme);
  const external = (href: string) => href.startsWith("http");

  const schema = {
    "@type": "CreativeWork",
    "@id": `${absolute(`/work/${study.slug}`)}#work`,
    name: study.title,
    headline: study.tagline,
    description: study.seoDescription,
    url: absolute(`/work/${study.slug}`),
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    keywords: study.stack.join(", "),
    ...(study.image ? { image: absolute(study.image.src) } : {}),
    ...(study.badge ? { award: study.badge } : {}),
  };

  return (
    <article>
      <JsonLd
        data={[
          schema,
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Work", path: "/#work" },
            { name: study.title, path: `/work/${study.slug}` },
          ]),
        ]}
      />

      <header className={`cs-hero cs-hero--${study.theme}${dark ? " on-dark" : ""}`}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="crumbs label" style={{ color: "inherit", opacity: 0.7 }}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#work">Work</Link>
          </nav>
          <p className="label" style={{ color: "inherit", opacity: 0.7 }}>
            {study.category}
          </p>
          <h1 className="cs-hero__title">{study.title}</h1>
          <p className="cs-hero__tagline">{study.tagline}</p>
          {study.badge ? (
            <p className="cs-hero__badge">
              <span className="tile__badge">{study.badge}</span>
            </p>
          ) : null}

          {study.image ? (
            <div className="cs-hero__media">
              <div className="browser">
                <div className="browser__bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <Image
                  src={study.image.src}
                  width={study.image.width}
                  height={study.image.height}
                  alt={study.image.alt}
                  priority
                  sizes="(max-width: 1100px) 92vw, 1040px"
                />
              </div>
            </div>
          ) : study.metric ? (
            <div className="cs-hero__metric">
              <span className="tile__big gloss">{study.metric.value}</span>
              <span className="tile__big-label">{study.metric.label}</span>
            </div>
          ) : (
            <div className="cs-hero__spacer" />
          )}
        </div>
      </header>

      <div className="wrap">
        <dl className="facts">
          <div>
            <dt className="label">Role</dt>
            <dd>{study.role}</dd>
          </div>
          {study.when ? (
            <div>
              <dt className="label">When</dt>
              <dd>{study.when}</dd>
            </div>
          ) : null}
          <div className="facts__wide">
            <dt className="label">Built with</dt>
            <dd>{study.stack.join(" · ")}</dd>
          </div>
        </dl>

        <Reveal as="section" className="cs-section" aria-labelledby="cs-context">
          <h2 id="cs-context" className="label cs-section__label">
            ( Context )
          </h2>
          <p className="cs-lead" style={{ fontWeight: 500 }}>
            {study.context}
          </p>
        </Reveal>

        <Reveal as="section" className="cs-section" aria-labelledby="cs-problem">
          <h2 id="cs-problem" className="label cs-section__label">
            ( The problem )
          </h2>
          <p className="cs-lead">{study.problem}</p>
        </Reveal>

        <Reveal as="section" className="cs-section" aria-labelledby="cs-approach">
          <h2 id="cs-approach" className="label cs-section__label">
            ( What I did )
          </h2>
          <ol className="cs-list">
            {study.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Reveal>

        {study.howItWorks ? (
          <Reveal as="section" className="cs-section" aria-labelledby="cs-how">
            <h2 id="cs-how" className="label cs-section__label">
              ( How it works )
            </h2>
            <ol className="how">
              {study.howItWorks.map((step, i) => (
                <li key={step.title}>
                  <span className="label how__n">0{i + 1}</span>
                  <h3 className="how__title">{step.title}</h3>
                  <p className="how__text">{step.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        ) : null}

        <Reveal as="section" className="cs-section" aria-labelledby="cs-outcome">
          <h2 id="cs-outcome" className="label cs-section__label">
            ( Outcome )
          </h2>
          <div>
            <ul className="outcome">
              {study.outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {study.note ? <p className="cs-note">{study.note}</p> : null}
          </div>
        </Reveal>

        {study.links.length ? (
          <Reveal as="section" className="cs-section" aria-labelledby="cs-links">
            <h2 id="cs-links" className="label cs-section__label">
              ( See it )
            </h2>
            <div className="cs-links">
              {study.links.map((link, i) =>
                external(link.href) ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${i === 0 ? "btn--primary" : "btn--secondary"}`}
                  >
                    {link.label} ↗
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className={`btn ${i === 0 ? "btn--primary" : "btn--secondary"}`}>
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </Reveal>
        ) : null}
      </div>

      <div className="wrap band band--tight">
        <Link href={`/work/${next.slug}`} className="next">
          <span className="label" style={{ color: "var(--on-dark-muted)" }}>
            Next case study
          </span>
          <p className="next__title">{next.title}</p>
          <p style={{ marginTop: 12, color: "var(--on-dark-muted)" }}>{next.tagline}</p>
          <span className="more" style={{ marginTop: 24, color: "#f0b9c6" }}>
            Read it
          </span>
        </Link>
      </div>
    </article>
  );
}
