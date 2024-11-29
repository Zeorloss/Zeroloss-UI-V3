import Brands from "@/components/brands";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import MoreFeatures from "@/components/more-features";
import Tokenomics from "@/components/tokenomics";
import React from "react";

export default function LandingPage() {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-black">
      <Header />

      <main className="w-full">
        <Hero />
        <Features />
        <Tokenomics />
        <MoreFeatures />
        <Brands />
      </main>

      <Footer />
    </section>
  );
}
