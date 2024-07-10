// PieChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["", "", ""],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  const totalVotes = data.datasets[0].data.reduce((a, b) => a + b, 0);

  const plugins = [
    {
      id: "centerText",
      beforeDraw: (chart) => {
        const width = chart.width;
        const height = chart.height;
        const ctx = chart.ctx;
        ctx.restore();
        const fontSize = (height / 360).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = "middle";

        const text = `${totalVotes}`;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;

        const text2 = "Consumed";
        const textX2 = Math.round((width - ctx.measureText(text2).width) / 2);
        const textY2 = textY + 20;

        ctx.fillText(text, textX, textY);
        ctx.fillText(text2, textX2, textY2);
        ctx.save();
      }
    }
  ];

  return (
    <Doughnut
      data={{
        labels: ["Remaining Credits", "Consumed Credits"],
        datasets: [
          {
            label: "My First Dataset",
            data: [80, 20],
            backgroundColor: ["#00373a", "#00db46"],
            hoverOffset: 2
          }
        ]
      }}
      options={{
        rotation: 70,
        cutout: "70%",
        radius: 180,
        spacing: "2",
        borderRadius: "10",
        borderWidth: "2",
        plugins: {
          legend: {
            display: true,
            position: "bottom"
          }
        }
      }}
      plugins={plugins}
    />
  );
};

export default PieChart;
