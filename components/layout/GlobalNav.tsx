"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, PERSON } from "@/content/site";

export default function GlobalNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the sheet is open; close it on Esc.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="gnav" data-scrolled={scrolled || open}>
        <nav className="wrap gnav__inner" aria-label="Primary">
          <Link href="/" className="gnav__brand" aria-label={`${PERSON.name}, home`}>
            <Image src="/images/monogram.png" alt="" width={35} height={32} className="gnav__logo" />
            <span>{PERSON.name}</span>
          </Link>

          <ul className="gnav__links">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="gnav__right">
            <Link href="/#contact" className="gnav__cta">
              Let&apos;s talk
            </Link>
            <button
              type="button"
              className="gnav__toggle"
              aria-expanded={open}
              aria-controls="gnav-sheet"
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden="true" />
              <b className="sr-only">{open ? "Close menu" : "Open menu"}</b>
            </button>
          </div>
        </nav>
      </header>

      <div id="gnav-sheet" className="gnav__sheet" data-open={open} aria-hidden={!open}>
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
        <p className="label">{PERSON.location}</p>
      </div>
    </>
  );
}
