import React from 'react';
import { validateAgeInput, formatAge } from '../utils/lifeCalculations';

interface AgeInputProps {
  currentAge: number;
  onChange: (age: number) => void;
}

export const AgeInput: React.FC<AgeInputProps> = ({ currentAge, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (value === '') {
      onChange(0);
      return;
    }

    if (validateAgeInput(value)) {
      const numValue = parseFloat(value);
      onChange(Math.min(90, numValue));
    }
  };

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="age" className="text-lg font-medium text-gray-700">
        Current Age:
      </label>
      <input
        type="text"
        id="age"
        value={currentAge === 0 ? '' : formatAge(currentAge)}
        onChange={handleChange}
        className="w-24 px-3 py-2 text-center bg-white border-2 border-gray-200 rounded-lg 
                 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                 transition-all duration-200"
        placeholder="Age"
      />
    </div>
  );
};