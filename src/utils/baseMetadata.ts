import { generateRandomMetadata } from './metadataGenerator';

// Create a template with minimal required structure
const templateMetadata = {
  "title": "",
  "release_date": "",
  "display_label": "",
  "audio_presentation": "Stereo",
  "audio_language": "English",
  "metadata_language": "English",
  "music_type": "",
  "artist_display_name": "",
  "configuration": "",
  "label": "",
  "cover_art": {
    "title": "",
    "resource_number": "24OMGRES00001",
    "parental_advisory": "Non-Applicable"
  },
  "discs": [
    {
      "disc_tracks": [],
      "upc": "000000000017"
    }
  ],
  "display_title": "",
  "metadata_language_country": "US",
  "catalog_number": "SRG00001",
  "upc": "000000000017",
  "parental_advisory": "Non-Applicable"
};

// Generate random initial metadata
export const baseMetadata = generateRandomMetadata(templateMetadata);