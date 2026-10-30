import Image from "next/image";
import Link from "next/link";
import { ABOUT, CURRENTLY } from "@/content/profile";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="band band--dark" aria-labelledby="about-title">
      <div className="wrap about">
        <Reveal className="about__photo">
          <Image
            src="/images/tatyana-closeup.jpg"
            alt="Close-up portrait of Tatyana Amugo smiling, wearing dark-rimmed glasses."
            width={1000}
            height={1333}
            sizes="(max-width: 860px) 90vw, 440px"
          />
          <p className="about__caption label">( Hi. )</p>
        </Reveal>
        <div>
          <Reveal>
            <span className="label">( 05 — About )</span>
            <h2 id="about-title" className="about__title" style={{ marginTop: 20 }}>
              {ABOUT.title}
            </h2>
          </Reveal>
          <Reveal className="about__body" delay={1}>
            {ABOUT.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal as="p" className="about__aside" delay={2}>
            “{ABOUT.aside}”
          </Reveal>
          <Reveal as="ul" className="currently" aria-label="Currently" delay={2}>
            {CURRENTLY.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <span className="label">{item.label}</span>
                  <span className="currently__text">{item.text}</span>
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
