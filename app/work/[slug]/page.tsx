import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { PROJECT_MEDIA } from "@/content/media";
import { PERSON } from "@/content/site";
import { JsonLd, PERSON_ID, absolute, breadcrumbs } from "@/lib/seo";
import ProjectView from "@/components/pages/ProjectView";

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
  const media = PROJECT_MEDIA[project.slug];

  return (
    <>
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
      <ProjectView slug={project.slug} />
    </>
  );
}
