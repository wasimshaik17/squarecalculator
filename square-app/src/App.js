import React, { useState } from "react";
import axios from "axios";

function App() {
  const [side, setSide] = useState("");
  const [area, setArea] = useState(null);

  const calculateArea = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/square/${side}`
      );
      setArea(response.data);
    } catch (error) {
      alert("Backend not connected!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Square Area Calculator</h2>

      <input
        type="number"
        placeholder="Enter side"
        value={side}
        onChange={(e) => setSide(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateArea}>Calculate</button>

      {area !== null && <h3>Area: {area}</h3>}
    </div>
  );
}

export default App;