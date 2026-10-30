import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import IdentityStrip from "@/components/home/IdentityStrip";
import Proof from "@/components/home/Proof";
import Work from "@/components/home/Work";
import Approach from "@/components/home/Approach";
import Experience from "@/components/home/Experience";
import Toolkit from "@/components/home/Toolkit";
import About from "@/components/home/About";
import Writing from "@/components/home/Writing";
import Contact from "@/components/home/Contact";
import { JsonLd, PERSON_ID, WEBSITE_ID, absolute, personSchema, websiteSchema } from "@/lib/seo";
import { caseStudies } from "@/content/work";
import { PERSON, SITE } from "@/content/site";

// Cached and refreshed in the background every 6 hours (new Substack posts).
export const revalidate = 21600;

export const metadata: Metadata = {
  title: { absolute: `${PERSON.name} — AI Product Builder & Engineer` },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${PERSON.name} — AI Product Builder & Engineer`,
    description: SITE.description,
    url: "/",
  },
};

const profilePage = {
  "@type": "ProfilePage",
  "@id": `${absolute("/")}#profile`,
  url: absolute("/"),
  name: `${PERSON.name} — AI Product Builder & Engineer`,
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: { "@id": PERSON_ID },
  hasPart: caseStudies.map((s) => ({ "@type": "CreativeWork", name: s.title, url: absolute(`/work/${s.slug}`) })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={[personSchema, websiteSchema, profilePage]} />
      <Hero />
      <IdentityStrip />
      <Proof />
      <Work />
      <Approach />
      <Experience />
      <Toolkit />
      <About />
      <Writing />
      <Contact />
    </>
  );
}
