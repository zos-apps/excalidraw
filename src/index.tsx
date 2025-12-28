import React from 'react';

interface ExcalidrawProps {
  onClose: () => void;
}

const Excalidraw: React.FC<ExcalidrawProps> = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col bg-white text-gray-900">
      <iframe
        src="https://excalidraw.com/"
        className="w-full h-full border-0"
        allow="clipboard-read; clipboard-write"
        title="Excalidraw"
      />
    </div>
  );
};

export default Excalidraw;
