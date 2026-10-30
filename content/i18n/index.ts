import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { hi } from "./hi";
import { sw } from "./sw";
import { zh } from "./zh";
import type { Dict, Lang } from "./types";

export const DICTS: Record<Lang, Dict> = { en, es, fr, hi, sw, zh };
export const LANGS: Lang[] = ["en", "es", "fr", "hi", "sw", "zh"];
export const DEFAULT_LANG: Lang = "en";
export const isLang = (v: unknown): v is Lang => typeof v === "string" && (LANGS as string[]).includes(v);
export type { Dict, Lang } from "./types";
