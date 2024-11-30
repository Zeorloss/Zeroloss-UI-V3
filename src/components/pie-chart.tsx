"use client";

import React, { useState, useEffect } from "react";
import { PieChart as PChart } from "@mui/x-charts/PieChart";

export default function ResponsivePieChart() {
  const [chartSize, setChartSize] = useState({ width: 850, height: 400 });

  // Function to update chart size based on window size
  const updateChartSize = () => {
    const screenWidth = window.innerWidth;
    const width = screenWidth > 1024 ? 850 : screenWidth > 768 ? 600 : 350;
    const height = screenWidth > 1024 ? 400 : screenWidth > 768 ? 300 : 250;
    setChartSize({ width, height });
  };

  useEffect(() => {
    updateChartSize(); // Set initial size
    window.addEventListener("resize", updateChartSize); // Update on resize
    return () => window.removeEventListener("resize", updateChartSize); // Cleanup
  }, []);

  const legendItems = [
    { label: "Zeroloss Ecosystem", value: 50, color: "#CF1BD2" },
    { label: "Treasury", value: 11, color: "#FF00E5" },
    { label: "Team", value: 8, color: "#547EEA" },
    { label: "Marketing", value: 10.28, color: "#F12F2F" },
    { label: "Development", value: 9, color: "#FFB800" },
    { label: "Early Access", value: 11.72, color: "#0CCF37" },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10 bg-white dark:bg-black">
      {/* Pie Chart */}
      <div className="flex justify-center lg:justify-start items-center ml-20 lg:ml-0">
        <PChart
          series={[
            {
              data: legendItems.map((item, index) => ({
                id: index,
                value: item.value,
                label: `${item.label} (${item.value}%)`, // Include percentage in label
                color: item.color,
              })),
              startAngle: -90, // Rotate the largest slice to start at the top
              endAngle: 270, // Ensures a full circle (360 degrees from startAngle)
            },
          ]}
          slotProps={{ legend: { hidden: true } }}
          width={chartSize.width}
          height={chartSize.height}
        />
      </div>

      {/* Legend Section */}
      <div className="flex flex-wrap lg:flex-col lg:items-start justify-center lg:justify-start mt-6 lg:mt-0 gap-4">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm font-medium text-black dark:text-white">
              {item.label} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
