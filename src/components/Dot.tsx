import React, { memo } from 'react';
import type { DotProps } from '../types';

export const Dot: React.FC<DotProps> = memo(({ filled, size = 'normal' }) => {
  return (
    <div
      className={`rounded-full transition-colors duration-300
                ${filled ? 'bg-green-600' : 'bg-gray-200'}
                ${size === 'small' ? 'w-1.5 h-1.5' : 'w-2.5 h-2.5'}`}
    />
  );
});