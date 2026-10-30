import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const font = (pkg: string, file: string) =>
  readFile(path.join(process.cwd(), "node_modules", "@fontsource", pkg, "files", file));

async function assets() {
  const [inter600, inter700, serifItalic, portrait, monogram] = await Promise.all([
    font("inter", "inter-latin-600-normal.woff"),
    font("inter", "inter-latin-700-normal.woff"),
    font("instrument-serif", "instrument-serif-latin-400-italic.woff"),
    readFile(path.join(process.cwd(), "assets", "og-portrait.png")),
    readFile(path.join(process.cwd(), "public", "images", "monogram.png")),
  ]);
  return {
    fonts: [
      { name: "Inter", data: inter600, weight: 600 as const, style: "normal" as const },
      { name: "Inter", data: inter700, weight: 700 as const, style: "normal" as const },
      { name: "Serif", data: serifItalic, weight: 400 as const, style: "italic" as const },
    ],
    portrait: `data:image/png;base64,${portrait.toString("base64")}`,
    monogram: `data:image/png;base64,${monogram.toString("base64")}`,
  };
}

interface OgOptions {
  eyebrow: string;
  title: string;
  subtitle: string;
  dark?: boolean;
}

/** Shared social card: copy on the left, Tatyana's portrait on the right. */
export async function renderOg({ eyebrow, title, subtitle, dark = false }: OgOptions) {
  const { fonts, portrait, monogram } = await assets();
  const fg = dark ? "#f7f0ea" : "#1d1613";
  const muted = dark ? "rgba(247,240,234,0.7)" : "#6c5f58";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: dark
            ? "radial-gradient(70% 90% at 85% 100%, rgba(155,44,80,0.6), transparent 65%), #2a1c16"
            : "radial-gradient(60% 80% at 80% 50%, #e7c3b8, transparent 70%), linear-gradient(180deg, #f7f3ee, #f1dfd8)",
          fontFamily: "Inter",
          color: fg,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 56px 72px", width: 780 }}>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: muted }}>
            {eyebrow}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: title.length <= 14 ? 84 : title.length <= 20 ? 62 : 54, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{title}</div>
            <div
              style={{
                marginTop: 24,
                fontFamily: "Serif",
                fontStyle: "italic",
                fontSize: 40,
                lineHeight: 1.15,
                color: dark ? "#ead9b8" : "#9b2c50",
              }}
            >
              {subtitle}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, fontWeight: 600 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img>. */}
            <img
              src={monogram}
              alt=""
              height={40}
              style={{ height: 40, filter: dark ? "invert(1) brightness(1.6)" : "none" }}
            />
            tatyanaamugo.com
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", flex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img>. */}
          <img src={portrait} alt="" height={600} style={{ height: 600 }} />
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
