/**
 * Master JSON Skeletons - each defines a unique layout family.
 * Placeholders $VAR_PRIMARY, $VAR_ACCENT, $VAR_TEXT are filled by the engine.
 */

import type { ElementRole, TemplateElement, Canvas, Dimensions, Position } from '../types/schema.js';

export type SkeletonId =
  | 'alpha'
  | 'beta'
  | 'gamma'
  | 'delta'
  | 'epsilon'
  | 'zeta'
  | 'eta'
  | 'theta'
  | 'iota'
  | 'kappa'
  | 'lambda'
  | 'mu'
  | 'nu'
  | 'xi'
  | 'omicron'
  | 'pi'
  | 'rho'
  | 'sigma'
  | 'tau'
  | 'phi';

export interface MasterSkeleton {
  id: SkeletonId;
  name: string;
  densityRange: [number, number]; // [min, max] density score this skeleton suits
  canvas: Omit<Canvas, 'colorPalette'> & { colorPalette: Canvas['colorPalette'] };
  elements: Array<{
    element_id: string;
    type: 'text' | 'image' | 'shape';
    role: ElementRole;
    position: Position;
    dimensions: Dimensions;
    style: Record<string, unknown>;
    content: string;
    constraints?: { maxCharacters?: number; maxLines?: number };
    textZone?: boolean; // if true, in dedicated text zone (overlap prevention)
  }>;
}

const W = 1080;
const H = 1350;

export const SKELETON_ALPHA: MasterSkeleton = {
  id: 'alpha',
  name: 'Minimal Hero',
  densityRange: [1, 2],
  canvas: {
    width: W,
    height: H,
    colorPalette: {
      $VAR_BG_PRIMARY: '$VAR_BG_PRIMARY',
      $VAR_BG_SECONDARY: '$VAR_BG_SECONDARY',
      $VAR_PRIMARY: '$VAR_PRIMARY',
      $VAR_SECONDARY: '$VAR_SECONDARY',
      $VAR_ACCENT: '$VAR_ACCENT',
      $VAR_TEXT_MAIN: '$VAR_TEXT_MAIN',
      $VAR_TEXT_SECONDARY: '$VAR_TEXT_SECONDARY',
    } as unknown as Canvas['colorPalette'],
  },
  elements: [
    {
      element_id: 'bg-1',
      type: 'image',
      role: 'BACKGROUND_IMAGE',
      position: { x: 0, y: 0 },
      dimensions: { w: W, h: H },
      style: {},
      content: '',
    },
    {
      element_id: 'brand-1',
      type: 'text',
      role: 'BRAND_NAME',
      position: { x: 90, y: 90 },
      dimensions: { w: W - 180, h: 40 },
      style: {
        color: '$VAR_TEXT_SECONDARY',
        fontFamily: 'Manrope, sans-serif',
        fontSize: 30,
        fontWeight: 700,
        alignment: 'left',
      },
      content: '',
      constraints: { maxCharacters: 18, maxLines: 1 },
      textZone: true,
    },
    {
      element_id: 'headline-1',
      type: 'text',
      role: 'MENU_TITLE',
      position: { x: 90, y: 180 },
      dimensions: { w: W - 180, h: 90 },
      style: {
        color: '$VAR_TEXT_MAIN',
        fontFamily: 'Manrope, sans-serif',
        fontSize: 52,
        fontWeight: 700,
        alignment: 'center',
      },
      content: '',
      constraints: { maxCharacters: 40, maxLines: 2 },
      textZone: true,
    },
    {
      element_id: 'product-name-1',
      type: 'text',
      role: 'PRODUCT_NAME',
      position: { x: 90, y: 285 },
      dimensions: { w: W - 180, h: 120 },
      style: {
        color: '$VAR_ACCENT',
        fontFamily: 'Fraunces, serif',
        fontSize: 104,
        fontWeight: 800,
        alignment: 'center',
      },
      content: '',
      constraints: { maxCharacters: 18, maxLines: 1 },
      textZone: true,
    },
    {
      element_id: 'desc-1',
      type: 'text',
      role: 'DESCRIPTION',
      position: { x: 90, y: 430 },
      dimensions: { w: W - 180, h: 90 },
      style: {
        color: '$VAR_TEXT_MAIN',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 36,
        fontWeight: 500,
        alignment: 'center',
      },
      content: '',
      constraints: { maxCharacters: 70, maxLines: 2 },
      textZone: true,
    },
  ],
};

