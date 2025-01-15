"use client";
import { useRandomText } from "@/hooks/useRandomText";
export default function Hero({
  navTranslations,
  texts,
}: {
  navTranslations: any;
  texts: string[];
}) {
  const currentText = useRandomText({ texts, interval: 2000 });

  return (
    <section className="h-screen pt-32 pb-20 bg-gradient-to-br from-indigo-200 via-violet-100 to-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            {navTranslations.we}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-indigo-700">
              {" "}
              {currentText}
            </span>
          </h1>
          <div className="justify-center flex">
            <p className="text-center md:text-3xl text-md text-gray-600 w-2/4">
              {navTranslations.heroText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
