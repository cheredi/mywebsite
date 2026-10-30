import type { Metadata } from "next";
import { HERO, PERSON } from "@/content/site";
import { JsonLd, PERSON_ID, absolute, breadcrumbs } from "@/lib/seo";
import ResumeView from "@/components/pages/ResumeView";

export const metadata: Metadata = {
  title: "Resume",
  description: `${PERSON.name} — ${HERO.summary} Experience, projects, education and skills.`,
  alternates: { canonical: "/resume" },
  openGraph: { title: `Resume — ${PERSON.name}`, url: "/resume", images: ["/opengraph-image"] },
};


export default function ResumePage() {
  return (
    <>
      <JsonLd
        data={[
          { "@type": "ProfilePage", url: absolute("/resume"), mainEntity: { "@id": PERSON_ID } },
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Resume", path: "/resume" },
          ]),
        ]}
      />
      <ResumeView />
    </>
  );
}
