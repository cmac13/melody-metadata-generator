import React from 'react';

interface JsonDisplayProps {
  data: any;
}

const JsonDisplay: React.FC<JsonDisplayProps> = ({ data }) => {
  return (
    <div className="relative">
      <pre className="text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default JsonDisplay;