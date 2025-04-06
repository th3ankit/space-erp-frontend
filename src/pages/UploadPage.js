import React, { useState } from "react";
import axios from "axios";

const UploadPage = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    activity: "",
    comments: "",
    date: "",
  });
  const [photos, setPhotos] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    setPhotos(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Uploading...");

    try {
      const data = new FormData();
      data.append("schoolName", formData.schoolName);
      data.append("activity", formData.activity);
      data.append("comments", formData.comments);
      data.append("date", formData.date);
      for (let i = 0; i < photos.length; i++) {
        data.append("photos", photos[i]);
      }

      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/photos/upload`,
        data
      );

      if (res.status === 200) {
        setMessage("✅ Uploaded Successfully!");
      } else {
        setMessage("❌ Upload failed!");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("❌ An error occurred during upload.");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Upload Daily Report</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="schoolName"
          placeholder="School Name"
          value={formData.schoolName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="activity"
          placeholder="Activity"
          value={formData.activity}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          name="photos"
          multiple
          accept="image/*"
          onChange={handlePhotoChange}
          className="w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default UploadPage;
