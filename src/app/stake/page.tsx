import Footer from "@/components/footer";
import DappHeader from "@/components/other-pages/dapp-header";
import StakeDapp from "@/components/other-pages/stake/StakeDapp";
import StakeHero from "@/components/other-pages/stake/StakeHero";
import React from "react";

export default function StakePage() {
  return (
    <section className="w-full min-h-screen bg-zeroLightAlt dark:bg-black">
      <DappHeader />

      <main className="w-full">
        <StakeHero />
        <StakeDapp />
      </main>

      <Footer />
    </section>
  );
}
