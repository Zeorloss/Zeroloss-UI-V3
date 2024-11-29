"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { navLinks } from "./header";
import Link from "next/link";
import ZButton from "./ui/z-button";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <section className="w-full h-screen flex flex-col justify-between items-start gap-5 py-20">
            <div className="flex flex-col gap-3 tracking-wider font-medium items-start">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="bg-transparent p-2 hover:bg-zeroPrimary transition duration-300 ease-in-out rounded-full text-[0.85rem] hover:text-white text-left"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* /////// */}
            <div>
              <ZButton
                btntext={"Buy ZLT Token"}
                thereIsIcon={false}
                onClick={() => {}}
              />
            </div>
          </section>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
