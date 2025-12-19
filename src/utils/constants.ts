// Conversion constants
export const METERS_PER_KM = 1000;
export const METERS_PER_MILE = 1609.34;
export const METERS_PER_YARD = 0.9144;
export const KM_PER_MILE = 1.60934;
export const YARDS_PER_100M = 91.44;
export const SECONDS_PER_HOUR = 3600;
export const SECONDS_PER_MINUTE = 60;

// Sport types
export type SportType = 'running' | 'swimming';

// Unit types
export type DistanceUnit = 'km' | 'm' | 'mi' | 'yd';
export type SpeedUnit = 'km/h' | 'mph' | 'm/s';
export type PaceUnit = 'min/km' | 'min/mi' | 'min/100m' | 'min/100yd';

// Conversion modes
export type ConversionMode = 
  | 'distance-time'
  | 'distance-pace'
  | 'pace-time'
  | 'speed-time'
  | 'speed-distance';
