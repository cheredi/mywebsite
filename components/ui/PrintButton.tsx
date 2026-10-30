"use client";

import Arrow from "@/components/ui/Arrow";

export default function PrintButton() {
  return (
    <button type="button" className="btn btn--ink no-print" onClick={() => window.print()}>
      Download PDF
      <span className="btn__icon">
        <Arrow dir="up" />
      </span>
    </button>
  );
}
