// src/pages/LogsPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LogsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/reports`);
        setReports(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reports:', error);
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Submitted Reports</h1>

      {loading ? (
        <p>Loading reports...</p>
      ) : reports.length === 0 ? (
        <p>No reports found.</p>
      ) : (
        <div className="grid gap-4">
          {reports.map((report) => (
            <div key={report._id} className="p-4 border rounded shadow">
              <h2 className="font-semibold text-lg">{report.schoolName}</h2>
              <p><strong>Date:</strong> {new Date(report.date).toLocaleDateString()}</p>
              <p><strong>Activity:</strong> {report.activity}</p>
              <p><strong>Comments:</strong> {report.comments}</p>
              <div className="flex gap-2 mt-2">
                {report.photos && report.photos.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Session ${index + 1}`}
                    className="w-32 h-32 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogsPage;
