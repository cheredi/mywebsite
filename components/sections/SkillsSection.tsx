import { skillCategories } from "@/data/skills";
import RevealSection from "@/components/ui/RevealSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SkillsSection() {
  return (
    <RevealSection id="skills" labelledBy="skills-title" className="section--tinted">
      <div className="container">
        <SectionHeading id="skills-title" eyebrow="Skills" title="What I bring to a team" />
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-group" key={category.title}>
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
