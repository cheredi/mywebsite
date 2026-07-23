import Link from "next/link";
import { getSubstackPosts } from "@/lib/substack";
import { SOCIAL_LINKS } from "@/lib/constants";
import SubstackPostCard from "@/components/sections/SubstackPostCard";
import SubstackPagination from "@/components/sections/SubstackPagination";
import RevealSection from "@/components/ui/RevealSection";

const POSTS_PER_PAGE = 6;

export default async function SubstackSection({ page }: { page: number }) {
  const { posts, error } = await getSubstackPosts();

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

  const statusText = error
    ? error
    : posts.length
      ? "Latest posts, auto-synced from Lipgloss & LLMS."
      : "No posts found yet — check back soon.";

  return (
    <RevealSection id="writing" className="section-wrap">
      <h2>Lipgloss &amp; LLMS</h2>
      <p className="substack-intro">
        Featured reads from my Substack on practical AI concepts and real-world thinking.
      </p>
      <div className="substack-status">{statusText}</div>

      {pagePosts.length ? (
        <>
          <div className="writing-grid">
            {pagePosts.map((post) => (
              <SubstackPostCard key={post.canonicalUrl} post={post} />
            ))}
          </div>
          <SubstackPagination currentPage={currentPage} totalPages={totalPages} />
        </>
      ) : null}

      <div style={{ textAlign: "center", marginTop: "1.2rem" }}>
        <Link href={SOCIAL_LINKS.substack} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Visit Lipgloss &amp; LLMs
        </Link>
      </div>
    </RevealSection>
  );
}
