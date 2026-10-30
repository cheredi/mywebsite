import { caseStudies } from "@/content/work";
import Reveal from "@/components/ui/Reveal";
import WorkTile from "@/components/home/WorkTile";

export default function Work() {
  const [lead, ...rest] = caseStudies;

  return (
    <section id="work" className="band" aria-labelledby="work-title">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="label">( 01 — Selected work )</span>
          <h2 id="work-title" className="section-title">
            Shipped. Measured. <span className="serif">Explained.</span>
          </h2>
          <p className="section-lede">
            Five products, from a regulated government workflow to an award-winning assistive system.
            Each one starts with a real problem and ends with something you can open, try, or measure.
          </p>
        </Reveal>
        <div className="tiles">
          <WorkTile study={lead} wide />
          {rest.map((study) => (
            <WorkTile key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
