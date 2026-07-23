import Hero from "@/components/sections/Hero";
import ProofSection from "@/components/sections/ProofSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSkillsSection from "@/components/sections/ExperienceSkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import InterviewArcade from "@/components/sections/InterviewArcade";
import SubstackSection from "@/components/sections/SubstackSection";
import ContactSection from "@/components/sections/ContactSection";

interface HomePageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  return (
    <main>
      <Hero />
      <ProofSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSkillsSection />
      <SubstackSection page={page} />
      <EducationSection />
      <InterviewArcade />
      <ContactSection />
    </main>
  );
}
