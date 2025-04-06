import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  // Fetch reports when the component mounts
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('/api/reports'); // Replace with your API URL if needed
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports', error);
      }
    };

    fetchReports();
  }, []);

  // Function to generate PDF from the report
  const generatePDF = () => {
    const input = document.getElementById('report-container');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF();
      doc.addImage(imgData, 'PNG', 10, 10);
      doc.save('report.pdf');
    });
  };

  return (
    <div>
      <h2>Reports</h2>
      
      {/* Button to generate PDF */}
      <button onClick={generatePDF}>Download PDF</button>

      {/* Container for reports */}
      <div id="report-container">
        {reports.length === 0 ? (
          <p>No reports available.</p>
        ) : (
          <ul>
            {reports.map((report, index) => (
              <li key={index}>{report.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReportsPage;
