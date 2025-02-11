import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { generateRandomMetadata } from '@/utils/metadataGenerator';
import { generateRandomPublishingMetadata } from '@/utils/publishingMetadataGenerator';
import { RefreshCw, Copy } from 'lucide-react';
import JsonDisplay from '@/components/JsonDisplay';
import { baseMetadata } from '@/utils/baseMetadata';
import { basePublishingMetadata } from '@/utils/basePublishingMetadata';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FriendlyView from '@/components/FriendlyView';

const Index = () => {
  const [metadata, setMetadata] = useState(baseMetadata);
  const [publishingMetadata, setPublishingMetadata] = useState(basePublishingMetadata);
  const [activeMetadataType, setActiveMetadataType] = useState<'recording' | 'publishing'>('recording');
  const { toast } = useToast();

  const handleGenerateNew = () => {
    // Always generate new recording metadata first
    const newRecordingMetadata = generateRandomMetadata(metadata);
    setMetadata(newRecordingMetadata);
    
    // Then generate publishing metadata based on the new recording metadata
    const newPublishingMetadata = generateRandomPublishingMetadata(publishingMetadata, newRecordingMetadata);
    
    // Debug log
    console.log('Recording Tracks:', newRecordingMetadata.discs?.[0]?.disc_tracks);
    console.log('Publishing Works:', newPublishingMetadata.works);
    
    setPublishingMetadata(newPublishingMetadata);
    
    toast({
      title: "Metadata Updated",
      description: "New random values have been generated.",
    });
  };

  const handleCopyToClipboard = () => {
    const dataToCopy = activeMetadataType === 'recording' ? metadata : publishingMetadata;
    navigator.clipboard.writeText(JSON.stringify(dataToCopy, null, 2));
    toast({
      title: "Copied!",
      description: "JSON has been copied to clipboard.",
    });
  };

  const currentData = activeMetadataType === 'recording' ? metadata : publishingMetadata;

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto bg-background text-foreground">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">OpenPlay Music Metadata Generator</h1>
        <p className="text-muted-foreground">Generate random metadata for testing purposes</p>
      </div>
      
      <div className="mb-6">
        <Tabs value={activeMetadataType} onValueChange={(value) => setActiveMetadataType(value as 'recording' | 'publishing')} className="w-full mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="recording" className="data-[state=active]:text-gray-900">Recording Metadata</TabsTrigger>
            <TabsTrigger value="publishing" className="data-[state=active]:text-gray-900">Publishing Metadata</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-4">
          <Button onClick={handleGenerateNew} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Generate New Data
          </Button>
          <Button variant="outline" onClick={handleCopyToClipboard} className="gap-2">
            <Copy className="h-4 w-4" />
            Copy to Clipboard
          </Button>
        </div>
      </div>

      <Tabs defaultValue="friendly" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="friendly" className="data-[state=active]:text-gray-900">Friendly View</TabsTrigger>
          <TabsTrigger value="json" className="data-[state=active]:text-gray-900">JSON View</TabsTrigger>
        </TabsList>
        <TabsContent value="friendly">
          <FriendlyView metadata={currentData} type={activeMetadataType} />
        </TabsContent>
        <TabsContent value="json" className="mt-4">
          <div className="bg-card text-card-foreground rounded-lg border p-6">
            <JsonDisplay data={currentData} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;