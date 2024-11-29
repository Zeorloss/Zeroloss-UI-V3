"use client";

import React from "react";
import Image from "next/image";

import Trustwallet from "../../public/brands/TrustWallet.svg";
import Metamask from "../../public/brands/Metamask.svg";
import Ledger from "../../public/brands/Ledger.svg";
import Bidget from "../../public/brands/BidgetWallet.webp";

import Binance from "../../public/brands/Binance.svg";
import Pancakeswap from "../../public/brands/Pancakeswap.svg";
import KRL from "../../public/brands/KRL.svg";
import Galxe from "../../public/brands/Galxe.jpeg";
import Mises from "../../public/brands/Mises.jpg";
import Intract from "../../public/brands/Intract.png";

import ZButton from "./ui/z-button";

const supportedWallets = [
  { src: Trustwallet, alt: "Trust Wallet" },
  { src: Metamask, alt: "Metamask" },
  { src: Ledger, alt: "Ledger" },
  { src: Bidget, alt: "Bidget" },
];
const assBrands = [
  { src: Binance, alt: "Binance" },
  { src: Pancakeswap, alt: "Pancakeswap" },
  { src: KRL, alt: "KRL" },
  { src: Galxe, alt: "Galxe" },
  { src: Mises, alt: "Mises" },
  { src: Intract, alt: "Intract" },
];

export default function Brands() {
  return (
    <section className="w-full pt-10 pb-20 bg-white dark:bg-black lg:px-20 md:px-10 px-5">
      <h2 className="font-bold text-[1rem] lg:text-[1.5rem] tracking-wider mb-5 text-black dark:text-white">
        Supported Wallet
      </h2>

      {/* Brands Container */}
      <div className="flex flex-wrap items-center justify-start gap-10">
        {supportedWallets.map((wallet, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={wallet.src}
              alt={wallet.alt}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 w-full">
        <h2 className="font-bold text-[1rem] lg:text-[1.5rem] tracking-wider mb-5 text-black dark:text-white">
          Associate Brands
        </h2>

        {/* Brands Container */}
        <div className="flex flex-wrap items-center justify-start gap-10">
          {assBrands.map((brand, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={brand.alt === "KRL" ? 60 : 150} // Conditional width for KRL
                height={brand.alt === "KRL" ? 60 : 150} // Conditional height for KRL
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 w-[50%] lg:w-[30%]">
        <ZButton
          btntext={"Token Explorer"}
          thereIsIcon={false}
          onClick={() => {}}
        />
      </div>
    </section>
  );
}
