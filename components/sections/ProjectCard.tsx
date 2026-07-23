"use client";

import Link from "next/link";
import type { Project } from "@/types";
import { useTilt } from "@/components/hooks/useTilt";

export default function ProjectCard({ project }: { project: Project }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLElement>();

  const className = [
    "project-card",
    "tilt-card",
    project.highlight ? "project-highlight" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      ref={ref}
      className={className}
      data-tags={project.filterTags.join(",")}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {project.badge ? <span className="badge">{project.badge}</span> : null}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.meta?.map((entry, index) => (
        <div className="meta" key={index}>
          {entry.label ? <strong>{entry.label}:</strong> : null} {entry.text}
        </div>
      ))}
      <div className="skill-tags">
        {project.tags.map((tag) => (
          <span className="skill-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      {project.links?.length ? (
        <div className="project-actions">
          {project.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-${link.variant}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  );
}
