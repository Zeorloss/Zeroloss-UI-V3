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

export default function NFTStakeCard() {
  return (
    <Card className="rounded-xl border border-zeroPrimary p-4 max-w-md mx-auto dark:bg-black bg-zeroLightAlt">
      {/* Header Section */}
      <CardHeader>
        <CardTitle className="text-[1.2rem] font-semibold">
          Zeroloss NFT Stake
        </CardTitle>
        <CardDescription className="text-[0.85rem] text-gray-500">
          Stake your NFT
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
