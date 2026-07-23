import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content hero-poster">
        <div className="hero-main-art">
          <div className="hero-creative-title" aria-hidden="true">
            <span>Hello</span>
            <span className="hero-wave-emoji">👋🏾</span>
          </div>
          <p className="hero-kicker">PRODUCT · AI BUILDER · CUSTOMER CENTRIC</p>
          {/* Rendered as the page's single <h1> (SEO fix: the original static
              markup had no h1 anywhere on the page) while keeping the exact
              same class-driven visual style. */}
          <h1 className="hero-name">Tatyana Amugo</h1>
          <p className="hero-summary">
            Product &amp; AI Builder — I ship things that solve real problems and measure whether
            they worked.
          </p>
          <p className="hero-summary-sub">
            I&apos;m targeting product management, strategy, and AI-forward roles where I can work
            on hard problems, ship fast, and keep learning.
          </p>
        </div>
        <div className="hero-side-panel">
          <Link href="#projects" className="hero-panel-btn">
            Projects
          </Link>
          <Link href="#about" className="hero-panel-btn">
            About Me
          </Link>
          <Link href="#education" className="hero-panel-btn hero-panel-btn--soft">
            Resume
          </Link>
          <div className="hero-panel-row">
            <Link href="#contact" className="hero-panel-btn">
              Contact
            </Link>
            <Link
              href="https://linkedin.com/in/tatyana-amugo02"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-mini-btn"
            >
              LinkedIn
            </Link>
            <Link
              href="https://lipgloss2llms.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-mini-btn"
            >
              Substack
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
