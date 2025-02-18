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
        <div className="mx-32 w-1/3">
          <p className="text-6xl font-bold uppercase text-stroke">
            Somos Exelentes en
          </p>
        </div>
        <div>

        </div>
        <div>
          
        </div>
      </div>

      <div>
        
      </div>
    </section>
  );
}
