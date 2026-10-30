"use client";

import { useRef } from "react";
import Specimen from "@/components/motion/Specimen";

export default function SectionHead({ index, title, id }: { index: string; title: string; id: string }) {
  const readout = useRef<HTMLSpanElement>(null);
  return (
    <div className="section-head">
      <p className="mono section-head__index">
        ({index})
        <span ref={readout} className="section-head__readout" aria-hidden="true">
          WGHT 500
        </span>
      </p>
      <Specimen as="h2" id={id} className="section-head__title" weight={[100, 500]} readout={readout}>
        {title}
      </Specimen>
    </div>
  );
}
