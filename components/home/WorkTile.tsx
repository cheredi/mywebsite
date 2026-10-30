import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/types";

function Visual({ study }: { study: CaseStudy }) {
  if (study.image) {
    return (
      <div className="tile__media">
        <div className="browser">
          <div className="browser__bar" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <Image
            src={study.image.src}
            width={study.image.width}
            height={study.image.height}
            alt={study.image.alt}
            sizes="(max-width: 860px) 90vw, 560px"
          />
        </div>
      </div>
    );
  }

  if (study.slug === "swali-ai") {
    return (
      <div className="chat" aria-hidden="true">
        <div className="chat__bubble chat__bubble--q">
          <p className="chat__meta">Swali · ML Engineer track</p>
          How would you evaluate a RAG interview coach beyond model accuracy?
        </div>
        <div className="chat__bubble chat__bubble--a">
          Separate retrieval quality from generation quality, then check groundedness…
        </div>
        <div className="chat__bubble chat__bubble--q">
          <p className="chat__meta">Feedback</p>
          Strong start. Add a human review loop and a failure taxonomy.
        </div>
      </div>
    );
  }

  if (study.slug === "anomaly-detection") {
    return (
      <div className="frames" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className={i === 5 ? "is-flagged" : undefined} />
        ))}
      </div>
    );
  }

  if (study.metric) {
    return (
      <div className="tile__figure">
        <span className="tile__big gloss">{study.metric.value}</span>
        <span className="tile__big-label">{study.metric.label}</span>
      </div>
    );
  }

  return null;
}

export default function WorkTile({ study, wide = false }: { study: CaseStudy; wide?: boolean }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className={`tile tile--${study.theme}${wide ? " tile--wide" : ""}`}
      aria-label={`${study.title}: ${study.tagline} Read the case study.`}
    >
      <div className="tile__head">
        <span className="label" style={{ color: "inherit", opacity: 0.7 }}>
          {study.category}
        </span>
        {study.badge ? <span className="tile__badge">{study.badge}</span> : null}
      </div>
      <h3 className="tile__title">{study.title}</h3>
      <p className="tile__tagline">{study.tagline}</p>
      {wide ? <p className="tile__summary">{study.summary}</p> : null}
      <span className="tile__cta more">Read the case study</span>
      <Visual study={study} />
    </Link>
  );
}
