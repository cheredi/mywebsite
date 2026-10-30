import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/jetbrains-mono/500.css";
import Shell from "@/components/motion/Shell";
import Loader from "@/components/motion/Loader";
import Nav from "@/components/layout/Nav";
import Connect from "@/components/layout/Connect";
import { PERSON, SEO, SITE_URL } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.title, template: `%s — ${PERSON.name}` },
  description: SEO.description,
  applicationName: PERSON.name,
  authors: [{ name: PERSON.name, url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_CA", siteName: PERSON.name, url: SITE_URL },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export const viewport: Viewport = {
  themeColor: "#f1ece4",
};

// Runs before paint. Marks JS as available and picks the intro:
//  full  — first visit this session
//  short — home page, already seen this session (just the portrait curtain)
//  none  — reduced motion, or another page already seen this session
const BOOT = `(function(){var d=document.documentElement;d.classList.add('js');try{var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;var seen=sessionStorage.getItem('ta-intro');if(rm){d.classList.add('no-intro')}else if(seen){d.classList.add(location.pathname==='/'?'intro-short':'no-intro')}}catch(e){d.classList.add('no-intro')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Shell>
          <Loader />
          <Nav />
          <main id="main">{children}</main>
          <Connect />
        </Shell>
      </body>
    </html>
  );
}
