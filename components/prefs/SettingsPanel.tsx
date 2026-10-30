"use client";

import { useEffect, useRef } from "react";
import { DICTS, LANGS } from "@/content/i18n";
import { usePrefs, type ThemePref } from "@/components/prefs/Prefs";

/** Language, theme and accessibility, opened from the nav pill. */
export default function SettingsPanel({ open, onClose, returnFocus }: { open: boolean; onClose: () => void; returnFocus: () => void }) {
  const { dict: t, lang, setLang, theme, setTheme, a11y, setA11y } = usePrefs();
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;
    panel.current?.querySelector<HTMLElement>("[aria-checked='true'], button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        returnFocus();
      }
    };
    const onDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (!panel.current?.contains(target) && !target.closest(".nav__prefs")) onClose();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open, onClose, returnFocus]);

  const themes: { value: ThemePref; label: string }[] = [
    { value: "system", label: t.ui.system },
    { value: "light", label: t.ui.light },
    { value: "dark", label: t.ui.dark },
  ];

  return (
    <div ref={panel} id="prefs-panel" className="prefs" role="dialog" aria-modal="false" aria-label={t.ui.settings} hidden={!open}>
      <p className="mono prefs__title">{t.ui.settings}</p>

      <fieldset className="prefs__group">
        <legend className="mono">{t.ui.language}</legend>
        <div className="prefs__langs" role="radiogroup" aria-label={t.ui.language}>
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              role="radio"
              aria-checked={lang === code}
              lang={DICTS[code].htmlLang}
              className="prefs__option"
              onClick={() => setLang(code)}
            >
              {DICTS[code].nativeName}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="prefs__group">
        <legend className="mono">{t.ui.theme}</legend>
        <div className="prefs__seg" role="radiogroup" aria-label={t.ui.theme}>
          {themes.map((o) => (
            <button key={o.value} type="button" role="radio" aria-checked={theme === o.value} className="prefs__option" onClick={() => setTheme(o.value)}>
              {o.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="prefs__group prefs__a11y">
        <div>
          <p className="prefs__a11y-title" id="a11y-label">
            {t.ui.accessibility}
          </p>
          <p className="prefs__hint" id="a11y-hint">
            {t.ui.accessibilityHint}
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={a11y}
          aria-labelledby="a11y-label"
          aria-describedby="a11y-hint"
          className="switch"
          onClick={() => setA11y(!a11y)}
        >
          <span className="switch__thumb" />
          <span className="sr-only">{a11y ? t.ui.on : t.ui.off}</span>
        </button>
      </div>
    </div>
  );
}
