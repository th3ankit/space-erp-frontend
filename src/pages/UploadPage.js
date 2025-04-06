import React, { useState } from "react";
import axios from "axios";

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setMessage("");
    setError(null);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    const baseURL = process.env.REACT_APP_API_BASE_URL;

    axios
      .post(`${baseURL}/api/upload`, formData)
      .then((response) => {
        setMessage("File uploaded successfully!");
        setError(null);
      })
      .catch((error) => {
        console.error("Upload error:", error);
        setError("Upload failed. Please try again.");
        setMessage("");
      });
  };

  return (
    <div>
      <h2>Upload Page</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default UploadPage;

