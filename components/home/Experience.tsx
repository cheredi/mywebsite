"use client";

import { experienceEntries } from "@/content/experience";
import { useDict } from "@/components/prefs/Prefs";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/motion/Reveal";

export default function Experience() {
  const t = useDict();
  return (
    <section id="experience" className="section" aria-labelledby="experience-title" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHead index="04" title={t.sections.experience} id="experience-title" />
        <div className="xp">
          {experienceEntries.map((entry) => {
            const copy = t.experience[entry.id];
            const [place, dates] = copy.location.split(" | ");
            return (
              <Reveal key={entry.id} as="article" id={entry.id} className="xp__row" stagger={0.08} start="top 88%">
                <p className="mono xp__when">
                  {dates}
                  <br />
                  {place}
                </p>
                <h3 className="xp__role">{copy.role}</h3>
                <ul className="xp__bullets">
                  {copy.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
