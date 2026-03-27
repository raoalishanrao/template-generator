/**
 * Dynamic image search via Pexels API.
 */

import axios from 'axios';

const PEXELS_API = 'https://api.pexels.com/v1';

export interface PexelsPhoto {
  id: string;
  src: {
    original?: string;
    large2x?: string;
    large?: string;
    medium?: string;
    small?: string;
    portrait?: string;
    landscape?: string;
    tiny?: string;
  };
  avg_color?: string;
  alt?: string;
}

export async function searchPhoto(
  apiKey: string,
  query: string,
  orientation: 'landscape' | 'portrait' | 'squarish' = 'squarish'
): Promise<PexelsPhoto | null> {
  const url = `${PEXELS_API}/search`;
  try {
    const { data } = await axios.get<{ photos: PexelsPhoto[] }>(url, {
      headers: {
        Authorization: apiKey,
      },
      params: {
        query,
        per_page: 1,
        orientation: orientation === 'squarish' ? 'square' : orientation,
      },
      timeout: 10000,
    });
    const first = data.photos?.[0];
    return first ?? null;
  } catch {
    // If Pexels rate-limits or denies (403/429), don't fail generation; just return null.
    return null;
  }
}

export function getImageUrl(photo: PexelsPhoto, size: 'regular' | 'small' | 'thumb' = 'regular'): string {
  if (size === 'thumb') return photo.src.tiny || photo.src.small || photo.src.medium || '';
  if (size === 'small') return photo.src.medium || photo.src.small || photo.src.large || '';
  return photo.src.large2x || photo.src.large || photo.src.original || photo.src.medium || '';
}
