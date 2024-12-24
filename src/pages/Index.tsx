import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { generateRandomMetadata } from '@/utils/metadataGenerator';
import { RefreshCw, Copy } from 'lucide-react';

const baseMetadata = {
  "title": "If That's What It Takes",
  "release_date": "2022-03-11",
  "original_release_date": "1981-11-13",
  "display_label": "Smooth Records Group, Inc.",
  "audio_presentation": "Stereo",
  "audio_language": "English",
  "metadata_language": "English",
  "music_type": "pop",
  "artist_display_name": "Michael McDonald &amp; Friends",
  "pline_year": 1981,
  "pline_owner": "Smooth Records Group",
  "pline_license": "Under License",
  "cline_year": 1981,
  "cline_owner": "Smooth Records Group",
  "cline_license": "Under License",
  "vline": "The Regular Collective",
  "configuration": "Digital Album",
  "label": "Smooth Records Group",
  "cover_art": {
    "title": "If That's What It Takes Cover Art",
    "resource_number": "24OMGRES00001",
    "parental_advisory": "Explicit"
  },
  "discs": [
    {
      "disc_tracks": [
        {
          "track": {
            "title": "I Keep Forgettin'",
            "track_type": "audio",
            "isrc": "USOPM2200001",
            "audio_language": "English",
            "metadata_language": "English",
            "primary_recording_location": "US",
            "metadata_language_country": "United States",
            "parental_advisory": "Non-Applicable",
            "pline_year": 1981,
            "pline_owner": "Smooth Records Group",
            "pline_license": "Under License",
            "cline_year": 1981,
            "cline_owner": "Smooth Records Group",
            "cline_license": "Under License",
            "recording_end_date_year": 1981,
            "artist_display_name": "Michael McDonald &amp; Friends",
            "vline": "The Regular Collective",
            "works": [
              {
                "title": "I Keep Forgettin'",
                "iswc": "T-345246800-1",
                "language": "English",
                "label_work_code": "WORKS123",
                "music_type": "pop",
                "agency": "McDonald Publishing",
                "keywords": "pop soul hits",
                "contains_ai": false,
                "lyrics": "I keep forgettin' we're not in love anymore\nI keep forgettin' things will never be the same again\nI keep forgettin' how you made that so clear\nI keep forgettin'\n",
                "copyright_year": 1982,
                "description": "Written by Michael McDonald and Ed Sanford, this is one of 7 acts in the Playin' by the Rules suite.",
                "contributions": [
                  {
                    "artist": "Ed Sanford",
                    "affiliation": "BMG",
                    "split_percentage": 50.0,
                    "country": "Worldwide",
                    "role": "Author",
                    "type": "DVD"
                  },
                  {
                    "artist": "Michael McDonald",
                    "affiliation": "BMG",
                    "split_percentage": null,
                    "country": "Worldwide",
                    "role": "Author",
                    "type": "Accompaniment"
                  }
                ],
                "publishers": [
                  {
                    "publisher": "Yacht Times",
                    "rights_administrator": "SESAC",
                    "affiliation": "BMG",
                    "split_percentage": 100.0,
                    "country": "Worldwide"
                  }
                ],
                "partner_ids": [
                  {
                    "name": "Amazon Product Code",
                    "value": "AMZ001"
                  }
                ]
              }
            ],
            "display_title": "Playin' by the Rules Special Edition",
            "version_display_title": "Special Bonus Edition",
            "duration": "PT3M48S",
            "preview_in": "PT43S",
            "sample_length": "PT30S",
            "other_recording_locations": [
              "FR",
              "DE"
            ],
            "session_performance_type": "Vocal",
            "session_type": "Studio",
            "music_type": "pop",
            "keywords": "modern r&amp;b classics",
            "notes": "Hat not included",
            "audio_presentation": "Stereo",
            "version_title": "Bonus Edition",
            "primary_contributions": [
              {
                "artist": "Michael McDonald",
                "featured": false
              },
              {
                "artist": "Kenny Loggins",
                "featured": true
              },
              {
                "artist": "Ed Sanford",
                "featured": true
              }
            ],
            "contributions": [
              {
                "artist": "Michael McDonald",
                "role": "Vocals",
                "type": "Bass"
              },
              {
                "artist": "Kenny Loggins",
                "role": "Keyboards",
                "type": "Keytar"
              }
            ],
            "genre": "Pop",
            "sub_genre": "Adult Contemporary",
            "artist_type": "Recording Entity",
            "name_format": "Compound Artist",
            "partner_ids": [
              {
                "name": "Amazon Product Code",
                "value": "AMZ001"
              }
            ]
          },
          "territory_rights": [
            {
              "legal": true,
              "sellable": true,
              "download": true,
              "streaming": false,
              "ad_supported_streaming": true,
              "user_generated_video": "Monetize",
              "prestream_date": "1981-11-05",
              "instant_grat_date": "1981-08-08",
              "region_id": 243
            }
          ]
        }
      ],
      "upc": "000000000017"
    }
  ],
  "display_title": "Michael McDonald New Soul Classics",
  "version_display_title": "Special Edition",
  "series_name": "Soul Classics",
  "release_time": "12:30:00",
  "promotional": true,
  "keywords": "soul classics",
  "internal_synopsis": "Digital bonus for limited edition blue vinyl",
  "notes": "Also comes with free hat",
  "distribution_group": "New Releases",
  "rights_period": "perpetuity",
  "partner_restrictions": "Apple &amp; Tower Records",
  "distribution_notes": "Limited to 300 copies",
  "license": "Owned",
  "track_listing_embargo": "1981-11-05",
  "project_id": 600001,
  "version_title": "API Version",
  "metadata_language_country": "US",
  "catalog_number": "SRG00001",
  "upc": "000000000017",
  "parental_advisory": "Non-Applicable",
  "primary_contributions": [
    {
      "artist": "Michael McDonald",
      "featured": false
    },
    {
      "artist": "Kenny Loggins",
      "featured": true
    }
  ],
  "contributions": [
    {
      "artist": "Michael McDonald",
      "role": "Vocals",
      "type": "Bass"
    },
    {
      "artist": "Kenny Loggins",
      "role": "Keyboards",
      "type": "Keytar"
    }
  ],
  "territory_rights": [
    {
      "legal": true,
      "release_date": "1982-01-01",
      "preorder_date": "1981-11-01",
      "default_track_territory_rights": {
        "legal": true,
        "sellable": true,
        "download": false,
        "streaming": true,
        "ad_supported_streaming": true,
        "user_generated_video": "Monetize"
      },
      "region_id": 243
    }
  ],
  "release_price_tier": "Premium",
  "track_price_tier": "Budget",
  "genre": "Pop",
  "sub_genre": "Adult Contemporary",
  "artist_type": "Recording Entity",
  "name_format": "Compound Artist",
  "partners": {
    "excluded": false,
    "partner_names": [
      "Deezer",
      "Spotify"
    ]
  },
  "compilation_type": "Single-Artist Compilation",
  "partner_ids": [
    {
      "name": "Amazon Product Code",
      "value": "AMZ001"
    }
  ]
};

const Index = () => {
  const [metadata, setMetadata] = useState(baseMetadata);
  const { toast } = useToast();

  const handleGenerateNew = () => {
    const newMetadata = generateRandomMetadata(metadata);
    setMetadata(newMetadata);
    toast({
      title: "Metadata Updated",
      description: "New random values have been generated.",
    });
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(metadata, null, 2));
    toast({
      title: "Copied!",
      description: "JSON has been copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Music Release Metadata Generator</h1>
        <p className="text-gray-600">Generate random metadata for testing purposes</p>
      </div>
      
      <div className="flex gap-4 mb-6">
        <Button onClick={handleGenerateNew} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Generate New Data
        </Button>
        <Button variant="outline" onClick={handleCopyToClipboard} className="gap-2">
          <Copy className="h-4 w-4" />
          Copy to Clipboard
        </Button>
      </div>

      <div className="relative">
        <pre className="text-sm">
          {JSON.stringify(metadata, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Index;
