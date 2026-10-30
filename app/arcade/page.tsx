import type { Metadata } from "next";
import Link from "next/link";
import InterviewArcade from "@/components/InterviewArcade";
import { PERSON } from "@/content/site";

export const metadata: Metadata = {
  title: "Interview Arcade",
  description: `A small interview-practice game by ${PERSON.name}: pick a role and difficulty, answer against the clock, and grade yourself on a rubric. A taste of Swali-AI.`,
  alternates: { canonical: "/arcade" },
  openGraph: { title: `Interview Arcade · ${PERSON.name}`, url: "/arcade", images: ["/opengraph-image"] },
};

export default function ArcadePage() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="section-head">
          <span className="label">( Play )</span>
          <h1 className="section-title">
            Interview <span className="serif">Arcade.</span>
          </h1>
          <p className="section-lede">
            A tiny version of what I&apos;m building with{" "}
            <Link href="/work/swali-ai" className="more">
              Swali-AI
            </Link>
            . Pick a track, start the clock, answer out loud, then grade yourself against the rubric.
          </p>
        </div>
        <InterviewArcade />
      </div>
    </section>
  );
}
