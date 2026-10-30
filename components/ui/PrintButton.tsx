"use client";

export default function PrintButton({ label = "Download PDF" }: { label?: string }) {
  return (
    <button type="button" className="btn btn--primary btn--sm" onClick={() => window.print()}>
      {label}
    </button>
  );
}
