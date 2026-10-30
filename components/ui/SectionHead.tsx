import SplitHeading from "@/components/motion/SplitHeading";

export default function SectionHead({ index, title, id }: { index: string; title: string; id: string }) {
  return (
    <div className="section-head">
      <p className="mono section-head__index">({index})</p>
      <SplitHeading as="h2" id={id} className="section-head__title">
        {title}
      </SplitHeading>
    </div>
  );
}
