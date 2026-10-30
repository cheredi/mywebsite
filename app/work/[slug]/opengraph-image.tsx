import { renderOg, OG_SIZE } from "@/lib/og";
import { caseStudies, getCaseStudy } from "@/content/work";

export const alt = "Case study by Tatyana Amugo";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return renderOg({
    eyebrow: `Case study · ${study?.category ?? ""}`,
    title: study?.title ?? "Tatyana Amugo",
    subtitle: study?.tagline ?? "",
    dark: true,
  });
}
