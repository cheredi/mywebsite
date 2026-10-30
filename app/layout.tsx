import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/jetbrains-mono/500.css";
// Scripts beyond Latin and the accessibility font: their unicode-range rules
// mean the browser only downloads them when a page actually needs them.
import "@fontsource-variable/noto-sans-devanagari";
import "@fontsource-variable/noto-sans-sc";
import "@fontsource/atkinson-hyperlegible/400.css";
import "@fontsource/atkinson-hyperlegible/700.css";
import { PrefsProvider, PrefsScope } from "@/components/prefs/Prefs";
import Shell from "@/components/motion/Shell";
import Loader from "@/components/motion/Loader";
import Nav from "@/components/layout/Nav";
import Connect from "@/components/layout/Connect";
import SkipLink from "@/components/prefs/SkipLink";
import ReadAloud from "@/components/prefs/ReadAloud";
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1ece4" },
    { media: "(prefers-color-scheme: dark)", color: "#121010" },
  ],
};

// Runs before paint, from saved preferences (sessionStorage, then localStorage):
//  - theme: system (default) / light / dark -> data-theme
//  - language: English by default -> lang + data-lang
//  - accessibility mode: off by default -> .a11y (also turns the intro off)
//  - intro: full on first visit, curtain-only on later home loads, none otherwise
const BOOT = `(function(){var d=document.documentElement;d.classList.add('js');
function g(k){try{return sessionStorage.getItem(k)||localStorage.getItem(k)}catch(e){return null}}
try{var t=g('ta-theme')||'system';var dk=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);d.dataset.theme=dk?'dark':'light';d.dataset.themePref=t;}catch(e){}
var L={en:'en-CA',es:'es',fr:'fr-CA',hi:'hi',sw:'sw',zh:'zh-Hans'};var l=g('ta-lang');if(!L[l])l='en';d.dataset.lang=l;d.lang=L[l];
var a=g('ta-a11y')==='1';if(a)d.classList.add('a11y');
try{var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;var seen=g('ta-intro');if(rm||a){d.classList.add('no-intro')}else if(seen){d.classList.add(location.pathname==='/'?'intro-short':'no-intro')}}catch(e){d.classList.add('no-intro')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>
        <PrefsProvider>
          <SkipLink />
          <Shell>
            <Loader />
            <Nav />
            <PrefsScope>
              <main id="main">{children}</main>
              <Connect />
            </PrefsScope>
            <ReadAloud />
          </Shell>
        </PrefsProvider>
      </body>
    </html>
  );
}
