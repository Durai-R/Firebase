import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./styles.css";

const ProgressBarComp = ({
  label,
  id,
  bar1,
  bar2,
  bar1Color,
  bar2Color,
  barHeight,
  borderRadius
}) => {
  const totalCredits = 1000;

  const bar1Progress = (bar1 / totalCredits) * 100;
  const bar2Progress = (bar2 / totalCredits) * 100;

  const progressBarStyle = {
    height: barHeight,
    borderRadius: borderRadius
  };

  const barStyle = {
    height: "100%"
  };

  return (
    <div className="p-2 mb-4 border-bottom pb-4">
      <div className="d-flex flex-row justify-content-between mt-4  mb-4">
        <span className="fw-bold">{label}</span>
        <span>ID: {id}</span>
      </div>
      <div className="progressBar">
        <ProgressBar style={progressBarStyle}>
          <ProgressBar
            style={{
              backgroundColor: bar1Color,
              ...barStyle,
              borderTopLeftRadius: borderRadius,
              borderBottomLeftRadius: borderRadius
            }}
            now={bar1Progress}
            key={1}
            label={bar1}
          />
          <ProgressBar
            style={{
              backgroundColor: bar2Color,
              ...barStyle,
              borderTopRightRadius: borderRadius,
              borderBottomRightRadius: borderRadius
            }}
            now={bar2Progress}
            key={2}
            label={bar2}
          />
          <ProgressBar
            style={{
              backgroundColor: "#f4f4f4",
              ...barStyle,
              color: "#788383",
              textAlign: "end",
              paddingRight: "5px",
              borderTopLeftRadius: borderRadius,
              borderBottomLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
              borderBottomRightRadius: borderRadius
            }}
            now={100 - bar1Progress - bar2Progress}
            key={3}
            label={`CREDITS${totalCredits}`}
          />
        </ProgressBar>
      </div>
    </div>
  );
};

export default ProgressBarComp;
