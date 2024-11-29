"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Input } from "@/components/ui/input";
import ZButton from "@/components/ui/z-button";
import { ChevronDown, Copy } from "lucide-react";

export default function SwapComponent() {
  const [tokens, setTokens] = useState({ from: "BNB", to: "KRL" }); // Track selected tokens
  const [amounts, setAmounts] = useState({ from: "", to: "" }); // Track input values
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [modalFor, setModalFor] = useState(""); // Track which token selector is clicked
  const [searchQuery, setSearchQuery] = useState(""); // Track search input

  // Dummy token data
  const dummyTokens = [
    { name: "BNB", icon: "🔸" },
    { name: "ZLT", icon: "🛡️" },
    { name: "ETH", icon: "💎" },
    { name: "USDT", icon: "💵" },
    { name: "BTC", icon: "⚡" },
  ];

  // Filtered tokens based on search input
  const filteredTokens = dummyTokens.filter((token) =>
    token.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle token switch
  const handleSwitch = () => {
    setTokens((prev) => ({ from: prev.to, to: prev.from }));
    setAmounts((prev) => ({ from: prev.to, to: prev.from }));
  };

  // Handle token selection
  const handleTokenSelect = (token: { name: any; icon?: string }) => {
    setTokens((prev) => ({
      ...prev,
      [modalFor]: token.name,
    }));
    setIsModalOpen(false); // Close modal
    setSearchQuery(""); // Reset search query
  };

  return (
    <>
      {/* Main Card Component */}
      <Card className="rounded-xl border border-zeroPrimary p-4 max-w-md mx-auto">
        {/* Header Section */}
        <CardHeader>
          <CardTitle className="text-[1.2rem] font-semibold">Swap</CardTitle>
          <CardDescription className="text-[0.85rem] text-gray-500">
            Trade tokens in an instant
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            {/* Input Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                {/* Token Selector */}
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalFor("from");
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zeroLightAlt dark:bg-black text-black dark:text-white"
                >
                  <span>🔸</span>
                  <span className="font-medium">{tokens.from}</span>
                  <span>
                    <ChevronDown />
                  </span>
                </button>
                {/* Return Icon */}
                <button className=" bg-zeroLightAlt dark:bg-black p-1 justify-center items-center flex rounded-sm">
                  🔄
                </button>
              </div>

              <Input
                type="number"
                className="h-14 dark:bg-black bg-zeroLightAlt rounded-full"
                value={amounts.from}
                onChange={(e) =>
                  setAmounts((prev) => ({ ...prev, from: e.target.value }))
                }
              />
            </div>

            {/* Switch Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSwitch}
                className="p-2 rounded-full bg-zeroLightAlt dark:bg-black"
              >
                ⬇️
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                {/* Token Selector */}
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalFor("to");
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zeroLightAlt dark:bg-black text-black dark:text-white"
                >
                  <span>🛡️</span>
                  <span className="font-medium">{tokens.to}</span>
                  <span>
                    <ChevronDown />
                  </span>
                </button>
                {/* Copy Icon */}
                <button className=" bg-zeroLightAlt dark:bg-black p-1 justify-center items-center flex rounded-sm">
                  <Copy size={15} />
                </button>
              </div>
              <Input
                type="number"
                className="h-14 dark:bg-black bg-zeroLightAlt rounded-full"
                value={amounts.to}
                onChange={(e) =>
                  setAmounts((prev) => ({ ...prev, to: e.target.value }))
                }
              />
            </div>

            {/* Slippage Tolerance Section */}
            <div>
              <div className="flex items-center gap-2 justify-center">
                {["0.1", "0.5", "1.0"].map((option) => (
                  <button
                    key={option}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-zeroLightAlt dark:bg-black hover:bg-zeroPrimary hover:dark:bg-zeroPrimary transition duration-300 ease-in-out"
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
                btntext={"Connect Wallet"}
                thereIsIcon={false}
                onClick={() => {}}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* MUI Modal for Token Selection */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Select a Token</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            placeholder="Search token..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4"
          />
          <List>
            {filteredTokens.map((token) => (
              <ListItem key={token.name} disablePadding>
                <ListItemButton onClick={() => handleTokenSelect(token)}>
                  <ListItemIcon>{token.icon}</ListItemIcon>
                  <ListItemText primary={token.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
}
