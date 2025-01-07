import React from 'react';

interface ReleaseInfoProps {
  releaseDate: string;
  label: string;
  upc: string;
}

const ReleaseInfo: React.FC<ReleaseInfoProps> = ({ releaseDate, label, upc }) => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">
        Release Date: {new Date(releaseDate).toLocaleDateString()}
      </p>
      <p className="text-sm text-muted-foreground">Label: {label}</p>
      <p className="text-sm text-muted-foreground">UPC: {upc}</p>
    </div>
  );
};

export default ReleaseInfo;