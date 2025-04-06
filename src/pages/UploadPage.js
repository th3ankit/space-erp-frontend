import React, { useState } from "react";
import axios from "axios";

function UploadPage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setUploadStatus("Please select 1–3 photos to upload.");
      return;
    }

    if (selectedFiles.length > 3) {
      setUploadStatus("You can upload a maximum of 3 photos.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("photos", selectedFiles[i]);
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/photos/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadStatus("✅ Upload successful!");
      console.log("Uploaded photos:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadStatus("❌ Upload failed. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Session Photos</h2>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
      <br />
      <button onClick={handleUpload} style={{ marginTop: "10px" }}>
        Upload Photos
      </button>
      <p>{uploadStatus}</p>
    </div>
  );
}

export default UploadPage;
