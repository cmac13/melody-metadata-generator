import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TrackList from './friendly-view/TrackList';
import ReleaseInfo from './friendly-view/ReleaseInfo';
import type { Metadata } from '@/types/metadata';

interface FriendlyViewProps {
  metadata: Metadata;
}

const FriendlyView: React.FC<FriendlyViewProps> = ({ metadata }) => {
  return (
    <div className="space-y-6">
      <Card className="min-h-[600px]">
        <CardHeader>
          <CardTitle className="text-2xl">{metadata.display_title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">{metadata.artist_display_name}</h3>
              <p className="text-muted-foreground">
                {metadata.music_type.charAt(0).toUpperCase() + metadata.music_type.slice(1)}
              </p>
            </div>
            
            <ReleaseInfo 
              releaseDate={metadata.release_date}
              label={metadata.label}
              upc={metadata.upc}
            />

            <TrackList tracks={metadata.discs[0]?.disc_tracks || []} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FriendlyView;