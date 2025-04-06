import React, { useState } from "react";
import axios from "axios";

function UploadPage() {
  const [school, setSchool] = useState("");
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");
  const [comments, setComments] = useState("");
  const [photos, setPhotos] = useState([]);

  const api = process.env.REACT_APP_API_BASE_URL;

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      alert("You can only upload up to 3 photos.");
      return;
    }
    setPhotos(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("school", school);
    formData.append("date", date);
    formData.append("activity", activity);
    formData.append("comments", comments);
    photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    try {
      const response = await axios.post(`${api}/api/photos/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Report uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("❌ An error occurred during upload.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Report</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="School Name"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required
        />
        <br />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <br />
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handlePhotoChange}
        />
        <br />
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
}

export default UploadPage;
