"use client";

import Image from "next/image";
import React from "react";
import ZButton from "./ui/z-button";
import { HiRocketLaunch } from "react-icons/hi2";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:min-h-screen py-20 lg:py-0 gap-10 lg:px-20 md:px-10 px-5">
      {/* ////// Writeup */}
      <div className="w-full lg:w-[50%] flex flex-col gap-5 text-center lg:text-left">
        <div className=" font-extrabold text-3xl md:text-5xl lg:text-left text-center">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Best Web3 experience Guaranteed!!")
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<strong>This is <span style="color: gold;">Zeroloss</span></strong>'
                )
                .start();
            }}
          />
        </div>

        <p className="font-normal tracking-wider text-black dark:text-white">
          Zeroloss is the utility, ZLT is the currency with PMM algorithm. $8k+
          ZLT claimed in NFT staking 50million+ ZLT distributed to LP stakers.
        </p>

        <small className="font-semibold tracking-wider text-black dark:text-white">
          DeFi 3.0 utility dApp | Powered by ZLT
        </small>

        <div className="w-full lg:w-1/2 mt-5 flex justify-center lg:justify-start">
          <ZButton
            btntext={"Launch App"}
            thereIsIcon={true} // Consider renaming to showIcon
            icon={<HiRocketLaunch color="white" />}
            onClick={() => {
              // TODO: Implement functionality
            }}
          />
        </div>
      </div>

      {/* ////// Picture */}
      <div className="w-full lg:w-[50%] lg:flex lg:justify-end justify-center">
        <Image
          src={"/HeroImages.png"}
          alt={"Hero illustration showcasing ZeroVerse and ZLT"}
          priority
          width={450}
          height={300}
        />
      </div>
    </section>
  );
}
