"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { proofStats } from "@/data/proof";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

/**
 * "Momentum & Social Proof" stat cards with a count-up animation that
 * starts once the section scrolls into view (ports `runCounters()` from
 * js/site.js).
 */
export default function ProofSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const [counts, setCounts] = useState<number[]>(() => proofStats.map(() => 0));
  const startedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            proofStats.forEach((stat, index) => {
              const target = stat.target;
              const increment = Math.max(1, Math.ceil(target / 45));
              const timer = setInterval(() => {
                setCounts((prev) => {
                  const next = [...prev];
                  const current = Math.min(next[index] + increment, target);
                  next[index] = current;
                  if (current >= target) clearInterval(timer);
                  return next;
                });
              }, 26);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="proof" ref={sectionRef} className="animate social-proof section-wrap">
      <h2>Momentum &amp; Social Proof</h2>
      <div className="proof-grid">
        {proofStats.map((stat, index) => (
          <Link className="proof-card" href={stat.href} key={stat.label}>
            <span className="proof-number">
              {counts[index]}
              {stat.target >= 10 ? "+" : ""}
            </span>
            <div className="proof-label">{stat.label}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
