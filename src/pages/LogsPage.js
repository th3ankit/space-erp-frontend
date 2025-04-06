import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LogsPage = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/photos`);
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching logs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📚 Session Logs</h2>
      {loading ? (
        <p>Loading logs...</p>
      ) : logs.length === 0 ? (
        <p>No session reports found.</p>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {logs.map((log) => (
            <div key={log._id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
              <h3>{log.schoolName}</h3>
              <p><strong>Date:</strong> {new Date(log.sessionDate).toLocaleDateString()}</p>
              <p><strong>Activity:</strong> {log.activity}</p>
              <p><strong>Comments:</strong> {log.comments}</p>
              {log.photoUrls && log.photoUrls.length > 0 && (
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {log.photoUrls.map((url, idx) => (
                    <img key={idx} src={url} alt={`photo-${idx}`} width="120" style={{ borderRadius: '4px' }} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogsPage;
