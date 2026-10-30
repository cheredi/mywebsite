import { getSubstackPosts } from "@/lib/substack";
import { SOCIAL_LINKS, SUBSTACK_NAME } from "@/lib/constants";
import SubstackPostCard from "@/components/sections/SubstackPostCard";
import RevealSection from "@/components/ui/RevealSection";

const POSTS_SHOWN = 6;

export default async function SubstackSection() {
  const { posts, error } = await getSubstackPosts();
  const latest = posts.slice(0, POSTS_SHOWN);

  return (
    <RevealSection id="writing" labelledBy="writing-title">
      <div className="container">
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow">Writing</p>
            <h2 id="writing-title">{SUBSTACK_NAME}</h2>
            <p className="section-intro">
              My Substack on practical AI concepts and real-world thinking.
            </p>
          </div>
          <a
            href={SOCIAL_LINKS.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Subscribe on Substack
          </a>
        </div>

        {latest.length ? (
          <div className="writing-grid">
            {latest.map((post) => (
              <SubstackPostCard key={post.canonicalUrl} post={post} />
            ))}
          </div>
        ) : (
          <p className="empty-state">
            {error ?? "New posts are on the way."}{" "}
            <a href={SOCIAL_LINKS.substack} target="_blank" rel="noopener noreferrer">
              Read {SUBSTACK_NAME} on Substack
            </a>
            .
          </p>
        )}
      </div>
    </RevealSection>
  );
}
