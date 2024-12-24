import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { generateRandomMetadata } from '@/utils/metadataGenerator';
import { RefreshCw, Copy } from 'lucide-react';
import JsonDisplay from '@/components/JsonDisplay';
import { baseMetadata } from '@/utils/baseMetadata';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FriendlyView from '@/components/FriendlyView';

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

      <Tabs defaultValue="friendly" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="friendly">Friendly View</TabsTrigger>
          <TabsTrigger value="json">JSON View</TabsTrigger>
        </TabsList>
        <TabsContent value="friendly">
          <FriendlyView metadata={metadata} />
        </TabsContent>
        <TabsContent value="json">
          <JsonDisplay data={metadata} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;