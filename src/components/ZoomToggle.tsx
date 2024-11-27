import React from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ZoomToggleProps {
  isZoomedOut: boolean;
  onToggle: () => void;
}

export const ZoomToggle: React.FC<ZoomToggleProps> = ({ isZoomedOut, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 
                 transition-colors duration-200"
    >
      {isZoomedOut ? (
        <>
          <ZoomIn className="w-4 h-4" />
          <span>Zoom In</span>
        </>
      ) : (
        <>
          <ZoomOut className="w-4 h-4" />
          <span>Zoom Out</span>
        </>
      )}
    </button>
  );
};