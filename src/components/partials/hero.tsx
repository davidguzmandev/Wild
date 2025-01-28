'use client'
import useRandomText from "@/hooks/useRandomText";
import {
  IconCoffee,
  IconMug,
  IconEye,
  IconEyeClosed,
} from "@tabler/icons-react";

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
    <section className="h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="bg-cover bg-center absolute inset-0 w-full h-full z-0 "></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="sm:mt-20 space-y-8 animate-fade-in-down">
          <h1 className="text-lg font-bold text-gray-900 mb-6 text-left leading-tight max-sm:h-24 uppercase">
            {navTranslations.we}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              {" "}
              {currentWord}<span className="text-indigo-500">{cursor}</span>
            </span>
          </h1>
          <div className="flex">
            <p className="text-left font-semibold md:text-6xl text-xl w-3/4 md:w-2/4">
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