export const SKELETON_BETA: MasterSkeleton = {
  id: 'beta',
  name: 'Promo CTA',
  densityRange: [2, 4],
  canvas: {
    width: W,
    height: H,
    colorPalette: {
      $VAR_BG_PRIMARY: '$VAR_BG_PRIMARY',
      $VAR_BG_SECONDARY: '$VAR_BG_SECONDARY',
      $VAR_PRIMARY: '$VAR_PRIMARY',
      $VAR_SECONDARY: '$VAR_SECONDARY',
      $VAR_ACCENT: '$VAR_ACCENT',
      $VAR_TEXT_MAIN: '$VAR_TEXT_MAIN',
      $VAR_TEXT_SECONDARY: '$VAR_TEXT_SECONDARY',
    } as unknown as Canvas['colorPalette'],
  },
  elements: [
    {
      element_id: 'bg-1',
      type: 'image',
      role: 'PRODUCT_IMAGE',
      position: { x: 0, y: 0 },
      dimensions: { w: W, h: H * 0.58 },
      style: {},
      content: '',
    },
    {
      element_id: 'panel-1',
      type: 'shape',
      role: 'DECORATIVE',
      position: { x: 70, y: H * 0.52 },
      dimensions: { w: W - 140, h: H * 0.42 },
      style: { fill: 'rgba(0,0,0,0.45)', cornerRadius: 26 },
      content: '',
      textZone: true,
    },
    {
      element_id: 'headline-1',
      type: 'text',
      role: 'MENU_TITLE',
      position: { x: 90, y: H * 0.56 },
      dimensions: { w: W - 160, h: 100 },
      style: {
        color: '$VAR_TEXT_SECONDARY',
        fontFamily: 'Manrope, sans-serif',
        fontSize: 54,
        fontWeight: 700,
        alignment: 'center',
      },
      content: '',
      constraints: { maxCharacters: 35, maxLines: 1 },
      textZone: true,
    },
    {
      element_id: 'subhead-1',
      type: 'text',
      role: 'DESCRIPTION',
      position: { x: 90, y: H * 0.65 },
      dimensions: { w: W - 160, h: 60 },
      style: {
        color: '$VAR_TEXT_SECONDARY',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 30,
        fontWeight: 500,
        alignment: 'center',
      },
      content: '',
      constraints: { maxCharacters: 60, maxLines: 2 },
      textZone: true,
    },
  ],
};

export const SKELETON_GAMMA: MasterSkeleton = {
  id: 'gamma',
  name: 'Image Grid + Logo',
  densityRange: [3, 5],
  canvas: {
    width: W,
    height: H,
    colorPalette: {
      $VAR_BG_PRIMARY: '$VAR_BG_PRIMARY',
      $VAR_BG_SECONDARY: '$VAR_BG_SECONDARY',
      $VAR_PRIMARY: '$VAR_PRIMARY',
      $VAR_SECONDARY: '$VAR_SECONDARY',
      $VAR_ACCENT: '$VAR_ACCENT',
      $VAR_TEXT_MAIN: '$VAR_TEXT_MAIN',
      $VAR_TEXT_SECONDARY: '$VAR_TEXT_SECONDARY',
    } as unknown as Canvas['colorPalette'],
  },
  elements: [
    {
      element_id: 'img-1',
      type: 'image',
      role: 'PROMO_IMAGE_1',
      position: { x: 60, y: 140 },
      dimensions: { w: (W - 160) / 2, h: (H - 560) / 2 },
      style: {},
      content: '',
    },
    {
      element_id: 'img-2',
      type: 'image',
      role: 'PROMO_IMAGE_2',
      position: { x: 60 + (W - 160) / 2 + 20, y: 140 },
      dimensions: { w: (W - 160) / 2, h: (H - 560) / 2 },
      style: {},
      content: '',
    },
    {
      element_id: 'img-3',
      type: 'image',
      role: 'PROMO_IMAGE_3',
      position: { x: 60, y: 140 + (H - 560) / 2 + 20 },
      dimensions: { w: W - 120, h: (H - 560) / 2 },
      style: {},
      content: '',
    },
    {
      element_id: 'brand-1',
      type: 'text',
      role: 'BRAND_NAME',
      position: { x: 70, y: H - 330 },
      dimensions: { w: W - 140, h: 40 },
      style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 30, fontWeight: 700, alignment: 'left' },
      content: '',
      constraints: { maxCharacters: 18, maxLines: 1 },
      textZone: true,
    },
    {
      element_id: 'headline-1',
      type: 'text',
      role: 'HEADLINE',
      position: { x: 70, y: H - 270 },
      dimensions: { w: W - 140, h: 120 },
      style: {
        color: '$VAR_TEXT_MAIN',
        fontFamily: 'Fraunces, serif',
        fontSize: 64,
        fontWeight: 800,
        alignment: 'left',
      },
      content: '',
      constraints: { maxCharacters: 50, maxLines: 2 },
      textZone: true,
    },
    {
      element_id: 'logo-1',
      type: 'image',
      role: 'LOGO',
      position: { x: W - 180, y: H - 200 },
      dimensions: { w: 140, h: 140 },
      style: {},
      content: '',
    },
  ],
};

