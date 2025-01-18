"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";

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
  const services = [
    {
      title: `${navTranslations.web}`,
      link: "#",
    },
    {
      title: `${navTranslations.design}`,
      link: "#",
    },
    {
      title: `${navTranslations.develop}`,
      link: "#",
    },
    {
      title: `${navTranslations.marketing}`,
      link: "#",
    },
    {
      title: `${navTranslations.ecommerce}`,
      link: "#",
    },
    {
      title: `${navTranslations.cms}`,
      link: "#",
    },
  ];

  const [selected, setSetselected] = useState<string>(services[0].title);
  const isVisible = useIntersectionObserver(0.5); // 50% de la sección debe estar visible

  return (
    <section
      id="services"
      className={`py-20 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <div className="max-w-7xl px-8 sm:px-6 lg:px-12">
        <p className="text-sm text-purple-700 text-left tracking-wide">
          {navTranslations.our} {navTranslations.services}
        </p>
        <h2 className="text-7xl font-bold uppercase text-left mb-12 text-stroke">
          {navTranslations.whatwedo}
        </h2>
        <div className="uppercase space-y-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="transition sm:flex justify-between"
              onClick={() => setSetselected(service.title)}>
              <h3
                className={`text-5xl mb-4 text-left whitespace-nowrap cursor-pointer ${
                  selected === service.title ? "font-bold" : "font-normal"
                }`}>
                {service.title}
              </h3>
              <div
                className={` ${
                  selected === service.title ? "visible" : "hidden"
                }`}>
                <p>Hola</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
