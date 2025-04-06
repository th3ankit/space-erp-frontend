import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [schoolCounts, setSchoolCounts] = useState([]);
  const reportRef = useRef();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/photos`);
        setReports(res.data);

        // Count reports per school
        const counts = {};
        res.data.forEach((report) => {
          counts[report.schoolName] = (counts[report.schoolName] || 0) + 1;
        });

        const formatted = Object.entries(counts).map(([school, count]) => ({
          school,
          count,
        }));

        setSchoolCounts(formatted);
      } catch (err) {
        console.error("Error fetching reports:", err);
      }
    };

    fetchReports();
  }, []);

  const generatePDF = () => {
    const schoolName = reports.length > 0 ? reports[0].schoolName : "report";
    html2canvas(reportRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`${schoolName.replace(/\s+/g, "_")}_Report.pdf`);
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📈 School-wise Session Reports</h2>

      <div ref={reportRef} style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={schoolCounts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="school" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ul style={{ marginTop: "2rem" }}>
          {schoolCounts.map((item, index) => (
            <li key={index}>
              <strong>{item.school}:</strong> {item.count} session(s)
            </li>
          ))}
        </ul>
      </div>

      <button onClick={generatePDF} style={{ marginTop: "2rem", padding: "10px 20px" }}>
        📥 Download PDF
      </button>
    </div>
  );
};

export default ReportsPage;
