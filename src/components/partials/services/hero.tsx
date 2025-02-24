"use client";
import { IconCoffee, IconMug } from "@tabler/icons-react";
import Image from "next/image";
import Background from "@/images/background.webp";

interface RandomTextComponentProps {
  words: string[];
}

export default function Hero({
  translations,
  translations2,
}: {
  translations: any;
  translations2: any;
}) {
  return (
    <section className="min-h-screen px-2 relative flex flex-col justify-center">
      <div className="absolute z-0 inset-0">
        <Image
          src={Background}
          alt="background"
          fill
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 order-1 max-sm:mt-24">
        <div className="sm:mt-20 animate-fade-in-down">
          <div className="flex">
            <h1 className="text-left font-semibold text-6xl sm:w-1/2">
              {translations2.turning}{" "}
              <span className="text-indigo-600">{translations2.ideas}</span>{" "}
              {translations2.h1}
            </h1>
          </div>
          <div className="flex mt-10 ">
            <button
              className="relative gradient-button bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white rounded-full py-4 px-6 group hover:shadow-xl hover:scale-105 transition-all duration-600 uppercase text-lg tracking-wide cursor-pointer"
              aria-label={translations.talktous}>
              <span className="inline-flex items-center gap-10">
                {translations.talktous}{" "}
                <IconMug
                  stroke={2}
                  className="group-hover:hidden group-active:hidden"
                />{" "}
                <IconCoffee
                  stroke={2}
                  className="hidden group-hover:block group-active:block text-violet-500 group-active:text-violet-500"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
