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

export const generateTitle = () => {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adj} ${noun}`;
};