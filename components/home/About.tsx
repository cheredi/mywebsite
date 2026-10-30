"use client";

import Image from "next/image";
import { useRef } from "react";
import { useDict } from "@/components/prefs/Prefs";
import { SplitText, gsap, reducedMotion, useGSAP } from "@/lib/motion";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/motion/Reveal";

// Small screenshots tucked between her own phrases (the words are unchanged).
const IMAGES = ["/images/work/ona.webp", "/images/work/shipping.webp"];

function LeadWithImages({ text, anchors, alts }: { text: string; anchors: [string, string]; alts: [string, string] }) {
  const BREAKS = anchors.map((after, i) => ({ after, src: IMAGES[i], alt: alts[i] }));
  const nodes: React.ReactNode[] = [];
  let rest = text;
  BREAKS.forEach((b, i) => {
    const at = rest.indexOf(b.after);
    if (at === -1) return;
    const end = at + b.after.length;
    nodes.push(rest.slice(0, end));
    nodes.push(
      <span key={i} className="inline-img">
        <Image src={b.src} alt={b.alt} width={160} height={80} sizes="120px" />
      </span>
    );
    rest = rest.slice(end);
  });
  nodes.push(rest);
  return <>{nodes}</>;
}

export default function About() {
  const t = useDict();
  const lead = useRef<HTMLParagraphElement>(null);

  // Words brighten one by one as the paragraph moves through the viewport.
  useGSAP(
    () => {
      const el = lead.current;
      if (!el || reducedMotion()) return;
      const split = SplitText.create(el, { type: "words", wordsClass: "word" });
      gsap.fromTo(
        split.words,
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 42%", scrub: true },
        }
      );
      gsap.from(el.querySelectorAll(".inline-img"), {
        scale: 0,
        duration: 1,
        ease: "back.out(1.8)",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      });
    },
    { scope: lead }
  );

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead index="01" title={t.about.heading} id="about-title" />
        <div className="about__grid">
          <span aria-hidden="true" />
          <div>
            <p ref={lead} className="about__lead">
              <LeadWithImages text={t.about.paragraphs[0]} anchors={t.about.imageAnchors} alts={[t.alt.ona, t.alt.shipping]} />
            </p>
            <Reveal className="about__rest" stagger={0.1}>
              <p>{t.about.paragraphs[1]}</p>
              <p className="about__focus">
                <strong>{t.about.focusLabel}</strong> {t.about.focusText}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
