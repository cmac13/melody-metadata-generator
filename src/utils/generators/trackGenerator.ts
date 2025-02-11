const trackWords = [
  "Sunrise", "Sunset", "Twilight", "Dawn", "Dusk", "Midnight", "Noon", "Evening", "Morning", "Night",
  "Awakening", "Dreaming", "Flying", "Running", "Dancing", "Singing", "Breathing", "Living", "Loving", "Being",
  "Journey", "Adventure", "Quest", "Mission", "Voyage", "Expedition", "Discovery", "Exploration", "Search", "Finding",
  "Memory", "Moment", "Second", "Minute", "Hour", "Day", "Week", "Month", "Year", "Lifetime",
  "Beginning", "Middle", "Ending", "Prelude", "Interlude", "Finale", "Overture", "Movement", "Chapter", "Story"
];

// Keep track of used ISRCs
const usedISRCs = new Set<string>();

const generateUniqueISRC = () => {
  const prefix = "USOPM";
  let isrc: string;
  
  do {
    const number = Math.floor(Math.random() * 9000000) + 1000000;
    isrc = `${prefix}${number}`;
  } while (usedISRCs.has(isrc));
  
  usedISRCs.add(isrc);
  return isrc;
};

export const generateTrackTitle = (albumTitle: string, index: number) => {
  if (index === 0) {
    return albumTitle;
  }
  
  const word1 = trackWords[Math.floor(Math.random() * trackWords.length)];
  const word2 = trackWords[Math.floor(Math.random() * trackWords.length)];
  const patterns = [
    `${word1} ${word2}`,
    `The ${word1}`,
    `${word1} of ${word2}`,
    `${word1} in the ${word2}`,
    `${word1} Through ${word2}`,
    `When ${word1} Meets ${word2}`,
    `${word1} Dreams`,
    `${word1} Light`,
    `${word1} Ways`,
    `${word1} Nights`
  ];
  
  return patterns[Math.floor(Math.random() * patterns.length)];
};

const generateRandomDuration = () => {
  // Generate a random duration between 2:00 and 5:59
  const minutes = Math.floor(Math.random() * 4) + 2; // 2-5 minutes
  const seconds = Math.floor(Math.random() * 60); // 0-59 seconds
  return `PT${minutes}M${seconds}S`;
};

export const generateTracks = (albumTitle: string, isSingle: boolean) => {
  const trackCount = isSingle ? 1 : Math.floor(Math.random() * 15) + 5;
  const tracks = Array.from({ length: trackCount }, (_, index) => {
    const trackTitle = generateTrackTitle(albumTitle, index);
    const duration = generateRandomDuration();
    return {
      track: {
        title: trackTitle,
        isrc: generateUniqueISRC(),
        duration,
        audio_language: "English",
      }
    };
  });
  return tracks;
};
