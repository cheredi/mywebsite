import Link from "next/link";
import { PROOF } from "@/content/profile";
import Reveal from "@/components/ui/Reveal";

export default function Proof() {
  return (
    <section className="band band--tight band--paper" aria-labelledby="proof-title">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="label">( By the numbers )</span>
          <h2 id="proof-title" className="section-title">
            Results, <span className="serif">not</span> adjectives.
          </h2>
        </Reveal>
        <Reveal as="ul" className="proof" delay={1}>
          {PROOF.map((item) => {
            const isWord = !/\d/.test(item.value);
            return (
              <li key={item.label}>
                <Link href={item.href}>
                  <span className={`proof__value gloss${isWord ? " proof__value--word" : ""}`}>{item.value}</span>
                  <span className="proof__label">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