// --- Additional Canva-like skeletons (more layout diversity) ---

export const SKELETON_DELTA: MasterSkeleton = {
  id: 'delta',
  name: 'Split Left Image',
  densityRange: [2, 4],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'img-1', type: 'image', role: 'PRODUCT_IMAGE', position: { x: 0, y: 0 }, dimensions: { w: W * 0.56, h: H }, style: {}, content: '' },
    { element_id: 'shape-1', type: 'shape', role: 'DECORATIVE', position: { x: W * 0.54, y: 0 }, dimensions: { w: W * 0.46, h: H }, style: { fill: 'rgba(15,23,42,0.92)' }, content: '', textZone: true },
    { element_id: 'brand-1', type: 'text', role: 'BRAND_NAME', position: { x: W * 0.58, y: 120 }, dimensions: { w: W * 0.38, h: 40 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 28, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'title-1', type: 'text', role: 'MENU_TITLE', position: { x: W * 0.58, y: 180 }, dimensions: { w: W * 0.38, h: 90 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 30, maxLines: 2 }, textZone: true },
    { element_id: 'product-1', type: 'text', role: 'PRODUCT_NAME', position: { x: W * 0.58, y: 290 }, dimensions: { w: W * 0.38, h: 120 }, style: { color: '$VAR_ACCENT', fontFamily: 'Fraunces, serif', fontSize: 76, fontWeight: 800, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'desc-1', type: 'text', role: 'DESCRIPTION', position: { x: W * 0.58, y: 420 }, dimensions: { w: W * 0.38, h: 110 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 30, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 80, maxLines: 3 }, textZone: true },
  ],
};

export const SKELETON_EPSILON: MasterSkeleton = {
  id: 'epsilon',
  name: 'Split Right Image',
  densityRange: [2, 4],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'img-1', type: 'image', role: 'PRODUCT_IMAGE', position: { x: W * 0.44, y: 0 }, dimensions: { w: W * 0.56, h: H }, style: {}, content: '' },
    { element_id: 'shape-1', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: 0 }, dimensions: { w: W * 0.46, h: H }, style: { fill: 'rgba(15,23,42,0.92)' }, content: '', textZone: true },
    { element_id: 'brand-1', type: 'text', role: 'BRAND_NAME', position: { x: 90, y: 120 }, dimensions: { w: W * 0.38, h: 40 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 28, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'title-1', type: 'text', role: 'MENU_TITLE', position: { x: 90, y: 180 }, dimensions: { w: W * 0.38, h: 90 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 30, maxLines: 2 }, textZone: true },
    { element_id: 'product-1', type: 'text', role: 'PRODUCT_NAME', position: { x: 90, y: 290 }, dimensions: { w: W * 0.38, h: 120 }, style: { color: '$VAR_ACCENT', fontFamily: 'Fraunces, serif', fontSize: 76, fontWeight: 800, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'desc-1', type: 'text', role: 'DESCRIPTION', position: { x: 90, y: 420 }, dimensions: { w: W * 0.38, h: 110 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 30, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 80, maxLines: 3 }, textZone: true },
  ],
};

