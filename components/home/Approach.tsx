import Link from "next/link";
import { APPROACH } from "@/content/profile";
import Reveal from "@/components/ui/Reveal";

export default function Approach() {
  return (
    <section id="approach" className="band band--dark" aria-labelledby="approach-title">
      <div className="wrap approach">
        <Reveal className="section-head">
          <span className="label">( 02 — Approach )</span>
          <h2 id="approach-title" className="section-title">
            How I <span className="serif">work.</span>
          </h2>
          <p className="section-lede">
            The same four moves on every project — whether it&apos;s a prototype or a production
            system in government.
          </p>
        </Reveal>
        <ol className="steps">
          {APPROACH.map((step, i) => (
            <Reveal as="li" key={step.step} className="step" delay={((i % 3) + 1) as 1 | 2 | 3}>
              <span className="step__n">{step.step}</span>
              <div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
                <p className="step__proof">
                  <span className="label">See it in</span>
                  <Link href={step.proof.href} className="more">
                    {step.proof.label}
                  </Link>
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
