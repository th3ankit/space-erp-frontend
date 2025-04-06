import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import LogsPage from "./pages/LogsPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <Router>
      <div>
        <h1>🚀 Space Education ERP App</h1>
        <nav>
          <Link to="/upload">Upload</Link> | <Link to="/logs">Logs</Link> | <Link to="/reports">Reports</Link>
        </nav>
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
