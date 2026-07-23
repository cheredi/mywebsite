// Generates a full favicon set from public/images/logo.jpg using sharp
// (resizing) and png-to-ico (multi-resolution .ico packaging).
//
// Run with: npm run generate:favicons
//
// Outputs:
//   app/icon.png           - 512x512, used by Next.js as the default favicon
//   app/apple-icon.png     - 180x180, used by Next.js for Apple touch icon
//   public/favicon-16x16.png
//   public/favicon-32x32.png
//   public/favicon.ico     - legacy multi-size .ico for older browsers

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SOURCE_LOGO = path.join(__dirname, "..", "public", "images", "logo.jpg");
const APP_DIR = path.join(__dirname, "..", "app");
const PUBLIC_DIR = path.join(__dirname, "..", "public");

async function main() {
  if (!fs.existsSync(SOURCE_LOGO)) {
    throw new Error(`Source logo not found at ${SOURCE_LOGO}`);
  }

  const sizes = [
    { file: path.join(APP_DIR, "icon.png"), size: 512 },
    { file: path.join(APP_DIR, "apple-icon.png"), size: 180 },
    { file: path.join(PUBLIC_DIR, "favicon-16x16.png"), size: 16 },
    { file: path.join(PUBLIC_DIR, "favicon-32x32.png"), size: 32 },
  ];

  for (const { file, size } of sizes) {
    await sharp(SOURCE_LOGO)
      .resize(size, size, { fit: "cover" })
      .png()
      .toFile(file);
    console.log(`Wrote ${file} (${size}x${size})`);
  }

  const icoBuffer = await pngToIco([
    path.join(PUBLIC_DIR, "favicon-16x16.png"),
    path.join(PUBLIC_DIR, "favicon-32x32.png"),
  ]);
  const icoPath = path.join(PUBLIC_DIR, "favicon.ico");
  fs.writeFileSync(icoPath, icoBuffer);
  console.log(`Wrote ${icoPath}`);
}

main().catch((error) => {
  console.error("Failed to generate favicons:", error);
  process.exit(1);
});
