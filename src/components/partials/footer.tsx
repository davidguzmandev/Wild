"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Footer({ translations }: { translations: any }) {
  const isVisible = useIntersectionObserver(0.5, "whyus");

  return (
    <section
      id="whyus"
      aria-labelledby="whyus-heading"
      className={`min-h-screen py-20 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <div className="max-w-full px-8 sm:px-6 lg:px-20">
        <div className="max-w-7xl w-full px-8 sm:px-6 lg:px-8 self-start mb-20">
          <p className="text-sm text-indigo-700 font-semibold tracking-widest uppercase before:content-[''] before:w-16 before:h-[1px] before:bg-gray-600 relative flex items-center gap-8">
            {translations.whyus}
          </p>
        </div>
        <div className="mx-32 w-1/3">
          <p className="text-6xl font-bold uppercase text-stroke">Somos Exelentes en</p>
        </div>
        <div>
          <div className="border-2 w-96 h-[500px] p-10">
            <p>
              Card1
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias odio dolore eos esse vel repellat corporis sed quas ut, exercitationem officia quisquam sunt iste necessitatibus, a labore maiores perferendis similique!</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
