"use client";
import useRandomText from "@/hooks/useRandomText";
import { IconCoffee, IconMug } from "@tabler/icons-react";
import Image from "next/image";
import Background from "@/images/background.webp";

interface RandomTextComponentProps {
  words: string[];
}

export default function Hero({
  navTranslations,
  texts,
}: {
  navTranslations: any;
  texts: string[];
}) {
  return (
    <section className="min-h-screen px-2 relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-sm:mt-24">
        <div className="sm:mt-20 animate-fade-in-down">
          <h2 className="text-lg font-bold text-gray-900 mb-6 text-left leading-tight uppercase">
            <p className="text-sm text-indigo-700 font-semibold tracking-widest uppercase before:content-[''] before:w-16 before:h-[1px] before:bg-gray-600 relative flex items-center gap-8">
              {navTranslations.whatwedo}
            </p>
          </h2>
          <div className="flex">
            <h1 className="text-left font-semibold text-6xl sm:w-1/2">
            
            </h1>
          </div>
          <div className="flex mt-10 "></div>
        </div>
      </div>
    </section>
  );
}
