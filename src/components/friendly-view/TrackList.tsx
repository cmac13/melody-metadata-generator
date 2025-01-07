import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Track } from '@/types/metadata';

interface TrackListProps {
  tracks: Array<{ track: Track }>;
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <div>
      <h4 className="font-medium mb-2">Tracks:</h4>
      <ScrollArea className="h-[400px] rounded-md border p-4">
        <div className="space-y-2">
          {tracks.map((track, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground">{index + 1}.</span>
                <span>{track.track.title}</span>
              </div>
              <span className="text-xs text-muted-foreground">{track.track.isrc}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TrackList;