"use client";
import useRandomText from "@/hooks/useRandomText";
import { IconCoffee, IconMug } from "@tabler/icons-react";
import Image from "next/image";
import Background from "@/images/background.webp";

interface RandomTextComponentProps {
  words: string[];
}

export default function Hero({
  translations,
}: {
  navTranslations: any;
  texts: string[];
}) {
  return (
    <section className="px-2 relative flex flex-col justify-center">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-20 relative z-10 mt-24 sm:mt-20">
        <div className="sm:mt-20 animate-fade-in-down">
          <h2 className="text-lg font-bold text-gray-900 mb-6 text-left leading-tight uppercase px-8 sm:px-6 lg:px-8">
            <p className="text-sm text-indigo-700 font-semibold tracking-widest uppercase before:content-[''] before:w-16 before:h-[1px] before:bg-gray-600 relative flex items-center gap-8">
              {translations.whatwedo}
            </p>
          </h2>
          <div className="flex mt-20">
            <h1 className="text-left font-semibold text-7xl xl-mx-12 2xl-mx-32 lg:mx-32 uppercase text-stroke">
              {translations.our} {translations.services}
            </h1>
          </div>
          <div className="flex mt-10 "></div>
        </div>
      </div>
    </section>
  );
}
