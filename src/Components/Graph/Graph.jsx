import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const Graph = ({ inputData }) => {
  console.log(inputData);
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    interaction: {
      mode: "index",
      intersect: false
    },
    scales: {
      y: {
        border: { display: false, dash: [4, 4] }, // for the grid lines
        grid: {
          color: "#eee9e9", // for the grid lines
          tickColor: "#000", // for the tick mark
          tickBorderDash: [0, 1], // also for the tick, if long enough
          tickLength: 1, // just to see the dotted line
          tickWidth: 1,
          tickOpacity: 0.2,
          offset: false,
          drawTicks: true, // true is default
          drawOnChartArea: true, // true is default
          drawBorder: false
        },
        ticks: {
          callback: function (value, index, ticks) {
            return value > 9 ? value : `0${value}`;
          }
        },
        min: 0,
        max: 10,
        beginAtZero: true
      },
      x: {
        border: { display: false },
        grid: {
          display: false,
          drawBorder: false
        }
      }
    }
  };

  const data = inputData;

  return <Line data={data} options={options} />;
};

export default Graph;
