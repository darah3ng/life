import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface AnimateButtonProps {
  isAnimating: boolean;
  onClick: () => void;
}

export const AnimateButton: React.FC<AnimateButtonProps> = ({ isAnimating, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500"
        initial={{ x: '-100%' }}
        animate={{ x: isAnimating ? '100%' : '-100%' }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
      <Clock className="w-5 h-5 relative z-10" />
      <span className="relative z-10 font-medium">
        {isAnimating ? 'Pause Animation' : 'Animate Time'}
      </span>
    </motion.button>
  );
};