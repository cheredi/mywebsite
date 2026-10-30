import { TOOLKIT, TOOLS } from "@/content/profile";
import Reveal from "@/components/ui/Reveal";

export default function Toolkit() {
  return (
    <section id="toolkit" className="band band--blush" aria-labelledby="toolkit-title">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="label">( 04 — Toolkit )</span>
          <h2 id="toolkit-title" className="section-title">
            Product sense. <span className="serif">Engineering depth.</span>
          </h2>
          <p className="section-lede">
            I can scope the problem with stakeholders in the morning and debug the retrieval
            pipeline in the afternoon.
          </p>
        </Reveal>
        <div className="toolkit">
          {TOOLKIT.map((kit, i) => (
            <Reveal key={kit.title} className="kit" delay={(i + 1) as 1 | 2 | 3}>
              <h3 className="kit__title">{kit.title}</h3>
              <p className="kit__lead">{kit.lead}</p>
              <ul>
                {kit.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="tools">
          <span className="label">Tools I reach for</span>
          <ul className="chips">
            {TOOLS.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
