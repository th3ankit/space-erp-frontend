// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import LogsPage from "./pages/LogsPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <Router>
      <div className="app">
        <nav style={{ padding: '10px', background: '#f0f0f0' }}>
          <Link to="/upload" style={{ marginRight: '10px' }}>Upload Report</Link>
          <Link to="/logs" style={{ marginRight: '10px' }}>Session Logs</Link>
          <Link to="/reports">Reports</Link>
        </nav>

        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/" element={<h2 style={{ padding: '20px' }}>Welcome to Space Education ERP App 🚀</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
