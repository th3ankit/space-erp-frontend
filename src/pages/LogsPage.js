import React, { useEffect, useState } from "react";
import axios from "axios";

function LogsPage() {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    axios
      .get(`${baseURL}/api/logs`)
      .then((response) => {
        setLogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching logs:", error);
        setError("Unable to load logs right now.");
      });
  }, []);

  return (
    <div>
      <h2>Logs Page</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : logs.length > 0 ? (
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log.description}</li>
          ))}
        </ul>
      ) : (
        <p>Loading logs...</p>
      )}
    </div>
  );
}

export default LogsPage;
