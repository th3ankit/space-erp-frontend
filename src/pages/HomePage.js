// src/pages/HomePage.js

import React from "react";

function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 Welcome to Space Education ERP</h1>
      <p style={styles.subtext}>
        This app helps you submit daily reports, upload photos from field sessions, and generate visual report books for schools.
      </p>
      <ul style={styles.list}>
        <li>📤 Upload session data & photos</li>
        <li>📚 View submitted reports</li>
        <li>📈 Generate weekly/monthly reports as PDFs</li>
      </ul>
      <p style={styles.footer}>Use the top menu to get started!</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "3rem",
    textAlign: "center",
    backgroundColor: "#fafafa",
    borderRadius: "16px",
    boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "700px",
    margin: "2rem auto"
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem"
  },
  subtext: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
    color: "#555"
  },
  list: {
    textAlign: "left",
    listStyle: "none",
    padding: 0,
    marginBottom: "2rem"
  },
  footer: {
    color: "#777",
    fontStyle: "italic"
  }
};

export default HomePage;
