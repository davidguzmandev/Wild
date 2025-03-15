import { IconCoffee, IconMug } from "@tabler/icons-react";

export default function Hero({
  translations,
  translations2,
}: {
  translations: any;
  translations2: any;
}) {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-slate-50 z-[-1]"></div>
      <div className="justify-center max-w-7xl mx-auto flex px-4 sm:px-6 lg:px-8 relative z-10 order-1 max-sm:mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800 animate-fade-in">
              {translations2.digitalservices}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up">
              {translations2.turning} {translations2.ideas}{" "}
              <span className="text-indigo-600">{translations2.h1}</span>
            </h1>
            <p className="text-lg text-slate-600 animate-fade-up">
              {translations2.herotext}
            </p>
          </div>
          <div className="flex mt-10 justify-center">
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
        {/* <div className="absolute right-0 z-10">
          <Image src={Services} alt="services" width={768} height={768} />
        </div> */}
      </div>
    </section>
  );
}
