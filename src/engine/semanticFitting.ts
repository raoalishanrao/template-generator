/**
 * Map ContentPackage fields into skeleton element roles (semantic fitting).
 */

import type { ContentPackage } from '../types/schema.js';
import type { MasterSkeleton } from './skeletons.js';
import type { ElementRole } from '../types/schema.js';

const ROLE_TO_PACKAGE_KEY: Partial<Record<ElementRole, keyof ContentPackage>> = {
  HEADLINE: 'headline',
  SUBHEAD: 'subhead',
  BODY_TEXT: 'bodyText',
  BRAND_NAME: 'brandName',
  MENU_TITLE: 'menuTitle',
  PRODUCT_NAME: 'productName',
  DESCRIPTION: 'subhead',
  PHONE_CTA: 'phone',
  PHONE_NUMBER: 'phone',
};

export function getContentForRole(role: ElementRole, pkg: ContentPackage): string {
  const key = ROLE_TO_PACKAGE_KEY[role];
  if (key) {
    const v = pkg[key];
    if (typeof v === 'string' && v) return v;
  }
  switch (role) {
    case 'HEADLINE':
      return pkg.headline;
    case 'SUBHEAD':
      return pkg.subhead ?? '';
    case 'BRAND_NAME':
      return pkg.brandName ?? '';
    case 'MENU_TITLE':
      return pkg.menuTitle ?? pkg.headline;
    case 'PRODUCT_NAME':
      return pkg.productName ?? '';
    case 'DESCRIPTION':
      return pkg.subhead ?? pkg.bodyText ?? pkg.headline ?? '';
    case 'PHONE_NUMBER':
    case 'PHONE_CTA':
      return pkg.phone ?? '';
    case 'BODY_TEXT':
      return pkg.bodyText ?? '';
    default:
      return '';
  }
}

export function getImageQueryForRole(
  role: ElementRole,
  pkg: ContentPackage,
  imageIndex: number
): string {
  const queries = pkg.imageQueries;
  const fallback = pkg.headline || pkg.name || 'social media background';
  if (role === 'BACKGROUND_IMAGE' || role === 'HERO_IMAGE') return queries[0] ?? fallback;
  if (role === 'PROMO_IMAGE_1') return queries[0] ?? pkg.headline;
  if (role === 'PROMO_IMAGE_2') return queries[1] ?? queries[0] ?? pkg.headline;
  if (role === 'PROMO_IMAGE_3') return queries[2] ?? queries[0] ?? pkg.headline;
  if (Array.isArray(queries) && queries.length > 0) return queries[imageIndex % queries.length] ?? fallback;
  return fallback;
}
