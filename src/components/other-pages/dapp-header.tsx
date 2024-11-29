"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../theme-toggler";
import MobileMenu from "../mobile-menu";
import ZButton from "../ui/z-button";

export const navLinks = [
  {
    name: "Swap",
    path: "/swap",
  },
  {
    name: "Stake",
    path: "/stake",
  },
  {
    name: "Zeroloss-Pad",
    path: "/zeroloss-pad",
  },
];

export default function DappHeader() {
  return (
    <header
      style={{ zIndex: 1000 }}
      className={`w-full flex items-center justify-between py-2 bg-zeroLightAlt dark:bg-black lg:px-20 md:px-10 px-5 gap-10 sticky top-0 border-b border-b-zeroPrimary`}
    >
      {/* Logo and Links */}
      <nav className="flex items-center gap-5">
        <a href="/">
          <Image
            src={"/ZLossLogo.svg"}
            alt={"Zeroloss Icon"}
            width={55}
            height={55}
            priority
          />
        </a>

        <div className="lg:flex items-center gap-7 hidden">
          {navLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`text-black dark:text-white font-normal tracking-wider text-[0.85rem] transition duration-300 ease-in-out hover:text-zeroPrimary hover:dark:text-zeroPrimary uppercase`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* /////////////////SOCIAL and Buttons /////////////////*/}

      <div className="flex items-center gap-5">
        <div>
          <ThemeToggle />
        </div>

        <div className="lg:hidden flex">
          <MobileMenu />
        </div>

        <div className="hidden lg:flex">
          <ZButton
            btntext={"Connect Wallet"}
            thereIsIcon={false}
            onClick={() => {}}
          />
        </div>
      </div>
    </header>
  );
}
