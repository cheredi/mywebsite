import { educationEntries } from "@/content/education";
import { HERO, LINKS, PERSON, SEO, SITE_URL } from "@/content/site";

export const PERSON_ID = `${SITE_URL}/#person`;

export const absolute = (path = "/") => new URL(path, SITE_URL).toString();

const schools = [...new Set(educationEntries.map((e) => e.detail.split(",")[0]).filter((s) => !s.includes("DataCamp")))];

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON.name,
  jobTitle: "Product & AI Builder",
  description: HERO.summary,
  url: SITE_URL,
  image: absolute("/images/tatyana-portrait.webp"),
  email: `mailto:${PERSON.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
  homeLocation: { "@type": "City", name: "Toronto" },
  workLocation: { "@type": "Place", name: "Greater Toronto Area (GTA)" },
  sameAs: [LINKS.linkedin, LINKS.github, LINKS.substack],
  alumniOf: schools.map((name) => ({ "@type": "CollegeOrUniversity", name })),
  knowsAbout: ["Product Management", "Artificial Intelligence", "Prompt Engineering", "Retrieval-Augmented Generation", "Data Analysis"],
};

export const websiteSchema = {
  "@type": "WebSite",
  url: SITE_URL,
  name: PERSON.name,
  description: SEO.description,
  author: { "@id": PERSON_ID },
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absolute(item.path) })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": data }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
