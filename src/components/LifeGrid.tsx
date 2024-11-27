import React, { useMemo } from 'react';
import { Dot } from './Dot';
import { VirtualizedGrid } from './VirtualizedGrid';
import { calculateTotalWeeks, calculateFilledWeeks } from '../utils/lifeCalculations';
import type { LifeConfig } from '../types';

interface LifeGridProps {
  config: LifeConfig;
}

export const LifeGrid: React.FC<LifeGridProps> = ({ config }) => {
  const totalWeeks = calculateTotalWeeks(config.maxAge);
  const filledWeeks = calculateFilledWeeks(config.currentAge);

  const renderDot = useMemo(() => (index: number) => (
    <Dot
      key={index}
      filled={index < filledWeeks}
      index={index}
      size={config.isZoomedOut ? 'small' : 'normal'}
    />
  ), [filledWeeks, config.isZoomedOut]);

  return (
    <div className="w-full">
      <VirtualizedGrid
        totalItems={totalWeeks}
        itemSize={16}
        columns={52}
        renderItem={renderDot}
        height={config.isZoomedOut ? 'auto' : 600}
      />
    </div>
  );
};