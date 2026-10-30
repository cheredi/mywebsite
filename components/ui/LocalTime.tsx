"use client";

import { useEffect, useState } from "react";
import { PERSON } from "@/content/site";

/** Tatyana's local time in Toronto. Renders nothing until mounted. */
export default function LocalTime() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-CA", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: PERSON.timeZone });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{now ?? "--:--"}</span>;
}
