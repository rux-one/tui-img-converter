// Browser-compatible OxiPNG wrapper via @jsquash/oxipng (loaded from CDN on first use)
const CDN = 'https://cdn.jsdelivr.net/npm/@jsquash/oxipng@2.3.0/codec/pkg';
let mod = null;

export async function optimise(pngArrayBuffer, level = 4) {
  if (!mod) {
    mod = await import(`${CDN}/squoosh_oxipng.js`);
    await mod.default(`${CDN}/squoosh_oxipng_bg.wasm`);
  }
  const result = mod.optimise(new Uint8Array(pngArrayBuffer), level, false, false);
  return result.buffer;
}