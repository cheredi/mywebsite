import { OG_SIZE, renderOg } from "@/lib/og";
import { HERO, PERSON } from "@/content/site";

export const alt = `${PERSON.name} — Product & AI Builder`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: HERO.kicker, title: PERSON.name, subtitle: HERO.summary });
}
