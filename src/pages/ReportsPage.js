import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ReportsPage({ reportData }) {
  const reportRef = useRef();

  const handleDownloadPDF = () => {
    const input = reportRef.current;
    const schoolName = reportData?.schoolName || "Unknown_School";
    const safeSchoolName = schoolName.replace(/\s+/g, "_"); // remove spaces
    const fileName = `Report_${safeSchoolName}.pdf`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(fileName);
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Report Page</h2>
      <div ref={reportRef} className="bg-white p-4 shadow rounded">
        <p><strong>School Name:</strong> {reportData?.schoolName}</p>
        <p><strong>Session Date:</strong> {reportData?.date}</p>
        <p><strong>Educator:</strong> {reportData?.educator}</p>
        <p><strong>Highlights:</strong> {reportData?.highlights}</p>
        {/* Add more fields as needed */}
      </div>
      <button
        onClick={handleDownloadPDF}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Download PDF
      </button>
    </div>
  );
}

export default ReportsPage;
