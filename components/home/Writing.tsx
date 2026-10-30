import { getSubstackPosts } from "@/lib/substack";
import { SECTIONS } from "@/content/site";
import WritingRail from "@/components/home/WritingRail";

export default async function Writing() {
  const { posts, error } = await getSubstackPosts();
  const status = error ? SECTIONS.substackError : posts.length ? SECTIONS.substackStatus : SECTIONS.substackEmpty;
  return <WritingRail posts={posts.slice(0, 9)} status={status} />;
}
