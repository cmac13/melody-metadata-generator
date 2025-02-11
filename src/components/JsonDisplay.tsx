import React from 'react';

interface JsonDisplayProps {
  data: any;
}

const JsonDisplay: React.FC<JsonDisplayProps> = ({ data }) => {
  return (
    <pre className="whitespace-pre-wrap font-mono text-sm overflow-auto max-h-[600px]">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

export default JsonDisplay;