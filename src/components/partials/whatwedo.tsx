"use client";
import Image from "next/image";
import Websites from "@/images/websites.webp";
import Webapp from "@/images/webapp.webp";

export default function WhatWeDo({ translations }: { translations: any }) {
  const services = [
    {
      title: translations.listweb.websites,
      image: Websites,
      alt: "Websites",
    },
    {
      title: translations.listdevelop.webapp,
      image: Webapp,
      alt: "Webapps",
    },
    // Add more divs as needed
  ];

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
      <div className="flex justify-center py-40">
        <div className="sm:text-9xl text-xl font-bold uppercase text-stroke">
          {translations.listweb.websites}
        </div>
        <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={Websites}
            alt="Websites"
            width={700}
            height={700}
            className="clip-polygon"
          />
        </div>

        <div className="sm:text-9xl text-xl font-bold uppercase text-stroke ">
          {translations.listdevelop.webapp}
        </div>
        <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
