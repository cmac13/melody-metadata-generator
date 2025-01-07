import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface JsonDisplayProps {
  data: any;
}

const JsonDisplay: React.FC<JsonDisplayProps> = ({ data }) => {
  const formatJson = (obj: any): string => {
    return JSON.stringify(obj, null, 2)
      .replace(/"([^"]+)":/g, '<span class="text-blue-500">"$1"</span>:')
      .replace(/"([^"]+)"/g, '<span class="text-green-500">"$1"</span>')
      .replace(/\b(true|false|null)\b/g, '<span class="text-purple-500">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="text-orange-500">$1</span>');
  };

  return (
    <ScrollArea className="h-[600px] w-full rounded-md border">
      <div className="relative p-4">
        <pre 
          className="text-sm font-mono bg-gray-50 dark:bg-gray-900 rounded-lg"
          dangerouslySetInnerHTML={{ __html: formatJson(data) }}
        />
      </div>
    </ScrollArea>
  );
};

export default JsonDisplay;