export const SKELETON_ZETA: MasterSkeleton = {
  id: 'zeta',
  name: 'Bottom Band',
  densityRange: [1, 3],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bg-1', type: 'image', role: 'BACKGROUND_IMAGE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: {}, content: '' },
    { element_id: 'band-1', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: H * 0.72 }, dimensions: { w: W, h: H * 0.28 }, style: { fill: 'rgba(15,23,42,0.85)' }, content: '', textZone: true },
    { element_id: 'brand-1', type: 'text', role: 'BRAND_NAME', position: { x: 90, y: H * 0.75 }, dimensions: { w: W - 180, h: 40 }, style: { color: '$VAR_ACCENT', fontFamily: 'Manrope, sans-serif', fontSize: 28, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'product-1', type: 'text', role: 'PRODUCT_NAME', position: { x: 90, y: H * 0.79 }, dimensions: { w: W - 180, h: 110 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Fraunces, serif', fontSize: 88, fontWeight: 800, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'desc-1', type: 'text', role: 'DESCRIPTION', position: { x: 90, y: H * 0.89 }, dimensions: { w: W - 180, h: 80 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 30, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 70, maxLines: 2 }, textZone: true },
  ],
};

export const SKELETON_ETA: MasterSkeleton = {
  id: 'eta',
  name: 'Top Caption',
  densityRange: [1, 3],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bg-1', type: 'image', role: 'BACKGROUND_IMAGE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: {}, content: '' },
    { element_id: 'band-1', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: 0 }, dimensions: { w: W, h: 300 }, style: { fill: 'rgba(15,23,42,0.78)' }, content: '', textZone: true },
    { element_id: 'brand-1', type: 'text', role: 'BRAND_NAME', position: { x: 90, y: 70 }, dimensions: { w: W - 180, h: 40 }, style: { color: '$VAR_ACCENT', fontFamily: 'Manrope, sans-serif', fontSize: 28, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'title-1', type: 'text', role: 'MENU_TITLE', position: { x: 90, y: 125 }, dimensions: { w: W - 180, h: 70 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 46, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 30, maxLines: 1 }, textZone: true },
    { element_id: 'desc-1', type: 'text', role: 'DESCRIPTION', position: { x: 90, y: 195 }, dimensions: { w: W - 180, h: 80 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 28, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 70, maxLines: 2 }, textZone: true },
  ],
};

export const SKELETON_THETA: MasterSkeleton = {
  id: 'theta',
  name: 'Framed Photo Card',
  densityRange: [2, 4],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bg', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: { fill: '$VAR_BG_PRIMARY' }, content: '' },
    { element_id: 'card', type: 'shape', role: 'DECORATIVE', position: { x: 70, y: 120 }, dimensions: { w: W - 140, h: H - 240 }, style: { fill: 'rgba(255,255,255,0.06)', cornerRadius: 28 }, content: '', textZone: true },
    { element_id: 'img', type: 'image', role: 'PRODUCT_IMAGE', position: { x: 110, y: 170 }, dimensions: { w: W - 220, h: 700 }, style: {}, content: '' },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 110, y: 905 }, dimensions: { w: W - 220, h: 40 }, style: { color: '$VAR_ACCENT', fontFamily: 'Manrope, sans-serif', fontSize: 26, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'product', type: 'text', role: 'PRODUCT_NAME', position: { x: 110, y: 950 }, dimensions: { w: W - 220, h: 120 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Fraunces, serif', fontSize: 84, fontWeight: 800, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'desc', type: 'text', role: 'DESCRIPTION', position: { x: 110, y: 1065 }, dimensions: { w: W - 220, h: 80 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 28, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 80, maxLines: 2 }, textZone: true },
  ],
};

export const SKELETON_IOTA: MasterSkeleton = {
  id: 'iota',
  name: 'Center Poster Type',
  densityRange: [1, 3],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bg', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: { fill: '$VAR_BG_PRIMARY' }, content: '' },
    { element_id: 'accent', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: H * 0.58 }, dimensions: { w: W, h: H * 0.42 }, style: { fill: 'rgba(255,217,61,0.12)' }, content: '' },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 90, y: 110 }, dimensions: { w: W - 180, h: 40 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 28, fontWeight: 700, alignment: 'center' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'product', type: 'text', role: 'PRODUCT_NAME', position: { x: 90, y: 220 }, dimensions: { w: W - 180, h: 170 }, style: { color: '$VAR_ACCENT', fontFamily: 'Fraunces, serif', fontSize: 120, fontWeight: 800, alignment: 'center' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'desc', type: 'text', role: 'DESCRIPTION', position: { x: 160, y: 420 }, dimensions: { w: W - 320, h: 100 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 32, fontWeight: 500, alignment: 'center' }, content: '', constraints: { maxCharacters: 70, maxLines: 2 }, textZone: true },
    { element_id: 'img', type: 'image', role: 'PRODUCT_IMAGE', position: { x: 140, y: 580 }, dimensions: { w: W - 280, h: 650 }, style: {}, content: '' },
  ],
};

