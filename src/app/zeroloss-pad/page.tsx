import Footer from "@/components/footer";
import Header from "@/components/header";
import ZPDetails from "@/components/other-pages/zeroloss-pad/ZPDetails";
import ZPHero from "@/components/other-pages/zeroloss-pad/ZPHero";
import React from "react";

export default function ZerolossPad() {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-black">
      <Header />

      <main className="w-full">
        <ZPHero />
        <ZPDetails />
      </main>

      <Footer />
    </section>
  );
}
