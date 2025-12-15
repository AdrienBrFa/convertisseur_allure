import type { SportType, DistanceUnit, PaceUnit, SpeedUnit } from './constants';

export interface ConverterConfig {
  sport: SportType;
  title: string;
  emoji: string;
  distanceUnits: { value: DistanceUnit; label: string }[];
  paceUnits: { value: PaceUnit; label: string }[];
  speedUnits: { value: SpeedUnit; label: string }[];
  defaultDistanceUnit: DistanceUnit;
  defaultPaceUnit: PaceUnit;
  defaultSpeedUnit: SpeedUnit;
}

export const RUNNING_CONFIG: ConverterConfig = {
  sport: 'running',
  title: 'Running Pace Converter',
  emoji: '🏃',
  distanceUnits: [
    { value: 'km', label: 'km' },
    { value: 'm', label: 'm' },
    { value: 'mi', label: 'mi' },
  ],
  paceUnits: [
    { value: 'min/km', label: 'min/km' },
    { value: 'min/mi', label: 'min/mi' },
  ],
  speedUnits: [
    { value: 'km/h', label: 'km/h' },
    { value: 'mph', label: 'mph' },
    { value: 'm/s', label: 'm/s' },
  ],
  defaultDistanceUnit: 'km',
  defaultPaceUnit: 'min/km',
  defaultSpeedUnit: 'km/h',
};

export const SWIMMING_CONFIG: ConverterConfig = {
  sport: 'swimming',
  title: 'Swimming Pace Converter',
  emoji: '🏊',
  distanceUnits: [
    { value: 'm', label: 'm' },
    { value: 'km', label: 'km' },
    { value: 'yd', label: 'yd' },
    { value: 'mi', label: 'mi' },
  ],
  paceUnits: [
    { value: 'min/100m', label: 'min/100m' },
    { value: 'min/100yd', label: 'min/100yd' },
  ],
  speedUnits: [
    { value: 'km/h', label: 'km/h' },
    { value: 'mph', label: 'mph' },
    { value: 'm/s', label: 'm/s' },
  ],
  defaultDistanceUnit: 'm',
  defaultPaceUnit: 'min/100m',
  defaultSpeedUnit: 'km/h',
};
