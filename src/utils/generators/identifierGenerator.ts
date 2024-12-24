export const generateUPC = () => {
  const digits: number[] = [];
  for (let i = 0; i < 11; i++) {
    digits.push(Math.floor(Math.random() * 10));
  }

  let oddSum = 0;
  let evenSum = 0;
  
  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) {
      oddSum += digits[i];
    } else {
      evenSum += digits[i];
    }
  }
  
  const total = (oddSum * 3) + evenSum;
  const checkDigit = (10 - (total % 10)) % 10;
  
  return digits.join('') + checkDigit;
};