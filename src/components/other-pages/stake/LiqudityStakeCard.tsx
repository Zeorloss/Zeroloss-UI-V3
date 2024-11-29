"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ZButton from "@/components/ui/z-button";
import { Input } from "@/components/ui/input";

export default function LiqudityStakeCard() {
  return (
    <Card className="rounded-xl border border-zeroPrimary p-4 max-w-md mx-auto dark:bg-black bg-zeroLightAlt">
      {/* Header Section */}
      <CardHeader>
        <CardTitle className="text-[1.2rem] font-semibold">Stake</CardTitle>
        <CardDescription className="text-[0.85rem] text-gray-500">
          Earn by staking liquidity
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          {/* Input Section */}
          <div className="space-y-2">
            <Input
              type="number"
              className="h-14 dark:bg-zeroDarkAlt bg-white rounded-full"
            />
          </div>

          {/* Slippage Tolerance Section */}
          <div>
            <div className="flex items-center gap-2 justify-center">
              {["0.1", "0.5", "1.0"].map((option) => (
                <button
                  key={option}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-zeroDarkAlt hover:bg-zeroPrimary hover:dark:bg-zeroPrimary transition duration-300 ease-in-out"
                >
                  {option}%
                </button>
              ))}

              <Input className="rounded-full" />
            </div>
          </div>

          {/* Connect Wallet Button */}
          <div className="w-full">
            <ZButton
              btntext={"Approve"}
              thereIsIcon={false}
              onClick={() => {}}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
