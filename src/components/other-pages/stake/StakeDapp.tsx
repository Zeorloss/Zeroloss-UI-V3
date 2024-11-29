"use client";

import ZButton from "@/components/ui/z-button";
import React, { useState } from "react";
import LiqudityStakeCard from "./LiqudityStakeCard";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import NFTStakeCard from "./NFTStakeCard";

export default function StakeDapp() {
  const [activeTab, setActiveTab] = useState("liquidity"); // Track the active tab

  return (
    <section className="w-full py-20 bg-zeroLightAlt dark:bg-black lg:px-20 md:px-10 px-5">
      {/* Toggle Section */}
      <div className="flex w-full justify-center items-center">
        <div className="w-full flex items-center rounded-xl bg-white dark:bg-zeroDarkAlt  overflow-hidden p-1">
          {/* Liquidity Pool Mining Button */}
          <button
            onClick={() => setActiveTab("liquidity")}
            className={`w-1/2 py-2 text-sm font-semibold 
            ${
              activeTab === "liquidity"
                ? "bg-zeroLightAlt text-zeroPrimary dark:text-white dark:bg-black border-zeroPrimary border z-10 rounded-xl"
                : "bg-transparent text-zeroIcon"
            }`}
          >
            Liquidity Pool Mining
          </button>

          {/* NFT Staking Button */}
          <button
            onClick={() => setActiveTab("staking")}
            className={`w-1/2 py-2 text-sm font-semibold 
            ${
              activeTab === "staking"
                ? "bg-zeroLightAlt text-zeroPrimary dark:text-white dark:bg-black border-zeroPrimary border z-10 rounded-xl"
                : "bg-transparent text-zeroIcon"
            }`}
          >
            NFT Staking
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-10">
        {activeTab === "liquidity" && (
          <section className="p-6 bg-white rounded-3xl dark:bg-zeroDarkAlt">
            {/* Top Layer */}
            <div className="p-5 border-b border-b-gray-200 dark:border-b-black flex flex-col md:flex-row justify-between gap-5 items-start md:items-center">
              <div>
                <h3 className="font-bold text-[1.5rem] text-black dark:text-white">
                  1385 LP
                </h3>
                <p className="text-zeroIcon">Staked</p>
              </div>

              <div>
                <h3 className="font-bold text-[1.5rem] text-black dark:text-white">
                  38.5%
                </h3>
                <p className="text-zeroIcon">APR</p>
              </div>

              <div className="w-full md:w-auto">
                <ZButton
                  btntext={"Buy Liquidity"}
                  thereIsIcon={false}
                  onClick={() => {}}
                />
              </div>
            </div>

            {/* Middle Layer */}
            <div className="w-full justify-center items-center py-20">
              <LiqudityStakeCard />
            </div>

            {/* Lower Layer */}
            <div className="p-5 border-t border-t-gray-200 dark:border-t-black flex flex-col md:flex-row justify-between gap-5 items-start md:items-center">
              <div>
                <p className="text-zeroIcon">Pending Reward</p>
                <h3 className="font-bold text-[1.5rem] text-black dark:text-white">
                  250 ZLT
                </h3>
              </div>

              <div className="w-full md:w-auto">
                <Button className="flex items-center md:justify-start gap-3 w-full md:w-auto text-zeroPrimary bg-transparent hover:bg-transparent">
                  <span>Harvest</span>
                  <MoveRight />
                </Button>
              </div>
            </div>
          </section>
        )}
        {activeTab === "staking" && (
          <section className="p-6 bg-white rounded-3xl dark:bg-zeroDarkAlt">
            {/* Top Layer */}
            <div className="p-5 border-b border-b-gray-200 dark:border-b-black flex flex-col md:flex-row justify-between gap-5 items-start md:items-center">
              <div>
                <h3 className="font-bold text-[1.5rem] text-black dark:text-white">
                  1385 LP
                </h3>
                <p className="text-zeroIcon">Staked</p>
              </div>

              <div>
                <h3 className="font-bold text-[1.5rem] text-black dark:text-white">
                  38.5%
                </h3>
                <p className="text-zeroIcon">APR</p>
              </div>

              <div className="w-full md:w-auto">
                <ZButton
                  btntext={"Buy NFT"}
                  thereIsIcon={false}
                  onClick={() => {}}
                />
              </div>
            </div>

            {/* Middle Layer */}
            <div className="w-full justify-center items-center py-20">
              <NFTStakeCard />
            </div>

            {/* Lower Layer */}
            <div className="p-5 border-t border-t-gray-200 dark:border-t-black flex flex-col md:flex-row justify-between gap-5 items-start md:items-center">
              <div>
                <p className="text-zeroIcon">Pending Reward</p>
                <h3 className="font-bold text-[1.5rem] text-black dark:text-white">
                  250 ZLT
                </h3>
              </div>

              <div className="w-full md:w-auto">
                <Button className="flex items-center md:justify-start gap-3 w-full md:w-auto text-zeroPrimary bg-transparent hover:bg-transparent">
                  <span>Harvest</span>
                  <MoveRight />
                </Button>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
