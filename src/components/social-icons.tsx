import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord, FaNewspaper, FaXTwitter } from "react-icons/fa6";

const socialIconAndLinks = [
  {
    name: "Discord",
    url: "https://discord.gg/brUDkCb72M",
    icon: <FaDiscord />,
  },
  {
    name: "X",
    url: "https://twitter.com/Zeroloss_defi",
    icon: <FaXTwitter />,
  },
  {
    name: "Telegram",
    url: "https://t.me/zerolossGroup",
    icon: <FaTelegramPlane />,
  },
  {
    name: "LitePaper",
    url: "/",
    icon: <FaNewspaper />,
  },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {socialIconAndLinks.map((links) => (
        <a
          key={links.name}
          href={links.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zeroIcon dark:text-white hover:text-zeroPrimary dark:hover:text-zeroPrimary transition duration-300 ease-in-out"
        >
          <div className="h-6 w-6 flex items-center justify-center">
            {links.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
