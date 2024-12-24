import { add } from "date-fns";

const artistNames = [
  "The Midnight Riders", "Crystal Waters", "Sonic Dreamers", "Electric Pulse", "The Velvet Echo",
  "Mountain Sound", "Urban Lights", "The Jazz Collective", "Neon Symphony", "Desert Wind",
  "Luna Eclipse", "The Cosmic Drifters", "Emerald Forest", "Silver Waves", "Thunder Roads",
  "Mystic Garden", "Ocean's Echo", "Starlight Brigade", "The Neon Phantoms", "Crimson Sky",
  "Arctic Pulse", "Solar Winds", "Midnight Mirage", "The Urban Poets", "Crystal Cascade",
  "Quantum Beat", "Digital Dreams", "The Analog Kids", "Cyber Symphony", "Electric Storm",
  "Lunar Tides", "The Velvet Underground", "Sonic Waves", "Northern Lights", "Desert Storm",
  "Mountain Echo", "Urban Symphony", "Jazz Fusion", "Neon Dreams", "Crystal Waters"
];

const musicTypes = [
  "pop", "rock", "jazz", "electronic", "classical", "r&b", "hip-hop", "indie", "folk", "ambient",
  "blues", "country", "metal", "punk", "reggae", "soul", "funk", "dance", "world", "experimental"
];

const adjectives = [
  "Lost", "Eternal", "Midnight", "Golden", "Electric", "Wild", "Sacred", "Neon", "Crystal", "Velvet",
  "Cosmic", "Mystic", "Digital", "Analog", "Quantum", "Solar", "Lunar", "Northern", "Southern", "Eastern",
  "Western", "Infinite", "Ancient", "Modern", "Future", "Retro", "Vintage", "Classic", "Neo", "Ultra",
  "Hyper", "Cyber", "Dream", "Virtual", "Astral", "Ethereal", "Celestial", "Temporal", "Spatial", "Primal",
  "Savage", "Gentle", "Fierce", "Serene", "Chaotic", "Harmonic", "Dynamic", "Static", "Fluid", "Solid"
];

const nouns = [
  "Dreams", "Heart", "Journey", "Symphony", "Horizon", "Memory", "Dance", "Echo", "Light", "Wave",
  "Pulse", "Spirit", "Vision", "Path", "Storm", "River", "Ocean", "Mountain", "Desert", "Forest",
  "City", "Sky", "Star", "Moon", "Sun", "Wind", "Fire", "Earth", "Water", "Space",
  "Time", "Mind", "Soul", "Body", "Voice", "Sound", "Rhythm", "Beat", "Melody", "Harmony",
  "Paradise", "Universe", "Galaxy", "Planet", "World", "Reality", "Fantasy", "Mystery", "Magic", "Wonder"
];

const trackWords = [
  "Sunrise", "Sunset", "Twilight", "Dawn", "Dusk", "Midnight", "Noon", "Evening", "Morning", "Night",
  "Awakening", "Dreaming", "Flying", "Running", "Dancing", "Singing", "Breathing", "Living", "Loving", "Being",
  "Journey", "Adventure", "Quest", "Mission", "Voyage", "Expedition", "Discovery", "Exploration", "Search", "Finding",
  "Memory", "Moment", "Second", "Minute", "Hour", "Day", "Week", "Month", "Year", "Lifetime",
  "Beginning", "Middle", "Ending", "Prelude", "Interlude", "Finale", "Overture", "Movement", "Chapter", "Story",
  "Ocean", "River", "Lake", "Stream", "Waterfall", "Mountain", "Valley", "Forest", "Desert", "Prairie",
  "City", "Street", "Road", "Path", "Trail", "Bridge", "Tunnel", "Gateway", "Portal", "Door",
  "Heart", "Mind", "Soul", "Spirit", "Body", "Voice", "Sound", "Silence", "Echo", "Whisper",
  "Light", "Shadow", "Dark", "Bright", "Glow", "Shine", "Sparkle", "Glitter", "Flash", "Beam",
  "Wind", "Storm", "Rain", "Snow", "Ice", "Fire", "Earth", "Metal", "Wood", "Water"
];

const generateTitle = () => {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adj} ${noun}`;
};

const generateTrackTitle = (albumTitle: string, index: number) => {
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

// Keep track of used ISRCs
const usedISRCs = new Set<string>();

const generateUniqueISRC = () => {
  const prefix = "USOPM"; // Standard prefix
  let isrc: string;
  
  do {
    // Generate a 7-digit number between 1000000 and 9999999
    const number = Math.floor(Math.random() * 9000000) + 1000000;
    isrc = `${prefix}${number}`;
  } while (usedISRCs.has(isrc));
  
  usedISRCs.add(isrc);
  return isrc;
};

const generateTracks = (albumTitle: string, isSingle: boolean) => {
  const trackCount = isSingle ? 1 : Math.floor(Math.random() * 15) + 5; // 5-20 tracks for albums
  return Array.from({ length: trackCount }, (_, index) => ({
    track: {
      title: generateTrackTitle(albumTitle, index),
      track_type: "audio",
      isrc: generateUniqueISRC(),
      audio_language: "English",
      metadata_language: "English",
      primary_recording_location: "US",
      metadata_language_country: "United States",
      parental_advisory: "Non-Applicable",
      duration: "PT3M30S",
      preview_in: "PT30S",
      sample_length: "PT30S"
    }
  }));
};

const generateFutureDate = () => {
  const today = new Date();
  const daysToAdd = Math.floor(Math.random() * 365) + 30; // Between 30 and 395 days in the future
  return add(today, { days: daysToAdd }).toISOString().split('T')[0];
};

export const generateRandomMetadata = (baseMetadata: any) => {
  const newArtist = artistNames[Math.floor(Math.random() * artistNames.length)];
  const newTitle = generateTitle();
  const newMusicType = musicTypes[Math.floor(Math.random() * musicTypes.length)];
  const newReleaseDate = generateFutureDate();
  const isSingle = Math.random() < 0.3; // 30% chance of being a single

  const newMetadata = { ...baseMetadata };

  newMetadata.title = newTitle;
  newMetadata.artist_display_name = newArtist;
  newMetadata.music_type = newMusicType;
  newMetadata.release_date = newReleaseDate;
  newMetadata.display_title = `${newArtist} - ${newTitle}`;
  newMetadata.configuration = isSingle ? "Digital Single" : "Digital Album";

  if (newMetadata.cover_art) {
    newMetadata.cover_art.title = `${newTitle} Cover Art`;
  }

  if (newMetadata.discs) {
    newMetadata.discs[0].disc_tracks = generateTracks(newTitle, isSingle);
  }

  return newMetadata;
};
