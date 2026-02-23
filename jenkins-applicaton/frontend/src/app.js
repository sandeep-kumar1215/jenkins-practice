import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    // Fetches from your Spring Boot Backend
    fetch("http://localhost:8080/api/hello")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.text();
      })
      .then(data => setMessage(data))
      .catch(err => {
        console.error("Fetch error:", err);
        setMessage("Backend not reachable");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Campus Study App</h1>
      <p>Status: <strong>{message}</strong></p>
    </div>
  );
}

export default App;