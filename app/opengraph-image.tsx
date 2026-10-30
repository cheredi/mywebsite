import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "Tatyana Amugo — AI Product Builder";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    eyebrow: "AI Product Builder · Ontario, Canada",
    title: "Tatyana Amugo",
    subtitle: "Find the problem. Build the fix. Prove it worked.",
  });
}
