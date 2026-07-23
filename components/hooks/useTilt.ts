"use client";

import { useRef } from "react";

/**
 * Ports the `.tilt-card` mousemove tilt effect from js/site.js. Returns a
 * ref plus mouse event handlers to spread directly onto whichever element
 * (article, div, etc.) needs the effect — avoids polymorphic-ref typing
 * gymnastics that come with a generic wrapper component.
 */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  function onMouseMove(event: React.MouseEvent<T>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((event.clientY - centerY) / rect.height) * -4;
    const rotateY = ((event.clientX - centerX) / rect.width) * 4;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  }

  return { ref, onMouseMove, onMouseLeave };
}
