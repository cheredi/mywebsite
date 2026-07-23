import Link from "next/link";

interface SubstackPaginationProps {
  currentPage: number;
  totalPages: number;
}

/**
 * Plain `<Link>`-based pagination (no client JS) so every page of posts is a
 * distinct, crawlable URL (`#writing?page=2`) rather than an infinite-scroll
 * client-side interaction.
 */
export default function SubstackPagination({ currentPage, totalPages }: SubstackPaginationProps) {
  if (totalPages <= 1) return null;

  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  return (
    <nav className="substack-pagination" aria-label="Substack posts pagination">
      <Link
        href={isFirst ? "#writing" : `?page=${prevPage}#writing`}
        className="btn btn-secondary"
        aria-disabled={isFirst}
      >
        Previous
      </Link>
      <span className="substack-pagination-status">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={isLast ? "#writing" : `?page=${nextPage}#writing`}
        className="btn btn-secondary"
        aria-disabled={isLast}
      >
        Next
      </Link>
    </nav>
  );
}
