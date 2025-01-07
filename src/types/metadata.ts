export interface Track {
  title: string;
  track_type: string;
  isrc: string;
  audio_language: string;
  metadata_language: string;
  primary_recording_location: string;
  metadata_language_country: string;
  parental_advisory: string;
  duration: string;
  preview_in: string;
  sample_length: string;
}

export interface Disc {
  disc_tracks: Array<{ track: Track }>;
  upc: string;
}

export interface CoverArt {
  title: string;
  resource_number: string;
  parental_advisory: string;
}

export interface Metadata {
  title: string;
  release_date: string;
  display_label: string;
  audio_presentation: string;
  audio_language: string;
  metadata_language: string;
  music_type: string;
  artist_display_name: string;
  configuration: string;
  label: string;
  cover_art: CoverArt;
  discs: Disc[];
  display_title: string;
  metadata_language_country: string;
  catalog_number: string;
  upc: string;
  parental_advisory: string;
}