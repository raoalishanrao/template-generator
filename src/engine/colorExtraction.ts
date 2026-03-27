/**
 * Extract dominant color from an image URL; return hex and whether it's dark (for contrast).
 */

import axios from 'axios';
import sharp from 'sharp';

const SAMPLE_SIZE = 50;

export interface DominantColorResult {
  hex: string;
  rgb: [number, number, number];
  isDark: boolean;
}

export async function getDominantColor(imageUrl: string): Promise<DominantColorResult> {
  const response = await axios.get(imageUrl, { responseType: 'arraybuffer', timeout: 15000 });
  const buffer = Buffer.from(response.data);

  const { data, info } = await sharp(buffer)
    .resize(SAMPLE_SIZE, SAMPLE_SIZE, { fit: 'cover' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const bucket: Record<string, { r: number; g: number; b: number; count: number }> = {};
  const step = Math.max(1, Math.floor((data.length / channels) / 200));

  for (let i = 0; i < data.length; i += channels * step) {
    const r = data[i] ?? 0;
    const g = data[i + 1] ?? 0;
    const b = data[i + 2] ?? 0;
    const key = `${Math.floor(r / 32)}_${Math.floor(g / 32)}_${Math.floor(b / 32)}`;
    if (!bucket[key]) bucket[key] = { r: 0, g: 0, b: 0, count: 0 };
    bucket[key].r += r;
    bucket[key].g += g;
    bucket[key].b += b;
    bucket[key].count += 1;
  }

  let best = { key: '', count: 0 };
  for (const [key, v] of Object.entries(bucket)) {
    if (v.count > best.count) best = { key, count: v.count };
  }

  const b = bucket[best.key];
  if (!b) {
    return { hex: '#333333', rgb: [51, 51, 51], isDark: true };
  }

  const n = b.count;
  const r = Math.round(b.r / n);
  const g = Math.round(b.g / n);
  const bVal = Math.round(b.b / n);
  const hex = rgbToHex(r, g, bVal);
  const isDark = (r * 0.299 + g * 0.587 + bVal * 0.114) < 128;

  return { hex, rgb: [r, g, bVal], isDark };
}

export function getAccentFromPrimary(primaryHex: string): string {
  const [r, g, b] = hexToRgb(primaryHex);
  const boost = (v: number) => Math.min(255, Math.floor(v * 1.2));
  return rgbToHex(boost(r), boost(g), boost(b));
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
}

function hexToRgb(hex: string): [number, number, number] {
  const m = hex.replace(/^#/, '').match(/.{2}/g);
  if (!m) return [51, 51, 51];
  return [parseInt(m[0], 16), parseInt(m[1], 16), parseInt(m[2], 16)];
}

export const LIGHT_TEXT = '#FFFFFF';
export const DARK_TEXT = '#1A1A1A';
