
import React, { useEffect, useState } from "react";
import axios from "axios";

function ReportsPage() {
  const [reportData, setReportData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    axios
      .get(`${baseURL}/api/reports`)
      .then((response) => {
        setReportData(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching report:", error);
        setError("Could not load reports. Please try again.");
      });
  }, []);

  return (
    <div>
      <h2>Reports Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {reportData ? (
        <pre>{JSON.stringify(reportData, null, 2)}</pre>
      ) : (
        !error && <p>Loading reports...</p>
      )}
    </div>
  );
}

export default ReportsPage;
