"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { SubstackPost } from "@/lib/substack";
import { LINKS, SECTIONS } from "@/content/site";
import { EASE, gsap, reducedMotion, useGSAP } from "@/lib/motion";
import SplitHeading from "@/components/motion/SplitHeading";
import Specimen from "@/components/motion/Specimen";
import Arrow from "@/components/ui/Arrow";

function formatDate(value: string) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}

export default function WritingRail({ posts, status }: { posts: SubstackPost[]; status: string }) {
  const root = useRef<HTMLElement>(null);
  const rail = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  // The big wordmark drifts sideways with scroll.
  useGSAP(
    () => {
      if (reducedMotion() || !root.current) return;
      const items = root.current.querySelectorAll(".rail__item");
      if (items.length) {
        gsap.from(items, {
          x: 120,
          autoAlpha: 0,
          duration: 1.3,
          ease: EASE,
          stagger: 0.08,
          scrollTrigger: { trigger: items[0], start: "top 88%", once: true },
        });
      }
    },
    { scope: root }
  );

  useEffect(() => {
    const el = rail.current;
    if (!el) return undefined;
    const update = () => setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const page = (dir: 1 | -1) => {
    const el = rail.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section ref={root} id="writing" className="section" aria-labelledby="writing-title">
      <div className="container writing__marquee">
        <Specimen as="h2" id="writing-title" className="writing__brand">
          {SECTIONS.substack}
        </Specimen>
      </div>
      <div className="container">
        <div className="writing__head">
          <p className="mono section-head__index">(06)</p>
          <div>
            <SplitHeading as="p" className="writing__intro">
              {SECTIONS.substackIntro}
            </SplitHeading>
            <p className="mono writing__status">{status}</p>
          </div>
          {posts.length > 1 ? (
            <div className="paddles">
              <button type="button" className="paddle" onClick={() => page(-1)} disabled={edge.start} aria-label="Previous posts">
                <Arrow dir="left" />
              </button>
              <button type="button" className="paddle" onClick={() => page(1)} disabled={edge.end} aria-label="Next posts">
                <Arrow />
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {posts.length ? (
        <ul ref={rail} className="rail">
          {posts.map((post) => {
            const date = formatDate(post.postDate);
            return (
              <li key={post.canonicalUrl} className="rail__item">
                <a className="post" href={post.canonicalUrl} target="_blank" rel="noopener noreferrer">
                  <div className="post__img">
                    {post.imageUrl ? <Image src={post.imageUrl} alt="" fill sizes="420px" /> : null}
                  </div>
                  {date ? <p className="mono post__date">{date}</p> : null}
                  <h3 className="post__title">{post.title}</h3>
                  <p className="post__excerpt">{post.description}</p>
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}

      <div className="container writing__cta">
        <a className="btn btn--ink" href={LINKS.substack} target="_blank" rel="noopener noreferrer">
          {SECTIONS.substackCta}
          <span className="btn__icon">
            <Arrow dir="out" />
          </span>
        </a>
      </div>
    </section>
  );
}
