import React from "react";

const HIGHLIGHT = [
  {
    name: "No Fees",
  },
  {
    name: "Low Risk",
  },
  {
    name: "No Rug pulls",
  },
  {
    name: "Rewards",
  },
];

export default function ZPDetails() {
  return (
    <section className="w-full lg:py-20 py-10 bg-white dark:bg-zeroDarkAlt lg:px-20 md:px-10 px-5">
      <div className="w-full flex flex-col lg:flex-row justify-between lg:gap-20 gap-10">
        <div className="w-full lg:w-1/2 grid grid-cols-1 gap-5">
          {HIGHLIGHT.map((item, index) => (
            <div
              key={index}
              className="bg-zeroLightAlt dark:bg-black border border-zeroPrimary rounded-lg px-5 py-2 flex justify-center items-center tracking-wide font-medium text-black dark:text-white"
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2">
          <p className="text-black dark:text-white">
            Zeroloss launch pool enables promising projects to raise capital
            onchain. Investors are safe to safe to invest in early-stage
            projects through our kyc system and strict due diligence, we
            guarantee only audited, carefully vetted and promising projects will
            be chosen for our Launchpad
          </p>
        </div>
      </div>
    </section>
  );
}
