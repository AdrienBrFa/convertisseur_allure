import {
  METERS_PER_KM,
  METERS_PER_MILE,
  METERS_PER_YARD,
  KM_PER_MILE,
  YARDS_PER_100M,
  SECONDS_PER_HOUR,
  SECONDS_PER_MINUTE,
  type DistanceUnit,
  type SpeedUnit,
  type PaceUnit,
  type SportType,
} from './constants';

/**
 * Convert any distance to meters (base unit)
 */
export function convertToMeters(distance: number, unit: DistanceUnit): number {
  switch (unit) {
    case 'm':
      return distance;
    case 'km':
      return distance * METERS_PER_KM;
    case 'yd':
      return distance * METERS_PER_YARD;
    case 'mi':
      return distance * METERS_PER_MILE;
    default:
      return distance;
  }
}

/**
 * Convert meters to any distance unit
 */
export function convertFromMeters(meters: number, unit: DistanceUnit): number {
  switch (unit) {
    case 'm':
      return meters;
    case 'km':
      return meters / METERS_PER_KM;
    case 'yd':
      return meters / METERS_PER_YARD;
    case 'mi':
      return meters / METERS_PER_MILE;
    default:
      return meters;
  }
}

/**
 * Convert any distance to km (for running calculations)
 */
export function convertToKm(distance: number, unit: DistanceUnit): number {
  switch (unit) {
    case 'km':
      return distance;
    case 'm':
      return distance / METERS_PER_KM;
    case 'mi':
      return distance * KM_PER_MILE;
    case 'yd':
      return distance * METERS_PER_YARD / METERS_PER_KM;
    default:
      return distance;
  }
}

/**
 * Convert km to any distance unit (for running)
 */
export function convertFromKm(km: number, unit: DistanceUnit): number {
  switch (unit) {
    case 'km':
      return km;
    case 'm':
      return km * METERS_PER_KM;
    case 'mi':
      return km / KM_PER_MILE;
    case 'yd':
      return (km * METERS_PER_KM) / METERS_PER_YARD;
    default:
      return km;
  }
}

/**
 * Parse time components to total seconds
 */
export function timeToSeconds(hours: number, minutes: number, seconds: number): number {
  return hours * SECONDS_PER_HOUR + minutes * SECONDS_PER_MINUTE + seconds;
}

/**
 * Convert seconds to time components
 */
