"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Uiux from "@/images/uiux.webp";
import Backgrounduiux from "@/images/backgrounduiux.webp";
import Image from "next/image";

export default function WhyUs({ translations }: { translations: any }) {
  const isVisible = useIntersectionObserver(0.5, "whyus");

  return (
    <section
      id="whyus"
      aria-labelledby="whyus-heading"
      className={`h-screen py-20 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <div className="max-w-full px-8 sm:px-6 lg:px-20  mb-20">
        <div className="max-w-7xl w-full px-8 sm:px-6 lg:px-8 self-start mb-20">
          <p className="text-sm text-indigo-700 font-semibold tracking-widest uppercase before:content-[''] before:w-16 before:h-[1px] before:bg-gray-600 relative flex items-center gap-8">
            {translations.whyus}
          </p>
        </div>
        <div className="mx-32">
          <div className="w-1/3">
            <p className="text-6xl font-bold uppercase text-stroke">
              Somos Exelentes en
            </p>
          </div>
          <div className="my-10 flex gap-6">
            <div
              className="w-2/6 h-[504px] p-10 bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${Backgrounduiux.src})` }}>
              <p className="font-bold text-2xl mb-6">Diseño UI/UX</p>
              <p>
                Creamos interfaces graficas intuitivas para el usuario con
                optimizaciones funcionales en cada elemento del producto.
              </p>
              <Image 
                src={Uiux}
                alt="Diseño UI/UX"
                width={300}
                height={300}
              />
            </div>
            <div className="w-3/6 space-y-6">
              <div className="h-60 p-10 bg-blue-600">
                <p className="font-bold text-2xl mb-6">Aplicaciones Web</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias odio dolore eos esse vel repellat corporis sed quas ut,
                  exercitationem officia quisquam sunt iste necessitatibus, a
                  labore maiores perferendis similique!
                </p>
              </div>
              <div className="h-60 p-10 bg-blue-600">
                <p>Card1</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias odio dolore eos esse vel repellat corporis sed quas ut,
                  exercitationem officia quisquam sunt iste necessitatibus, a
                  labore maiores perferendis similique!
                </p>
              </div>
            </div>
            <div className="w-1/6 h-[504] p-10 bg-blue-600">
              <p>Card1</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                odio dolore eos esse vel repellat corporis sed quas ut,
                exercitationem officia quisquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
