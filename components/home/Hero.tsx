import Image from "next/image";
import Link from "next/link";
import { HEADLINE } from "@/content/profile";
import { PERSON } from "@/content/site";

export default function Hero() {
  const [first, second, last] = HEADLINE.beats;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__label label">
            <span className="dot">Open to product &amp; AI roles</span>
            <span>
              ( {PERSON.role} — {PERSON.location} )
            </span>
          </p>
          <h1 id="hero-title" className="hero__name">
            Tatyana <span className="serif">Amugo</span>
          </h1>
          <p className="hero__beats">
            <span>{first}</span>
            <span>{second}</span>
            <span className="gloss">{last}</span>
          </p>
          <p className="hero__intro">{HEADLINE.intro}</p>
          <div className="hero__actions">
            <Link href="#work" className="btn btn--primary">
              See the work
            </Link>
            <Link href="/resume" className="btn btn--secondary">
              View résumé
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__glow" aria-hidden="true" />
          <Image
            src="/images/tatyana-portrait.webp"
            alt="Tatyana Amugo at a conference, wearing her name badge."
            width={664}
            height={1037}
            priority
            sizes="(max-width: 860px) 80vw, 520px"
            className="hero__portrait"
          />
          <Link href="/work/ai-case-review" className="hero__tag hero__tag--a">
            <b>~79%</b> less manual case work
          </Link>
          <Link href="/work/ona" className="hero__tag hero__tag--b">
            <b>★</b> Runner-up, Outstanding Impact
          </Link>
        </div>
      </div>
    </section>
  );
}
