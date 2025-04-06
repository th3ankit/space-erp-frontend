import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">📚 Space ERP</h1>
      <div className="nav-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Upload</Link>
        <Link className={location.pathname === "/logs" ? "active" : ""} to="/logs">Logs</Link>
        <Link className={location.pathname === "/reports" ? "active" : ""} to="/reports">Reports</Link>
      </div>
    </nav>
  );
};

export default NavBar;