export const SKELETON_KAPPA: MasterSkeleton = {
  id: 'kappa',
  name: 'Diagonal Accent',
  densityRange: [2, 4],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bgimg', type: 'image', role: 'BACKGROUND_IMAGE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: {}, content: '' },
    { element_id: 'diag', type: 'shape', role: 'DECORATIVE', position: { x: -200, y: H * 0.6 }, dimensions: { w: W + 400, h: 520 }, style: { fill: 'rgba(15,23,42,0.80)', rotation: -8 }, content: '', textZone: true },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 90, y: H * 0.68 }, dimensions: { w: W - 180, h: 40 }, style: { color: '$VAR_ACCENT', fontFamily: 'Manrope, sans-serif', fontSize: 28, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'title', type: 'text', role: 'MENU_TITLE', position: { x: 90, y: H * 0.73 }, dimensions: { w: W - 180, h: 90 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 50, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 35, maxLines: 2 }, textZone: true },
    { element_id: 'desc', type: 'text', role: 'DESCRIPTION', position: { x: 90, y: H * 0.82 }, dimensions: { w: W - 180, h: 100 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 30, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 80, maxLines: 3 }, textZone: true },
  ],
};

export const SKELETON_LAMBDA: MasterSkeleton = {
  id: 'lambda',
  name: 'Two Photos + Type',
  densityRange: [3, 5],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'img1', type: 'image', role: 'PROMO_IMAGE_1', position: { x: 60, y: 120 }, dimensions: { w: W - 120, h: 560 }, style: {}, content: '' },
    { element_id: 'img2', type: 'image', role: 'PROMO_IMAGE_2', position: { x: 60, y: 700 }, dimensions: { w: (W - 140) / 2, h: 520 }, style: {}, content: '' },
    { element_id: 'img3', type: 'image', role: 'PROMO_IMAGE_3', position: { x: 80 + (W - 140) / 2, y: 700 }, dimensions: { w: (W - 140) / 2, h: 520 }, style: {}, content: '' },
    { element_id: 'overlay', type: 'shape', role: 'DECORATIVE', position: { x: 60, y: 860 }, dimensions: { w: W - 120, h: 280 }, style: { fill: 'rgba(15,23,42,0.75)', cornerRadius: 22 }, content: '', textZone: true },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 90, y: 890 }, dimensions: { w: W - 180, h: 40 }, style: { color: '$VAR_ACCENT', fontFamily: 'Manrope, sans-serif', fontSize: 26, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'headline', type: 'text', role: 'HEADLINE', position: { x: 90, y: 935 }, dimensions: { w: W - 180, h: 110 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Fraunces, serif', fontSize: 64, fontWeight: 800, alignment: 'left' }, content: '', constraints: { maxCharacters: 50, maxLines: 2 }, textZone: true },
    { element_id: 'desc', type: 'text', role: 'DESCRIPTION', position: { x: 90, y: 1048 }, dimensions: { w: W - 180, h: 80 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 28, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 80, maxLines: 2 }, textZone: true },
  ],
};

export const SKELETON_MU: MasterSkeleton = {
  id: 'mu',
  name: 'Solid Minimal Type',
  densityRange: [1, 2],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bg', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: { fill: '$VAR_BG_PRIMARY' }, content: '' },
    { element_id: 'dot', type: 'shape', role: 'DECORATIVE', position: { x: 90, y: 170 }, dimensions: { w: 18, h: 18 }, style: { fill: '$VAR_ACCENT', cornerRadius: 9 }, content: '' },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 120, y: 160 }, dimensions: { w: W - 210, h: 40 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 26, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'product', type: 'text', role: 'PRODUCT_NAME', position: { x: 90, y: 250 }, dimensions: { w: W - 180, h: 220 }, style: { color: '$VAR_ACCENT', fontFamily: 'Fraunces, serif', fontSize: 140, fontWeight: 800, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'desc', type: 'text', role: 'DESCRIPTION', position: { x: 90, y: 500 }, dimensions: { w: W - 260, h: 100 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 34, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 70, maxLines: 2 }, textZone: true },
  ],
};

