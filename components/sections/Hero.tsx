import Image from "next/image";
import { proofStats } from "@/data/proof";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-hello" aria-hidden="true">
            Hello <span className="hero-wave">👋🏾</span>
          </p>
          <p className="eyebrow">Product · AI builder · Customer-centric</p>
          <h1 id="hero-name" className="hero-name">
            I&apos;m Tatyana Amugo.
          </h1>
          <p className="hero-lede">
            Product &amp; AI Builder — I ship things that solve real problems and measure whether
            they worked.
          </p>
          <p className="hero-sub">
            I&apos;m targeting product management, strategy, and AI-forward roles where I can work
            on hard problems, ship fast, and keep learning.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              See my work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
          <ul className="hero-links" aria-label="Elsewhere">
            <li>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.substack} target="_blank" rel="noopener noreferrer">
                Substack
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-portrait">
          <Image
            src="/images/TATYANA-PP.jpg"
            alt="Portrait of Tatyana Amugo"
            width={1000}
            height={1333}
            priority
            sizes="(max-width: 860px) 70vw, 420px"
          />
        </div>
      </div>

      <div className="container">
        <ul className="stats" aria-label="Highlights">
          {proofStats.map((stat) => (
            <li key={stat.label}>
              <a href={stat.href} className="stat">
                <span className="stat-value">
                  {stat.target}
                  {stat.suffix}
                </span>
                <span className="stat-label">{stat.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
