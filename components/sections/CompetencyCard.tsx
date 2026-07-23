"use client";

import type { SkillCategory } from "@/types";
import { useTilt } from "@/components/hooks/useTilt";

export default function CompetencyCard({ category }: { category: SkillCategory }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>();

  return (
    <div ref={ref} className="competency-card tilt-card" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <h3>{category.title}</h3>
      <ul>
        {category.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
