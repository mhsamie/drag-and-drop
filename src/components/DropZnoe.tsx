import React, { useState } from "react";

type Props = {
  onUpload: (files: File[]) => void;
};

const Dropzone = ({ onUpload }: Props) => {
  const [isDragActive, setIsDragActive] = useState(false);

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
      className={
        "flex justify-center items-center w-1/3 h-48 border-2 border-dashed rounded-lg p-4" +
        `${isDragActive ? "border-blue-500" : "border-gray-300"}`
      }
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <p>Drag and drop your files here or click to select files</p>
    </div>
  );
};

export default Dropzone;
