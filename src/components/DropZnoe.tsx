import React, { useState } from "react";

type Props = {
  onUpload: (files: File[]) => void;
};

const Dropzone = ({ onUpload }: Props) => {
  const [isDragActive, setIsDragActive] = useState<boolean>(false);

  const handleDragEnter = () => {
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    onUpload(files);
  };

  return (
    <div
      className={`flex justify-center items-center w-2/3 h-48 border-2 border-dashed rounded-lg p-5
        ${isDragActive ? "bg-sky-50 border-sky-400" : "border-gray-300"}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <p
        className={`text-sm ${
          isDragActive ? "text-sky-800" : "text-gray-400"
        }  `}
      >
        {isDragActive
          ? "Leave Your File Here"
          : "Drag and drop your files here"}
      </p>
    </div>
  );
};

export default Dropzone;
