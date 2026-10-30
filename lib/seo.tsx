import { EDUCATION } from "@/content/profile";
import { LINKS, PERSON, SITE, SITE_URL } from "@/content/site";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function absolute(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON.name,
  givenName: "Tatyana",
  familyName: "Amugo",
  jobTitle: PERSON.role,
  description: SITE.description,
  url: SITE_URL,
  image: absolute("/images/tatyana-portrait.webp"),
  email: `mailto:${PERSON.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
  homeLocation: { "@type": "City", name: "Toronto", containedInPlace: { "@type": "State", name: "Ontario" } },
  workLocation: {
    "@type": "Place",
    name: "Greater Toronto Area (GTA)",
    address: { "@type": "PostalAddress", addressRegion: "ON", addressCountry: "CA" },
  },
  sameAs: [LINKS.linkedin, LINKS.github, LINKS.substack],
  alumniOf: [...new Set(EDUCATION.map((e) => e.institution))].map((name) => ({
    "@type": "CollegeOrUniversity",
    name,
  })),
  knowsAbout: [
    "AI product management",
    "Large language models",
    "Retrieval-augmented generation",
    "Prompt engineering",
    "Agentic AI workflows",
    "Computer vision",
    "Data analysis",
    "Product strategy",
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: PERSON.name,
  description: SITE.description,
  inLanguage: "en-CA",
  publisher: { "@id": PERSON_ID },
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const graph = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be inlined; content is static and built from our own data.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
