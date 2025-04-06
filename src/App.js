import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import UploadPage from "./pages/UploadPage";
import LogsPage from "./pages/LogsPage";
import ReportsPage from "./pages/ReportsPage";
import HomePage from "./pages/HomePage"; // ✅ New Import

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ✅ Default route */}
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/logs" element={<LogsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/home" element={<HomePage />} /> {/* Optional */}
      </Routes>
    </Router>
  );
}

export default App;
