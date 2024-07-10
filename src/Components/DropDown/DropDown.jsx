// Dropdown.js
import React from "react";
import "./styles.css";

const Dropdown = ({ label, options, value, onChange, style }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange} className="select">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
