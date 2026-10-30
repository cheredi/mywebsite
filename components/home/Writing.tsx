import Image from "next/image";
import { getSubstackPosts } from "@/lib/substack";
import { LINKS, SUBSTACK_NAME } from "@/content/site";
import Reveal from "@/components/ui/Reveal";

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? null
    : date.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
}

export default async function Writing() {
  const { posts, error } = await getSubstackPosts();
  const latest = posts.slice(0, 3);

  return (
    <section id="writing" className="band" aria-labelledby="writing-title">
      <div className="wrap">
        <Reveal className="writing__head">
          <div>
            <span className="label">( 06 — Writing )</span>
            <h2 id="writing-title" className="writing__brand" style={{ marginTop: 20 }}>
              {SUBSTACK_NAME}
            </h2>
          </div>
          <div>
            <p>Practical AI, explained with personality. Real systems, real trade-offs, no hype.</p>
            <a href={LINKS.substack} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Subscribe on Substack
            </a>
          </div>
        </Reveal>

        {latest.length ? (
          <ul className="posts">
            {latest.map((post, i) => {
              const date = formatDate(post.postDate);
              return (
                <Reveal as="li" key={post.canonicalUrl} className="post" delay={(i + 1) as 1 | 2 | 3}>
                  <a href={post.canonicalUrl} target="_blank" rel="noopener noreferrer">
                    <div className="post__image">
                      {post.imageUrl ? (
                        <Image src={post.imageUrl} alt="" fill sizes="(max-width: 860px) 90vw, 380px" />
                      ) : null}
                    </div>
                    <div className="post__body">
                      {date ? (
                        <time className="label" dateTime={post.postDate}>
                          {date}
                        </time>
                      ) : null}
                      <h3 className="post__title">{post.title}</h3>
                      <p className="post__excerpt">{post.description}</p>
                      <span className="more">Read on Substack</span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </ul>
        ) : (
          <p className="posts-empty">
            {error ?? "New posts are on the way."}{" "}
            <a className="more" href={LINKS.substack} target="_blank" rel="noopener noreferrer">
              Read {SUBSTACK_NAME}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
