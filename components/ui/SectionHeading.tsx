interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
}

export default function SectionHeading({ id, eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
