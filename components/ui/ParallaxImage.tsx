"use client";

import Image from "next/image";
import { useRef } from "react";
import { EASE, gsap, reducedMotion, useGSAP } from "@/lib/motion";

/** Image that wipes in from the bottom and drifts slightly as you scroll. */
export default function ParallaxImage({ src, width, height, alt }: { src: string; width: number; height: number; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reducedMotion()) return;
      const img = el.querySelector("img");
      gsap.fromTo(el, { clipPath: "inset(30% 6% 0% 6% round 20px)" }, { clipPath: "inset(0% 0% 0% 0% round 20px)", duration: 1.6, ease: EASE, delay: 0.2 });
      gsap.fromTo(img, { scale: 1.15 }, { scale: 1, duration: 1.8, ease: EASE, delay: 0.2 });
      gsap.to(img, { yPercent: 8, ease: "none", scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true } });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="ph__media">
      <Image src={src} width={width} height={height} alt={alt} priority sizes="(max-width: 1400px) 94vw, 1360px" />
    </div>
  );
}
