export interface LifeConfig {
  currentAge: number;
  maxAge: number;
  weeksPerYear: number;
  isZoomedOut: boolean;
}

export interface DotProps {
  filled: boolean;
  index: number;
  size?: 'small' | 'normal';
}