import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { PROJECT_MEDIA } from "@/content/media";
import { PERSON } from "@/content/site";
import { JsonLd, PERSON_ID, absolute, breadcrumbs } from "@/lib/seo";
import SplitHeading from "@/components/motion/SplitHeading";
import Specimen from "@/components/motion/Specimen";
import Reveal from "@/components/motion/Reveal";
import TLink from "@/components/motion/TLink";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Arrow from "@/components/ui/Arrow";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const find = (slug: string) => projects.find((p) => p.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = find((await params).slug);
  if (!project) return {};
  const description = project.description.length > 160 ? `${project.description.slice(0, 157).trimEnd()}…` : project.description;
  return {
    title: project.title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { type: "article", title: `${project.title} — ${PERSON.name}`, description, url: `/work/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = find((await params).slug);
  if (!project) notFound();
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const media = PROJECT_MEDIA[project.slug];

  return (
    <article>
      <JsonLd
        data={[
          {
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            url: absolute(`/work/${project.slug}`),
            author: { "@id": PERSON_ID },
            keywords: project.tags.join(", "),
            ...(media ? { image: absolute(media.src) } : {}),
          },
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Featured Projects", path: "/#projects" },
            { name: project.title, path: `/work/${project.slug}` },
          ]),
        ]}
      />

      <header className="container ph">
        <nav className="mono ph__crumbs" aria-label="Breadcrumb">
          <TLink href="/" transitionLabel="Home">
            Home
          </TLink>
          <span aria-hidden="true">/</span>
          <TLink href="/#projects">Featured Projects</TLink>
        </nav>
        <Specimen as="h1" className="ph__title" weight={[100, 500]}>
          {project.title}
        </Specimen>
        {project.badge ? (
          <Reveal as="p" delay={0.3}>
            <span className="mono ph__badge">{project.badge}</span>
          </Reveal>
        ) : null}
        {media ? <ParallaxImage {...media} /> : null}
      </header>

      <div className="container ph__body">
        <p className="mono" style={{ color: "var(--muted)" }}>
          ({String(index + 1).padStart(2, "0")})
        </p>
        <div>
          <SplitHeading as="p" className="ph__desc">
            {project.description}
          </SplitHeading>
          {project.meta?.length ? (
            <Reveal className="ph__meta" stagger={0.1}>
              {project.meta.map((m) => (
                <p key={m.text}>
                  {m.label ? <strong>{m.label}</strong> : null}
                  {m.text}
                </p>
              ))}
            </Reveal>
          ) : null}
          <Reveal className="ph__side" stagger={0.1}>
            <ul className="tags" aria-label="Tools and topics">
              {project.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {project.links?.length ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.links.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${i === 0 ? "btn--ink" : "btn--line"}`}
                  >
                    {link.label}
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
        <TLink href={`/work/${next.slug}`} className="ph__next" transitionLabel={next.title}>
          <span className="mono" style={{ color: "var(--muted)" }}>
            Next — {String(projects.indexOf(next) + 1).padStart(2, "0")}
          </span>
          <p className="ph__next-title">{next.title}</p>
        </TLink>
      </div>
    </article>
  );
}
