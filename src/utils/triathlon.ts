// Triathlon distance category defaults
// Distances are set using widely accepted formats and can be edited later.

export type TriathlonCategory = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface TriathlonDistances {
  // Swim distance in meters
  swim_m: number;
  // Bike distance in kilometers
  bike_km: number;
  // Run distance in kilometers
  run_km: number;
}

export const TRIATHLON_CATEGORIES: Record<TriathlonCategory, TriathlonDistances> = {
  // Super Sprint
  XS: { swim_m: 400, bike_km: 10, run_km: 2.5 },
  // Sprint
  S: { swim_m: 750, bike_km: 20, run_km: 5 },
  // Olympic
  M: { swim_m: 1500, bike_km: 40, run_km: 10 },
  // Half / 70.3
  L: { swim_m: 1900, bike_km: 90, run_km: 21.1 },
  // Full / Ironman
  XL: { swim_m: 3800, bike_km: 180, run_km: 42.195 },
};

export const TRIATHLON_CATEGORY_LIST: { key: TriathlonCategory; label: string }[] = [
  { key: 'XS', label: 'XS (Super Sprint)' },
  { key: 'S', label: 'S (Sprint)' },
  { key: 'M', label: 'M (Olympic)' },
  { key: 'L', label: 'L (Half / 70.3)' },
  { key: 'XL', label: 'XL (Full / Ironman)' },
];
