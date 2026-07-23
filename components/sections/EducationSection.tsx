import { educationEntries } from "@/data/education";
import RevealSection from "@/components/ui/RevealSection";

export default function EducationSection() {
  return (
    <RevealSection id="education" className="section-wrap">
      <h2>Education &amp; Credentials</h2>
      <div className="timeline-list">
        {educationEntries.map((entry) => (
          <div className="timeline-item" key={entry.title}>
            <h3>{entry.title}</h3>
            <div className="date">{entry.detail}</div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
