import { faker } from '@faker-js/faker';
import { Contribution, Publisher } from '@/types/publishingMetadata';

const PROs = ["ASCAP", "BMI", "SESAC", "SOCAN", "PRS"];
const publisherNames = [
  "Universal Music Publishing",
  "Sony/ATV Music Publishing",
  "Warner Chappell Music",
  "BMG Rights Management",
  "Kobalt Music Publishing",
  "Downtown Music Publishing",
  "Concord Music Publishing",
  "Reservoir Media Management",
];

export const generateISWC = (): string => {
  try {
    const prefix = "T-";
    const number = faker.string.numeric(7);
    const checkDigit = faker.string.numeric(1);
    return `${prefix}${number}-${checkDigit}`;
  } catch (error) {
    console.error('Error generating ISWC:', error);
    return 'T-0000000-0';
  }
};

export const generateLyrics = (): string => {
  try {
    const verses = faker.number.int({ min: 2, max: 4 });
    const lyrics: string[] = [];
    
    for (let i = 0; i < verses; i++) {
      const lines = faker.number.int({ min: 4, max: 8 });
      const verse = Array.from({ length: lines }, () => faker.lorem.sentence(6)).join('\n');
      lyrics.push(verse);
    }
    
    return lyrics.join('\n\n');
  } catch (error) {
    console.error('Error generating lyrics:', error);
    return 'No lyrics available';
  }
};

export const generateContribution = (position: number, workTitle?: string): Contribution => {
  try {
    const split = position === 1 ? 50.0 : null;
    
    return {
      artist: {
        id: faker.number.int({ min: 6000000, max: 6999999 }),
        name: faker.person.fullName()
      },
      affiliation: "BMG",
      country: "All",
      role: "Author",
      type: position === 1 ? "DVD" : "Accompaniment",
      id: faker.number.int({ min: 6000000, max: 6999999 }),
      position,
      split_percent: split,
      work_title: workTitle
    };
  } catch (error) {
    console.error('Error generating contribution:', error);
    throw new Error('Failed to generate contribution');
  }
};

export const generatePublisher = (): Publisher => {
  try {
    return {
      publisher: {
        name: publisherNames[Math.floor(Math.random() * publisherNames.length)],
        id: faker.number.int({ min: 6000000, max: 6999999 })
      },
      rights_administrator: PROs[Math.floor(Math.random() * PROs.length)],
      affiliation: "BMG",
      country: "All",
      id: faker.number.int({ min: 6000000, max: 6999999 }),
      position: 1,
      split_percent: 100.0
    };
  } catch (error) {
    console.error('Error generating publisher:', error);
    throw new Error('Failed to generate publisher');
  }
};

export const generatePartnerId = (): string => {
  try {
    return `AMZ${faker.string.numeric(3)}`;
  } catch (error) {
    console.error('Error generating partner ID:', error);
    return 'AMZ-ERROR';
  }
};
