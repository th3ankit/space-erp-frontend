import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import LogsPage from "./pages/LogsPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <Router>
      {/* Top navigation bar */}
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/upload" style={linkStyle}>Upload</Link>
        <Link to="/logs" style={linkStyle}>Logs</Link>
        <Link to="/reports" style={linkStyle}>Reports</Link>
      </nav>

      {/* Page content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/logs" element={<LogsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </Router>
  );
}

// Inline styles for basic navigation
const navStyle = {
  backgroundColor: "#f5f5f5",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
  fontSize: "1.1rem"
};

export default App;
