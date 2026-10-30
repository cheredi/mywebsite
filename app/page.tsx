import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import SubstackSection from "@/components/sections/SubstackSection";
import InterviewArcade from "@/components/sections/InterviewArcade";
import ContactSection from "@/components/sections/ContactSection";

// Serve a cached page and refresh it in the background (picks up new Substack
// posts) instead of rendering on every request.
export const revalidate = 21600;

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <SubstackSection />
      <InterviewArcade />
      <ContactSection />
    </main>
  );
}
