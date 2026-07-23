"use client";

import Image from "next/image";
import Link from "next/link";
import type { SubstackPost } from "@/types";
import { useTilt } from "@/components/hooks/useTilt";

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recent post";
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function SubstackPostCard({ post }: { post: SubstackPost }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLElement>();

  return (
    <article
      ref={ref}
      className="writing-card tilt-card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {post.imageUrl ? (
        <div className="writing-card-image">
          <Image src={post.imageUrl} alt={post.title} fill sizes="(max-width: 620px) 100vw, 33vw" />
        </div>
      ) : null}
      <h3>{post.title}</h3>
      <div className="meta">{formatDate(post.postDate)}</div>
      <p>{post.description}</p>
      <Link href={post.canonicalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
        Read on Substack
      </Link>
    </article>
  );
}
