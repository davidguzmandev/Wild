"use client";

export default function WeAre({ translations }: { translations: any }) {
  
  return (
    <section className="bg-slate-800 p-4 sm:p-6 md:p-10">
      <h3 className="font-black text-3xl sm:text-4xl md:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-500 flex flex-col sm:flex-row justify-center items-center text-center sm:text-left">
        <span className="mb-4 sm:mb-0 sm:mr-4 max-xl:text-4xl items-center text-nowrap">{translations.weare} </span>
        <div className="g-container relative overflow-hidden flex">
          <ul className="root2 flex flex-col transition-transform duration-150 ease-linear">
            <li className="gli glimove bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
              {translations.wearelist.anagency}
            </li>
            <li className="gli glimove bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
              {translations.wearelist.astudio}
            </li>
            <li className="gli glimove bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
              {translations.wearelist.aproject}
            </li>
            <li className="gli glimove bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
              {translations.wearelist.anagency}
            </li>
            <li className="gli glimove bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
              {translations.wearelist.astudio}
            </li>
            <li className="gli glimove bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
              {translations.wearelist.aproject}
            </li>
            <li className="gli glimove bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
              {translations.wearelist.anagency}
            </li>
          </ul>
        </div>
      </h3>

      <p className="text-white text-xl italic font-semibold text-center">
        {translations.weare} {translations.whatyouwant}
      </p>
    </section>
  );
}
