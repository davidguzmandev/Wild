"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Uiux from "@/images/uiux.webp";
import Backgrounduiux from "@/images/backgrounduiux.webp";
import Backgroundwebapp from "@/images/backgroundwebapp.webp";
import Backgroundwebsite from "@/images/backgroundwebsite.webp";
import Backgroundcms from "@/images/backgroundcms.webp";
import Webapp from "@/images/webapp.webp";
import Websitedev from "@/images/websitedev.webp";
import Cms from "@/images/cms.webp";
import Image from "next/image";
import { useHandleMouseMove } from "@/hooks/useHandleMouseMove";

interface Position {
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
      className={`min-h-screen my-20 transition-all  ${
        isVisible ? "opacity-100 translate-y-0 duration-500" : "opacity-0 translate-y-5"
      }`}>
      <div className="max-w-full px-8 sm:px-6 mb-20 lg:px-20">
        <div className="max-w-7xl w-full px-8 sm:px-6 lg:px-8 self-start mb-20">
          <p className="text-sm text-indigo-700 font-semibold tracking-widest uppercase before:content-[''] before:w-16 before:h-[1px] before:bg-gray-600 relative flex items-center gap-8">
            {translations.whyus}
          </p>
        </div>
        <div className="xl:mx-12 2xl:mx-32">
          <div className="w-1/3">
            <p className="max-sm:text-5xl text-6xl font-bold uppercase text-stroke">
              {translations.weareexcellentat}
            </p>
          </div>

          <div className="my-10 flex max-lg:flex-wrap max-sm:flex-col gap-6 perspective-normal justify-center">
            <div
              className="w-full sm:w-1/4 md:w-1/4 xl:w-2/7 max-sm:h-96 h-[504px] bg-cover text-white overflow-hidden"
              style={{
                backgroundImage: `url(${Backgrounduiux.src})`,
                transform: `rotateX(${position.card1?.y}deg) rotateY(${position.card1?.x}deg)`,
                transition: "transform 0.3s ease-out",
              }}
              onMouseMove={handleMouseMove("card1")}
              onMouseLeave={() => resetPosition("card1")}>
              <div className="p-10">
                <p className="font-bold text-2xl mb-6">
                  {translations.listdevelop.webapp}
                </p>
                <p className="text-sm xl:text-base">
                  {translations.whyuslist.webappdescription}
                </p>
              </div>
              <Image
                src={Webapp}
                alt={translations.listdevelop.webapp}
                width={700}
                height={700}
                style={{
                  transform: `translateX(${position.card1?.x * 6}px) translateY(${position.card1?.y * 6}px)`,
                  transition: "transform 0.3s ease-out",
                  width: "auto", // Mantiene la proporción original
                  height: "auto",
                }}
                className="absolute -bottom-70 xs:-bottom-130 sm:-bottom-30 xl:-bottom-60 2xl:-bottom-40 3xl:-bottom-105 4xl:-bottom-120"
              />
            </div>

            <div className="w-full sm:w-4/6 md:w-4/6 space-y-6 perspective-normal">
              <div
                className="h-80 sm:h-60 bg-blue-600 bg-cover text-white overflow-hidden"
                style={{
                  backgroundImage: `url(${Backgroundwebapp.src})`,
                  transform: `rotateX(${position.card2?.y}deg) rotateY(${position.card2?.x}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
                onMouseMove={handleMouseMove("card2")}
                onMouseLeave={() => resetPosition("card2")}>
                <div className="p-10 w-3/4">
                  <p className="font-bold text-2xl mb-6">
                    {translations.whyuslist.designuiux}
                  </p>
                  <p className="text-pretty lg:pr-20 text-sm xl:text-base mb-10">
                    {translations.whyuslist.designuiuxdescription}
                  </p>
                </div>
                <Image
                  src={Uiux}
                  alt={translations.whyuslist.designuiux}
                  width={407}
                  height={407}
                  style={{
                    transform: `translateX(${position.card2?.x * 4}px) translateY(${position.card2?.y * 2}px)`,
                    transition: "transform 0.3s ease-out",
                    width: "auto", // Mantiene la proporción original
                    height: "auto",
                  }}
                  className="absolute -bottom-10 -right-40 sm:-right-20"
                />
              </div>

              <div
                className="h-88 sm:h-60 bg-blue-600 bg-cover text-white overflow-hidden"
                style={{
                  backgroundImage: `url(${Backgroundwebsite.src})`,
                  transform: `rotateX(${position.card3?.y}deg) rotateY(${position.card3?.x}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
                onMouseMove={handleMouseMove("card3")}
                onMouseLeave={() => resetPosition("card3")}>
                <div className="p-10 w-3/4">
                  <p className="font-bold text-2xl mb-6">
                    {translations.webdevelop}
                  </p>
                  <p className="text-pretty text-sm xl:text-base">
                    {translations.whyuslist.webdevelopdescription}
                  </p>
                </div>
                <Image
                  src={Websitedev}
                  alt={translations.webdevelop}
                  width={190}
                  height={190}
                  style={{
                    transform: `translateX(${position.card3?.x * 4}px) translateY(${position.card3?.y * 2}px)`,
                    transition: "transform 0.3s ease-out",
                    width: "auto", // Mantiene la proporción original
                    height: "auto",
                  }}
                  className="absolute -bottom-15 -right-20 sm:-right-10"
                />
              </div>
            </div>

            <div
              className="sm:w-18/19 lg:w-2/7 sm:h-50 h-74 lg:h-[504] bg-blue-600 bg-cover text-white overflow-hidden"
              style={{
                backgroundImage: `url(${Backgroundcms.src})`,
                transform: `rotateX(${position.card4?.y}deg) rotateY(${position.card4?.x}deg)`,
                transition: "transform 0.3s ease-out",
              }}
              onMouseMove={handleMouseMove("card4")}
              onMouseLeave={() => resetPosition("card4")}>
              <div className="p-10">
                <p className="font-bold text-2xl mb-6">CMS</p>
                <p className="text-wrap text-sm xl:text-base pr-10 ">
                  {translations.whyuslist.cmsdescription}
                </p>
              </div>
              <Image
                src={Cms}
                alt="CMS"
                width={407}
                height={407}
                style={{
                  transform: `translateX(${position.card4?.x * 4}px) translateY(${position.card4?.y * 2}px)`,
                  transition: "transform 0.3s ease-out",
                }}
                className="absolute -bottom-10 max-lg:w-52 xl:-bottom-20 2xl:-bottom-15 -right-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
