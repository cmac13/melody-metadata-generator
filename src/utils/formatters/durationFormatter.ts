/**
 * Converts ISO 8601 duration format (e.g., "PT3M30S") to MM:SS format
 */
export const formatDuration = (isoDuration: string): string => {
  // Extract minutes and seconds from PT#M#S format
  const minutesMatch = isoDuration.match(/(\d+)M/);
  const secondsMatch = isoDuration.match(/(\d+)S/);
  
  const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
  const seconds = secondsMatch ? parseInt(secondsMatch[1]) : 0;
  
  // Pad with zeros to ensure format is always MM:SS
  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');
  
  return `${paddedMinutes}:${paddedSeconds}`;
};
