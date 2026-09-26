import fs from 'node:fs';
import path from 'node:path';

/** Reads a PNG or JPEG's pixel dimensions straight from its bytes (no decoding), so pages
 * can reserve the right space before the browser has the image (Img.astro) or make layout
 * decisions at build time, like picking a landscape image over a portrait one (lib/projets.ts). */
export function imageDims(publicSrc: string): [number, number] | null {
  const file = path.join(process.cwd(), 'public', decodeURI(publicSrc));
  if (!fs.existsSync(file)) return null;
  try {
    const b = fs.readFileSync(file);
    if (b.readUInt32BE(0) === 0x89504e47) return [b.readUInt32BE(16), b.readUInt32BE(20)]; // PNG
    if (b[0] === 0xff && b[1] === 0xd8) { // JPEG: walk segments to the SOF marker
      let i = 2;
      while (i < b.length) {
        if (b[i] !== 0xff) { i++; continue; }
        const m = b[i + 1];
        if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
        i += 2 + b.readUInt16BE(i + 2);
      }
    }
  } catch {}
  return null;
}

export function isLandscape(publicSrc: string): boolean {
  const wh = imageDims(publicSrc);
  return !wh || wh[0] >= wh[1]; // unknown dimensions: assume fine rather than second-guess it
}
