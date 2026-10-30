import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/og.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tatyana Amugo",
  jobTitle: "Product & AI Builder",
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/images/TATYANA-PP.jpg`,
  email: `mailto:${CONTACT_EMAIL}`,
  url: SITE_URL,
  sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github, SOCIAL_LINKS.substack],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Fanshawe College" },
    { "@type": "CollegeOrUniversity", name: "Strathmore University" },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Ontario Public Service",
  },
  knowsAbout: [
    "Product Management",
    "Artificial Intelligence",
    "Prompt Engineering",
    "Retrieval-Augmented Generation",
    "Data Analysis",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
