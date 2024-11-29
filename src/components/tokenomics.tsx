import React from "react";
import PieChart from "./pie-chart";

export default function Tokenomics() {
  return (
    <section className="w-full py-20 bg-white dark:bg-black lg:px-20 md:px-10 px-5">
      <h1 className="font-black text-[1.85rem] tracking-wider">
        Zeroloss Tokenomics
      </h1>

      {/* ////////////// */}

      <section className="w-full mt-10 fkex justify-start flex">
        <div className="w-full flex lg:justify-start justify-center items-center">
          <PieChart />
        </div>
      </section>
    </section>
  );
}
