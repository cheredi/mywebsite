import { experienceEntries } from "@/data/experience";
import { educationEntries } from "@/data/education";
import RevealSection from "@/components/ui/RevealSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ExperienceSection() {
  return (
    <RevealSection id="experience" labelledBy="experience-title">
      <div className="container experience-grid">
        <div>
          <SectionHeading id="experience-title" eyebrow="Experience" title="Where I've worked" />
          <ol className="timeline">
            {experienceEntries.map((entry) => (
              <li key={entry.id} id={entry.id} className="timeline-entry">
                <div className="timeline-head">
                  <h3>
                    {entry.role}
                    <span className="timeline-org"> · {entry.org}</span>
                  </h3>
                  <p className="timeline-when">
                    {entry.dates} · {entry.location}
                  </p>
                </div>
                <ul className="timeline-bullets">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <aside className="education" aria-labelledby="education-title">
          <h3 id="education-title" className="aside-title">
            Education
          </h3>
          <ul className="education-list">
            {educationEntries.map((entry) => (
              <li key={entry.title}>
                <p className="education-title">{entry.title}</p>
                <p className="education-meta">{entry.institution}</p>
                <p className="education-meta">{entry.dates}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </RevealSection>
  );
}
