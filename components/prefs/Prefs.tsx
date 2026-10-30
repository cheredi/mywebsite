"use client";

import { createContext, Fragment, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LANG, DICTS, isLang, type Dict, type Lang } from "@/content/i18n";

export type ThemePref = "system" | "light" | "dark";

interface PrefsValue {
  lang: Lang;
  dict: Dict;
  theme: ThemePref;
  a11y: boolean;
  /** True once saved preferences have been read on the client. */
  ready: boolean;
  setLang: (lang: Lang) => void;
  setTheme: (theme: ThemePref) => void;
  setA11y: (on: boolean) => void;
}

const Ctx = createContext<PrefsValue | null>(null);

export const STORAGE_KEYS = { lang: "ta-lang", theme: "ta-theme", a11y: "ta-a11y" } as const;

// Preferences live in both storages: sessionStorage for this visit, localStorage across visits.
function load(key: string): string | null {
  try {
    return sessionStorage.getItem(key) ?? localStorage.getItem(key);
  } catch {
    return null;
  }
}

function save(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* storage unavailable */
  }
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable */
  }
}

const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(pref: ThemePref) {
  const d = document.documentElement;
  d.dataset.themePref = pref;
  d.dataset.theme = pref === "system" ? (darkQuery().matches ? "dark" : "light") : pref;
}

function applyLang(lang: Lang) {
  const d = document.documentElement;
  d.lang = DICTS[lang].htmlLang;
  d.dataset.lang = lang;
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  // Server render and first client render are English/system/off; saved
  // preferences are applied right after (the boot script already set the
  // theme, language attribute and accessibility class before paint).
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [theme, setThemeState] = useState<ThemePref>("system");
  const [a11y, setA11yState] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const l = load(STORAGE_KEYS.lang);
    const t = load(STORAGE_KEYS.theme);
    /* eslint-disable react-hooks/set-state-in-effect -- one-time read of saved preferences on mount. */
    if (isLang(l)) setLangState(l);
    if (t === "light" || t === "dark" || t === "system") setThemeState(t);
    setA11yState(load(STORAGE_KEYS.a11y) === "1");
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!ready) return;
    applyLang(lang);
    document.documentElement.dataset.ready = "1";
  }, [lang, ready]);

  // Follow the operating system while the preference is "system".
  useEffect(() => {
    if (!ready) return undefined;
    applyTheme(theme);
    if (theme !== "system") return undefined;
    const mq = darkQuery();
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme, ready]);

  const setLang = useCallback((next: Lang) => {
    save(STORAGE_KEYS.lang, next);
    applyLang(next);
    setLangState(next);
  }, []);

  const setTheme = useCallback((next: ThemePref) => {
    save(STORAGE_KEYS.theme, next);
    applyTheme(next);
    setThemeState(next);
  }, []);

  const setA11y = useCallback((on: boolean) => {
    save(STORAGE_KEYS.a11y, on ? "1" : "0");
    // Set the class before re-rendering so remounted sections see it and skip motion.
    document.documentElement.classList.toggle("a11y", on);
    if (!on) window.speechSynthesis?.cancel();
    setA11yState(on);
  }, []);

  return (
    <Ctx.Provider value={{ lang, dict: DICTS[lang], theme, a11y, ready, setLang, setTheme, setA11y }}>{children}</Ctx.Provider>
  );
}

export function usePrefs() {
  const v = useContext(Ctx);
  if (!v) throw new Error("usePrefs must be used inside <PrefsProvider>");
  return v;
}

export const useDict = () => usePrefs().dict;

/**
 * Remounts page content when the language or accessibility mode changes, so
 * split-text animations rebuild from the new text (or stay off).
 */
export function PrefsScope({ children }: { children: ReactNode }) {
  const { lang, a11y } = usePrefs();
  return <Fragment key={`${lang}-${a11y ? 1 : 0}`}>{children}</Fragment>;
}
