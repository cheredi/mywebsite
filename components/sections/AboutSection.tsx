import Image from "next/image";
import RevealSection from "@/components/ui/RevealSection";

export default function AboutSection() {
  return (
    <RevealSection id="about" className="section-wrap">
      <div className="about-content">
        <div>
          <Image
            src="/images/TATYANA-PP.jpg"
            alt="Tatyana Amugo"
            className="profile-pic"
            width={430}
            height={430}
          />
        </div>
        <div className="bio">
          <h2>About Me</h2>
          <p>
            I identify problems, build solutions, and measure whether they worked. My background
            spans AI engineering, product delivery, and data analysis — I use all three to ship
            things that actually move the needle. My work spans prompt engineering, retrieval
            pipelines, backend APIs, and enterprise-grade deployment.
          </p>
          <div className="quirky-fact">
            <strong>Focus:</strong> shipping reliable AI workflows that improve real operations,
            not just demos.
          </div>
          <p>
            I enjoy converting ambiguous product and policy constraints into deployable systems
            that teams can trust.
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
