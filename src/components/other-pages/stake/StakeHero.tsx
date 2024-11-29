"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function StakeHero() {
  return (
    <section className="w-full flex justify-between items-center lg:h-screen py-20 lg:py-0 gap-10 lg:px-20 md:px-10 px-5">
      {/* ////// Writeup */}
      <div className="w-full lg:w-[50%] flex flex-col gap-5 text-center lg:text-left">
        <div className=" font-extrabold text-3xl md:text-5xl lg:text-left text-center">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<strong>Earn with <span style="color: gold;">Zeroloss</span> through staking!!!</strong>`
                )
                .pauseFor(1000)
                .deleteAll()

                .start();
            }}
          />
        </div>

        <p className="font-normal tracking-wider text-medium dark:text-white">
          Our platform offers you a seamless and secure way to participate in
          staking, enabling you to unlock the potential of your digital
          investments.
        </p>
        <p className="font-normal tracking-wider text-medium dark:text-white">
          Maximise your crypto assets and earn active rewards with zeroloss
          staking. Put your Zeroloss NFT and ZLT LP pairs to work for you
        </p>
      </div>

      {/* ////// Picture */}
      <div className="w-full lg:w-[50%] lg:flex justify-end hidden">
        <Image
          src={"/StakeHeroImage.png"}
          alt={"Stake Hero IMG"}
          priority
          width={450}
          height={300}
        />
      </div>
    </section>
  );
}
