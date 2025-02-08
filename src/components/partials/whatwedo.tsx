"use client";
import Image from "next/image";
import Websites from "@/images/websites.webp";
import Webapp from "@/images/webapp.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

// Registra el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo({ translations }: { translations: any }) {
  useEffect(() => {
    // Limpia cualquier ScrollTrigger existente
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services",
        start: "top top",
        end: () => `+=${tl.duration() * 2000}`,
        scrub: 1,
        markers: true,
        pin: true,
      },
    });

    //Primera seccion
    tl.from(".s1", {
      x: "-50%",
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    tl.from(".i1", { opacity: 0, y: "20%", duration: 0.5 }, "-=0.5");
    tl.to(".s1", { x: "50%", opacity: 0, duration: 0.5, ease: "power4.in" });
    tl.to(".i1", { opacity: 0, y: "-30%", duration: 0.5 }, "-=0.5");

    //Segunda seccion
    tl.from(".s2", {
      x: "-50%",
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    tl.from(".i2", { opacity: 0, y: "20%", duration: 0.5 }, "-=0.5");
    tl.to(".s2", { x: "50%", opacity: 0, duration: 0.5, ease: "power4.in" });
    tl.to(".i2", { opacity: 0, y: "-30%", duration: 0.5 }, "-=0.5");
    
    return () => {
      // Limpia las animaciones al desmontar el componente
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="services h-screen flex justify-center flex-col py-20">
      <div className="max-w-7xl w-full mx-52 px-8 sm:px-6 lg:px-8 self-start">
        <p className="text-sm text-purple-700 font-semibold tracking-widest uppercase">
          {translations.whatwedo}
        </p>
      </div>
      <div className="section flex justify-center py-40">
        <div className="absolute s1 sm:text-9xl text-xl font-bold uppercase text-stroke">
          {translations.listweb.websites}
        </div>
        <div className="i1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={Websites}
            alt="Websites"
            width={700}
            height={700}
            className="clip-polygon"
          />
        </div>

        <div className="s2 absolute sm:text-9xl text-xl font-bold uppercase text-stroke ">
          {translations.listdevelop.webapp}
        </div>
        <div className="i2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={Webapp}
            alt="Webapps"
            width={700}
            height={700}
            className="clip-polygon"
          />
        </div>
      </div>
    </section>
  );
}
