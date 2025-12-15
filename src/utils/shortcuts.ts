import type { SportType } from './constants';

export interface Shortcut {
  label: string;
  value: number | string;
}

export interface ShortcutsConfig {
  distance: Shortcut[];
  time: Shortcut[];
  pace: Shortcut[];
  speed: Shortcut[];
}

/**
 * Shortcuts for running
 */
export const RUNNING_SHORTCUTS: ShortcutsConfig = {
  distance: [
    { label: '5 km', value: 5 },
    { label: '10 km', value: 10 },
    { label: '20 km', value: 20 },
    { label: 'Semi', value: 21.0975 },
    { label: 'Marathon', value: 42.195 },
    { label: '50 km', value: 50 },
  ],
  time: [
    { label: '30 min', value: '00:30:00' },
    { label: '1h', value: '01:00:00' },
    { label: '1h30', value: '01:30:00' },
    { label: '2h', value: '02:00:00' },
    { label: '3h', value: '03:00:00' },
    { label: '4h', value: '04:00:00' },
  ],
  pace: [
    { label: '4:30', value: '4:30' },
    { label: '5:00', value: '5:00' },
    { label: '5:30', value: '5:30' },
    { label: '6:00', value: '6:00' },
    { label: '6:30', value: '6:30' },
    { label: '7:00', value: '7:00' },
  ],
  speed: [
    { label: '10 km/h', value: 10 },
    { label: '12 km/h', value: 12 },
    { label: '14 km/h', value: 14 },
    { label: '16 km/h', value: 16 },
    { label: '18 km/h', value: 18 },
    { label: '20 km/h', value: 20 },
  ],
};

/**
 * Shortcuts for swimming
 */
export const SWIMMING_SHORTCUTS: ShortcutsConfig = {
  distance: [
    { label: '50 m', value: 50 },
    { label: '100 m', value: 100 },
    { label: '200 m', value: 200 },
    { label: '400 m', value: 400 },
    { label: '800 m', value: 800 },
    { label: '1500 m', value: 1500 },
  ],
  time: [
    { label: '1 min', value: '00:01:00' },
    { label: '2 min', value: '00:02:00' },
    { label: '5 min', value: '00:05:00' },
    { label: '10 min', value: '00:10:00' },
    { label: '20 min', value: '00:20:00' },
    { label: '30 min', value: '00:30:00' },
  ],
  pace: [
    { label: '1:20', value: '1:20' },
    { label: '1:40', value: '1:40' },
    { label: '2:00', value: '2:00' },
    { label: '2:20', value: '2:20' },
    { label: '2:40', value: '2:40' },
    { label: '3:00', value: '3:00' },
  ],
  speed: [
    { label: '2 km/h', value: 2 },
    { label: '3 km/h', value: 3 },
    { label: '4 km/h', value: 4 },
    { label: '5 km/h', value: 5 },
    { label: '6 km/h', value: 6 },
  ],
};

/**
 * Get shortcuts for a specific sport
 */
export function getShortcuts(sport: SportType): ShortcutsConfig {
  return sport === 'running' ? RUNNING_SHORTCUTS : SWIMMING_SHORTCUTS;
}
