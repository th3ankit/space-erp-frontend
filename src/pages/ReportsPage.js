import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ReportsPage = () => {
  const [logs, setLogs] = useState([]);
  const reportRef = useRef(null);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/photos`);
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchLogs();
  }, []);

  const handleDownload = () => {
    const input = reportRef.current;
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('session-report.pdf');
    });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📄 Download Session Report</h2>
      <button onClick={handleDownload} style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}>
        Download PDF
      </button>

      <div ref={reportRef} style={{ background: '#fff', padding: '1rem' }}>
        {logs.map((log) => (
          <div key={log._id} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
            <h3>{log.schoolName}</h3>
            <p><strong>Date:</strong> {new Date(log.sessionDate).toLocaleDateString()}</p>
            <p><strong>Activity:</strong> {log.activity}</p>
            <p><strong>Comments:</strong> {log.comments}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {log.photoUrls?.map((url, idx) => (
                <img key={idx} src={url} alt={`img-${idx}`} width="100" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
