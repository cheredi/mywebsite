import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Tatyana Amugo</p>
        <ul className="footer-links">
          <li>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={SOCIAL_LINKS.substack} target="_blank" rel="noopener noreferrer">
              Substack
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
