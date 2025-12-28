import React from 'react';

interface ExcalidrawProps {
  onClose: () => void;
}

const Excalidraw: React.FC<ExcalidrawProps> = ({ onClose }) => {
  return (
    <div className="h-full w-full bg-white">
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