export const SKELETON_NU: MasterSkeleton = {
  id: 'nu',
  name: 'Image + Sidebar Labels',
  densityRange: [2, 4],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bgimg', type: 'image', role: 'BACKGROUND_IMAGE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: {}, content: '' },
    { element_id: 'side', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: 0 }, dimensions: { w: 110, h: H }, style: { fill: 'rgba(15,23,42,0.88)' }, content: '', textZone: true },
    { element_id: 'side2', type: 'shape', role: 'DECORATIVE', position: { x: 110, y: 0 }, dimensions: { w: 6, h: H }, style: { fill: '$VAR_ACCENT' }, content: '' },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 140, y: 90 }, dimensions: { w: W - 200, h: 40 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 28, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'title', type: 'text', role: 'MENU_TITLE', position: { x: 140, y: 150 }, dimensions: { w: W - 200, h: 90 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 50, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 30, maxLines: 2 }, textZone: true },
    { element_id: 'desc', type: 'text', role: 'DESCRIPTION', position: { x: 140, y: 250 }, dimensions: { w: W - 260, h: 90 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 30, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 80, maxLines: 2 }, textZone: true },
  ],
};

export const SKELETON_XI: MasterSkeleton = {
  id: 'xi',
  name: 'Grid + Top Title',
  densityRange: [3, 5],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'title', type: 'text', role: 'MENU_TITLE', position: { x: 60, y: 80 }, dimensions: { w: W - 120, h: 80 }, style: { color: '$VAR_TEXT_MAIN', fontFamily: 'Manrope, sans-serif', fontSize: 52, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 35, maxLines: 1 }, textZone: true },
    { element_id: 'img1', type: 'image', role: 'PROMO_IMAGE_1', position: { x: 60, y: 190 }, dimensions: { w: (W - 140) / 2, h: 520 }, style: {}, content: '' },
    { element_id: 'img2', type: 'image', role: 'PROMO_IMAGE_2', position: { x: 80 + (W - 140) / 2, y: 190 }, dimensions: { w: (W - 140) / 2, h: 520 }, style: {}, content: '' },
    { element_id: 'img3', type: 'image', role: 'PROMO_IMAGE_3', position: { x: 60, y: 730 }, dimensions: { w: W - 120, h: 520 }, style: {}, content: '' },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 60, y: 1260 }, dimensions: { w: W - 120, h: 40 }, style: { color: '$VAR_TEXT_MAIN', fontFamily: 'Manrope, sans-serif', fontSize: 26, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
  ],
};

export const SKELETON_OMICRON: MasterSkeleton = {
  id: 'omicron',
  name: 'Full Bleed + Glass Card',
  densityRange: [2, 4],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bg', type: 'image', role: 'BACKGROUND_IMAGE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: {}, content: '' },
    { element_id: 'glass', type: 'shape', role: 'DECORATIVE', position: { x: 90, y: 840 }, dimensions: { w: W - 180, h: 420 }, style: { fill: 'rgba(255,255,255,0.18)', cornerRadius: 26 }, content: '', textZone: true },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 120, y: 875 }, dimensions: { w: W - 240, h: 40 }, style: { color: '$VAR_TEXT_MAIN', fontFamily: 'Manrope, sans-serif', fontSize: 26, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'product', type: 'text', role: 'PRODUCT_NAME', position: { x: 120, y: 920 }, dimensions: { w: W - 240, h: 120 }, style: { color: '$VAR_ACCENT', fontFamily: 'Fraunces, serif', fontSize: 84, fontWeight: 800, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'desc', type: 'text', role: 'DESCRIPTION', position: { x: 120, y: 1030 }, dimensions: { w: W - 240, h: 90 }, style: { color: '$VAR_TEXT_MAIN', fontFamily: 'DM Sans, sans-serif', fontSize: 28, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 80, maxLines: 2 }, textZone: true },
  ],
};

