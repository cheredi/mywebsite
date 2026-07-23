"use client";

import { experienceEntries } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import TimelineItem from "@/components/sections/TimelineItem";
import CompetencyCard from "@/components/sections/CompetencyCard";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

/**
 * Renders the combined Experience + Skills layout. Both sections share a
 * single grid parent in the original design (`.experience-skills-layout`),
 * so they're kept together here rather than as two independent components.
 * Each column fades in independently (matching the original markup, where
 * both `#journey` and the nested `#skills` column carried their own
 * `.animate` class), so this is a client component using two scroll-reveal
 * refs rather than the shared `RevealSection` wrapper.
 */
export default function ExperienceSkillsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const skillsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="journey" ref={sectionRef} className="animate section-wrap timeline">
      <div className="experience-skills-layout">
        <div className="experience-column">
          <h2>Experience</h2>
          <div className="timeline-list">
            {experienceEntries.map((entry) => (
              <TimelineItem key={entry.id} entry={entry} />
            ))}
          </div>
        </div>

        <div
          ref={skillsRef}
          className="skills-column section-wrap competencies animate"
          id="skills"
        >
          <h2>Skills</h2>
          <div className="competency-grid">
            {skillCategories.map((category) => (
              <CompetencyCard key={category.title} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
