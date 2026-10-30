import { projects } from "@/data/projects";
import ProjectCard from "@/components/sections/ProjectCard";
import RevealSection from "@/components/ui/RevealSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProjectsSection() {
  return (
    <RevealSection id="work" labelledBy="work-title">
      <div className="container">
        <SectionHeading id="work-title" eyebrow="Selected work" title="Projects" />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
