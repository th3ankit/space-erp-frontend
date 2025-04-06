import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import LogsPage from "./pages/LogsPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to the Space Education ERP App 🚀</h1>
        <Routes>
          <Route path="/" element={<p>Select a page from the menu</p>} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
