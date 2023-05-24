import { useState } from "react";
import "./index.css";
import Dropzone from "./components/DropZnoe";

function App() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = (files: File[]) => {
    try {
      setIsUploading(true);
      setUploadedFiles(uploadedFiles.concat(files));
    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Dropzone onUpload={handleUpload} />
      {uploadedFiles.length > 0 && (
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>
              {file.type.startsWith("image/") ? (
                <div className="flex gap-5 items-center">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="avatar"
                    className="image-input-wrapper w-10 h-10 rounded-full cursor-pointer opacity-75-hover"
                  />
                  <span>{file.name}</span>
                </div>
              ) : (
                <p>{file.name}</p>
              )}
            </li>
          ))}
        </ul>
      )}
      {isUploading && (
        <div className="flex justify-center items-center w-1/3 h-48 border-2 border-dashed rounded-lg p-4">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default App;
