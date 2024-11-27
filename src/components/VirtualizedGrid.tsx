import React, { useRef, useEffect, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { motion, usePresence } from 'framer-motion';

interface VirtualizedGridProps {
  totalItems: number;
  itemSize: number;
  columns: number;
  renderItem: (index: number) => React.ReactNode;
  height?: number | 'auto';
}

export const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({
  totalItems,
  itemSize,
  columns,
  renderItem,
  height = 600,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [isPresent] = usePresence();

  useEffect(() => {
    if (parentRef.current) {
      setParentWidth(parentRef.current.offsetWidth);
    }
  }, []);

  const rows = Math.ceil(totalItems / columns);
  const totalHeight = height === 'auto' ? rows * itemSize : height;

  const rowVirtualizer = useVirtualizer({
    count: rows,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemSize,
    overscan: 5,
  });

  return (
    <motion.div
      ref={parentRef}
      className={`${height === 'auto' ? '' : 'overflow-auto'} px-4 py-2`}
      style={{ height: totalHeight }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${itemSize}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
            className="grid grid-cols-52 gap-1"
          >
            {Array.from({ length: columns }).map((_, col) => {
              const itemIndex = virtualRow.index * columns + col;
              if (itemIndex >= totalItems) return null;
              return (
                <div key={col} className="flex items-center justify-center">
                  {renderItem(itemIndex)}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
};