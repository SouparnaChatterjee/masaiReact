
import React, { useState } from "react";

const ColorToggle = () => {
  const [color, setColor] = useState("green");

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "green" ? "yellow" : "green"));
  };

  const buttonStyle = {
    backgroundColor: color,
    color: color === "green" ? "white" : "black", // ensure text visibility
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleColor} style={buttonStyle}>
        Color: {color.charAt(0).toUpperCase() + color.slice(1)}
      </button>
      <p style={{ fontSize: "18px", marginTop: "20px" }}>
        Current Color: {color.charAt(0).toUpperCase() + color.slice(1)}
      </p>
    </div>
  );
};

export default ColorToggle;
