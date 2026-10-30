import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
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

export const viewport: Viewport = {
  themeColor: "#fbf6f8",
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
    // `js` is added before paint so scroll-reveal styles only apply when the
    // script that reveals sections can actually run.
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
