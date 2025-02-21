"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ServiceCard from "@/components/common/serviceCard";

// Tipado de las props de la página
interface Service {
  title: string;
  link: string;
}

export default function Services({
  navTranslations,
}: {
  navTranslations: any;
}) {
  const isVisible = useIntersectionObserver(0.5, "services"); // 50% de la sección debe estar visible

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      aria-hidden={!isVisible}
      className={`min-h-screen py-20 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <div className="max-w-full px-8 sm:px-6 :px-20">
        <div className="max-w-7xl w-full px-8 sm:px-6 lg:px-8 self-start mb-20">
          <p className="text-sm text-indigo-700 font-semibold tracking-widest uppercase before:content-[''] before:w-16 before:h-[1px] before:bg-gray-600 relative flex items-center gap-8">
            {navTranslations.whatwedo}
          </p>
        </div>
        <ServiceCard navTranslations={navTranslations} />
      </div>
    </section>
  );
}
