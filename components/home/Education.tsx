import { educationEntries } from "@/content/education";
import { SECTIONS } from "@/content/site";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/motion/Reveal";

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHead index="07" title={SECTIONS.education} id="education-title" />
        <Reveal as="ul" className="edu" stagger={0.1}>
          {educationEntries.map((entry, i) => (
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
