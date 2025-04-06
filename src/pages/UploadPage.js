import React, { useState } from "react";
import axios from "axios";

const UploadPage = () => {
  const [photos, setPhotos] = useState([]);
  const [schoolName, setSchoolName] = useState("");
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setPhotos([...e.target.files].slice(0, 3)); // limit to 3 photos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Uploading...");

    const formData = new FormData();
    photos.forEach((photo) => {
      formData.append("photos", photo);
    });
    formData.append("school", schoolName);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/photos/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setStatus(`✅ Upload successful: ${response.data.photoUrls.length} photos`);
    } catch (error) {
      console.error("Upload error:", error);
      setStatus("❌ Upload failed");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">📸 Upload Photos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          placeholder="Enter School Name"
          required
          className="border p-2 w-full"
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload (Max 3 Photos)
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};

export default UploadPage;
