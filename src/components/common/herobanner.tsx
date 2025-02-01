"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import animationConfig from "@/config/animationConfig";
import Banner1 from "@/images/banner1.webp";
import Banner2 from "@/images/banner2.webp";
import Banner3 from "@/images/banner3.webp";
import Banner4 from "@/images/banner4.webp";

const HeroBanner = () => {
  const imageRef1 = useRef<HTMLDivElement | null>(null);
  const imageRef2 = useRef<HTMLDivElement | null>(null);
  const imageRef3 = useRef<HTMLDivElement | null>(null);
  const imageRef4 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        window.location.reload();
      }, 200); // Ajusta el tiempo de debounce según sea necesario
    };

    window.addEventListener("resize", handleResize);

    const windowSize = window.innerWidth;
    console.log(windowSize);
    const config =
      windowSize >= 1536
        ? animationConfig[1536]
        : windowSize >= 1280
          ? animationConfig[1280]
          : windowSize >= 1024
            ? animationConfig[1024]
            : windowSize >= 768
              ? animationConfig[768]
              : windowSize >= 640
                ? animationConfig[640]
                : animationConfig.default;

    const tl = gsap.timeline();

    tl.fromTo(imageRef1.current, config.image1.from, config.image1.to);

    tl.fromTo(imageRef2.current, config.image2.from, config.image2.to, "-=0.4");

    tl.fromTo(imageRef3.current, config.image3.from, config.image3.to, "-=0.4");

    tl.fromTo(imageRef4.current, config.image4.from, config.image4.to, "-=0.4");

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden max-md:pt-28">
      <div className="relative w-dvw md:flex md:justify-center md:items-center max-lg:pr-24 h-screen">
        <div
          ref={imageRef1}
          className="absolute opacity-0 2xl:w-[700px] xl:w-[600px] lg:w-[450px] w-[300px]">
          <Image
            src={Banner1}
            alt="Banner Image 1"
            width={700}
            height={700}
            priority
          />
        </div>
        <div ref={imageRef2} className="absolute opacity-0">
          <Image
            src={Banner2}
            alt="Banner Image 2"
            width={30}
            height={30}
            priority
          />
        </div>
        <div ref={imageRef3} className="absolute opacity-0">
          <Image
            src={Banner3}
            alt="Banner Image 3"
            width={80}
            height={80}
            className="object-cover"
            priority
          />
        </div>
        <div ref={imageRef4} className="absolute opacity-0">
          <Image
            src={Banner4}
            alt="Banner Image 4"
            width={60}
            height={60}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
