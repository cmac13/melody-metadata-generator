const generateRandomString = (prefix: string) => {
  const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}${randomStr}`;
};

const generateRandomDate = (startYear: number = 2020) => {
  const start = new Date(startYear, 0, 1);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toISOString().split('T')[0];
};

export const generateRandomMetadata = (baseMetadata: any) => {
  const newMetadata = { ...baseMetadata };
  
  // Update release-level fields
  newMetadata.title = `Release ${generateRandomString('R')}`;
  newMetadata.release_date = generateRandomDate();
  newMetadata.catalog_number = generateRandomString('CAT');
  newMetadata.upc = Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');
  
  // Update track-level fields
  if (newMetadata.discs && newMetadata.discs[0]?.disc_tracks) {
    newMetadata.discs[0].disc_tracks.forEach((trackData: any) => {
      if (trackData.track) {
        trackData.track.title = `Track ${generateRandomString('T')}`;
        trackData.track.isrc = `US${generateRandomString('')}`;
        if (trackData.track.works) {
          trackData.track.works.forEach((work: any) => {
            work.title = `Work ${generateRandomString('W')}`;
            work.iswc = `T-${Math.floor(Math.random() * 1000000000)}-1`;
          });
        }
      }
    });
  }

  return newMetadata;
};