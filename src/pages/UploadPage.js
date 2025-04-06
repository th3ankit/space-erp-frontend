import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [schoolName, setSchoolName] = useState('');
  const [sessionDate, setSessionDate] = useState('');
  const [activity, setActivity] = useState('');
  const [comments, setComments] = useState('');
  const [photos, setPhotos] = useState([]);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setPhotos(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Uploading...');

    try {
      const formData = new FormData();
      formData.append('schoolName', schoolName);
      formData.append('sessionDate', sessionDate);
      formData.append('activity', activity);
      formData.append('comments', comments);

      for (let i = 0; i < photos.length; i++) {
        formData.append('photos', photos[i]);
      }

      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/photos/upload`,
        formData
      );

      if (response.status === 200) {
        setMessage('✅ Upload successful!');
        setSchoolName('');
        setSessionDate('');
        setActivity('');
        setComments('');
        setPhotos([]);
      } else {
        setMessage('❌ Upload failed.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('❌ Upload error occurred.');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '2rem' }}>
      <h2>📤 Upload Session Report</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>School Name:</label>
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Session Date:</label>
          <input
            type="date"
            value={sessionDate}
            onChange={(e) => setSessionDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Activity:</label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="3"
          ></textarea>
        </div>

        <div>
          <label>Upload Photos (1-3):</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit">Submit Report</button>
      </form>

      <p style={{ marginTop: '1rem' }}>{message}</p>
    </div>
  );
};

export default UploadPage;
