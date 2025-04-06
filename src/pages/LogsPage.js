import React, { useEffect, useState } from "react";
import axios from "axios";

const LogsPage = () => {
  const [logs, setLogs] = useState([]);
  const baseURL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    axios.get(`${baseURL}/api/logs`)
      .then((response) => {
        setLogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching logs:", error);
      });
  }, [baseURL]);

  return (
    <div>
      <h2>Activity Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log.activity} - {log.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogsPage;
