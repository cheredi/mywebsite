"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefs } from "@/components/prefs/Prefs";

type State = "idle" | "playing" | "paused";

const READABLE = "h1, h2, h3, p, li, figcaption, dt, dd";
const FATAL = new Set(["synthesis-unavailable", "synthesis-failed", "audio-hardware", "not-allowed", "language-unavailable"]);

/** Visible, readable text blocks in page order (skipping hidden and nested duplicates). */
function collectBlocks(): { el: HTMLElement; text: string }[] {
  const roots = [document.getElementById("main"), document.getElementById("contact")].filter(Boolean) as HTMLElement[];
  const out: { el: HTMLElement; text: string }[] = [];
  const taken = new Set<HTMLElement>();
  roots.forEach((root) =>
    root.querySelectorAll<HTMLElement>(READABLE).forEach((el) => {
      if (el.closest("[aria-hidden='true'], .sr-only, [hidden]")) return;
      if (el.offsetParent === null && getComputedStyle(el).position !== "fixed") return;
      for (const t of taken) if (t.contains(el)) return;
      const text = (el.getAttribute("aria-label") ?? el.innerText).replace(/\s+/g, " ").trim();
      if (!text) return;
      taken.add(el);
      out.push({ el, text });
    })
  );
  return out;
}

/** Read-aloud controls, shown while accessibility mode is on. */
export default function ReadAloud() {
  const { a11y, dict: t } = usePrefs();
  const pathname = usePathname();
  const [state, setState] = useState<State>("idle");
  const [note, setNote] = useState<string | null>(null);
  const queue = useRef<{ el: HTMLElement; text: string }[]>([]);
  const index = useRef(0);
  const current = useRef<HTMLElement | null>(null);
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  const clearHighlight = () => {
    current.current?.classList.remove("is-reading");
    current.current = null;
  };

  const stop = useCallback(() => {
    if (supported) window.speechSynthesis.cancel();
    clearHighlight();
    queue.current = [];
    setState("idle");
  }, [supported]);

  // Stop when leaving the page, switching language, or turning the mode off.
  useEffect(() => stop, [pathname, t.lang, a11y, stop]);

  // Speaks the block at the current index, then moves on. Kept in a ref so the
  // end-of-utterance callback always calls the latest version.
  const speakNext = useRef<() => void>(() => {});
  useEffect(() => {
    speakNext.current = () => {
      const item = queue.current[index.current];
      clearHighlight();
      if (!item) {
        setState("idle");
        return;
      }
      current.current = item.el;
      item.el.classList.add("is-reading");
      item.el.scrollIntoView({ block: "center", behavior: "auto" });
      const u = new SpeechSynthesisUtterance(item.text);
      u.lang = t.speechLang;
      const voices = window.speechSynthesis.getVoices();
      const base = t.speechLang.split("-")[0];
      const voice = voices.find((v) => v.lang === t.speechLang) ?? voices.find((v) => v.lang.toLowerCase().startsWith(base));
      if (voice) u.voice = voice;
      else if (voices.length) setNote(t.ui.noVoice);
      u.onend = () => {
        index.current += 1;
        speakNext.current();
      };
      u.onerror = (e) => {
        if (e.error === "interrupted" || e.error === "canceled") return;
        if (FATAL.has(e.error)) {
          // No working speech engine: stop rather than skip through every block.
          clearHighlight();
          setState("idle");
          setNote(t.ui.noSpeech);
          return;
        }
        index.current += 1;
        speakNext.current();
      };
      window.speechSynthesis.speak(u);
    };
  }, [t]);

  const play = () => {
    if (!supported) {
      setNote(t.ui.noSpeech);
      return;
    }
    if (state === "paused") {
      window.speechSynthesis.resume();
      setState("playing");
      return;
    }
    setNote(null);
    window.speechSynthesis.cancel();
    queue.current = collectBlocks();
    index.current = 0;
    setState("playing");
    speakNext.current();
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setState("paused");
  };

  if (!a11y) return null;

  return (
    <div className="reader" role="region" aria-label={t.ui.readAloud}>
      {state === "playing" ? (
        <button type="button" className="reader__btn reader__btn--main" onClick={pause}>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M6 4h3v12H6zM11 4h3v12h-3z" fill="currentColor" />
          </svg>
          {t.ui.pause}
        </button>
      ) : (
        <button type="button" className="reader__btn reader__btn--main" onClick={play}>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M6 4l10 6-10 6z" fill="currentColor" />
          </svg>
          {state === "paused" ? t.ui.resume : t.ui.readAloud}
        </button>
      )}
      {state !== "idle" ? (
        <button type="button" className="reader__btn" onClick={stop}>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <rect x="5" y="5" width="10" height="10" fill="currentColor" />
          </svg>
          {t.ui.stop}
        </button>
      ) : null}
      {note ? (
        <p className="reader__note" role="status">
          {note}
        </p>
      ) : null}
    </div>
  );
}
