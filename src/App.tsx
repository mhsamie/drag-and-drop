import { useState } from "react";
import "./index.css";
import Dropzone from "./components/DropZnoe";

function App() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleUpload = (files: File[]) => {
    setUploadedFiles(uploadedFiles.concat(files));
  };

  return (
    <div>
      <Dropzone onUpload={handleUpload} />
      {uploadedFiles.length > 0 && (
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
