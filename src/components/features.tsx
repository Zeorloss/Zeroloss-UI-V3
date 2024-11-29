import React from "react";

import Point1 from "../../public/Point1.svg";
import Point2 from "../../public/Point2.svg";
import Point3 from "../../public/Point3.svg";
import Point4 from "../../public/Point4.svg";
import Image from "next/image";

const FEATURES = [
  {
    title: "RUG-PROOF AND EQUITABLE",
    text: "Zeroloss is built with PMM reducing any risk of Impermanent Loss, Zero Taxation and Low slippage 1% step into ZeroVerse with confidence badge.",
    icon: Point1,
  },
  {
    title: "LOCKED LIQUIDITY",
    text: "60% of the total supply of ZLT will be locked as LP with a verified trusted third party for 9 years.",
    icon: Point2,
  },
  {
    title: "INTEROPERABLE",
    text: "POS utility platform with PMM algorithm and POE as the core interoperability model, SmartTrade, Pools, Stake, Combiner Harvest Mining, NFT with ZLT.",
    icon: Point3,
  },
  {
    title: "ZEROLOSSPAD",
    text: "ZLT token HOLDERS comes first and have access to IZO pools, Lands in ZeroVerse and the opportunity to get into new projects equitably without whales and bots eating up the allocation.",
    icon: Point4,
  },
];

export default function Features() {
  return (
    <section className="w-full py-20 bg-zeroLightAlt dark:bg-zeroDarkAlt lg:px-20 md:px-10 px-5">
      <div className="w-full gap-20 grid grid-cols-1 lg:grid-cols-2">
        {FEATURES.map((item) => (
          <div
            className="flex items-start gap-5 text-black dark:text-white"
            key={item.title}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={30}
              height={30}
              priority
            />

            <div className="flex-1 flex flex-col gap-3 px-10">
              <h2 className="font-bold tracking-wider">{item.title}</h2>

              <p className="text-[0.85rem] font-normal">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
