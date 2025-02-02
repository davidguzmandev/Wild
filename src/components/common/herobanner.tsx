"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import animationConfig from "@/config/animationConfig";
import Banner1 from "@/images/banner1.webp";
import Banner2 from "@/images/banner2.webp";
import Banner3 from "@/images/banner3.webp";
import Banner4 from "@/images/banner4.webp";

const HeroBanner = () => {
  const imageRefs = {
    image1: useRef<HTMLDivElement | null>(null),
    image2: useRef<HTMLDivElement | null>(null),
    image3: useRef<HTMLDivElement | null>(null),
    image4: useRef<HTMLDivElement | null>(null),
  };
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    let timeoutId: NodeJS.Timeout;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setWindowSize(window.innerWidth);
    }, 200);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
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

    tl.fromTo(imageRefs.image1.current, config.image1.from, config.image1.to);
    tl.fromTo(imageRefs.image2.current, config.image2.from, config.image2.to, "-=0.4");
    tl.fromTo(imageRefs.image3.current, config.image3.from, config.image3.to, "-=0.4");
    tl.fromTo(imageRefs.image4.current, config.image4.from, config.image4.to, "-=0.4");

  }, [windowSize]);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden max-md:pt-28">
      <div className="relative w-dvw md:flex md:justify-center md:items-center max-lg:pr-24 h-screen">
        <div
          ref={imageRefs.image1}
          className="absolute opacity-0 2xl:w-[700px] xl:w-[600px] lg:w-[450px] md:w-[300]">
          <Image
            src={Banner1}
            alt="Banner Image 1"
            width={700}
            height={700}
            priority
          />
        </div>
        <div ref={imageRefs.image2} className="absolute opacity-0">
          <Image
            src={Banner2}
            alt="Banner Image 2"
            width={30}
            height={30}
            priority
          />
        </div>
        <div ref={imageRefs.image3} className="absolute opacity-0">
          <Image
            src={Banner3}
            alt="Banner Image 3"
            width={80}
            height={80}
            className="object-cover"
            priority
          />
        </div>
        <div ref={imageRefs.image4} className="absolute opacity-0">
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
