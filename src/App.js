import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReportsPage from './pages/ReportsPage';
import UploadPage from './pages/UploadPage';
import LogsPage from './pages/LogsPage';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to the Space Education ERP App 🚀</h1>
        <p>This is the frontend setup in React.</p>
        {/* Add the navigation menu */}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/reports">Reports</a></li>
            <li><a href="/upload">Upload</a></li>
            <li><a href="/logs">Logs</a></li>
          </ul>
        </nav>

        {/* Define your Routes */}
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/logs" element={<LogsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
