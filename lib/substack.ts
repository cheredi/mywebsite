import Parser from "rss-parser";
import { LINKS } from "@/content/site";

export interface SubstackPost {
  title: string;
  description: string;
  canonicalUrl: string;
  postDate: string;
  imageUrl: string | null;
}

// How long Next.js should cache the fetched feed before re-fetching in the
// background (ISR-style revalidation). 6 hours keeps the site fresh without
// hitting Substack on every request.
const REVALIDATE_SECONDS = 60 * 60 * 6;

const EXCERPT_LENGTH = 220;

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildExcerpt(source: string): string {
  const plain = stripHtml(source);
  return plain.length > EXCERPT_LENGTH ? `${plain.slice(0, EXCERPT_LENGTH).trim()}…` : plain;
}

// Substack's RSS feed usually ships the post's cover image either as an
// <enclosure> or as the first <img> inside the full <content:encoded> HTML.
function extractImage(item: Parser.Item & { content?: string; enclosure?: { url?: string; type?: string } }): string | null {
  if (item.enclosure?.url && item.enclosure.type?.startsWith("image")) {
    return item.enclosure.url;
  }

  const match = item.content?.match(/<img[^>]+src="([^"]+)"/i);
  return match?.[1] ?? null;
}

/**
 * Fetches and parses the Substack RSS feed server-side (no CORS involved,
 * since this only ever runs on the server/build). Returns a graceful error
 * message instead of throwing so pages can render a fallback UI.
 */
export async function getSubstackPosts(): Promise<{
  posts: SubstackPost[];
  error: string | null;
}> {
  try {
    const response = await fetch(LINKS.substackFeed, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { "User-Agent": "tatyanaamugo.com/1.0 (+https://tatyanaamugo.com)" },
    });

    if (!response.ok) {
      throw new Error(`Feed request failed with status ${response.status}`);
    }

    const xml = await response.text();
    const parser = new Parser();
    const feed = await parser.parseString(xml);

    const posts: SubstackPost[] = (feed.items ?? [])
      .filter((item) => Boolean(item.link))
      .map((item) => ({
        title: item.title?.trim() || "Untitled post",
        description: buildExcerpt(item.contentSnippet || item.content || item.summary || ""),
        canonicalUrl: item.link as string,
        postDate: item.isoDate || item.pubDate || "",
        imageUrl: extractImage(item),
      }));

    return { posts, error: null };
  } catch (error) {
    console.error("Failed to fetch/parse Substack feed:", error);
    return {
      posts: [],
      error: "We couldn't load the latest Substack posts right now. Please check back soon.",
    };
  }
}
