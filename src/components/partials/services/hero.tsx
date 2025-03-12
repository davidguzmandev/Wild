import { IconCoffee, IconMug } from "@tabler/icons-react";
import Image from "next/image";
import Services from "@/images/services.webp";

export default function Hero({
  translations,
  translations2,
}: {
  translations: any;
  translations2: any;
}) {
  return (
    <section className="px-2 min-h-screen flex flex-col justify-center">
      <div className="justify-center max-w-7xl mx-auto flex px-4 sm:px-6 lg:px-8 relative z-10 order-1 max-sm:mt-24">
        <div className="sm:mt-20 animate-fade-in-down z-30 relative ">
          <div className="">
            <h1 className="text-center font-semibold text-6xl lg:w-5xl">
              {translations2.turning}{" "}
              {translations2.ideas}{" "}
              <span className="text-indigo-600">{translations2.h1}</span>
            </h1>
            <p>{translations.services.herotext}</p>
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
