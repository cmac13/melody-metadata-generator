export interface Artist {
  id: number;
  name: string;
}

export interface Contribution {
  artist: Artist;
  affiliation: string;
  country: string;
  role: string;
  type: string;
  id: number;
  position: number;
  split_percent: number | null;
  work_title?: string;
}

export interface Publisher {
  publisher: {
    name: string;
    id: number;
  };
  rights_administrator: string;
  split_percent: number;
}

export interface Work {
  id: number;
  title: string;
  iswc: string;
  language: string;
  label_work_code: string;
  music_type: string;
  agency: string;
  keywords: string;
  contains_ai: boolean;
  lyrics: string;
  copyright_year: number;
  description: string;
  contributions: Contribution[];
  publishers: Publisher[];
  partner_ids: string[];
}

export interface PublishingMetadata {
  works: Work[];
}
