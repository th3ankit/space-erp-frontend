import React, { useEffect, useState } from "react";
import axios from "axios";

const LogsPage = () => {
  const [reports, setReports] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  const fetchReports = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/photos`);
      setReports(response.data);
    } catch (err) {
      console.error("Error fetching reports:", err);
      setError("Failed to load reports.");
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const filteredReports = reports.filter((report) =>
    report.schoolName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Session Logs 📋</h2>

      <input
        type="text"
        placeholder="Search by School Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: "8px", marginBottom: "1rem", width: "300px" }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>School</th>
            <th>Date</th>
            <th>Activity</th>
            <th>Comments</th>
            <th>Photos</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.map((report) => (
            <tr key={report._id}>
              <td>{report.schoolName}</td>
              <td>{new Date(report.date).toLocaleDateString()}</td>
              <td>{report.activity}</td>
              <td>{report.comments}</td>
              <td>
                {report.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt="Session"
                    style={{ width: "50px", height: "50px", marginRight: "5px" }}
                  />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsPage;
