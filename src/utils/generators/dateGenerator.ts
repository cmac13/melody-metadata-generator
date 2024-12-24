import { add } from "date-fns";

export const generateFutureDate = () => {
  const today = new Date();
  const daysToAdd = Math.floor(Math.random() * 365) + 30;
  return add(today, { days: daysToAdd }).toISOString().split('T')[0];
};