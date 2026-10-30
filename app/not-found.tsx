import Link from "next/link";

export default function NotFound() {
  return (
    <section className="lost">
      <div className="wrap">
        <p className="label">( 404 )</p>
        <h1>
          This page <span className="serif">wandered off.</span>
        </h1>
        <p>The work is still here, though.</p>
        <Link href="/#work" className="btn btn--primary">
          See the work
        </Link>
      </div>
    </section>
  );
}
