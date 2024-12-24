import { generateArtistName } from './generators/artistGenerator';
import { generateTitle } from './generators/titleGenerator';
import { generateTracks } from './generators/trackGenerator';
import { generateUPC } from './generators/identifierGenerator';
import { generateFutureDate } from './generators/dateGenerator';

const musicTypes = ["pop", "classical"];

export const generateRandomMetadata = (baseMetadata: any) => {
  const newArtist = generateArtistName();
  const newTitle = generateTitle();
  const newMusicType = musicTypes[Math.floor(Math.random() * musicTypes.length)];
  const newReleaseDate = generateFutureDate();
  const isSingle = Math.random() < 0.3;
  const newUPC = generateUPC();

  const newMetadata = { ...baseMetadata };

  newMetadata.title = newTitle;
  newMetadata.artist_display_name = newArtist;
  newMetadata.music_type = newMusicType;
  newMetadata.release_date = newReleaseDate;
  newMetadata.display_title = `${newArtist} - ${newTitle}`;
  newMetadata.configuration = isSingle ? "Digital Single" : "Digital Album";
  newMetadata.label = "OpenPlay Music";
  newMetadata.display_label = "OpenPlay Music";
  newMetadata.upc = newUPC;

  if (newMetadata.cover_art) {
    newMetadata.cover_art.title = `${newTitle} Cover Art`;
  }

  if (newMetadata.discs) {
    newMetadata.discs[0].disc_tracks = generateTracks(newTitle, isSingle);
    newMetadata.discs[0].upc = newUPC;
  }

  return newMetadata;
};