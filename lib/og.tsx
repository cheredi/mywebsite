import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** Social card: cream page, berry panel with Tatyana's portrait. */
export async function renderOg({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  const [inter, serif, mono, portrait] = await Promise.all([
    readFile(join(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-600-normal.woff")),
    readFile(join(process.cwd(), "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff")),
    readFile(join(process.cwd(), "node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff")),
    readFile(join(process.cwd(), "assets/og-portrait.png")),
  ]);
  const img = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f1ece4", color: "#121010", fontFamily: "Inter" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 0 52px 64px", width: 760 }}>
          <div style={{ display: "flex", fontFamily: "Mono", fontSize: 18, letterSpacing: 2, color: "#776d68" }}>{eyebrow}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Serif", fontStyle: "italic", fontSize: 110, color: "#6b1934", lineHeight: 0.9 }}>Hello</div>
            <div style={{ marginTop: 18, fontSize: title.length > 24 ? 52 : 72, letterSpacing: -3, lineHeight: 1, textTransform: "uppercase" }}>{title}</div>
            <div style={{ marginTop: 20, fontSize: 26, lineHeight: 1.3, color: "#2a2423", maxWidth: 640 }}>{subtitle}</div>
          </div>
          <div style={{ display: "flex", fontFamily: "Mono", fontSize: 18, letterSpacing: 2 }}>TATYANAAMUGO.COM</div>
        </div>
        <div style={{ display: "flex", flex: 1, margin: "28px 28px 0 0", borderRadius: 8, background: "#6b1934", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img>. */}
          <img src={img} alt="" height={580} style={{ height: 580 }} />
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Inter", data: inter, weight: 600, style: "normal" },
        { name: "Serif", data: serif, weight: 400, style: "italic" },
        { name: "Mono", data: mono, weight: 500, style: "normal" },
      ],
    }
  );
}
