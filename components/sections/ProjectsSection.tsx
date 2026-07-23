"use client";

import { useState } from "react";
import { projects, projectFilters } from "@/data/projects";
import ProjectCard from "@/components/sections/ProjectCard";
import RevealSection from "@/components/ui/RevealSection";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const visibleProjects =
    filter === "all" ? projects : projects.filter((project) => project.filterTags.includes(filter));

  return (
    <RevealSection id="projects" className="section-wrap">
      <h2>Featured Projects</h2>
      <div className="filters">
        {projectFilters.map(({ label, value }) => (
          <button
            key={value}
            className={`filter-btn${filter === value ? " active" : ""}`}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </RevealSection>
  );
}
