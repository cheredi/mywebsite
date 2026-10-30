"use client";

import { useEffect, useState } from "react";
import { PERSON } from "@/content/site";

function format(date: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: PERSON.timeZone,
    timeZoneName: "short",
  }).format(date);
}

/** Tatyana's local time, updated each minute. Renders nothing on the server. */
export default function LocalTime() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setNow(format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;
  return <span suppressHydrationWarning>{now}</span>;
}
