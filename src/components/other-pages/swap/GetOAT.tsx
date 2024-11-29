"use client";

import ZButton from "@/components/ui/z-button";
import React from "react";

export default function GetOAT() {
  return (
    <section className="w-full py-20 lg:px-20 md:px-10 px-5 bg-white dark:bg-zeroDarkAlt">
      <div className="w-full text-center flex flex-col justify-center items-center gap-5 text-black dark:text-white">
        <div>
          <h1 className="text-[2.5rem] font-black tracking-wide ">
            <span className="text-zeroPrimary">Zeroloss</span> Finance
          </h1>

          <p className="tracking-wider font-medium mt-2">
            STAKE, LIQUIDITY MINING, DAO, EARN
          </p>
        </div>

        <p className="lg:px-72 px-0">
          Zeroloss finance is a DeFi Utility dApp built for the Zeroloss
          ecosystem onchain.
        </p>

        <a className="text-zeroPrimary font-medium tracking-wide" href="/">
          Join Zeroloss DAO, get OAT NFT
        </a>

        <div>
          <ZButton
            btntext={"Mint Now"}
            thereIsIcon={false}
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
}
