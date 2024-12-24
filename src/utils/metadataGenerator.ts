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

const generateFutureDate = () => {
  const today = new Date();
  const daysToAdd = Math.floor(Math.random() * 365) + 30; // Between 30 and 395 days in the future
  return add(today, { days: daysToAdd }).toISOString().split('T')[0];
};

export const generateRandomMetadata = (baseMetadata: any) => {
  // Generate consistent values for this release
  const newArtist = artistNames[Math.floor(Math.random() * artistNames.length)];
  const newTitle = generateTitle();
  const newMusicType = musicTypes[Math.floor(Math.random() * musicTypes.length)];
  const newReleaseDate = generateFutureDate();

  const newMetadata = { ...baseMetadata };

  // Update top-level fields
  newMetadata.title = newTitle;
  newMetadata.artist_display_name = newArtist;
  newMetadata.music_type = newMusicType;
  newMetadata.release_date = newReleaseDate;
  newMetadata.display_title = `${newArtist} - ${newTitle}`;

  // Update cover art title
  if (newMetadata.cover_art) {
    newMetadata.cover_art.title = `${newTitle} Cover Art`;
  }

  // Update tracks
  if (newMetadata.discs) {
    newMetadata.discs.forEach((disc: any) => {
      if (disc.disc_tracks) {
        disc.disc_tracks.forEach((trackData: any) => {
          if (trackData.track) {
            trackData.track.title = `${newTitle} - Track ${Math.floor(Math.random() * 10) + 1}`;
            trackData.track.artist_display_name = newArtist;
            trackData.track.music_type = newMusicType;
            
            // Update works within tracks
            if (trackData.track.works) {
              trackData.track.works.forEach((work: any) => {
                work.title = trackData.track.title;
                work.music_type = newMusicType;
              });
            }
          }
        });
      }
    });
  }

  return newMetadata;
};