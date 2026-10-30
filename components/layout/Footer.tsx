import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/content/work";
import { LINKS, PERSON, SUBSTACK_NAME } from "@/content/site";
import LocalTime from "@/components/ui/LocalTime";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cols">
          <div className="footer__brand">
            <Link href="/" className="gnav__brand">
              <Image src="/images/monogram.png" alt="" width={35} height={32} className="gnav__logo" />
              <span>{PERSON.name}</span>
            </Link>
            <p>AI product builder. Find the problem, build the fix, prove it worked.</p>
          </div>
          <div>
            <h2>Work</h2>
            <ul>
              {caseStudies.map((study) => (
                <li key={study.slug}>
                  <Link href={`/work/${study.slug}`}>{study.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>More</h2>
            <ul>
              <li>
                <Link href="/resume">Résumé</Link>
              </li>
              <li>
                <Link href="/arcade">Interview Arcade</Link>
              </li>
              <li>
                <Link href="/#writing">{SUBSTACK_NAME}</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Elsewhere</h2>
            <ul>
              <li>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer me">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer me">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={LINKS.substack} target="_blank" rel="noopener noreferrer me">
                  Substack ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${PERSON.email}`}>Email</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__base">
          <p>
            © {new Date().getFullYear()} {PERSON.name}
          </p>
          <p>
            {PERSON.location} · <LocalTime />
          </p>
        </div>
      </div>
    </footer>
  );
}
