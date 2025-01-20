"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function WhyUs({ translations }: { translations: any }) {
  const isVisible = useIntersectionObserver(0.5, "whyus");
  return (
    <section
      id="whyus"
      aria-labelledby="whyus-heading"
      aria-hidden={!isVisible}
      className={`py-20 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <div className="flex justify-between">
        <div className="w-24 px-8 sm:px-6 lg:px-20">
          <p className="sm:text-7xl text-6xl font-bold uppercase text-left mb-12 text-stroke">
            {translations.whyus}
          </p>
        </div>
        <div>
            <ul>
                <li>{translations.innovation}</li>
            </ul>
        </div>
      </div>
    </section>
  );
}
