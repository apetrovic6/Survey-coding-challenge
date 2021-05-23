import React from "react";
import { Bar } from "react-chartjs-2";
export const ResultsPage = () => {
  const data = {
    labels: [
      "Po preporuci",
      "Svidio mi se sadržaj",
      "Želim produbiti postojeće znanje o tematici",
      "Po zahtjevu poslodavca",
      "Mislim da će mi pomoći u razvoju  karijere",
      "Drugi razlozi",
    ],

    datasets: [
      {
        label: "Odgovori",
        data: [9, 8, 6, 5, 7, 1],
        backgroundColor: [
          "blue",
          "green",
          "yellow",
          "red",
          "purple",
          "lightblue",
        ],
      },
    ],
    options: {
      indexAxis: "y",
      responsive: true,
      scales: {
        x: [
          {
            ticks: {
              min: 0,
              max: 50,
            },
          },
        ],
      },
    },
  };
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-center">
          1. Zbog čega ste odlučili pohađati ovu edukaciju?
        </h1>
        <div style={{ width: 600, height: 600 }}>
          <Bar data={data} options={data.options} />
        </div>
      </div>
    </div>
  );
};