export const SKELETON_PI: MasterSkeleton = {
  id: 'pi',
  name: 'Center Photo + Title Above',
  densityRange: [1, 3],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bg', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: { fill: '$VAR_BG_PRIMARY' }, content: '' },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 90, y: 90 }, dimensions: { w: W - 180, h: 40 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 26, fontWeight: 700, alignment: 'center' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'title', type: 'text', role: 'MENU_TITLE', position: { x: 90, y: 140 }, dimensions: { w: W - 180, h: 80 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 46, fontWeight: 700, alignment: 'center' }, content: '', constraints: { maxCharacters: 30, maxLines: 1 }, textZone: true },
    { element_id: 'img', type: 'image', role: 'PRODUCT_IMAGE', position: { x: 140, y: 250 }, dimensions: { w: W - 280, h: 780 }, style: {}, content: '' },
    { element_id: 'product', type: 'text', role: 'PRODUCT_NAME', position: { x: 90, y: 1060 }, dimensions: { w: W - 180, h: 140 }, style: { color: '$VAR_ACCENT', fontFamily: 'Fraunces, serif', fontSize: 96, fontWeight: 800, alignment: 'center' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
  ],
};

export const SKELETON_RHO: MasterSkeleton = {
  id: 'rho',
  name: 'Left Band + Photo',
  densityRange: [2, 4],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bg', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: { fill: '$VAR_BG_PRIMARY' }, content: '' },
    { element_id: 'band', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: 0 }, dimensions: { w: 360, h: H }, style: { fill: 'rgba(255,217,61,0.18)' }, content: '', textZone: true },
    { element_id: 'img', type: 'image', role: 'PRODUCT_IMAGE', position: { x: 330, y: 160 }, dimensions: { w: W - 390, h: H - 320 }, style: {}, content: '' },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 60, y: 160 }, dimensions: { w: 260, h: 40 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 26, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'product', type: 'text', role: 'PRODUCT_NAME', position: { x: 60, y: 230 }, dimensions: { w: 260, h: 300 }, style: { color: '$VAR_ACCENT', fontFamily: 'Fraunces, serif', fontSize: 86, fontWeight: 800, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 2 }, textZone: true },
    { element_id: 'desc', type: 'text', role: 'DESCRIPTION', position: { x: 60, y: 520 }, dimensions: { w: 260, h: 140 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 26, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 90, maxLines: 4 }, textZone: true },
  ],
};

export const SKELETON_SIGMA: MasterSkeleton = {
  id: 'sigma',
  name: 'Rounded Image + Top Right Type',
  densityRange: [2, 4],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bg', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: { fill: '$VAR_BG_PRIMARY' }, content: '' },
    { element_id: 'img', type: 'image', role: 'PRODUCT_IMAGE', position: { x: 80, y: 320 }, dimensions: { w: W - 160, h: 860 }, style: {}, content: '' },
    { element_id: 'cap', type: 'shape', role: 'DECORATIVE', position: { x: 80, y: 120 }, dimensions: { w: W - 160, h: 170 }, style: { fill: 'rgba(255,255,255,0.06)', cornerRadius: 26 }, content: '', textZone: true },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 120, y: 150 }, dimensions: { w: W - 240, h: 40 }, style: { color: '$VAR_ACCENT', fontFamily: 'Manrope, sans-serif', fontSize: 26, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'title', type: 'text', role: 'MENU_TITLE', position: { x: 120, y: 195 }, dimensions: { w: W - 240, h: 70 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 44, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 30, maxLines: 1 }, textZone: true },
  ],
};

