import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ReportsPage() {
  const reportRef = useRef();

  const handleDownloadPDF = () => {
    const input = reportRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pageWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
      pdf.save("report.pdf");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reports Page 📊</h2>

      <div
        ref={reportRef}
        style={{
          background: "#f2f2f2",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "8px",
        }}
      >
        <h3>Graph or Report Section</h3>
        <p>This is the content that will be converted to PDF.</p>
        {/* You can add chart or log data here */}
      </div>

      <button
        onClick={handleDownloadPDF}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>
    </div>
  );
}

export default ReportsPage;
