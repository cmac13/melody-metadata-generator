export const artistNames = [
  "The Midnight Riders", "Crystal Waters", "Sonic Dreamers", "Electric Pulse", "The Velvet Echo",
  "Mountain Sound", "Urban Lights", "The Jazz Collective", "Neon Symphony", "Desert Wind",
  "Luna Eclipse", "The Cosmic Drifters", "Emerald Forest", "Silver Waves", "Thunder Roads",
  "Mystic Garden", "Ocean's Echo", "Starlight Brigade", "The Neon Phantoms", "Crimson Sky",
  "Arctic Pulse", "Solar Winds", "Midnight Mirage", "The Urban Poets", "Crystal Cascade",
  "Quantum Beat", "Digital Dreams", "The Analog Kids", "Cyber Symphony", "Electric Storm",
  "Lunar Tides", "The Velvet Underground", "Sonic Waves", "Northern Lights", "Desert Storm",
  "Mountain Echo", "Urban Symphony", "Jazz Fusion", "Neon Dreams", "Crystal Waters"
];

export const generateArtistName = () => {
  return artistNames[Math.floor(Math.random() * artistNames.length)];
};