export function secondsToTime(totalSeconds: number): { hours: number; minutes: number; seconds: number } {
  const hours = Math.floor(totalSeconds / SECONDS_PER_HOUR);
  const minutes = Math.floor((totalSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE);
  const seconds = Math.floor(totalSeconds % SECONDS_PER_MINUTE);
  return { hours, minutes, seconds };
}

/**
 * Format seconds as mm:ss for pace display
 */
export function formatPace(seconds: number): string {
  const m = Math.floor(seconds / SECONDS_PER_MINUTE);
  const s = Math.floor(seconds % SECONDS_PER_MINUTE);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/**
 * Parse pace string (mm:ss) to seconds per unit
 * Returns null if invalid format
 */
export function parsePace(paceString: string): number | null {
  const val = paceString.trim();
  if (!val) return null;
  
  const parts = val.split(':');
  if (parts.length !== 2) return null;
  
  const m = parseInt(parts[0]);
  const s = parseInt(parts[1]);
  
  if (isNaN(m) || isNaN(s)) return null;
  
  return m * SECONDS_PER_MINUTE + s;
}

/**
 * Convert pace to seconds per meter (base unit for swimming)
 */
export function paceToSecondsPerMeter(paceSeconds: number, paceUnit: PaceUnit): number {
  switch (paceUnit) {
    case 'min/100m':
      return paceSeconds / 100;
    case 'min/100yd':
      return paceSeconds / YARDS_PER_100M;
    case 'min/km':
      return paceSeconds / METERS_PER_KM;
    case 'min/mi':
      return paceSeconds / METERS_PER_MILE;
    default:
      return paceSeconds / 100;
  }
}

/**
 * Convert seconds per meter to pace for display
 */
export function secondsPerMeterToPace(secPerMeter: number, paceUnit: PaceUnit): number {
  switch (paceUnit) {
    case 'min/100m':
      return secPerMeter * 100;
    case 'min/100yd':
      return secPerMeter * YARDS_PER_100M;
    case 'min/km':
      return secPerMeter * METERS_PER_KM;
    case 'min/mi':
      return secPerMeter * METERS_PER_MILE;
    default:
      return secPerMeter * 100;
  }
}

/**
 * Convert speed value to meters per second (base unit)
 */
export function speedToMetersPerSecond(speed: number, speedUnit: SpeedUnit): number {
  switch (speedUnit) {
    case 'km/h':
      return (speed * METERS_PER_KM) / SECONDS_PER_HOUR;
    case 'mph':
      return (speed * METERS_PER_MILE) / SECONDS_PER_HOUR;
    case 'm/s':
      return speed;
    default:
      return speed;
  }
}

/**
 * Convert meters per second to speed display
 */
export function metersPerSecondToSpeed(metersPerSecond: number, speedUnit: SpeedUnit): number {
  switch (speedUnit) {
    case 'km/h':
      return (metersPerSecond * SECONDS_PER_HOUR) / METERS_PER_KM;
    case 'mph':
      return (metersPerSecond * SECONDS_PER_HOUR) / METERS_PER_MILE;
    case 'm/s':
      return metersPerSecond;
    default:
      return metersPerSecond;
  }
}

/**
 * Calculate pace from distance and time
 */
export function calculatePace(
  distanceInMeters: number,
  timeInSeconds: number,
  paceUnit: PaceUnit,
  sport: SportType
): string {
  if (!distanceInMeters || distanceInMeters <= 0 || !timeInSeconds || timeInSeconds <= 0) {
    return '';
  }

  const secPerMeter = timeInSeconds / distanceInMeters;
  const paceInSeconds = secondsPerMeterToPace(secPerMeter, paceUnit);
  
  return formatPace(paceInSeconds);
}

/**
 * Calculate speed from distance and time
 */
export function calculateSpeed(
  distanceInMeters: number,
  timeInSeconds: number,
  speedUnit: SpeedUnit
): string {
  if (!distanceInMeters || distanceInMeters <= 0 || !timeInSeconds || timeInSeconds <= 0) {
    return '';
  }

  const metersPerSecond = distanceInMeters / timeInSeconds;
  const speed = metersPerSecondToSpeed(metersPerSecond, speedUnit);
  
  return speed.toFixed(2);
}

/**
 * Calculate time from pace and distance
 */
export function calculateTimeFromPace(
  paceSeconds: number,
  distanceInMeters: number,
  paceUnit: PaceUnit
): { hours: number; minutes: number; seconds: number } | null {
  if (!distanceInMeters || distanceInMeters <= 0 || !paceSeconds || paceSeconds <= 0) {
    return null;
  }

  const secPerMeter = paceToSecondsPerMeter(paceSeconds, paceUnit);
  const totalSeconds = secPerMeter * distanceInMeters;
  
  return secondsToTime(totalSeconds);
}

/**
 * Calculate distance from pace and time
 */
export function calculateDistanceFromPace(
  paceSeconds: number,
  timeInSeconds: number,
  paceUnit: PaceUnit,
  distanceUnit: DistanceUnit
): number | null {
  if (!timeInSeconds || timeInSeconds <= 0 || !paceSeconds || paceSeconds <= 0) {
    return null;
  }

  const secPerMeter = paceToSecondsPerMeter(paceSeconds, paceUnit);
  const meters = timeInSeconds / secPerMeter;
  
  return convertFromMeters(meters, distanceUnit);
}

/**
 * Calculate time from speed and distance
 */
export function calculateTimeFromSpeed(
  speed: number,
  distanceInMeters: number,
  speedUnit: SpeedUnit
): { hours: number; minutes: number; seconds: number } | null {
  if (!distanceInMeters || distanceInMeters <= 0 || !speed || speed <= 0) {
    return null;
  }

  const metersPerSecond = speedToMetersPerSecond(speed, speedUnit);
  const totalSeconds = distanceInMeters / metersPerSecond;
  
  return secondsToTime(totalSeconds);
}

/**
 * Calculate distance from speed and time
 */
export function calculateDistanceFromSpeed(
  speed: number,
  timeInSeconds: number,
  speedUnit: SpeedUnit,
  distanceUnit: DistanceUnit
): number | null {
  if (!timeInSeconds || timeInSeconds <= 0 || !speed || speed <= 0) {
    return null;
  }

  const metersPerSecond = speedToMetersPerSecond(speed, speedUnit);
  const meters = metersPerSecond * timeInSeconds;
  
  return convertFromMeters(meters, distanceUnit);
}
