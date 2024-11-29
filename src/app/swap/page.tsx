import Footer from "@/components/footer";
import DappHeader from "@/components/other-pages/dapp-header";
import GetOAT from "@/components/other-pages/swap/GetOAT";
import SwapHero from "@/components/other-pages/swap/SwapHero";
import React from "react";

export default function SwapPage() {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-black">
      <DappHeader />

      <main className="w-full">
        <SwapHero />
        <GetOAT />
      </main>

      <Footer />
    </section>
  );
}
