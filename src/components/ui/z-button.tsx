"use client";

import React from "react";
import { Button } from "./button";

export default function ZButton({
  btntext,
  thereIsIcon,
  icon,
  onClick,
}: {
  btntext: string;
  icon?: React.ReactNode;
  thereIsIcon: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      className=" bg-zeroPrimary rounded-full px-10 py-3 flex items-center justify-center gap-3 w-full relative"
      onClick={onClick}
    >
      {thereIsIcon === true && icon}
      <span className={`font-semibold text-white text-[0.85rem]`}>
        {btntext}
      </span>
    </Button>
  );
}
