"use client";

import ZButton from "@/components/ui/z-button";
import React from "react";
import HeroSlider from "../HeroSlider";
import { useRouter } from "next/navigation";

export default function ZPHero() {
  const router = useRouter();
  return (
    <section className="w-full lg:py-20 py-10 bg-zeroLightAlt dark:bg-black lg:px-20 md:px-10 px-5">
      {/* RENDER IMAGE SLIDER */}
      <HeroSlider
        images={[
          "https://media.licdn.com/dms/image/v2/D4E12AQH_UWXT0WB81g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1695928757684?e=2147483647&v=beta&t=-5kzFCFFy2GBJc1mUmizZjvFSbjAkMmG2eVf52PuXv8",

          "https://canvomagazine.com/wp-content/uploads/2024/08/the-rise-of-kingkaex-revolutionizing-the-cryptocurrency-exchange-landscape.webp",

          "https://www.crypto-news-flash.com/wp-content/uploads/2024/08/unnamed-2024-08-17T030552.733.png",
        ]}
      />

      {/* RENDEr THE REST */}
      <div className="w-full mt-5 flex flex-col gap-4">
        <h2 className="font-bold  tracking-wide text-black dark:text-white text-[1.2rem]">
          Zeroloss Launch Pool
        </h2>

        <p>
          Zeroloss pool puts the community and investors first when selecting
          projects to launch. New project teams are required to lock-in upto 70%
          of liquidity and team tokens in our partner locker platform to protect
          our community from Rugs.
        </p>

        <p>
          Get early access to our ZerolossPad project pools, hold a minimum of
          1million $ZLT and hold Zeroloss OAT-AI NFT to get allocation.
        </p>

        <div className="mt-5 w-[30%]">
          <ZButton
            btntext={"Buy $ZLT"}
            thereIsIcon={false}
            onClick={() => router.push("/swap")}
          />
        </div>
      </div>
    </section>
  );
}
