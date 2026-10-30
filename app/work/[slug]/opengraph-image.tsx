import { OG_SIZE, renderOg } from "@/lib/og";
import { projects } from "@/content/projects";
import { PERSON } from "@/content/site";

export const alt = `Project by ${PERSON.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return renderOg({
    eyebrow: (project?.badge ?? "Featured Projects").toUpperCase(),
    title: PERSON.name,
    subtitle: project?.title ?? "",
  });
}
