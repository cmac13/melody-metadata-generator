import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FriendlyViewProps {
  metadata: any;
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
              <p className="text-muted-foreground">{metadata.music_type.charAt(0).toUpperCase() + metadata.music_type.slice(1)}</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Release Date: {new Date(metadata.release_date).toLocaleDateString()}</p>
              <p className="text-sm text-muted-foreground">Label: {metadata.label}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Tracks:</h4>
              <ScrollArea className="h-[400px] rounded-md border p-4">
                <div className="space-y-2">
                  {metadata.discs?.[0]?.disc_tracks.map((track: any, index: number) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <span className="text-muted-foreground">{index + 1}.</span>
                      <span>{track.track.title}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FriendlyView;