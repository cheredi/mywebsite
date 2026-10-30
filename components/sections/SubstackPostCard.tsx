import Image from "next/image";
import type { SubstackPost } from "@/types";

function formatDate(value: string): string | null {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}

export default function SubstackPostCard({ post }: { post: SubstackPost }) {
  const date = formatDate(post.postDate);

  return (
    <article className="card post">
      <a href={post.canonicalUrl} target="_blank" rel="noopener noreferrer" className="post-link">
        {post.imageUrl ? (
          <div className="post-image">
            <Image src={post.imageUrl} alt="" fill sizes="(max-width: 700px) 100vw, 360px" />
          </div>
        ) : null}
        {date ? (
          <time className="post-date" dateTime={post.postDate}>
            {date}
          </time>
        ) : null}
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span className="post-cta" aria-hidden="true">
          Read on Substack →
        </span>
      </a>
    </article>
  );
}
