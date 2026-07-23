"use client";

import type { ExperienceEntry } from "@/types";
import { useTilt } from "@/components/hooks/useTilt";

export default function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>();

  return (
    <div
      ref={ref}
      id={entry.id}
      className="timeline-item tilt-card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <h3>{entry.role}</h3>
      <div className="date">{entry.location}</div>
      {entry.bullets.map((bullet, index) => (
        <p key={index}>{bullet}</p>
      ))}
    </div>
  );
}
