"use client";

import { useDict } from "@/components/prefs/Prefs";

export default function SkipLink() {
  const t = useDict();
  return (
    <a className="skip-link" href="#main">
      {t.ui.skip}
    </a>
  );
}
