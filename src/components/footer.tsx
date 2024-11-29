import React from "react";
import SocialIcons from "./social-icons";

const FOOT_LINKS = [
  {
    title: "Quests",
    children: [
      {
        title: "Galxe",
        url: "https://app.galxe.com/quest/Zeroloss",
      },
      {
        title: "Intract",
        url: "https://www.intract.io/project/zeroloss-ngdmfx?tab=0",
      },
    ],
  },
  {
    title: "ZLT Token",
    children: [
      {
        title: "View Contract",
        url: "/",
      },
      {
        title: "Buy ZLT Token",
        url: "/swap",
      },
    ],
  },

  {
    title: "ZeroLoss",
    children: [
      {
        title: "Lite Paper",
        url: "/",
      },
      {
        title: "Rug Checker",
        url: "/",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full relative pt-10 bg-zeroLightAlt dark:bg-zeroDarkAlt py-20 lg:px-20 md:px-10 px-5">
      <section className="w-full flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Assistance Section */}
        <div className="w-full lg:w-[40%] flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="font-black text-[1.1rem] tracking-wide text-black dark:text-zeroPrimary">
              Need Help?
            </h3>
            <small>
              For all marketing and advertising, please contact our Marketing
              service:{" "}
              <span className="font-bold">
                <a href="/" className="underline">
                  contactinfo@zeroloss.finance
                </a>
              </span>
            </small>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-black text-[1.1rem] tracking-wide text-black dark:text-zeroPrimary">
              Connect With Us
            </h3>
            <SocialIcons />
          </div>
        </div>

        {/* FOOT LINKS Section */}
        <div className="w-full lg:w-[60%] flex flex-col lg:flex-row flex-wrap justify-end lg:gap-20 gap-10">
          {FOOT_LINKS.map((footLink, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 w-full lg:w-auto text-left"
            >
              {/* Title */}
              <h3 className="font-black text-[1.1rem] tracking-wide text-black dark:text-zeroPrimary">
                {footLink.title}
              </h3>
              {/* Children */}
              <ul className="flex flex-col gap-2">
                {footLink.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <a
                      href={child.url}
                      className="text-sm text-black dark:text-white hover:underline"
                    >
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
}
