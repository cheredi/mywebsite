import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`card project${project.featured ? " project--featured" : ""}`}>
      {project.eyebrow ? <p className="project-eyebrow">{project.eyebrow}</p> : null}
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      {project.meta?.map((entry) => (
        <p className="project-meta" key={entry.text}>
          {entry.label ? <strong>{entry.label}. </strong> : null}
          {entry.text}
        </p>
      ))}

      {project.details ? (
        <details className="project-details">
          <summary>{project.details.summary}</summary>
          <p>{project.details.text}</p>
        </details>
      ) : null}

      <ul className="tags" aria-label="Tools and topics">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {project.links?.length ? (
        <div className="project-actions">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={link.variant === "primary" ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"}
            >
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
