import RevealSection from "@/components/ui/RevealSection";

export default function AboutSection() {
  return (
    <RevealSection id="about" labelledBy="about-title" className="section--tinted">
      <div className="container about-grid">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2 id="about-title">Problems first, then the system.</h2>
        </div>
        <div className="about-body">
          <p>
            I identify problems, build solutions, and measure whether they worked. My background
            spans AI engineering, product delivery, and data analysis — I use all three to ship
            things that actually move the needle. My work spans prompt engineering, retrieval
            pipelines, backend APIs, and enterprise-grade deployment.
          </p>
          <p>
            I enjoy converting ambiguous product and policy constraints into deployable systems
            that teams can trust.
          </p>
          <p className="callout">
            <strong>Focus:</strong> shipping reliable AI workflows that improve real operations,
            not just demos.
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
