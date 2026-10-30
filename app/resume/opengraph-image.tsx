import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "Résumé of Tatyana Amugo";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    eyebrow: "Résumé",
    title: "Tatyana Amugo",
    subtitle: "AI product builder with an engineer's toolkit.",
  });
}
