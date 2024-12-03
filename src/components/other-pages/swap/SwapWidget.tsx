"use client";

import React from "react";
import { Helmet } from "react-helmet";

export default function SwapWidget() {
  return (
    <div>
      {/* Use Helmet to add external resources */}
      <Helmet>
        {/* External CSS */}
        <link
          rel="stylesheet"
          href="https://kryptolite.rocks/assets/widget/v1/styles.css"
        />

        {/* External JS Scripts */}
        <script
          src="https://kryptolite.rocks/assets/widget/v1/main.js"
          async
        ></script>
        <script
          src="https://kryptolite.rocks/assets/widget/v1/kryptolitewidget.min.js"
          async
        ></script>
      </Helmet>

      {/* Kryptolite Swap Widget */}
      <div
        id="kryptolite-swap-widget"
        data-referraladdress="0x0326052E23E78Cab91C03f77dF0b2024fD0CBCEb" // Replace with your referral wallet address
        data-basetoken="0x05D8762946fA7620b263E1e77003927addf5f7E6" // Replace with your token contract address
        data-color="#3D8E04" // Replace with your desired hex color
      ></div>
    </div>
  );
}
