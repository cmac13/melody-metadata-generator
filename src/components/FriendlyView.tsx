import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import TrackList from './friendly-view/TrackList';
import ReleaseInfo from './friendly-view/ReleaseInfo';
import type { Metadata } from '@/types/metadata';
import { formatDuration } from '@/utils/formatters/durationFormatter';

interface FriendlyViewProps {
  metadata: any;
  type: 'recording' | 'publishing';
}

const FriendlyView = ({ metadata, type }: FriendlyViewProps) => {
  if (type === 'recording') {
    return (
      <div className="grid gap-6">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-gray-900">{metadata.display_title}</CardTitle>
            <CardDescription className="text-gray-600">Basic Information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 text-gray-900">
              <div>
                <span className="font-semibold">Title:</span> {metadata.title}
              </div>
              <div>
                <span className="font-semibold">Artist:</span>{" "}
                {metadata.artist_display_name}
              </div>
              <div>
                <span className="font-semibold">Label:</span> {metadata.label}
              </div>
              <div>
                <span className="font-semibold">Release Date:</span>{" "}
                {metadata.release_date}
              </div>
              <div>
                <span className="font-semibold">UPC:</span> {metadata.upc}
              </div>
              <div>
                <span className="font-semibold">Configuration:</span>{" "}
                {metadata.configuration}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-gray-900">Tracks</CardTitle>
            <CardDescription className="text-gray-600">Track Information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {metadata.discs?.[0]?.disc_tracks?.map((trackItem: any, index: number) => (
                <div key={index} className="border p-4 rounded-lg bg-gray-50">
                  <div className="font-semibold mb-2 text-gray-900">
                    Track {index + 1}: {trackItem.track.title}
                  </div>
                  <div className="text-gray-700">
                    <div>ISRC: {trackItem.track.isrc}</div>
                    <div>Duration: {formatDuration(trackItem.track.duration)}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Publishing metadata view
  return (
    <div className="grid gap-6">
      {metadata.works.map((work: any, workIndex: number) => (
        <Card key={workIndex} className="bg-white">
          <CardHeader>
            <CardTitle className="text-gray-900">{work.title}</CardTitle>
            <CardDescription className="text-gray-600">Work Information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 text-gray-900">
              <div>
                <span className="font-semibold">ISWC:</span> {work.iswc}
              </div>
              <div>
                <span className="font-semibold">Agency:</span> {work.agency}
              </div>
              <div>
                <span className="font-semibold">Music Type:</span> {work.music_type}
              </div>
              <div>
                <span className="font-semibold">Copyright Year:</span> {work.copyright_year}
              </div>
              <div>
                <span className="font-semibold">Contains AI:</span>{" "}
                <Badge variant={work.contains_ai ? "destructive" : "default"}>
                  {work.contains_ai ? "Yes" : "No"}
                </Badge>
              </div>
              <div>
                <span className="font-semibold">Keywords:</span> {work.keywords}
              </div>
            </div>

            <Separator className="my-4" />

            <div className="grid gap-2">
              <div className="font-semibold">Writers</div>
              <div className="grid gap-2">
                {work.contributions.map((contribution: any, index: number) => (
                  <div key={index} className="border p-3 rounded-lg bg-gray-50">
                    <div className="font-semibold text-gray-900">
                      {contribution.artist.name}
                    </div>
                    <div className="text-gray-700">
                      <div>Role: {contribution.role}</div>
                      <div>Affiliation: {contribution.affiliation}</div>
                      {contribution.split_percent && (
                        <div>Split: {contribution.split_percent}%</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            <div className="grid gap-2">
              <div className="font-semibold">Publishers</div>
              <div className="grid gap-2">
                {work.publishers.map((pub: any, index: number) => (
                  <div key={index} className="border p-3 rounded-lg bg-gray-50">
                    <div className="font-semibold text-gray-900">{pub.publisher.name}</div>
                    <div className="text-gray-700">
                      <div>PRO: {pub.rights_administrator}</div>
                      <div>Split: {pub.split_percent}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            <div>
              <div className="font-semibold mb-2">Lyrics</div>
              <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-lg text-gray-900">
                {work.lyrics}
              </pre>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FriendlyView;