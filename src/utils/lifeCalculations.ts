export const calculateTotalWeeks = (maxAge: number): number => maxAge * 52;

export const calculateFilledWeeks = (currentAge: number): number => 
  Math.round(currentAge * 52);

export const formatAge = (age: number): string => {
  const formatted = Number(age.toFixed(1));
  return formatted === Math.floor(formatted) 
    ? Math.floor(formatted).toString()
    : formatted.toString();
};

export const validateAgeInput = (value: string): boolean => {
  if (value === '') return true;
  
  // Allow numbers with up to 1 decimal place
  const regex = /^\d*\.?\d{0,1}$/;
  if (!regex.test(value)) return false;
  
  const numValue = Number(value);
  return !isNaN(numValue) && numValue >= 0 && numValue <= 90;
};