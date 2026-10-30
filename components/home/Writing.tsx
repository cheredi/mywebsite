import { getSubstackPosts } from "@/lib/substack";
import WritingRail from "@/components/home/WritingRail";

export default async function Writing() {
  const { posts, error } = await getSubstackPosts();
  const status = error ? "error" : posts.length ? "ok" : "empty";
  return <WritingRail posts={posts.slice(0, 9)} status={status} />;
}
