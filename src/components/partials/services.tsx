"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ServiceCard from "../common/serviceCard";

// Tipado de las props de la página
interface Service {
  title: string;
  link: string;
}

export default function Services({ navTranslations }: { navTranslations: any }) {

  const isVisible = useIntersectionObserver(0.5); // 50% de la sección debe estar visible

  return (
    <section
      id="services"
      className={`py-20 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <div className="max-w-full px-8 sm:px-6 lg:px-20">
        <p className="text-sm text-purple-700 text-left tracking-wide">
          {navTranslations.our} {navTranslations.services}
        </p>
        <h2 className="sm:text-7xl text-6xl font-bold uppercase text-left mb-12 text-stroke">
          {navTranslations.whatwedo}
        </h2>
        <ServiceCard navTranslations={navTranslations}/>
      </div>
    </section>
  );
}
