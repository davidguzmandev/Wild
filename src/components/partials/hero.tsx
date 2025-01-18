"use client";
import { useRandomText } from "@/hooks/useRandomText";
import {
  IconCoffee,
  IconMug,
  IconEye,
  IconEyeClosed,
} from "@tabler/icons-react";

export default function Hero({
  navTranslations,
  texts,
}: {
  navTranslations: any;
  texts: string[];
}) {
  const currentText = useRandomText({ texts, interval: 2000 });
  
  return (
    <section className="h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="gradient absolute inset-0 w-full h-full z-0 ">

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="sm:mt-20 space-y-8 animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 text-center leading-tight max-sm:h-24">
            {navTranslations.we}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
              {" "}
              {currentText}
            </span>
          </h1>
          <div className="justify-center flex">
            <p className="text-center md:text-3xl text-2xl text-gray-600 w-3/4 md:w-2/4">
              {navTranslations.heroText}
            </p>
          </div>
          <div className="flex max-sm:flex-col justify-center gap-6 mt-10 ">
            <button
              className="relative gradient-button bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold text-white rounded-md p-2 hover:text-violet-500 group hover:shadow-xl hover:scale-105 transition-all duration-600"
              aria-label={navTranslations.talktous}>
              <span className="inline-flex items-center gap-2">
                {navTranslations.talktous}{" "}
                <IconMug stroke={2} className="group-hover:hidden" />{" "}
                <IconCoffee stroke={2} className="hidden group-hover:block" />
              </span>
            </button>
            <button
              className="relative gradient-button bg-indigo-400 font-bold text-white rounded-md p-2 hover:text-indigo-500 group transition-all duration-600 hover:shadow-xl hover:scale-105"
              aria-label={navTranslations.seeservices}>
              <span className="inline-flex items-center gap-2">
                {navTranslations.seeservices}{" "}
                <IconEyeClosed stroke={2} className="group-hover:hidden" />{" "}
                <IconEye stroke={2} className="hidden group-hover:block" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
