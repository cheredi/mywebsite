import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Momentum from "@/components/home/Momentum";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";
import Writing from "@/components/home/Writing";
import Education from "@/components/home/Education";
import InterviewArcade from "@/components/home/InterviewArcade";
import { JsonLd, personSchema, websiteSchema } from "@/lib/seo";
import { SEO } from "@/content/site";

// Cached and refreshed in the background every 6 hours (new Substack posts).
export const revalidate = 21600;

export const metadata: Metadata = {
  title: { absolute: SEO.title },
  alternates: { canonical: "/" },
  openGraph: { title: SEO.title, description: SEO.description, url: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[personSchema, websiteSchema]} />
      <Hero />
      <div className="stage">
        <About />
        <Momentum />
        <Projects />
        <Experience />
        <Skills />
        <Writing />
        <Education />
        <InterviewArcade />
      </div>
    </>
  );
}
