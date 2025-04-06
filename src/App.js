import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/hello`)
      .then(res => console.log("Backend says:", res.data))
      .catch(err => console.error("Error connecting to API:", err));
  }, []);

  return (
    <div>
      <h1>Welcome to the Space Education ERP App 🚀</h1>
      <p>This is the frontend setup in React, now connected to the backend.</p>
    </div>
  );
}

export default App;
