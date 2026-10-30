import { IDENTITIES } from "@/content/profile";

/** "I am a…" marquee, after nanaamoako.com — kept to things that are true. */
export default function IdentityStrip() {
  return (
    <section className="ident" aria-label="In short">
      <div className="ident__row">
        <p className="ident__lead">I am a</p>
        <p className="sr-only">{IDENTITIES.join(", ")}.</p>
        <div className="ident__viewport" aria-hidden="true">
          <div className="ident__track">
            {[0, 1].map((copy) => (
              <ul key={copy}>
                {IDENTITIES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
