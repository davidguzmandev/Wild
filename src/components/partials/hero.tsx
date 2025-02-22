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
  const { currentWord, cursor } = useRandomText({ words: texts });

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
          <h1 className="text-lg font-bold text-gray-900 mb-6 text-left leading-tight uppercase">
            {navTranslations.we}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              {" "}
              {currentWord}
              <span className="text-indigo-500">{cursor}</span>
            </span>
          </h1>
          <div className="flex">
            <h2 className="text-left font-semibold text-6xl sm:w-1/2">
              {navTranslations.heroText2.split(" ").map((word, index) => {
                // Palabras a resaltar
                const wordsToHighlight = ["sitios", "web", "websites"];

                // Verifica si la palabra actual está en la lista de palabras a resaltar
                if (wordsToHighlight.includes(word.toLowerCase())) {
                  return (
                    <span key={index} className="text-indigo-600 font-bold">
                      {word}{" "}
                    </span>
                  );
                }

                // Si no es una palabra a resaltar, solo muestra la palabra sin cambios
                return <span key={index}>{word} </span>;
              })}
            </h2>
          </div>
          <div className="flex mt-10 ">
            <button
              className="relative gradient-button bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white rounded-full py-4 px-6 group hover:shadow-xl hover:scale-105 transition-all duration-600 uppercase text-lg tracking-wide cursor-pointer"
              aria-label={navTranslations.talktous}>
              <span className="inline-flex items-center gap-10">
                {navTranslations.talktous}{" "}
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