export const SKELETON_TAU: MasterSkeleton = {
  id: 'tau',
  name: 'Three Tiles + Bottom Type',
  densityRange: [3, 5],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'tile1', type: 'image', role: 'PROMO_IMAGE_1', position: { x: 60, y: 120 }, dimensions: { w: W - 120, h: 420 }, style: {}, content: '' },
    { element_id: 'tile2', type: 'image', role: 'PROMO_IMAGE_2', position: { x: 60, y: 560 }, dimensions: { w: (W - 140) / 2, h: 420 }, style: {}, content: '' },
    { element_id: 'tile3', type: 'image', role: 'PROMO_IMAGE_3', position: { x: 80 + (W - 140) / 2, y: 560 }, dimensions: { w: (W - 140) / 2, h: 420 }, style: {}, content: '' },
    { element_id: 'band', type: 'shape', role: 'DECORATIVE', position: { x: 60, y: 1000 }, dimensions: { w: W - 120, h: 280 }, style: { fill: 'rgba(15,23,42,0.82)', cornerRadius: 22 }, content: '', textZone: true },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 90, y: 1030 }, dimensions: { w: W - 180, h: 40 }, style: { color: '$VAR_ACCENT', fontFamily: 'Manrope, sans-serif', fontSize: 26, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'product', type: 'text', role: 'PRODUCT_NAME', position: { x: 90, y: 1075 }, dimensions: { w: W - 180, h: 120 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Fraunces, serif', fontSize: 78, fontWeight: 800, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'desc', type: 'text', role: 'DESCRIPTION', position: { x: 90, y: 1190 }, dimensions: { w: W - 180, h: 80 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 28, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 80, maxLines: 2 }, textZone: true },
  ],
};

export const SKELETON_PHI: MasterSkeleton = {
  id: 'phi',
  name: 'Editorial Band + Photo',
  densityRange: [2, 4],
  canvas: SKELETON_ALPHA.canvas,
  elements: [
    { element_id: 'bg', type: 'shape', role: 'DECORATIVE', position: { x: 0, y: 0 }, dimensions: { w: W, h: H }, style: { fill: '$VAR_BG_PRIMARY' }, content: '' },
    { element_id: 'img', type: 'image', role: 'PRODUCT_IMAGE', position: { x: 90, y: 130 }, dimensions: { w: W - 180, h: 760 }, style: {}, content: '' },
    { element_id: 'band', type: 'shape', role: 'DECORATIVE', position: { x: 90, y: 920 }, dimensions: { w: W - 180, h: 300 }, style: { fill: 'rgba(255,255,255,0.06)', cornerRadius: 22 }, content: '', textZone: true },
    { element_id: 'product', type: 'text', role: 'PRODUCT_NAME', position: { x: 120, y: 950 }, dimensions: { w: W - 240, h: 120 }, style: { color: '$VAR_ACCENT', fontFamily: 'Fraunces, serif', fontSize: 84, fontWeight: 800, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
    { element_id: 'desc', type: 'text', role: 'DESCRIPTION', position: { x: 120, y: 1060 }, dimensions: { w: W - 240, h: 80 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'DM Sans, sans-serif', fontSize: 28, fontWeight: 500, alignment: 'left' }, content: '', constraints: { maxCharacters: 80, maxLines: 2 }, textZone: true },
    { element_id: 'brand', type: 'text', role: 'BRAND_NAME', position: { x: 120, y: 1145 }, dimensions: { w: W - 240, h: 40 }, style: { color: '$VAR_TEXT_SECONDARY', fontFamily: 'Manrope, sans-serif', fontSize: 24, fontWeight: 700, alignment: 'left' }, content: '', constraints: { maxCharacters: 18, maxLines: 1 }, textZone: true },
  ],
};

export const MASTER_SKELETONS: MasterSkeleton[] = [
  SKELETON_ALPHA,
  SKELETON_BETA,
  SKELETON_GAMMA,
  SKELETON_DELTA,
  SKELETON_EPSILON,
  SKELETON_ZETA,
  SKELETON_ETA,
  SKELETON_THETA,
  SKELETON_IOTA,
  SKELETON_KAPPA,
  SKELETON_LAMBDA,
  SKELETON_MU,
  SKELETON_NU,
  SKELETON_XI,
  SKELETON_OMICRON,
  SKELETON_PI,
  SKELETON_RHO,
  SKELETON_SIGMA,
  SKELETON_TAU,
   SKELETON_PHI,
];

export function getSkeletonById(id: SkeletonId): MasterSkeleton {
  const s = MASTER_SKELETONS.find((sk) => sk.id === id);
  if (!s) throw new Error(`Unknown skeleton: ${id}`);
  return s;
}

export function matchSkeletonByDensity(densityScore: number): MasterSkeleton {
  const candidates = MASTER_SKELETONS.filter((sk) => {
    const [min, max] = sk.densityRange;
    return densityScore >= min && densityScore <= max;
  });
  if (candidates.length === 0) return SKELETON_BETA;
  const pick = candidates[Math.floor(Math.random() * candidates.length)];
  return pick ?? SKELETON_BETA;
}
