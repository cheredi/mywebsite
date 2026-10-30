"use client";

import { useDict } from "@/components/prefs/Prefs";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/motion/Reveal";

export default function Skills() {
  const t = useDict();
  return (
    <section id="skills" className="section dark on-dark" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead index="05" title={t.sections.skills} id="skills-title" />
        <Reveal className="skills" stagger={0.08} start="top 85%">
          {t.skills.map((cat, i) => (
            <div key={cat.title} className="skill">
              <span className="mono skill__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="skill__title">{cat.title}</h3>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
