"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "journey", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "writing", label: "Substack" },
  { id: "simulator", label: "Interactive" },
  { id: "contact", label: "Contact" },
];

/**
 * Site header/nav. Client Component because it manages the mobile menu
 * toggle state and a scroll listener that highlights the active section
 * link — both ported from the original js/site.js.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const navListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY + 130;

      for (const { id } of NAV_LINKS) {
        const section = document.getElementById(id);
        if (!section) continue;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveId(id);
          break;
        }
      }
    }

    function handleResize() {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav>
        <Link href="#home" className="logo">
          <Image
            src="/images/logo.jpg"
            alt="Tatyana Amugo logo"
            className="logo-mark"
            width={34}
            height={34}
            style={{ width: "auto", height: 34 }}
          />
          <span>Tatyana Amugo</span>
        </Link>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
        <ul className={`nav-links${open ? " open" : ""}`} ref={navListRef}>
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                className={activeId === id ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
