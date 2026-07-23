// Fetches the latest posts from the Lipgloss & LLMS Substack RSS feed and
// writes them to data/substack-posts.json so the static site can display
// them without hitting CORS issues or calling Substack directly from the
// browser. Run manually with `npm run fetch:substack`, or automatically on
// a schedule via .github/workflows/update-substack-feed.yml.

const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');

const FEED_URL = 'https://lipgloss2llms.substack.com/feed';
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'substack-posts.json');
const MAX_POSTS = 6;
const EXCERPT_LENGTH = 220;

function stripHtml(html) {
  return (html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildExcerpt(item) {
  const source = item.contentSnippet || item.summary || item.content || '';
  const plain = stripHtml(source);
  return plain.length > EXCERPT_LENGTH ? `${plain.slice(0, EXCERPT_LENGTH).trim()}…` : plain;
}

async function main() {
  const parser = new Parser();
  const feed = await parser.parseURL(FEED_URL);

  const posts = feed.items.slice(0, MAX_POSTS).map((item) => ({
    title: item.title || 'Untitled post',
    description: buildExcerpt(item),
    canonical_url: item.link,
    post_date: item.isoDate || item.pubDate || ''
  }));

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(
    OUTPUT_PATH,
    JSON.stringify({ updated_at: new Date().toISOString(), posts }, null, 2)
  );

  console.log(`Wrote ${posts.length} posts to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error('Failed to fetch Substack feed:', error);
  process.exit(1);
});
