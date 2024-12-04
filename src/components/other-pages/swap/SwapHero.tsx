import React from "react";
import SwapChart from "./SwapChart";
import SwapComponent from "./SwapComponent";
import SwapWidget from "./SwapWidget";

export default function SwapHero() {
  return (
    <section className="w-full lg:py-20 py-10 bg-zeroLightAlt dark:bg-black lg:px-20 md:px-10 px-5">
      {/* RENDER CHART & SWAP COMPONENTS */}
      <section className="w-full flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Chart */}
        <div className="w-full lg:w-[60%]">
          <SwapChart />
        </div>

        {/* Swap Component */}
        <div className="w-full lg:w-[40%] bg-white text-black">
          {/* <SwapComponent /> */}
          <SwapWidget />
        </div>
      </section>
    </section>
  );
}
