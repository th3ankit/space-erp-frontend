import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import LogsPage from "./pages/LogsPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Upload</Link>
        <Link to="/logs" style={linkStyle}>Logs</Link>
        <Link to="/reports" style={linkStyle}>Reports</Link>
      </nav>

      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  padding: "1rem",
  backgroundColor: "#f0f0f0",
  fontWeight: "bold"
};

const linkStyle = {
  textDecoration: "none",
  color: "#333"
};

export default App;
