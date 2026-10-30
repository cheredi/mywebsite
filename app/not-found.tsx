"use client";

import TLink from "@/components/motion/TLink";
import Arrow from "@/components/ui/Arrow";
import { useDict } from "@/components/prefs/Prefs";

export default function NotFound() {
  const t = useDict();
  return (
    <section className="lost">
      <div>
        <p className="mono" style={{ color: "var(--muted)" }}>
          (404)
        </p>
        <h1>
          {t.hero.hello} <span className="serif">👋🏾</span>
        </h1>
        <TLink href="/" className="btn btn--ink">
          {t.ui.home}
          <span className="btn__icon">
            <Arrow />
          </span>
        </TLink>
      </div>
    </section>
  );
}
