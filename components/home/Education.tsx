"use client";

import { useDict } from "@/components/prefs/Prefs";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/motion/Reveal";

export default function Education() {
  const t = useDict();
  return (
    <section id="education" className="section" aria-labelledby="education-title" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHead index="07" title={t.sections.education} id="education-title" />
        <Reveal as="ul" className="edu" stagger={0.1}>
          {t.education.map((entry, i) => (
            <li key={entry.title}>
              <span className="mono edu__n">{String(i + 1).padStart(2, "0")}</span>
              <p className="edu__title">{entry.title}</p>
              <p className="edu__detail">{entry.detail}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
