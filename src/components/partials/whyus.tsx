"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Uiux from "@/images/uiux.webp";
import Backgrounduiux from "@/images/backgrounduiux.webp";
import Backgroundwebapp from "@/images/backgroundwebapp.webp";
import Webapp from "@/images/webapp.webp";
import Websitedev from "@/images/websitedev.webp";
import Image from "next/image";
import { useHandleMouseMove } from "@/hooks/useHandleMouseMove";

interface Position {
  x: number;
  y: number;
}
// VOY AQUI: EL PROBLEMA AHORA ES QUE LA IMAGEN SE DESBORDA CUANDO CARGA LA WEB. HAY UNA POSIBLE SOLCUOIN EN GEMINI, REVISALA.
export default function WhyUs({ translations }: { translations: any }) {
  const isVisible = useIntersectionObserver(0.5, "whyus");
  const { position, handleMouseMove, resetPosition } = useHandleMouseMove();

  return (
    <section
      id="whyus"
      aria-labelledby="whyus-heading"
      className={`min-h-screen my-20 transition-all  ${
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

          <div className="my-10 flex gap-6 perspective-normal">
            <div
              className="w-2/6 h-[504px] bg-cover text-white overflow-hidden"
              style={{
                backgroundImage: `url(${Backgrounduiux.src})`,
                transform: `rotateX(${position.card1?.y}deg) rotateY(${position.card1?.x}deg)`,
                transition: "transform 0.3s ease-out",
              }}
              onMouseMove={handleMouseMove("card1")}
              onMouseLeave={() => resetPosition("card1")}>
              <div className="p-10">
                <p className="font-bold text-2xl mb-6">Aplicaciones Web</p>
                <p>
                  Creamos soluciones rápidas, eficientes, seguras y compatibles
                  con múltiples plataformas, desde la conceptualización hasta la
                  implementación.
                </p>
              </div>
              <Image
                src={Webapp}
                alt="Webapp"
                width={700}
                height={700}
                style={{
                  transform: `translateX(${position.card1?.x * 6}px) translateY(${position.card1?.y * 6}px)`,
                  transition: "transform 0.3s ease-out",
                }}
                className="absolute -bottom-60"
              />
            </div>

            <div className="w-3/6 space-y-6 perspective-normal">
              <div
                className="h-60 bg-blue-600 bg-cover text-white overflow-hidden"
                style={{
                  backgroundImage: `url(${Backgroundwebapp.src})`,
                  transform: `rotateX(${position.card2?.y}deg) rotateY(${position.card2?.x}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
                onMouseMove={handleMouseMove("card2")}
                onMouseLeave={() => resetPosition("card2")}>
                <div className="p-10 w-3/4">
                  <p className="font-bold text-2xl mb-6">Diseño UI/UX</p>
                  <p className="text-pretty">
                    Creamos interfaces graficas intuitivas para el usuario con
                    optimizaciones funcionales en cada elemento del producto.
                  </p>
                </div>
                <Image
                  src={Uiux}
                  alt="Diseño UI/UX"
                  width={407}
                  height={407}
                  style={{
                    transform: `translateX(${position.card2?.x * 4}px) translateY(${position.card2?.y * 2}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                  className="absolute -bottom-20 -right-20"
                />
              </div>

              <div
                className="h-60 bg-blue-600 bg-cover text-white overflow-hidden"
                style={{
                  backgroundImage: `url(${Backgroundwebapp.src})`,
                  transform: `rotateX(${position.card3?.y}deg) rotateY(${position.card3?.x}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
                onMouseMove={handleMouseMove("card3")}
                onMouseLeave={() => resetPosition("card3")}>
                <div className="p-10 w-3/4">
                  <p className="font-bold text-2xl mb-6">Website Development</p>
                  <p className="text-pretty">
                    El estudio de cada proyecto nos hace desarrollar en el lenguaje o framework mas adecuado para tu idea. Nosotros SI hacemos software a la medida.
                  </p>
                </div>
                <Image
                  src={Websitedev}
                  alt="websitedev"
                  width={220}
                  height={220}
                  style={{
                    transform: `translateX(${position.card3?.x * 4}px) translateY(${position.card3?.y * 2}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                  className="absolute -bottom-25 -right-10"
                />
              </div>
            </div>
            <div
              className="w-1/6 h-[504] bg-blue-600 bg-cover text-white overflow-hidden"
              style={{
                backgroundImage: `url(${Backgroundwebapp.src})`,
                transform: `rotateX(${position.card3?.y}deg) rotateY(${position.card3?.x}deg)`,
                transition: "transform 0.3s ease-out",
              }}
              onMouseMove={handleMouseMove("card3")}
              onMouseLeave={() => resetPosition("card3")}>
              <div className="p-10 ">
                <p className="font-bold text-2xl mb-6">CMS</p>
                <p className="text-wrap">
                  Wordpress es uno de los mejores, ¿porque no?, trabajamos tambien con Joomla, Drupal, Shopify o incluso Moodle para instituciones educativas.
                </p>
              </div>
              <Image
                src={Uiux}
                alt="CMS"
                width={407}
                height={407}
                style={{
                  transform: `translateX(${position.card3?.x * 4}px) translateY(${position.card3?.y * 2}px)`,
                  transition: "transform 0.3s ease-out",
                }}
                className="absolute -bottom-20 -right-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
