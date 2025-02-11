import { faker } from '@faker-js/faker';
import { generateTitle } from './generators/titleGenerator';
import { generateISWC, generateLyrics, generateContribution, generatePublisher, generatePartnerId } from './generators/publishingGenerator';
import { Work, PublishingMetadata } from '@/types/publishingMetadata';
import { Metadata } from '@/types/metadata';

const musicTypes = ["pop", "classical", "rock", "jazz", "electronic", "hip-hop"] as const;
const agencies = ["McDonald Publishing", "Smith & Associates", "Global Music Rights", "Indie Publishing Co"] as const;

type MusicType = typeof musicTypes[number];
type Agency = typeof agencies[number];

interface WorkGenerationOptions {
  trackData?: { track: { title: string } };
  recordingMetadata?: Metadata;
}

const generateSingleWork = ({ trackData, recordingMetadata }: WorkGenerationOptions): Work => {
  try {
    const work: Work = {
      id: faker.number.int({ min: 6000000, max: 6999999 }),
      title: trackData?.track?.title || generateTitle(),
      iswc: generateISWC(),
      language: "English",
      label_work_code: `WORKS${faker.string.numeric(3)}`,
      music_type: (recordingMetadata?.music_type as MusicType) || musicTypes[Math.floor(Math.random() * musicTypes.length)],
      agency: agencies[Math.floor(Math.random() * agencies.length)],
      keywords: `${recordingMetadata?.music_type || 'pop'} ${faker.word.words(2)}`,
      contains_ai: Math.random() > 0.9,
      lyrics: generateLyrics(),
      copyright_year: recordingMetadata?.release_date 
        ? parseInt(recordingMetadata.release_date.slice(0, 4)) 
        : faker.number.int({ min: 1950, max: 2024 }),
      description: `Written by ${faker.person.fullName()} and ${faker.person.fullName()}, ${faker.lorem.sentence()}`,
      contributions: [generateContribution(1, trackData?.track?.title)],
      publishers: [generatePublisher()],
      partner_ids: [generatePartnerId()]
    };
    return work;
  } catch (error) {
    console.error('Error generating work:', error);
    throw new Error('Failed to generate work metadata');
  }
};

export const generateRandomPublishingMetadata = (
  baseMetadata: Partial<PublishingMetadata>, 
  recordingMetadata: Metadata | null
): PublishingMetadata => {
  try {
    const newMetadata: PublishingMetadata = { works: [] };
    
    if (recordingMetadata?.discs?.[0]?.disc_tracks) {
      newMetadata.works = recordingMetadata.discs[0].disc_tracks.map(trackData => 
        generateSingleWork({ trackData, recordingMetadata })
      );
    } else {
      newMetadata.works = [generateSingleWork({})];
    }
    
    return newMetadata;
  } catch (error) {
    console.error('Error generating publishing metadata:', error);
    return { works: [] };
  }
};
