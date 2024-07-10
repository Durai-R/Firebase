import React from "react";

const ColorBox = ({ color, label, className }) => {
  return (
    <div className="d-flex align-items-center">
      <div
        style={{
          backgroundColor: color,
          width: "15px",
          height: "15px",
          borderRadius: "4px",
          marginRight: "0.5rem"
        }}
      ></div>
      <span className={className}>{label}</span>
    </div>
  );
};

export default ColorBox;
