"use client";
import useRandomText from "@/hooks/useRandomText";
import {
  IconCoffee,
  IconMug,
} from "@tabler/icons-react";
import HeroBanner from "@/components/common/herobanner";

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
    <section className="md:h-screen pt-32 pb-8 px-2 relative flex flex-col overflow-hidden">
      <div className="bg-cover bg-center md:absolute flex justify-center z-0 md:order-2 order-3">
        <HeroBanner />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 order-1">
        <div className="sm:mt-20 space-y-8 animate-fade-in-down">
          <h1 className="text-lg font-bold text-gray-900 mb-6 text-left leading-tight max-sm:h-24 uppercase">
            {navTranslations.we}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              {" "}
              {currentWord}
              <span className="text-indigo-500">{cursor}</span>
            </span>
          </h1>
          <div className="flex">
            <h2 className="text-left font-semibold text-6xl w-1/2">
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
          <div className="flex max-sm:flex-col  gap-6 mt-10 ">
            <button
              className="relative gradient-button bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold text-white rounded-md p-2 hover:text-violet-500 group hover:shadow-xl hover:scale-105 transition-all duration-600"
              aria-label={navTranslations.talktous}>
              <span className="inline-flex items-center gap-2">
                {navTranslations.talktous}{" "}
                <IconMug stroke={2} className="group-hover:hidden" />{" "}
                <IconCoffee stroke={2} className="hidden group-hover:block" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
