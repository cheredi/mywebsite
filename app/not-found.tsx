import TLink from "@/components/motion/TLink";
import Arrow from "@/components/ui/Arrow";

export default function NotFound() {
  return (
    <section className="lost">
      <div>
        <p className="mono" style={{ color: "var(--muted)" }}>
          (404)
        </p>
        <h1>
          Hello <span className="serif">👋🏾</span>
        </h1>
        <TLink href="/" className="btn btn--ink">
          Home
          <span className="btn__icon">
            <Arrow />
          </span>
        </TLink>
      </div>
    </section>
  );
}
