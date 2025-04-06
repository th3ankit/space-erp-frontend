import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import LogsPage from "./pages/LogsPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>🚀 Space Education ERP</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Upload</Link>
          <Link to="/logs" style={{ marginRight: "10px" }}>Logs</Link>
          <Link to="/reports">Reports</Link>
        </nav>

        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
