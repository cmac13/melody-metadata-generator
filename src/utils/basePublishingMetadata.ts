import { generateRandomPublishingMetadata } from './publishingMetadataGenerator';

const templatePublishingMetadata = {
  works: []  // Will contain an array of work metadata
};

// Generate random initial metadata
export const basePublishingMetadata = generateRandomPublishingMetadata(templatePublishingMetadata, null);
