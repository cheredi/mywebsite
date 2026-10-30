"use client";

import Arrow from "@/components/ui/Arrow";

export default function PrintButton({ label = "Download PDF" }: { label?: string }) {
  return (
    <button type="button" className="btn btn--ink no-print" onClick={() => window.print()}>
      {label}
      <span className="btn__icon">
        <Arrow dir="up" />
      </span>
    </button>
  );
}
