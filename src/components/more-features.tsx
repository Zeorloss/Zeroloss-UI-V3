import { Globe, Handshake, Landmark } from "lucide-react";
import React from "react";

const MORE_FEATURES = [
  {
    title: "Decentralized",
    text: "DeFi protocol, focused on the purpose of value creation, with a new financial algorithm to make the store of value appreciate with time and interoperability at its core.",
    icon: <Globe />,
  },
  {
    title: "POE",
    text: "The core interoperability Algorithm model of ZEROLOSS As users stake there crypto assets the POE algorithm redistributes profits and a drip pool is constantly grown.",
    icon: <Handshake />,
  },
  {
    title: "Global Adoption",
    text: "Redesigning the way decentralized finance (DeFi) is structured to work. We are evolving how DeFi works completely while delivering the most robust ecosystem ever seen in Defi's future advancements DeFi 3.0.",
    icon: <Landmark />,
  },
];

export default function MoreFeatures() {
  return (
    <section className="w-full py-20 bg-white dark:bg-black lg:px-20 md:px-10 px-5">
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10">
        {MORE_FEATURES.map((item, index) => (
          <div
            key={item.title}
            className="rounded-lg w-full bg-zeroPrimary dark:bg-zeroDarkAlt p-10 flex flex-col gap-4"
          >
            <div className="flex gap-5 items-center text-black dark:text-zeroPrimary">
              {item.icon}
              <h2 className="font-bold tracking-wider">{item.title}</h2>
            </div>

            <p className="text-black dark:text-white text-[0.85rem]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
