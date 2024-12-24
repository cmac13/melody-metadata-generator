import { add } from "date-fns";

const artistNames = [
  "The Midnight Riders",
  "Crystal Waters",
  "Sonic Dreamers",
  "Electric Pulse",
  "The Velvet Echo",
  "Mountain Sound",
  "Urban Lights",
  "The Jazz Collective",
  "Neon Symphony",
  "Desert Wind"
];

const musicTypes = ["pop", "rock", "jazz", "electronic", "classical", "r&b", "hip-hop", "indie", "folk", "ambient"];

const generateTitle = () => {
  const adjectives = ["Lost", "Eternal", "Midnight", "Golden", "Electric", "Wild", "Sacred", "Neon", "Crystal", "Velvet"];
  const nouns = ["Dreams", "Heart", "Journey", "Symphony", "Horizon", "Memory", "Dance", "Echo", "Light", "Wave"];
  return `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
};

const generateTrackTitle = (albumTitle: string, index: number) => {
  const trackTitles = [
    "Introduction",
    "The Beginning",
    "Midnight Hour",
    "Dancing in the Rain",
    "Sunset Boulevard",
    "Morning Light",
    "Evening Star",
    "Dreamscape",
    "Urban Legend",
    "Final Chapter",
    "The Journey",
    "Memories",
    "Echoes",
    "Reflections",
    "Tomorrow's Promise"
  ];

  if (index === 0) {
    return albumTitle;
  }
  return trackTitles[Math.floor(Math.random() * trackTitles.length)];
};

const generateTracks = (albumTitle: string, isSingle: boolean) => {
  const trackCount = isSingle ? 1 : Math.floor(Math.random() * 15) + 5; // 5-20 tracks for albums
  return Array.from({ length: trackCount }, (_, index) => ({
    track: {
      title: generateTrackTitle(albumTitle, index),
      track_type: "audio",
      isrc: `USOPM${Math.floor(Math.random() * 9000000) + 1000000}`,
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