"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function SwapChart() {
  const [selectedFilter, setSelectedFilter] = useState("24H"); // Default selected filter

  const filters = ["24H", "1W", "1M", "1Y"];

  return (
    <Card className="rounded-xl border border-zeroPrimary">
      <CardContent className="mt-5">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-5">
          {/* Pair Title */}
          <h1 className="font-semibold tracking-wider text-center sm:text-left">
            BNB/KRL
          </h1>

          {/* Filter Buttons */}
          <div className="flex-1 flex justify-center sm:justify-end">
            <div className="flex items-center gap-2 bg-zeroLightAlt dark:bg-black h-8 rounded-md w-full sm:w-[50%] px-2 sm:px-0 justify-between sm:justify-around overflow-hidden">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-md transition-all ${
                    selectedFilter === filter
                      ? "bg-zeroPrimary text-white" // Highlight selected
                      : "text-black dark:text-zeroPrimary"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
