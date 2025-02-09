"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Uiux from "@/images/uiux.webp";
import Backgrounduiux from "@/images/backgrounduiux.webp";
import Image from "next/image";
import { useHandleMouseMove } from "@/hooks/useHandleMouseMove";

interface Position{
  x: number;
  y: number;
}

export default function WhyUs({ translations }: { translations: any }) {
  const isVisible = useIntersectionObserver(0.5, "whyus");
  const { position, handleMouseMove, resetPosition } = useHandleMouseMove();


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
              className="relative w-2/6 h-[504px] bg-cover text-white overflow-hidden rotate-z-45"
              style={{ backgroundImage: `url(${Backgrounduiux.src})`, transform: `translate(${position.x}px, ${position.y}px)`}}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetPosition}
              >
              <div className="p-10">
                <p className="font-bold text-2xl mb-6">Diseño UI/UX</p>
                <p>
                  Creamos interfaces graficas intuitivas para el usuario con
                  optimizaciones funcionales en cada elemento del producto.
                </p>
              </div>
              <Image
                src={Uiux}
                alt="Diseño UI/UX"
                width={500}
                height={500}
                className="absolute bottom-0 transition-transform duration-1000 ease-in-out hover:scale-110"
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
