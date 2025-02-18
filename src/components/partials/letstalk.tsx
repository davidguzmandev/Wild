"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { IconHandFinger, IconHandClick  } from "@tabler/icons-react";


export default function Letstalk({ translations }: { translations: any }) {
  const isVisible = useIntersectionObserver(0.5, "letstalk");

  return (
    <section
      id="letstalk"
      aria-labelledby="letstalk-heading"
      className={`min-h-screen py-20 transition-all duration-500 ease-out flex items-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <div className="max-w-full px-8 sm:px-6 lg:px-20 w-3/4 justify-center m-auto">
        <div className="text-center justify-center">
          <p className="text-4xl xs:text-5xl font-base pb-2 tracking-tight">{translations.projectinmind}</p>
          <p className="text-4xl xs:text-7xl font-bold pb-10 text-indigo-600">{translations.letstalk}</p>
          <p className="text-gray-600 pb-8">{translations.letstalkdescription}</p>
          <button
              className="relative gradient-button bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white rounded-full py-4 px-6 group hover:shadow-xl hover:scale-105 transition-all duration-600 uppercase text-lg tracking-tight cursor-pointer"
              aria-label={translations.getintouch}>
              <span className="inline-flex items-center gap-8">
                {translations.getintouch}{" "}
                <IconHandFinger
                  stroke={2}
                  className="group-hover:hidden group-hover:text-white"
                />{" "}
                <IconHandClick
                  stroke={2}
                  className="hidden group-hover:block group-hover:text-violet-500"
                />
              </span>
            </button>
        </div>
      </div>
    </section>
  );
}
